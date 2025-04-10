from django.urls import path, include
from .views import (
    CategoryProductsListView,
    CategoryDetailsView,
    CategoryListView,
    ProductListView,
    ProductDetailsView,
)

urlpatterns = [
    path("categories/", CategoryListView.as_view()),
    path("categories/<int:cat_id>/", CategoryDetailsView.as_view()),
    path("categories/<int:cat_id>/items/", CategoryProductsListView.as_view()),
    path("items/", ProductListView.as_view()),
    path("items/<int:prod_id>/", ProductDetailsView.as_view()),
]
# catalog/category_slug
# catalog/item_id
