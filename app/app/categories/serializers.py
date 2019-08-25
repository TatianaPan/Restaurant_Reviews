from rest_framework import serializers

from app.categories.models import Categories


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['name', 'cat_id']
