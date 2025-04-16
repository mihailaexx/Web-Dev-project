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
    path("categories/<slug:cat_slug>/", CategoryDetailsView.as_view()),
    path("categories/<slug:cat_slug>/products/", CategoryProductsListView.as_view()),
    path("products/", ProductListView.as_view()),
    path("products/<int:prod_id>/", ProductDetailsView.as_view()),
]
