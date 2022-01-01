""" User Model """

from masoniteorm.models import Model
from masoniteorm.relationships import belongs_to


class Todo(Model):
    __table__="todos"

    @belongs_to("id", "user_id")
    def user(self):
        from app.models.User import User
        return User