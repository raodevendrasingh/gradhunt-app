# Generated by Django 5.0.4 on 2024-09-13 17:23

import django.contrib.postgres.fields
import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recruiter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('companyName', models.CharField(max_length=100)),
                ('jobTitle', models.CharField(max_length=100)),
                ('startDate', models.DateField()),
                ('endDate', models.DateField(blank=True, null=True)),
                ('companyLocation', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'verbose_name': 'Recruiter Detail',
                'verbose_name_plural': 'Recruiter Details',
            },
        ),
        migrations.CreateModel(
            name='UserDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('clerk_user_id', models.CharField(max_length=255, null=True, unique=True)),
                ('profilePicture', models.CharField(blank=True, max_length=100, null=True)),
                ('username', models.CharField(max_length=100)),
                ('usertype', models.CharField(max_length=100)),
                ('firstname', models.CharField(max_length=255)),
                ('lastname', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('bio', models.CharField(blank=True, max_length=255, null=True)),
                ('location', models.CharField(blank=True, max_length=60, null=True)),
                ('isProfileActivated', models.BooleanField(default=False)),
                ('isProfilePublic', models.BooleanField(default=False)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'User Details',
                'verbose_name_plural': 'User Details',
            },
        ),
        migrations.CreateModel(
            name='CompanyProfile',
            fields=[
                ('recruiter', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='app.recruiter')),
                ('companyLogo', models.CharField(blank=True, max_length=100, null=True)),
                ('companyBanner', models.CharField(blank=True, max_length=100, null=True)),
                ('companyName', models.CharField(max_length=100)),
                ('website', models.CharField(max_length=100, validators=[django.core.validators.URLValidator()])),
                ('employeeSize', models.CharField(max_length=50)),
                ('establishedYear', models.CharField(max_length=6)),
                ('industry', models.CharField(max_length=100)),
                ('headquarters', models.CharField(max_length=200)),
                ('branches', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, default=list, size=None)),
                ('about', models.TextField()),
                ('values', models.TextField()),
            ],
            options={
                'verbose_name': 'Company Profile',
                'verbose_name_plural': 'Company Profiles',
            },
        ),
        migrations.CreateModel(
            name='HiringPreference',
            fields=[
                ('recruiter', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='app.recruiter')),
                ('experience', models.IntegerField()),
                ('levels', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, default=list, size=None)),
                ('industry', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, default=list, size=None)),
                ('function', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, default=list, size=None)),
                ('skills', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, default=list, size=None)),
            ],
            options={
                'verbose_name': 'Hiring Preference',
                'verbose_name_plural': 'Hiring Preferences',
            },
        ),
        migrations.CreateModel(
            name='Posting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('isActive', models.BooleanField()),
                ('jobTitle', models.CharField(max_length=100)),
                ('jobType', models.CharField(max_length=50)),
                ('jobDescription', models.TextField()),
                ('salaryRange', models.CharField(max_length=50)),
                ('companySize', models.CharField(max_length=100)),
                ('skillsRequired', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, default=list, size=None)),
                ('jobLocation', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, default=list, size=None)),
                ('experience', models.CharField(max_length=100)),
                ('postedDate', models.DateField()),
                ('applyLink', models.URLField()),
                ('applicationDeadline', models.DateField()),
                ('recruiter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.recruiter')),
            ],
            options={
                'verbose_name': 'Job Posting',
                'verbose_name_plural': 'Job Postings',
            },
        ),
        migrations.CreateModel(
            name='SocialLinks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('linkedin', models.URLField(blank=True, null=True)),
                ('github', models.URLField(blank=True, null=True)),
                ('leetcode', models.URLField(blank=True, null=True)),
                ('twitter', models.URLField(blank=True, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='app.userdetails')),
            ],
            options={
                'verbose_name': 'Social Link',
                'verbose_name_plural': 'Social Links',
            },
        ),
        migrations.CreateModel(
            name='Skills',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.CharField(max_length=100)),
                ('label', models.CharField(max_length=100)),
                ('image', models.URLField()),
                ('category', models.CharField(max_length=100)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.userdetails')),
            ],
            options={
                'verbose_name': 'Skill',
                'verbose_name_plural': 'Skills',
            },
        ),
        migrations.AddField(
            model_name='recruiter',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='app.userdetails'),
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('projectName', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True, default='')),
                ('liveLink', models.URLField()),
                ('sourceCodeLink', models.URLField()),
                ('skills', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, default=list, size=None)),
                ('startMonth', models.CharField(max_length=20)),
                ('startYear', models.CharField(max_length=4)),
                ('endMonth', models.CharField(blank=True, max_length=20, null=True)),
                ('endYear', models.CharField(blank=True, max_length=4, null=True)),
                ('isCurrentlyWorking', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.userdetails')),
            ],
            options={
                'verbose_name': 'Project',
                'verbose_name_plural': 'Projects',
            },
        ),
        migrations.CreateModel(
            name='Linguistics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language', models.CharField(blank=True, max_length=20, null=True)),
                ('proficiency', models.CharField(blank=True, max_length=20, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.userdetails')),
            ],
            options={
                'verbose_name': 'Linguistic',
                'verbose_name_plural': 'Linguistics',
            },
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('companyName', models.CharField(max_length=50)),
                ('jobTitle', models.CharField(max_length=50)),
                ('jobType', models.CharField(max_length=50)),
                ('startMonth', models.CharField(max_length=20)),
                ('startYear', models.CharField(max_length=4)),
                ('endMonth', models.CharField(blank=True, max_length=20)),
                ('endYear', models.CharField(blank=True, max_length=4)),
                ('jobLocation', models.CharField(max_length=100)),
                ('locationType', models.CharField(max_length=60)),
                ('description', models.TextField(blank=True, default='')),
                ('isCurrentlyWorking', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.userdetails')),
            ],
            options={
                'verbose_name': 'Experience',
                'verbose_name_plural': 'Experiences',
            },
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('instituteName', models.CharField(max_length=50)),
                ('degreeTitle', models.CharField(max_length=50)),
                ('studyField', models.CharField(max_length=50)),
                ('startMonth', models.CharField(max_length=20)),
                ('startYear', models.CharField(max_length=4)),
                ('endMonth', models.CharField(max_length=20)),
                ('endYear', models.CharField(max_length=4)),
                ('instituteLocation', models.CharField(max_length=100)),
                ('grade', models.CharField(blank=True, max_length=10)),
                ('description', models.TextField(blank=True, default='')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.userdetails')),
            ],
            options={
                'verbose_name': 'Education',
                'verbose_name_plural': 'Education',
            },
        ),
        migrations.CreateModel(
            name='Certificate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('certificateName', models.CharField(max_length=50)),
                ('issuerOrg', models.CharField(max_length=50)),
                ('credentialUrl', models.URLField()),
                ('credentialId', models.CharField(max_length=255)),
                ('isValid', models.BooleanField(default=False)),
                ('startMonth', models.CharField(max_length=20)),
                ('startYear', models.CharField(max_length=4)),
                ('endMonth', models.CharField(blank=True, max_length=20, null=True)),
                ('endYear', models.CharField(blank=True, max_length=4, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.userdetails')),
            ],
            options={
                'verbose_name': 'Certificate',
                'verbose_name_plural': 'Certificates',
            },
        ),
        migrations.CreateModel(
            name='Award',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('awardName', models.CharField(max_length=255)),
                ('yearReceived', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.userdetails')),
            ],
            options={
                'verbose_name': 'Award',
                'verbose_name_plural': 'Awards',
            },
        ),
        migrations.CreateModel(
            name='AboutData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='app.userdetails')),
            ],
            options={
                'verbose_name': 'AboutData',
                'verbose_name_plural': 'AboutData',
            },
        ),
    ]
