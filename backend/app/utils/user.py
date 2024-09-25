from api.dependencies.db import get_session
from fastapi import Depends, HTTPException, status
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.ext.asyncio.session import AsyncSession
from crud.user import UserCrud
from .password import verify
from argon2.exceptions import VerifyMismatchError


async def is_authenticate(
    email: str, password: str, db: AsyncSession = Depends(get_session)
):
    """
    Authenticates a user by verifying their email and password.

    Args:
        email (str): The email of the user being authenticated.
        password (str): The plaintext password provided by the user.
        db (AsyncSession): The asynchronous database session.

    Returns:
        user (User | bool): The user object if authentication is successful,
                            or False if it fails.
    """
    try:
        user = await UserCrud(db).get_by_attribute("email", email)
        if user is None:
            # Usuario no encontrado
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect email",
                headers={"WWW-Authenticate": "Bearer"},
            )

        try:
            # Verificar la contraseña
            if not await verify(password, user.password):
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Incorrect password",
                    headers={"WWW-Authenticate": "Bearer"},
                )
        except VerifyMismatchError:
            # Error en la verificación de contraseña
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Incorrect password",
                headers={"WWW-Authenticate": "Bearer"},
            )

        return user

    except SQLAlchemyError as se:
        # Error en la base de datos
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Database error occurred while trying to authenticate.",
        )
