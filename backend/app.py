from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
import json

app = Flask(__name__)
CORS(app)

OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"


@app.route("/")
def home():
    return jsonify({
        "message": "DSA Studio backend is running!"
    })


@app.route("/api/quiz", methods=["POST"])
def quiz():

    try:
        # -----------------------------
        # 1. Get data from frontend
        # -----------------------------
        data = request.get_json()

        topic = data.get("topic", "Arrays")
        difficulty = data.get("difficulty", "Medium")
        count = int(data.get("count", 5))

        # Keep count reasonable
        count = max(1, min(count, 20))

        # -----------------------------
        # 2. Get OpenRouter API key
        # -----------------------------
        api_key = os.getenv("OPENROUTER_API_KEY")

        if not api_key:
            return jsonify({
                "error": "OpenRouter API key is not loaded."
            }), 500

        # -----------------------------
        # 3. Create AI prompt
        # -----------------------------
        prompt = f"""
Generate exactly {count} DSA multiple-choice questions.

Topic: {topic}
Difficulty: {difficulty}

Each question must have exactly 4 options.

Return ONLY valid JSON.
Do not use markdown.
Do not use ```json.
Do not add any explanation.

Return this exact structure:

{{
    "questions": [
        {{
            "question": "Question text",
            "options": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
            ],
            "answer": "Correct option"
        }}
    ]
}}

Make sure the answer exactly matches one of the four options.
"""

        # -----------------------------
        # 4. Send request to OpenRouter
        # -----------------------------
        response = requests.post(
            OPENROUTER_URL,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json"
            },
            json={
                "model": "openrouter/free",
                "messages": [
                    {
                        "role": "user",
                        "content": prompt
                    }
                ]
            },
            timeout=90
        )

        # -----------------------------
        # 5. Check OpenRouter response
        # -----------------------------
        if response.status_code != 200:
            return jsonify({
                "error": "OpenRouter request failed.",
                "status": response.status_code,
                "details": response.text
            }), response.status_code

        result = response.json()

        # -----------------------------
        # 6. Extract AI text
        # -----------------------------
        ai_text = result["choices"][0]["message"]["content"].strip()

        # Remove accidental markdown fences
        if ai_text.startswith("```json"):
            ai_text = ai_text[7:]

        if ai_text.startswith("```"):
            ai_text = ai_text[3:]

        if ai_text.endswith("```"):
            ai_text = ai_text[:-3]

        ai_text = ai_text.strip()

        # -----------------------------
        # 7. Convert AI response to JSON
        # -----------------------------
        quiz_data = json.loads(ai_text)

        # -----------------------------
        # 8. Validate response
        # -----------------------------
        if "questions" not in quiz_data:
            return jsonify({
                "error": "AI response does not contain questions."
            }), 500

        if not isinstance(quiz_data["questions"], list):
            return jsonify({
                "error": "Invalid questions format."
            }), 500

        # -----------------------------
        # 9. Validate every question
        # -----------------------------
        valid_questions = []

        for q in quiz_data["questions"]:

            if not isinstance(q, dict):
                continue

            question = q.get("question")
            options = q.get("options")
            answer = q.get("answer")

            if not question:
                continue

            if not isinstance(options, list):
                continue

            if len(options) != 4:
                continue

            if answer not in options:
                continue

            valid_questions.append({
                "question": question,
                "options": options,
                "answer": answer
            })

        if not valid_questions:
            return jsonify({
                "error": "AI returned no valid questions.",
                "raw_response": ai_text
            }), 500

        # -----------------------------
        # 10. Send clean JSON to frontend
        # -----------------------------
        return jsonify({
            "success": True,
            "topic": topic,
            "difficulty": difficulty,
            "count": len(valid_questions),
            "questions": valid_questions
        })

    except json.JSONDecodeError as error:

        return jsonify({
            "error": "AI returned invalid JSON.",
            "details": str(error)
        }), 500

    except requests.RequestException as error:

        return jsonify({
            "error": "Failed to connect to OpenRouter.",
            "details": str(error)
        }), 500

    except Exception as error:

        return jsonify({
            "error": "Quiz generation failed.",
            "details": str(error)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)