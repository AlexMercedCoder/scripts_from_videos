"""A WelcomeController Module."""
from masonite.views import View
from masonite.controllers import Controller
from masonite.request import Request
from masonite.authentication import Auth
from masonite.response import Response
from masonite.sessions import Session


class WelcomeController(Controller):
    
    def __init__(self, view: View, request: Request, auth: Auth, response: Response, session: Session):
        self.view = view
        self.request = request
        self.auth = auth
        self.response = response
        self.session = session

    def show(self):
        return self.view.render("welcome")

    def user(self):
        user = self.auth.user()
        if (user == False):
            return self.response.redirect("/login")
        else: 
            return user

    def logout(self):
        print(self.session.added)
        return self.response.redirect("/login")


    
