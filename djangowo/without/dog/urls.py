from django.urls import path
from dog.views import MainView, ParamView

urlpatterns = [
    path('', MainView.as_view()),
    path('<id>/', ParamView.as_view())
]
