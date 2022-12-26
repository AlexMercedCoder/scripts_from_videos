from django.shortcuts import render
from .models import Todo
from .forms import TodoForm
from django.http import HttpResponseRedirect

def index(request):
    
    if (request.method == "POST"):
        Todo.objects.create(
            title=request.POST.get("title"),
            details=request.POST.get("details")
            )
        return HttpResponseRedirect("/todo/")
        
    if (request.method == "GET"):
        todos = Todo.objects.all()
        form = TodoForm()
        return render(request, "index.html", {"todos": todos, "form": form})

def destroy(request, id):
    Todo.objects.get(pk=id).delete()
    return HttpResponseRedirect("/todo/")
    