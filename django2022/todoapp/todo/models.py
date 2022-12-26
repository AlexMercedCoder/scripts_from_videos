from django.db import models

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=300)
    details = models.CharField(max_length=1000)