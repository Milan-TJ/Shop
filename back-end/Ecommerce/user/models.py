from django.db import models
from django.contrib.auth.models import AbstractUser


class UserModel(AbstractUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=100)
    phonenumber = models.CharField(max_length=100)
    username = models.CharField(unique=True,max_length=100)
    password = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)

# from django.db import models
# from django.contrib.auth.models import AbstractUser

# class UserModel(AbstractUser):
#     email = models.EmailField(unique=True)
#     name = models.CharField(max_length=100)
#     phonenumber = models.CharField(max_length=15, unique=True)
#     gender = models.CharField(max_length=10)

#     # Set the field used for logging in
#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['username', 'name', 'phonenumber', 'gender']

#     def __str__(self):
#         return self.email