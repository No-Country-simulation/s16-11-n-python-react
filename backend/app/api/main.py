from api.routes import(
    hello
)
from fastapi import APIRouter
from api.routes import hello

api_router = APIRouter()

api_router.include_router(hello.router)