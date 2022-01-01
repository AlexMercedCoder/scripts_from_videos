from masonite.middleware import Middleware
from masonite.response import Response

class CorsMiddleware(Middleware):

    def before(self, request, response: Response):

        print("Hello from Cors Middleware")

        response.header('Access-Control-Allow-Origin', "*")
        response.header("Access-Control-Allow-Methods", "*")
        response.header("Access-Control-Allow-Headers", "*")
        response.header("Access-Control-Max-Age", "3600")

        return request