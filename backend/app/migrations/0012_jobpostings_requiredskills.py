# Generated by Django 5.0.8 on 2024-10-13 12:21

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_remove_jobpostings_companysize_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobpostings',
            name='requiredSkills',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.JSONField(), blank=True, default=list, size=None),
        ),
    ]
