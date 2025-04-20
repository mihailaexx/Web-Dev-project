from django.contrib.auth.models import User
from django.db import models
from slugify import slugify


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=150, unique=True, verbose_name="URL", blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while Product.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=150, unique=True, verbose_name="URL", blank=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to="productcard/", blank=True, null=True)
    amount = models.DecimalField(max_digits=4, decimal_places=0, default=1)
    price = models.DecimalField(max_digits=7, decimal_places=0, default=0)
    discount = models.DecimalField(max_digits=2, decimal_places=0, default=0)
    category = models.ForeignKey(
        to=Category, related_name="products", on_delete=models.CASCADE
    )

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1
            while Product.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="reviews")
    product = models.ForeignKey(
        "Product", on_delete=models.CASCADE, related_name="reviews"
    )
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.product.name} ({self.rating})"
