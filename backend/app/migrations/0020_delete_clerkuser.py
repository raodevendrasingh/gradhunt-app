# Generated by Django 5.0.4 on 2024-07-30 20:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0019_remove_userdetails_clerk_user_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='ClerkUser',
        ),
    ]