from django.urls import path
from . import views

urlpatterns = [
    path("", views.get_cart, name="cart"),
    path("items/", views.cart_items_list, name="cart-items-list"),
    path("items/<int:pk>/", views.cart_item_detail, name="cart-item-detail"),
]
