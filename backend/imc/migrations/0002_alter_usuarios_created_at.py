# Generated by Django 3.2 on 2021-04-15 00:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('imc', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usuarios',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
