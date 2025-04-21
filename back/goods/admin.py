from django.contrib import admin

from goods.models import Category, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    list_filter = ("name",)
    search_fields = ("name",)
    list_ordering = (
        "id",
        "name",
    )


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "slug",
        "amount",
        "price",
        "discount",
        "category",
    )
    list_filter = ("category",)
    search_fields = ("name",)
    list_ordering = (
        "id",
        "name",
        "amount",
        "price",
        "discount",
    )
