from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Cart, CartItem
from .serializers import CartItemSerializer
from goods.models import Product


@api_view(["GET", "POST", "DELETE"])
@permission_classes([IsAuthenticated])
def cart_items_list(request):
    cart, created = Cart.objects.get_or_create(user=request.user)

    def add_to_cart(cart, product_id, quantity=None):
        product = get_object_or_404(Product, pk=product_id)
        cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)

        if quantity is not None:
            cart_item.quantity = quantity
        elif created:
            cart_item.quantity = 1
        else:
            cart_item.quantity += 1

        cart_item.save()
        serializer = CartItemSerializer(cart_item)
        return Response(serializer.data)

    def remove_from_cart(cart, product_id):
        product = get_object_or_404(Product, pk=product_id)

        try:
            cart_item = CartItem.objects.get(cart=cart, product=product)
            cart_item.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except CartItem.DoesNotExist:
            return Response(
                {"error": "Товар не найден в корзине"}, status=status.HTTP_404_NOT_FOUND
            )

    if request.method == "GET":
        items = cart.items.all()
        serializer = CartItemSerializer(items, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        try:
            if isinstance(request.data, dict):
                if "product" not in request.data:
                    return Response(
                        {"error": "Необходимо указать ID товара в поле 'product'"},
                        status=status.HTTP_400_BAD_REQUEST,
                    )

                product_id = request.data["product"]
                quantity = request.data.get("quantity")

                if isinstance(product_id, str):
                    product_id = int(product_id)

                if quantity is not None and isinstance(quantity, str):
                    quantity = int(quantity)

                return add_to_cart(cart, product_id, quantity)
            else:
                product_id = int(request.data)
                return add_to_cart(cart, product_id)
        except (ValueError, TypeError):
            return Response(
                {
                    "error": "Некорректный формат данных. Отправьте ID товара как число или словарь с полями 'product' и 'quantity'"
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

    elif request.method == "DELETE":
        try:
            product_id = int(request.data)
            return remove_from_cart(cart, product_id)
        except (ValueError, TypeError):
            return Response(
                {"error": "Необходимо отправить ID товара как целое число"},
                status=status.HTTP_400_BAD_REQUEST,
            )
