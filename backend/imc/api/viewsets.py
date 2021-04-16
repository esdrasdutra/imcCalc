import io
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.parsers import JSONParser

from rest_framework import viewsets
from imc.api.serializers import UsuariosSerializer
from imc.models import Usuarios

class UsuariosViewset(viewsets.ModelViewSet):

    serializer_class = UsuariosSerializer      
    queryset = Usuarios.objects.all()

    @action(detail=True, methods=['post'])
    def perform_create(self, serializer):

        if serializer.is_valid():
            peso = serializer.validated_data['peso']
            altura = serializer.validated_data['altura']

            imc =  f"{(peso /( (altura/100) * (altura/100) )): .2f}"

            serializer.save(imc=imc)           
                        
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


