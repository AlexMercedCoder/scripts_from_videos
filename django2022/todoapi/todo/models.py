from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=140)
    details = models.CharField(max_length=300)
    
    class Meta:
        verbose_name_plural = 'todos'