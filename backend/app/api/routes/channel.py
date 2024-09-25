from typing import List
from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio.session import AsyncSession
from schemas.channel import ChannelCreate, ChannelSchema
from crud.channel import ChannelCrud

router = APIRouter()


# @router.post(
#     "/",
#     status_code=status.HTTP_201_CREATED,
#     response_model=ChannelSchema,
# )
# async def create_channel(
#     create_channel: ChannelCreate,
#     db: AsyncSession = Depends(get_session),
# ):
#     # exist_channel = await ChannelCrud(db).get_all_by_attribute('')
#     new_channel = await ChannelCrud(db).create(create_channel)

#     return new_channel


@router.get(
    "/{channel_id}/",
    status_code=status.HTTP_200_OK,
    response_model=ChannelSchema,
)
async def get_channel_id(
    channel_id: str,
    db: AsyncSession = Depends(get_session),
):
    """
    Gets a channel by its ID. If the channel does not exist, a 404 error is returned.
    """
    try:
        channel = await ChannelCrud(db).get(channel_id)

        if channel is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"channel with id {channel_id} not exist",
            )
        return channel

    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred",
        )


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    response_model=List[ChannelSchema],
)
async def get_all_channel(
    db: AsyncSession = Depends(get_session),
):
    """
    Gets all items in the database
    """
    try:
        channel = await ChannelCrud(db).get_all()
        return channel

    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred while fetching channels.",
        )

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurred.",
        )
