from .user import CurrentUserDep

async def validate_authentucate_user(
        current_user:CurrentUserDep,
):
    return current_user