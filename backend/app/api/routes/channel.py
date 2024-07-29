from typing import List
from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio.session import AsyncSession
from schemas.channel import ChannelCreate, ChannelSchema
from crud.channel import ChannelCrud

router = APIRouter()


@router.post(
    "/",
    status_code=status.HTTP_201_CREATED,
    response_model=ChannelSchema,
)
async def create_channel(
    create_channel: ChannelCreate,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    # exist_channel = await ChannelCrud(db).get_all_by_attribute('')
    new_channel = await ChannelCrud(db).create(create_channel)

    return new_channel


@router.get(
    "/{channel_id}/",
    status_code=status.HTTP_200_OK,
    response_model=ChannelSchema,
)
async def get_channel_id(
    channel_id: str,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    channel = await ChannelCrud(db).get(channel_id)

    return channel


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    response_model=List[ChannelSchema],
)
async def get_all_channel(
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    channel = await ChannelCrud(db).get_all()

    return channel
