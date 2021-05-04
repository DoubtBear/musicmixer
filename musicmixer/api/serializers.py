from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):


    class Meta:
        model = Room

        fields = ['id', 'roomcode','host','guest_pause','skip_votes', 'time_created']


class CreateRoomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Room
        fields = ['guest_pause', 'skip_votes', ]