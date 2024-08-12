from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import ProductModel
from django.http import FileResponse
from rest_framework import status
from rest_framework.permissions import IsAuthenticated,DjangoModelPermissionsOrAnonReadOnly,AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import HttpResponse, FileResponse
from django.shortcuts import get_object_or_404
from django.conf import settings
import os
# Create your views here.



class ProductViewSet(viewsets.ModelViewSet):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer

    def create(self, request, *args, **kwargs):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self,request, pk):
        product = get_object_or_404(ProductModel,pk=pk)
        product.delete()
        return Response({'message':'product deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    
    def list(self, request, *args, **kwargs):
        categoryid = request.query_params.get('categoryid', None)
        if categoryid is not None:
            queryset = ProductModel.objects.filter(categoryid=categoryid)
        else:
            queryset = ProductModel.objects.all()
        
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)




def sendFile(request, filename):
    file_path = os.path.join(settings.MEDIA_ROOT, 'upload/product/', filename)

    if os.path.exists(file_path):
        response = FileResponse(open(file_path, 'rb'), content_type='image/*')  
        return response
    else:
        return HttpResponse(status=404)
    
@api_view(['GET'])
@permission_classes([AllowAny])
def productCat(request,cat):
    if request.method == 'GET':
        try:
            queryset = ProductModel.objects.filter(categoryid=cat)
            serializerRes = ProductSerializer(queryset, many=True)
            return Response(serializerRes.data)
        except:
            return Response({'message': 'Could not find user.'}, status=status.HTTP_200_OK)