from django.contrib.auth import get_user_model
from rest_framework import serializers
from app.users.models import ActivationCodes

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'password', 'is_active',
                  'date_joined', 'location', 'phone', 'profile_description']
        read_only_fields = ['id', 'date_joined']
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class PublicUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'date_joined', 'location', 'profile_description']
        read_only_fields = ['id', 'date_joined']


class CodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivationCodes
        fields = ['id', 'requester_id', 'type', 'code', 'expiry']
