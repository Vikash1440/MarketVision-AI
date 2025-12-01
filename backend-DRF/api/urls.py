from django.urls import path,include
from accounts import views as UserViews
urlpatterns = [

    # Base API Endpoint
    path('register/',UserViews.RegisterView.as_view()),
]