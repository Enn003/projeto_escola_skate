from django.contrib import admin
from .models import Instructor, Lesson, Price, Booking

admin.site.register(Instructor)
admin.site.register(Lesson)
admin.site.register(Price)
admin.site.register(Booking)

