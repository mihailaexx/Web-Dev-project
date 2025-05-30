# Generated by Django 5.2rc1 on 2025-03-29 14:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Category",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("slug", models.SlugField(unique=True, verbose_name="URL")),
                ("name", models.CharField(max_length=100)),
            ],
            options={
                "verbose_name_plural": "Categories",
            },
        ),
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("slug", models.SlugField(unique=True, verbose_name="URL")),
                ("name", models.CharField(max_length=100)),
                ("description", models.TextField(blank=True, null=True)),
                (
                    "image",
                    models.ImageField(blank=True, null=True, upload_to="products/"),
                ),
                (
                    "amount",
                    models.DecimalField(decimal_places=0, default=1, max_digits=4),
                ),
                (
                    "price",
                    models.DecimalField(decimal_places=0, default=0, max_digits=7),
                ),
                (
                    "discount",
                    models.DecimalField(decimal_places=0, default=0, max_digits=2),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="goods.category"
                    ),
                ),
            ],
        ),
    ]
