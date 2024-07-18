from crud.abstract import BaseCrud
from models.models import Rating


class RatingCrud(BaseCrud):
    model = Rating
