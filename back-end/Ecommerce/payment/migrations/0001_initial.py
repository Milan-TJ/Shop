# Generated by Django 5.0.3 on 2024-08-04 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PaymentModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('razorpay_order_id', models.CharField(max_length=50)),
                ('amount', models.IntegerField()),
                ('currency', models.CharField(max_length=5)),
                ('status', models.CharField(max_length=20)),
            ],
        ),
    ]
