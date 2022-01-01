""" User Model """

from masoniteorm.models import Model


class Todo(Model):
    __table__="todos"
