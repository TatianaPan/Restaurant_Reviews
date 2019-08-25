from rest_framework.generics import ListAPIView
from rest_framework import permissions

from app.categories.models import Categories
from app.categories.serializers import CategorySerializer


class GetCategories(ListAPIView):
    """
    GET: Get all categories
    """
    permission_classes = (permissions.AllowAny,)
    queryset = Categories.objects.all()
    serializer_class = CategorySerializer
