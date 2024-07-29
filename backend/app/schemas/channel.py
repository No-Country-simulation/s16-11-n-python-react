from pydantic import BaseModel


class ChannelBase(BaseModel):
    id: str
    channel_name: str
    description: str | None = None
    custom_url: str
    country: str
    views: int | None = None
    subs: int | None = None


class ChannelCreate(ChannelBase):
    pass


class ChannelSchema(ChannelBase):
    id: str
    # List de cursos?

    class Config:
        from_attributes = True
