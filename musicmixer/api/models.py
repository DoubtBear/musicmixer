from django.db import models
from django.contrib.auth.models import User
import string
import random
# Create your models here.

def code_gen ():
    codelength = 6
    

    while True:
        code = ''.join(random.choices(string.ascii_uppercase,k=length))
        if Room.objects.filter(roomcode=code).count() == 0:
            break

    return code

class Room(models.Model):
    roomcode = models.CharField(max_length=8, unique=True, default='')
    host = models.ForeignKey(User, on_delete=models.CASCADE)
    guest_pause = models.BooleanField(null=False, default=True)
    skip_votes = models.IntegerField(null=False, default=1)
    time_created = models.TimeField(auto_now_add=True)
    

