import os
import requests

api_key = os.getenv("GEMINI_API_KEY")

url = "https://generativelanguage.googleapis.com/v1beta/interactions"

headers = {
    "x-goog-api-key": api_key,
    "Content-Type": "application/json"
}

data = {
    "model": "gemini-3.8-flash",
    "input": "Give me one simple DSA multiple-choice question with 4 options and the correct answer."
}

response = requests.post(
    url,
    headers=headers,
    json=data
)

print("Status:", response.status_code)
print(response.text)