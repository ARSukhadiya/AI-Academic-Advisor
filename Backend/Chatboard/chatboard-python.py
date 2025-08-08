from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Set your OpenAI API key from environment variable
openai.api_key = os.getenv('OPENAI_API_KEY')

def chat_wth_gpt(prompt):
    print("Chat function started...")

    
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )
    
    # bot_reply = response["choices"][0].message.content
    bot_reply = response["choices"][0].message.content.strip()
    return jsonify({"reply": bot_reply})

if __name__ == '__main__':
    # app.run(debug=True)
    while True:
        user_input = input("You: ")
        if user_input.lower() in ["quit", "exit", "bye"]:
            break
        
        response = chat_wth_gpt(user_input)
        print("Chatbot:", response)

# curl -X POST http://127.0.0.1:5000/chat -H "Content-Type: application/json" -d '{"message": "Hello, AI!"}'
