from api.routes import user, auth, myCourses, channel
from fastapi import APIRouter, status

api_router = APIRouter()

api_router.include_router(
    auth.router,
    prefix="/api/auth",
    tags=["Authentication"],
    responses={
        status.HTTP_404_NOT_FOUND: {"description": "Not found"},
    },
)

api_router.include_router(
    user.router,
    prefix="/api/user",
    tags=["User"],
    responses={
        status.HTTP_404_NOT_FOUND: {"description": "Not found"},
    },
)

api_router.include_router(
    myCourses.router,
    prefix="/api/my_courses",
    tags=["MyCourses"],
    responses={
        status.HTTP_404_NOT_FOUND: {"description": "Not found"},
    },
)
api_router.include_router(
    channel.router,
    prefix="/api/channel",
    tags=["Channel"],
    responses={
        status.HTTP_404_NOT_FOUND: {"description": "Not found"},
    },
)
