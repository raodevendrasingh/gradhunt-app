# Generated by Django 5.0.4 on 2024-09-19 17:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_companyprofile_branches_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetails',
            name='resumeLink',
            field=models.URLField(blank=True, max_length=512, null=True),
        ),
    ]