from rest_framework import serializers
from .models import CartModel


# class CartSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CartModel
#         fields = ['productid','userid','quantity']

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartModel
        fields = ['productid','quantity','userid']