from django.urls import path, include
from .views import Category_Products, CategoryDetails, CategoryList, ProductList, ProductDetails



urlpatterns = [
    path('categories/', CategoryList.as_view()),
    path('categories/<int:cat_id>/', CategoryDetails.as_view()),
    path('categories/<int:cat_id>/items/', Category_Products.as_view()),
    path('items/', ProductList.as_view()),
    path('items/<int:prod_id>/', ProductDetails.as_view()),
]
