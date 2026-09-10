import os
import requests

api_key = os.getenv("OPENROUTER_API_KEY")

response = requests.post(
    "https://openrouter.ai/api/v1/chat/completions",
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    },
    json={
        "model": "openrouter/free",
        "messages": [
            {
                "role": "user",
                "content": "Give me one simple DSA multiple-choice question with 4 options and the correct answer."
            }
        ]
    }
)

print("Status:", response.status_code)
print(response.text)