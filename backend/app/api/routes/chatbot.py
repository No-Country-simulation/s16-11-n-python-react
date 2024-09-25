from chatbot.chatBotCache import chat_session
from fastapi import APIRouter, HTTPException, Form


router = APIRouter()


@router.post(
    "/",
)
async def chat(question: str = Form(...)):
    if not question:
        raise HTTPException(status_code=400, detail="The question cannot be empty")

    response = chat_session.send_message(question)
    return {"response": response.text}
