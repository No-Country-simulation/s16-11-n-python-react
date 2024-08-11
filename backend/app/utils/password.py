from argon2 import PasswordHasher


async def hash(password: str):
    return PasswordHasher().hash(password)


async def verify(plain_password, hash_password):
    return PasswordHasher().verify(hash_password, plain_password)
