from typing import List
from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio.session import AsyncSession
from schemas.video import VideoSchema
from schemas.videoCourse import VideoSchemaId
from crud.video import VideoCrud

router = APIRouter()


# @router.post(
#     "/{course_id}/",
#     status_code=status.HTTP_201_CREATED,
#     response_model=VideoSchema,
# )
# async def create_video(
#     course_id: str,
#     create_video: VideoCreate,
#     db: AsyncSession = Depends(get_session),
#     current_user: str = Depends(validate_authenticate_user),
# ):
#     new_video = await VideoCrud(db).create(
#         create_video.model_copy(update={"course_id": course_id})
#     )

#     return new_video


@router.get(
    "/{video_id}/",
    status_code=status.HTTP_200_OK,
    response_model=VideoSchemaId,
)
async def get_video_id(
    video_id: str,
    db: AsyncSession = Depends(get_session),
):
    """
    Get a specific video by its ID along with the related course and all videos associated with that course.
    """
    try:
        video = await VideoCrud(db).get_id(video_id)
        if video is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Video with id {video_id} not found.",
            )
        course = await VideoCrud(db).get_course_with_videos(video.course_id)

        if course is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Course with id {video.course_id} not found.",
            )

        return {"video": video, "course": course}

    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred while fetching the video or course.",
        )


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    response_model=List[VideoSchema],
)
async def get_all_videos(
    db: AsyncSession = Depends(get_session),
):
    """
    Gets a list of all videos available in the database.
    """
    try:
        all_videos = await VideoCrud(db).get_all()
        return all_videos

    except SQLAlchemyError as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred while fetching videos.",
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An unexpected error occurred.",
        )


# @router.get(
#     "/{video_id}/Este aca",
#     status_code=status.HTTP_200_OK,
#     response_model=VideoCourseIDSchema,
# )
# async def get_video_id(
#     video_id: str,
#     db: AsyncSession = Depends(get_session),
#     current_user: str = Depends(validate_authenticate_user),
# ):
#     get_video = await VideoCrud(db).get_video_id(video_id)

#     return get_video
