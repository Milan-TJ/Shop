from django.urls import path
from .views import *

urlpatterns = [
	path('api/cart_details', cart_details,name='cart_details'),
	path('api/delete/<int:pk>', delete_cart,name='cart_delete'),
	path('api/fetch', get_product_details,name='product_details'),
]