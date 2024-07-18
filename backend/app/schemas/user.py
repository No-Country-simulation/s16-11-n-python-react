from pydantic import BaseModel, EmailStr


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: EmailStr


class CreateUserSchema(BaseModel):
    name: str | None = None
    last_name: str | None = None
    email: EmailStr
    password: str
    # my_course? Ver como asignar al crear


class UserSchema(BaseModel):
    name: str | None = None
    last_name: str | None = None
    email: EmailStr

    class Config:
        from_attributes = True


class UserUpdateSchema(BaseModel):
    name: str | None = None
    last_name: str | None = None
    email: EmailStr | None = None

    class Config:
        from_attributes = True


class UserLoginSchema(BaseModel):
    emain: EmailStr
    password: str
