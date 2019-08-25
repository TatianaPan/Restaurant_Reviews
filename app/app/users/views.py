from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateAPIView, CreateAPIView
from django.db.models import Q
from rest_framework import status, permissions
from rest_framework.response import Response
from datetime import datetime, timedelta
import random
import string
from django.utils import timezone

from app.users.models import ActivationCodes
from app.users.serializers import UserSerializer, PublicUserSerializer, CodeSerializer

from app.util.emails import send_luna_emails

User = get_user_model()


def random_string(string_length=6):
    """Generate a random string of fixed length """
    letters = string.ascii_letters
    return ''.join(random.choice(letters) for i in range(string_length))


class SearchProfiles(ListAPIView):
    """
    get:
    Two uses for this endpoint:
     - api/users/   Returns the public profile of all currently registered users
     - api/users/?search=<search_string>    Returns all public profiles that contain the <search_string> in the
     first_name, last_name or username fields. The <search_string> is not case-sensitive.
    If no results are found, an empty array is returned with a 200-OK status code.
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = PublicUserSerializer

    def get_queryset(self):
        search = self.request.query_params.get('search', None)
        if search:
            queryset = User.objects.filter(
                Q(first_name__startswith=search.upper()) | Q(last_name__startswith=search.upper()) | Q(
                    username__startswith=search.upper())
                | Q(first_name__startswith=search.lower()) | Q(last_name__startswith=search.lower()) | Q(
                    username__startswith=search.lower())
                | Q(first_name__startswith=search.capitalize()) | Q(last_name__startswith=search.capitalize()) | Q(
                    username__startswith=search.capitalize())
            )
        else:
            queryset = User.objects.all()
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)


class GetProfile(RetrieveAPIView):
    """
    Returns the public profile of the matching user based on the internal user 'id'
    If no matching user_id is found, a 404-Not-Found response is returned.
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = PublicUserSerializer

    def get(self, request, *args, **kwargs):
        try:
            user = User.objects.get(id=self.kwargs.get('user_id'))
            serializer = PublicUserSerializer(instance=user, many=False)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response("User not found", status=status.HTTP_404_NOT_FOUND)


class GetUpdateMe(RetrieveUpdateAPIView):
    """
    Returns the full profile of the current user based and allows its update (PATCH)
    If no matching user_id is found, a 404-Not-Found response is returned.
    Note that the user must be authenticated to use those operations.
    """
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        user = User.objects.get(id=self.request.user.id)
        serializer = UserSerializer(instance=user, many=False)
        return Response(data=serializer.data)

    def patch(self, request, *args, **kwargs):
        request.data['username'] = request.data.get('email')
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(None, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CreateUser(CreateAPIView):
    """
    Creation of a new user.
    This operation will trigger the generation and delivery of an email (to the defined address)
    that contains the activation code.
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):

        try:
            request.data['username'] = request.data.get('email')
            user_serializer = UserSerializer(data=request.data, partial=False)
            if user_serializer.is_valid():
                user_serializer.save()
                email = request.data['email']
                last_user = User.objects.get(email=email)
                activation_code = random_string()
                code_data = {'requester_id': last_user.id, 'type': 'registration', 'code': activation_code,
                             'expiry': datetime.now(tz=timezone.utc) + timedelta(days=1)}
                code_serializer = CodeSerializer(data=code_data)
                if code_serializer.is_valid():
                    code_serializer.save()
                    send_luna_emails(last_user, 'activation', activation_code)
                    return Response(None, status=status.HTTP_204_NO_CONTENT)
                else:
                    return Response(code_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except AttributeError as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)


class ActivateUser(CreateAPIView):
    """
    Allows the user to be activated by providing the activation code sent by email during registration.
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):

        try:
            code_entry = ActivationCodes.objects.get(code=self.kwargs.get('code'))
            user = User.objects.get(id=code_entry.requester_id_id)

            if code_entry.expiry > datetime.now(tz=timezone.utc):
                user_serializer = UserSerializer(user, data={'is_active': True}, partial=True)
                if user_serializer.is_valid():
                    user_serializer.save()
                    return Response(None, status=status.HTTP_204_NO_CONTENT)
                return Response('Input validation error', status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response('Activation code has expired', status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        except User.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND)
        except ActivationCodes.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_404_NOT_FOUND)
