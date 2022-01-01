from masonite.controllers import Controller
from masonite.views import View
from masonite.request import Request
from app.models.Todo import Todo
from masonite.response import Response


class PagesController(Controller):

    def __init__(self, view: View, request: Request, response: Response):
        self.view = view
        self.request = request
        self.response = response

    def firstpage(self):
        return self.view.render("firstpage", {
            "todos": Todo.all()
        })

    def maketodo(self):
        message = self.request.input("message")
        Todo.create(message = message)
        self.response.redirect(location="/firstpage")

    def deletetodo(self):
        id = self.request.param("id")
        Todo.find(id).delete()
        self.response.redirect(location="/firstpage")
