from typing import List
from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio.session import AsyncSession
from schemas.video import VideoCreate, VideoSchema
from crud.video import VideoCrud

router = APIRouter()


@router.post(
    "/{course_id}/",
    status_code=status.HTTP_201_CREATED,
    response_model=VideoSchema,
)
async def create_video(
    course_id: int,
    create_video: VideoCreate,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    new_video = await VideoCrud(db).create(
        create_video.model_copy(update={"course_id": course_id})
    )

    return new_video


@router.get(
    "/{video_id}/",
    status_code=status.HTTP_200_OK,
    response_model=VideoSchema,
)
async def get_video_id(
    video_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    get_video = await VideoCrud(db).get(video_id)

    return get_video


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    response_model=List[VideoSchema],
)
async def get_all_videos(
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    all_videos = await VideoCrud(db).get_all()

    return all_videos
