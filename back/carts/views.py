from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_cart(request):
    cart, created = Cart.objects.get_or_create(user=request.user)

    serializer = CartSerializer(cart)
    return Response(serializer.data)


@api_view(["GET", "POST"])
@permission_classes([IsAuthenticated])
def cart_items_list(request):
    cart, created = Cart.objects.get_or_create(user=request.user)

    if request.method == "GET":
        items = cart.items.all()
        serializer = CartItemSerializer(items, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = CartItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(cart=cart)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT", "DELETE"])
@permission_classes([IsAuthenticated])
def cart_item_detail(request, pk):
    cart = get_object_or_404(Cart, user=request.user)

    cart_item = get_object_or_404(CartItem, pk=pk, cart=cart)

    if request.method == "GET":
        serializer = CartItemSerializer(cart_item)
        return Response(serializer.data)

    elif request.method == "PUT":
        serializer = CartItemSerializer(cart_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        cart_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
