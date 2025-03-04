from django.db import models

# Create your models here.
class ProductModel(models.Model):
    name = models.CharField( max_length=100)
    price = models.IntegerField()
    description = models.CharField( max_length=100)
    categoryid = models.CharField(max_length=50)
    image = models.ImageField(null=True,blank=True,upload_to="upload/product/")

    def __str__(self):
    	return self.name