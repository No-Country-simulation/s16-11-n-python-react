from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError


async def hash(password: str):
    """
    Generates a secure hash from a password.

    Args:
        password (str): The password to be hashed.

    Returns:
        str: The password hash.
    """
    return PasswordHasher().hash(password)


async def verify(plain_password, hash_password):
    """
    Checks if a password matches a stored hash.

    Args:
        plain_password (str): The password provided by the user.
        hash_password (str): The hash of the password stored in the database.

    Returns:
        bool: True if the password matches, false otherwise.
    """
    try:
        return PasswordHasher().verify(hash_password, plain_password)
    except VerifyMismatchError:
        return False
