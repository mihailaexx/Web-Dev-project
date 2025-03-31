from django.db import models

# Create your models here.


class Category(models.Model):
    slug = models.SlugField(unique=True, verbose_name="URL")

    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Product(models.Model):
    slug = models.SlugField(unique=True, verbose_name="URL")

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to="products/", blank=True, null=True)
    amount = models.DecimalField(max_digits=4, decimal_places=0, default=1)
    price = models.DecimalField(max_digits=7, decimal_places=0, default=0)
    discount = models.DecimalField(max_digits=2, decimal_places=0, default=0)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
