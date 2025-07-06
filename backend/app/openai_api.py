import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

open_obj = OpenAI(api_key=api_key)

def get_llm_response(messages, model="gpt-4o-mini"):
    try:
        response = open_obj.chat.completions.create(
            model=model,
            messages=messages,
            temperature=0.7
        )
        return response.choices[0].message.content          
    except Exception as e:
        print(f"[OpenAI Error] {e}")
        return "Sorry, I couldn't generate a response."
