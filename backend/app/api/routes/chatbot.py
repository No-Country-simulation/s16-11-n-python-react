from chatbot.chatBotCache import chat_session
from fastapi import APIRouter, HTTPException, Form


router = APIRouter()


@router.post(
    "/",
)
async def chat(pregunta: str = Form(...)):
    if not pregunta:
        raise HTTPException(status_code=400, detail="La pregunta no puede estar vacía")

    response = chat_session.send_message(pregunta)
    return {"respuesta": response.text}
