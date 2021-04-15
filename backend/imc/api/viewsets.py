from rest_framework import viewsets
from imc.api import serializers
from imc import models

class UsuariosViewset(viewsets.ModelViewSet):
    serializer_class = serializers.UsuariosSerializer
    queryset = models.Usuarios.objects.all()