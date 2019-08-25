from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.utils.translation import ugettext_lazy as _


class UserManager(BaseUserManager):
    """Define a model manager for User model with no username field."""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """Create and save a User with the given email and password."""
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        """Create and save a regular User with the given email and password."""
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        """Create and save a SuperUser with the given email and password."""
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class User(AbstractUser):
    email = models.EmailField(_('email address'), unique=True)
    is_active = models.BooleanField(
        verbose_name='toggle by user activation',
        default=False,
        blank=False
    )
    phone = models.CharField(
        verbose_name='phone number',
        max_length=15,
        blank=True
    )
    location = models.CharField(
        verbose_name='user location',
        max_length=50,
        blank=True
    )
    profile_description = models.CharField(
        verbose_name='short user profile description',
        max_length=140,
        blank=True
    )
    REQUIRED_FIELDS = ['first_name', 'last_name', 'email']

    objects = UserManager()

    def __str__(self):
        return self.email


class ActivationCodes(models.Model):
    requester_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='codes',
        to_field='id'
    )
    type = models.CharField(
        verbose_name='24h activation code',
        max_length=20,
        blank=False,
        choices=[('registration', 'Registration Code'), ('password', 'Password Reset Code')]
    )
    code = models.CharField(
        verbose_name='activation code',
        max_length=6,
        blank=False
    )
    expiry = models.DateTimeField(
        verbose_name='expiry of activation code',
        blank=False
    )
    REQUIRED_FIELDS = ['requester_id', 'type', 'code']

    def __str__(self):
        return self.type
