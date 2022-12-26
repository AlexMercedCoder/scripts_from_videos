from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Todo

class TodoSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ["id", "title", "details"]