from pydantic import BaseModel


class ChatBotRequest(BaseModel):
    query: str


class ChatBotResponse(BaseModel):
    response: str
