from django.shortcuts import render
from rest_framework import generics, status
from .models import Room
from .serializers import RoomSerializer, CreateRoomSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.


class RoomView(generics.ListAPIView):
    roomList = Room.objects.all()
    serializer_class = RoomSerializer
    



class GetRoomDetails(APIView):
    serializer_class = RoomSerializer
    url_kwarg = 'code'

    def get(self,request,format=None, *args, **kwargs):
        code = kwargs.get('roomcode')
        print(args)
        if code != None:
            room = Room.objects.filter(code=code).get()
            if room.exists():
                data = RoomSerializer(room).data
                data['is_host'] = self.request.session.session_key == room.host
                return Response(data, status=status.HTTP_200_OK)
            else:
                return Response({'Where da room stay?': 'Wrong room code dudes...'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'Bad Code dude'}, status=status.HTTP_400_BAD_REQUEST)




class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer


    def post(self, request, format=None):

        if not self.request.session.exists(self.request.session.session_key):
                self.request.session.create()
        
        print("post called to api create view")
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            
            
            guest_pause = serializer.data.get('guest_pause')
            skip_votes = serializer.data.get('skip_votes')
            host = self.request.session.session_key
            if Room.objects.filter(host=host).exists():
                oldRoom = Room.objects.filter(host=host).get()
                oldRoom.guest_pause = guest_pause
                oldRoom.skip_votes = skip_votes
                oldRoom.save(update_fields=['guest_pause', 'skip_votes'])
                return Response(RoomSerializer(oldRoom).data, status=status.HTTP_200_OK)
            else:
                newRoom = Room(host=host, guest_pause=guest_pause, skip_votes=skip_votes)
                newRoom.save()
                return Response(RoomSerializer(newRoom).data, status=status.HTTP_200_OK)
                
                