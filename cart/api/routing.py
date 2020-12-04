from rest_framework.routers import DefaultRouter
from .api import ProductApiViewSet, CartApiView, CartApiViewSet
from django.urls import path

urlpatterns = [ 
    # path('api/cart-products', CartApiView.as_view())
]
router = DefaultRouter()
router.register('api/products', ProductApiViewSet, basename='products')
router.register('api/cart', CartApiViewSet, basename='cart')

urlpatterns+=router.urls

