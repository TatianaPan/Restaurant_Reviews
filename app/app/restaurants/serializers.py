from django.contrib.auth import get_user_model
from rest_framework import serializers

# from app.categories.serializers import CategorySerializer
from app.restaurants.models import Restaurant
# from app.users.serializers import PublicUserSerializer

User = get_user_model()


class RestaurantSerializer(serializers.ModelSerializer):
    # user = PublicUserSerializer(required=True, many=False)
    # category = CategorySerializer(required=True, many=False)

    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'country', 'street', 'city', 'zip', 'website', 'phone', 'email', 'hours',
                  'price', 'photo', 'user']

        def create(self, validated_data):
            """
            Overriding the default create method of the Model serializer.
            :param validated_data: data containing all the details of student
            :return: returns a successfully created student record
            """
            user_data = validated_data.pop('user')
            user = User.object.get(id=user_data.id)
            restaurant, created = Restaurant.objects.update_or_create(user=user, data=validated_data)
            return restaurant
