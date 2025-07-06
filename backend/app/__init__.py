from flask import Flask
from flask_cors import CORS  
from dotenv import load_dotenv
from .routes import api
import os

def create_app():
    load_dotenv()

    app = Flask(__name__)
    app.config['OPENAI_API_KEY'] = os.getenv('OPENAI_API_KEY')

    CORS(app)  

    app.register_blueprint(api, url_prefix="/api")

    return app
