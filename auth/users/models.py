from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    username = None  # Set to None to disable username field
    USERNAME_FIELD = 'email'  # Use email as the unique identifier
    REQUIRED_FIELDS = []  # No additional fields required for user creation


