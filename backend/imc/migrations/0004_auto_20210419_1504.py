# Generated by Django 3.2 on 2021-04-19 15:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('imc', '0003_usuarios_imc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='altura',
            field=models.FloatField(default=0.0),
        ),
        migrations.AlterField(
            model_name='usuarios',
            name='peso',
            field=models.FloatField(default=0.0),
        ),
    ]