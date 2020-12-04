from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from .serializers import ProductSerializer , CartSerializer
from ..models import Product, OrderProduct, Order, Cart
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.views import APIView

class ProductApiViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    

class CartApiView(APIView):
    permission_classes=(permissions.IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        user = request.user
        qs = Cart.objects.filter(user=user).first()
        serializer = CartSerializer(qs, many=True)
        if qs:
            return Response({serializer.data})
        else:
            return Response({})

class CartApiViewSet(ModelViewSet):

    permission_classes=(permissions.IsAuthenticated,)
    serializer_class = CartSerializer
    def get_queryset(self):
        user = self.request.user
        queryset = Cart.objects.filter(user=user).first()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)