from django.db import models
from django.contrib.auth.models import User #adicionado depois

"""class Instructor(models.Model):
    objects = None
    name = models.CharField(max_length=100)
    bio = models.TextField()
    experience = models.IntegerField()

    def __str__(self):
        return self.name


class Lesson(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.IntegerField()  # Duração em minutos
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

class Price(models.Model):
    lesson_type = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"{self.lesson_type} - {self.amount}€"""

class Instructor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    bio = models.TextField()
    experience = models.PositiveIntegerField()
    image = models.ImageField(upload_to='instructors_images/', default='default.jpg')

class Lesson(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.PositiveIntegerField()  # duration in minutes

class Price(models.Model):
    lesson_type = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=6, decimal_places=2)

class Booking(models.Model):
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()

