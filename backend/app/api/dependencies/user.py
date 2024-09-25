from typing import Annotated
from fastapi import Depends, HTTPException, status
from jwt import PyJWTError
from sqlalchemy.ext.asyncio.session import AsyncSession
from crud.user import UserCrud
from utils.oauth2 import verify_token, oauth2_schema
from models.user import User
from .db import get_session


async def get_current_user(
    token: str = Depends(oauth2_schema), db: AsyncSession = Depends(get_session)
):
    credentials_exceptions = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:

        token_data = await verify_token(token, credentials_exceptions)
        user = await UserCrud(db).get_by_attribute("email", token_data.email)
        if user is None:
            raise credentials_exceptions
        return user
    except PyJWTError:
        raise credentials_exceptions


CurrentUserDep = Annotated[User, Depends(get_current_user)]
