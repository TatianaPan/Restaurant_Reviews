
from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import permissions, status
from rest_framework.response import Response
from django.db.models import Q

from app.restaurants.models import Restaurant
from app.restaurants.permissions import IsOwner
from app.restaurants.serializers import RestaurantSerializer

User = get_user_model()


class GetRestaurants(ListAPIView):
    """
    GET:  Get the list of all the restaurant
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        search = self.request.query_params.get('search', None)
        if search:
            queryset = Restaurant.objects.filter(
                Q(name__startswith=search.upper())
                | Q(name__startswith=search.lower())
                | Q(name__startswith=search.capitalize())
            )
        else:
            queryset = Restaurant.objects.all()
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateRestaurant(CreateAPIView):
    """
    POST: Create a new restaurant
    """
    permission_classes = (IsAuthenticated,)
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def create(self, request, *args, **kwargs):
        request.data['user'] = request.user.id
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    # def perform_create(self, serializer):
    #     user = User.objects.get(id=self.request.user.id)
    #     serializer.save(user=user)


class RestaurantsByUser(ListAPIView):
    """
       GET: Get the all the restaurants created by a specific user in chronological order
       """
    permission_classes = (permissions.AllowAny,)
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        return self.queryset.filter(user__id=self.kwargs.get('user_id'))


class GetRestaurantInfo(RetrieveAPIView):
    """
    GET: Get the details of a restaurant by providing the id of the restaurant
    """
    permission_classes = (permissions.AllowAny,)
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'id'
    lookup_field = 'id'


class UpdateDeleteRestaurant(RetrieveUpdateDestroyAPIView):
    """
    PATCH: Update a restaurant by id (only by owner or restaurant admin)
    DELETE: Delete a restaurant by id (only by owner or restaurant admin)
    """
    permission_classes = (IsAuthenticated & IsOwner | IsAuthenticated & IsAdminUser,)
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'id'


class GetRestByCategory(ListAPIView):
    """
    GET: Get the all the restaurants by category
    """
    permission_classes = (permissions.AllowAny,)
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    # lookup_field = 'category_id'
    # lookup_url_kwarg = 'category_id'

    def get_queryset(self):
        return self.queryset.filter(category__cat_id=self.kwargs.get('category_id'))
