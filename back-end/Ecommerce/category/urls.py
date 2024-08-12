from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import Category,addcategory

urlpatterns = [
    path('',Category,name='Category'),
    path('add/',addcategory,name='addcategory'),
]