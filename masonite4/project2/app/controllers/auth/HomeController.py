from masonite.controllers import Controller
from masonite.views import View
from app.models.User import User
from app.models.Todo import Todo
from masonite.request import Request
from masonite.authentication import Auth
from masonite.response import Response
from masonite.sessions import Session



class HomeController(Controller):

    def __init__(self, view: View, request: Request, auth: Auth, response: Response, session: Session):
        self.view = view
        self.request = request
        self.auth = auth
        self.response = response
        self.session = session

    def show(self):
        user = self.auth.user()
        if(user == False):
            return self.response.redirect("login")
        else:   
            return self.view.render("auth.home", {
            "todos": user.todos
        })

    def addTodos(self):
        user = self.auth.user()
        if(user == False):
            return self.response.redirect("login")
        else: 
            message = self.request.input("message")
            user_id = user["id"]
            Todo.create(message=message, user_id=user_id)
            return self.response.redirect("/home")

    def logout(self):
        self.auth.logout()
        return self.response.redirect("login")


