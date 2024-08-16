from django.db import IntegrityError
from rest_framework import serializers
from likes.models import Like


class LikeSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Like
        fields = ['id', 'created_at', 'owner', 'post']


    def create(self, validate_data):
        try:
            return super().create(validate_data)
        except IntegrityError:
            raise serializers.validation({
                'detail': 'possible duplicate'
            })