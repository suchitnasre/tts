from flask import Blueprint, request, jsonify
from .openai_api import get_llm_response

api = Blueprint("api", __name__)

@api.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    history = data.get("history", [])

    if not history or not isinstance(history, list):
        return jsonify({"error": "History missing or invalid"}), 400

    response = get_llm_response(history)
    return jsonify({"response": response})
