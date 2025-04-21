from django.urls import path
from . import views

urlpatterns = [path("items/", views.cart_items_list, name="cart-items-list")]
