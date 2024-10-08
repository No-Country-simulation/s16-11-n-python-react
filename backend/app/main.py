from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.main import api_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # domains must be specified in the .env
    allow_origins=["*"],  # Config setting
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allow_headers=["*"],
)


app.include_router(api_router)
