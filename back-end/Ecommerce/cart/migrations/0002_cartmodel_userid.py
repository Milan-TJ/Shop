# Generated by Django 5.0.3 on 2024-08-08 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cartmodel',
            name='userid',
            field=models.CharField(default=1, max_length=10),
            preserve_default=False,
        ),
    ]
