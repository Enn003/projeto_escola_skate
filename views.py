from rest_framework import viewsets
from .models import Instructor, Lesson, Price, Booking
from .serializers import InstructorSerializer, LessonSerializer, PriceSerializer, BookingSerializer
from rest_framework.permissions import BasePermission
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected_view(request):
    return Response({"message": "Esta é uma vista protegida"})

class IsInstructor(BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name='Instructor').exists()

class IsStudent(BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name='Student').exists()

class InstructorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

class LessonViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class PriceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Price.objects.all()
    serializer_class = PriceSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer