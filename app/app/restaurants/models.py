from django.contrib.auth import get_user_model
from django.db import models

# from app.categories.models import Categories

User = get_user_model()


class Restaurant(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
        blank=False
    )
    # category = models.CharField(
    #     verbose_name='category',
    #     max_length=50,
    #     blank=False
    # )
    country = models.CharField(
        verbose_name='country',
        max_length=30,
        blank=False
    )
    street = models.CharField(
        verbose_name='street',
        max_length=50,
        blank=False
    )
    city = models.CharField(
        verbose_name='city',
        max_length=30,
        blank=False
    )
    zip = models.CharField(
        verbose_name='zip',
        max_length=50,
        blank=True,
        null=True
    )
    website = models.CharField(
        verbose_name='website',
        max_length=50,
        blank=True,
        null=True
    )
    phone = models.CharField(
        verbose_name='phone',
        max_length=15,
        blank=False,
    )
    email = models.EmailField(
        verbose_name='email address',
        unique=True
    )
    hours = models.CharField(
        verbose_name='opening hours',
        max_length=15,
        blank=False,
    )
    price = models.CharField(
        verbose_name='price level',
        max_length=15,
        blank=True,
        null=True
    )
    photo = models.ImageField(
        upload_to='restaurants/',
        max_length=100,
        blank=True,
        null=True
    )
    # category = models.ForeignKey(
    #     Categories,
    #     verbose_name='category',
    #     on_delete=models.CASCADE,
    #     to_field='cat_id',
    #     related_name='restaurants'
    # )
    user = models.ForeignKey(
        User,
        verbose_name='user',
        on_delete=models.CASCADE,
        related_name='restaurants'
    )

    def __str__(self):
        return self.name
