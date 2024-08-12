from django.shortcuts import render
from user.models import UserModel
from user.serializers import UserSerializer
from rest_framework import viewsets

# Create your views here.
class UserViewset(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

