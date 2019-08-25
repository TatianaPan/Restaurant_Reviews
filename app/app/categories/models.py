from django.db import models
import uuid


# Create your models here.
class Categories(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )
    cat_id = models.UUIDField(
        default=uuid.uuid4,
        editable=False,
        unique=True
    )

    def __str__(self):
        return self.name
