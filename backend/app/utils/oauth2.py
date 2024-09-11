import os
from fastapi import HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from datetime import datetime, timedelta, timezone
import jwt
from jwt.exceptions import PyJWTError

from schemas.user import TokenData

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
TOKEN_EXPIRE = os.getenv("TOKEN_EXPIRE")

# Configures the OAuth2 authentication scheme to obtain access tokens.
oauth2_schema = OAuth2PasswordBearer(tokenUrl="/api/login")


async def create_acces_token(data: dict, expires_delta: timedelta | None = None):
    """
    Creates a JWT access token with the provided data and an optional expiration time.

    Args:
        data (dict): Data to be encoded in the token.
        expires_delta (timedelta, optional): Custom token expiration duration.
                                             If not provided, the default value TOKEN_EXPIRE is used.

    Returns:
        str: The encoded JWT access token.

    """
    try:
        to_encode = data.copy()
        if expires_delta:
            expire = datetime.now(timezone.utc) + expires_delta
        else:
            expire = datetime.now(timezone.utc) + timedelta(minutes=TOKEN_EXPIRE)
        to_encode.update({"exp": expire})
        encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

        return encoded_jwt

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create access token.",
        )


async def verify_token(token: str, credentials_exception):
    """
    Verifies the validity of a JWT token and extracts the information contained within it.

    Args:
        token (str): The JWT token to verify.
        credentials_exception (Exception): Exception to throw if the token is invalid.

    Returns:
        TokenData: An object containing the user's information if the token is valid.

    """
    try:
        # Decodes the token using the secret key and the specified algorithm.
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("email")
        if email is None:
            raise credentials_exception
        token_data = TokenData(email=email)
        return token_data

    except PyJWTError:
        raise credentials_exception
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to verify token.",
        )
