from django.db import models
from django.contrib.auth.models import User
from goods.models import Product


class Cart(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="carts")

    def __str__(self):
        return f"Cart {self.user.username}"


class CartItem(models.Model):

    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    class Meta:
        unique_together = ["cart", "product"]
        verbose_name = "Product in cart"
        verbose_name_plural = "Products in cart"

    def __str__(self):
        return (
            f"{self.product.name} ({self.quantity}) в корзине {self.cart.user.username}"
        )
