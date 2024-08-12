from django.urls import include, path
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()

# router.register(' ',UserViewset,basename='users')

urlpatterns = [
	path('', UserViewset.as_view({'get': 'list'}),name ='usersview'),
]