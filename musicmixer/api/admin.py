from django.contrib import admin

from .models import Room




# Register your models here.

admin.site.site_header = 'Music Mixer Admin'
admin.site.register(Room)