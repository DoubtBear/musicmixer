from django.urls import path

from . import views



urlpatterns = [
    path('', views.home, name="homepage"),
    path('createroom/', views.home, name="createroom"),
    path('room/<str:roomCode>', views.home, name="viewroom"),
    
]