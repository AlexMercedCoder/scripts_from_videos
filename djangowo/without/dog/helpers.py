import json
from django.core.serializers import serialize


def GetBody(request):
    # decode the request body into a string
    unicode = request.body.decode('utf-8')
    # turn the string into json
    return json.loads(unicode)

def cereal(target):
    return json.loads(serialize("json", target))