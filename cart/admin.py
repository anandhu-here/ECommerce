from django.contrib import admin
from .models import Product, Payment, Address, OrderProduct, Order

admin.site.register((Product, Payment, Address, Order, OrderProduct))