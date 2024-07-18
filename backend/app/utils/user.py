from api.dependencies.db import get_session
from fastapi import Depends
from sqlalchemy.ext.asyncio.session import AsyncSession
from crud.user import UserCrud
from .password import verify


async def is_authenticate(
    email: str, password: str, db: AsyncSession = Depends(get_session)
):
    user = await UserCrud(db).get_by_email("email", email)
    if not user or not verify(password, user.password):
        return False
    return True
