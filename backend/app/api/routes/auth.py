from datetime import timedelta

from api.dependencies.db import get_session
from core.config import settings
from fastapi import APIRouter, Depends
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from schemas.user import Token, UserLogin
from sqlalchemy.ext.asyncio.session import AsyncSession
from utils import oauth2
from utils.user import is_authenticate


router = APIRouter()


@router.post("/login/", response_model=Token)
async def login(
    user: UserLogin = Depends(OAuth2PasswordRequestForm),
    db: AsyncSession = Depends(get_session),
) -> Token:
    """
    Handles a user login and generates an access token if the credentials are correct.
    """
    # Verify user credentials in the database.
    db_user = await is_authenticate(user.username, user.password, db)

    access_token_expire = timedelta(minutes=int(settings["expire_token"]))
    # Create an access token for the authenticated user with a defined expiration.
    access_token = await oauth2.create_acces_token(
        data={"email": db_user.email}, expires_delta=access_token_expire
    )
    return Token(access_token=access_token, token_type="bearer")
