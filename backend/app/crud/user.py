from crud.abstract import BaseCrud
from models.models import User


class UserCrud(BaseCrud):
    model = User
