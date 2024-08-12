# Generated by Django 5.0.3 on 2024-08-04 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProductModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price', models.IntegerField()),
                ('description', models.CharField(max_length=100)),
                ('categoryid', models.CharField(max_length=50)),
                ('image', models.ImageField(blank=True, null=True, upload_to='upload/product/')),
            ],
        ),
    ]
