from masonite.middleware import Middleware
from masonite.middleware.route import CorsMiddleware

class CorsMiddleware(CorsMiddleware):

    headers = {
        'Access-Control-Allow-Origin': "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": "3600",
        "Access-Control-Allow-Credentials": "true"
    }