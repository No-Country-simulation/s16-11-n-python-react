import os
from dotenv import load_dotenv

load_dotenv()

settings = {
    "database_password": os.getenv("DATABASE_PASSWORD"),
    "database_username": os.getenv("DATABASE_USERNAME"),
    "database_host": os.getenv("DATABASE_HOST"),
    "database_port": os.getenv("DATABASE_PORT"),
    "database_name": os.getenv("DATABASE_NAME"),
    "secret_key": os.getenv("SECRET_KEY"),
    "algorithm": os.getenv("ALGORITHM"),
    "expire_token": os.getenv("EXPIRE_TOKEN"),
    "cors_domains": os.getenv("CORS_DOMAINS"),
    "api_key_bot": os.getenv("API_KEY_BOT"),
}
