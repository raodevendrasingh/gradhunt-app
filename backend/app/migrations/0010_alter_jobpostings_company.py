# Generated by Django 5.0.8 on 2024-10-11 17:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_alter_jobpostings_posteddate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobpostings',
            name='company',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='job_postings', to='app.companyprofile'),
        ),
    ]
