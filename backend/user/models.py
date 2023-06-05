from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    educator = models.BooleanField()
    nickname = models.CharField(max_length=30, unique=True)
    email = models.EmailField(unique=True)

    REQUIRED_FIELDS = AbstractUser.REQUIRED_FIELDS + ['educator', 'nickname']