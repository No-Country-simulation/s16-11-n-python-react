import os
from fastapi.security import OAuth2PasswordBearer
from datetime import datetime, timedelta, timezone
import jwt
from jwt.exception import PyJWTError

'''Hacer el schema de usuario'''
from schemas.user import TokenData 

SECRET_KEY = os.getenv('SECRET_KEY')
ALGORITHM = os.getenv('ALGORITHM')
TOKEN_EXPIRE = os.getenv('TOKEN_EXPIRE')

oauth2_schema = OAuth2PasswordBearer(tokenUrl='/api/auth/token')

async def create_acces_token(data:dict, expires_delta: timedelta|None=None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=TOKEN_EXPIRE)
    to_encode.update({'exp': expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    
    return encoded_jwt


async def verify_token(token: str, credentials_excception):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email:str = payload.get('email')
        if email is None:
            raise credentials_excception
        token_data = TokenData(email=email)
        return token_data   
    except PyJWTError:
        raise credentials_excception