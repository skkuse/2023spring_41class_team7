from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    educator = models.BooleanField()

    REQUIRED_FIELDS = AbstractUser.REQUIRED_FIELDS + ['educator']