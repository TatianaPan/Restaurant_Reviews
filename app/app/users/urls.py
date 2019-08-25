from django.urls import path

from app.users.views import SearchProfiles, GetProfile, GetUpdateMe, CreateUser, ActivateUser

urlpatterns = [
    path('', SearchProfiles.as_view(), name='search-users'),
    path('<int:user_id>/', GetProfile.as_view(), name='get-user'),

    path('registration/', CreateUser.as_view(), name='create-user'),
    path('activate/<str:code>/', ActivateUser.as_view(), name='activate-user'),

    path('me/', GetUpdateMe.as_view(), name='get-update-me'),
]
