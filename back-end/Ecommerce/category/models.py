from django.db import models

# Create your models here.
class CategoryModel(models.Model):
    categoryname=models.CharField( max_length=50)
