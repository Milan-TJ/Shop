from django.db import models


class CartModel(models.Model):
    productid = models.CharField(max_length=10,primary_key=True,null=False)
    userid= models.CharField(max_length=10)
    quantity = models.IntegerField(default=1)
