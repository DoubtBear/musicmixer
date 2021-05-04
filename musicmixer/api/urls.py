
from django.urls import path

from . import views



urlpatterns = [
    path('roomlist/', views.RoomView.as_view(), name="main-room-list"),
    path('create-room/', views.CreateRoomView.as_view(), name="create-room"),
    path('get-room', views.GetRoomDetails.as_view(), name="get-room"),
    
]