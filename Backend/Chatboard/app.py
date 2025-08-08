from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Set your OpenAI API key from environment variable
openai.api_key = os.getenv('OPENAI_API_KEY')

@app.route('/chat', methods=['POST'])
def chat():
    print("Chat function started...")

    user_message = request.json.get("message")
    print('Got the user-message')
    
    if not user_message:
        return jsonify({"error": "No message provided"}), 400
    user_message = "hello"
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": user_message}]
    )
    
    bot_reply = response["choices"][0].message.content
    return jsonify({"reply": bot_reply})

if __name__ == '__main__':
    app.run(debug=True)



# curl -X POST http://127.0.0.1:5000/chat -H "Content-Type: application/json" -d '{"message": "Hello, AI!"}'
