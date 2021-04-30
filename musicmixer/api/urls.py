
from django.urls import path

from . import views



urlpatterns = [
    path('roomlist/', views.RoomView.as_view(), name="main-room-list"),
    
]