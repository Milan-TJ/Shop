from django.shortcuts import render
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from .serializers import CategorySerializer
from .models import CategoryModel
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated,DjangoModelPermissionsOrAnonReadOnly,AllowAny

# Create your views here.
# class CategoryViewset(viewsets.ModelViewSet):
#     queryset = CategoryModel.objects.all()
#     serializer_class = CategorySerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def Category(request):
    categories = CategoryModel.objects.all()
    serializer = CategorySerializer(categories, many=True)
    response = Response(serializer.data, status=status.HTTP_200_OK)
    # response["Access-Control-Allow-Origin"] = "*"
    return response

@api_view(['POST'])
@permission_classes([AllowAny])
def addcategory(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        response = Response(serializer.data, status=status.HTTP_201_CREATED)
        # response["Access-Control-Allow-Origin"] = "*"
        return response
    response = Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # response["Access-Control-Allow-Origin"] = "*"
    return response