from django.urls import path

from app.categories.views import GetCategories


urlpatterns = [
    path('', GetCategories.as_view())

]
