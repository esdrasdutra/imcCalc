from django.db import models
from uuid import uuid4

# Create your models here.
class Usuarios(models.Model):
    id = models.UUIDField(primary_key=True,default=uuid4, editable=False)
    peso = models.FloatField()
    altura = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)