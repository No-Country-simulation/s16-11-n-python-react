from .user import CurrentUserDep


async def validate_authenticate_user(
    current_user: CurrentUserDep,
):
    return current_user
