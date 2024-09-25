from crud.abstract import BaseCrud
from models.models import Comment


class CommentCrud(BaseCrud):
    model = Comment
