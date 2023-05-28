from rest_framework import serializers
from django.contrib.auth import authenticate

from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'educator')


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

    def validate(self, attrs):
        request = self.context['request']
        user = authenticate(request, username=attrs['username'], password=attrs['password'])
        if not user:
            raise serializers.ValidationError('wrong credential', code='authentication')
        return user


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password2', 'educator')
    
    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({'password2': 'Password fields don\'t match.'}, code='authentication')
        return attrs
    
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            educator=validated_data['educator']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user