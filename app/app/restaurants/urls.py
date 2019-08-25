from django.urls import path
from app.restaurants.views import GetRestaurants, CreateRestaurant, RestaurantsByUser, GetRestaurantInfo, \
    UpdateDeleteRestaurant, GetRestByCategory

urlpatterns = [
    path('', GetRestaurants.as_view(), name='get-all-restaurants'),
    path('new/', CreateRestaurant.as_view(), name='create-new-restaurant'),
    path('user/<int:user_id>/', RestaurantsByUser.as_view()),
    path('<int:id>/', GetRestaurantInfo.as_view()),
    path('update/<int:id>/', UpdateDeleteRestaurant.as_view()),
    path('category/<uuid:category_id>/', GetRestByCategory.as_view())

]
