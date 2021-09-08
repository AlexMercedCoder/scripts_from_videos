from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from dog.models import Dog
from django.core.serializers import serialize
import json
from .helpers import GetBody, cereal
# Create your views here.

class MainView(View):
    def get(self, request):
        return JsonResponse(cereal(Dog.objects.all()), safe=False)

    def post(self, request):
        body = GetBody(request)
        return JsonResponse(cereal([Dog.objects.create(**body)]), safe=False)

class ParamView(View):
    def get(self, request, id):
        return JsonResponse(cereal([Dog.objects.get(id=id)]), safe=False)

    def put(self, request, id):
        body = GetBody(request)
        Dog.objects.filter(id=id).update(**body)
        dog = Dog.objects.get(id=id)
        return JsonResponse(cereal([dog]), safe=False)

    def delete(self, request, id):
        dog = Dog.objects.get(id=id)
        dog.delete()
        return JsonResponse(cereal([dog]), safe=False)

