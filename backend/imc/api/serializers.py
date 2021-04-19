from rest_framework import serializers
from imc import models

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Usuarios
        fields = '__all__'

    def validate_peso(self, value):
        if (value < 0):
            raise serializers.ValidationError('O valor do PESO deve ser positivo')      
        return (value)

    def validate_altura(self, value):
        if (value < 0):
            raise serializers.ValidationError('O valor da ALTURA deve ser positivo')
        return (value)