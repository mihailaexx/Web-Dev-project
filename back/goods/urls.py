from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import (
    CategoryProductsListView,
    CategoryDetailsView,
    CategoryListView,
    ProductListView,
    ProductDetailsView,
    ReviewAPIView,
    user_reviews,
)

urlpatterns = [
    path("categories/", CategoryListView.as_view()),
    path("categories/<slug:cat_slug>/", CategoryDetailsView.as_view()),
    path("categories/<slug:cat_slug>/products/", CategoryProductsListView.as_view()),
    path("products/", ProductListView.as_view()),
    path("products/<int:prod_id>/", ProductDetailsView.as_view()),
    path("products/<int:product_id>/reviews/", ReviewAPIView.as_view()),
    path("products/<int:product_id>/reviews/<int:review_id>/", ReviewAPIView.as_view()),
    path("my-reviews/", user_reviews),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
