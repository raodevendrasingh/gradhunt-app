# Generated by Django 5.0.8 on 2024-10-16 05:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0017_alter_jobapplication_unique_together_savedjob'),
    ]

    operations = [
        migrations.RenameField(
            model_name='savedjob',
            old_name='saved_at',
            new_name='savedAt',
        ),
    ]
