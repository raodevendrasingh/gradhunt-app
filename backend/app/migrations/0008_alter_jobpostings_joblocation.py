# Generated by Django 5.0.8 on 2024-10-11 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_jobpostings_jobid_jobpostings_worktype_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobpostings',
            name='jobLocation',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
