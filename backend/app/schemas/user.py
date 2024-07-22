from pydantic import BaseModel, EmailStr


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: EmailStr


class UserBase(BaseModel):
    name: str | None = None
    last_name: str | None = None
    email: EmailStr


class UserCreate(UserBase):
    password: str
    # my_course? Ver como asignar al crear


class UserSchema(UserBase):
    id: int

    class Config:
        from_attributes = True


class UserUpdate(UserBase):
    email: EmailStr | None = None

    class Config:
        from_attributes = True


class UserLogin(BaseModel):
    emain: EmailStr
    password: str
