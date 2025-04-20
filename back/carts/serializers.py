from rest_framework import serializers
from .models import Cart, CartItem
from goods.models import Product


class CartItemSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
    quantity = serializers.IntegerField(min_value=1)

    def create(self, validated_data):
        cart = validated_data.pop("cart")
        product = validated_data.get("product")

        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            defaults={"quantity": validated_data.get("quantity", 1)},
        )

        if not created:
            cart_item.quantity = validated_data.get("quantity", 1)
            cart_item.save()

        return cart_item

    def update(self, instance, validated_data):
        instance.quantity = validated_data.get("quantity", instance.quantity)
        instance.save()
        return instance


class CartSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    user = serializers.StringRelatedField(read_only=True)
    items = CartItemSerializer(many=True, read_only=True)
