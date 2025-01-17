from .models import Experience
from rest_framework import serializers
from .models import *
import secrets
import string


class NestedDictField(serializers.Field):
    def __init__(self, required=True, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.required = required

    def to_internal_value(self, data):
        if self.required and data is None:
            raise serializers.ValidationError('This field is required')
        if isinstance(data, dict):
            return data.get('value')
        return data

    def to_representation(self, value):
        return value


class SkillDictField(serializers.Field):
    def to_internal_value(self, data):
        if not isinstance(data, dict):
            raise serializers.ValidationError(
                'Invalid format - expected dictionary')
        return data

    def to_representation(self, value):
        return value


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = '__all__'


class LinguisticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Linguistics
        fields = '__all__'


class SocialLinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialLinks
        fields = '__all__'


class UserDescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDescription
        fields = '__all__'


class HiringPreferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = HiringPreferences
        fields = '__all__'


class PostingSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPostings
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    skills = serializers.ListField(child=NestedDictField())
    startMonth = NestedDictField()
    startYear = NestedDictField()
    endMonth = NestedDictField(required=False)
    endYear = NestedDictField(required=False)

    class Meta:
        model = Projects
        fields = ['id', 'projectName', 'description', 'liveLink', 'skills', 'sourceCodeLink',
                  'isCurrentlyWorking', 'startMonth', 'startYear', 'endMonth', 'endYear', 'user']
        read_only_fields = ['id']

    def create(self, validated_data):
        return Projects.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class CertificateSerializer(serializers.ModelSerializer):
    startMonth = NestedDictField()
    startYear = NestedDictField()
    endMonth = serializers.CharField(
        allow_blank=True, allow_null=True, required=False)
    endYear = serializers.CharField(
        allow_blank=True, allow_null=True, required=False)

    class Meta:
        model = Certifications
        fields = ['id', 'certificateName', 'issuerOrg', 'credentialUrl', 'credentialId',
                  'isValid', 'startMonth', 'startYear', 'endMonth', 'endYear', 'user']
        read_only_fields = ['id']

    def create(self, validated_data):
        return Certifications.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ['user', 'skills_list']

    def to_representation(self, instance):
        return {
            'user': instance.user.id,
            'skills_list': instance.skills_list
        }

    def validate_skills_list(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError("skills_list must be a list")
        for item in value:
            if not isinstance(item, dict) or not all(key in item for key in ['value', 'label', 'image', 'category']):
                raise serializers.ValidationError(
                    "Each skill must be a dictionary with 'value', 'label', 'image', and 'category' keys")
        return value


class ExperienceSerializer(serializers.ModelSerializer):
    jobTitle = NestedDictField()
    jobType = NestedDictField()
    startMonth = NestedDictField()
    startYear = NestedDictField()
    endMonth = serializers.CharField(
        allow_blank=True, allow_null=True, required=False)
    endYear = serializers.CharField(
        allow_blank=True, allow_null=True, required=False)
    locationType = NestedDictField()

    class Meta:
        model = Experience
        fields = ['id', 'companyName', 'jobTitle', 'jobType', 'startMonth', 'startYear', 'endMonth', 'endYear', 'jobLocation',
                  'locationType', 'companyWebsite', 'isVerified', 'verificationCode', 'description', 'isCurrentlyWorking', 'user']
        read_only_fields = ['id']

    def create(self, validated_data):
        return Experience.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class EducationSerializer(serializers.ModelSerializer):
    degreeTitle = NestedDictField()
    studyField = NestedDictField()
    startMonth = NestedDictField()
    startYear = NestedDictField()
    endMonth = NestedDictField(required=False)
    endYear = NestedDictField(required=False)

    class Meta:
        model = Education
        fields = ['id', 'instituteName', 'degreeTitle', 'studyField', 'startMonth', 'startYear', 'endMonth', 'endYear',
                  'instituteLocation', 'grade', 'instituteWebsite', 'isVerified', 'verificationCode', 'description', 'user']
        read_only_fields = ['id']

    def create(self, validated_data):
        return Education.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ['username', 'firstname', 'lastname',
                  'email', 'location', 'resumeLink']


class ApplicantsSerializer(serializers.ModelSerializer):
    candidate = CandidateSerializer(read_only=True)

    class Meta:
        model = JobApplication
        fields = ['id', 'status', 'appliedDate', 'candidate', ]
        read_only_fields = ['id', 'appliedDate']


class JobDetailsSerializer(serializers.ModelSerializer):
    applicants = ApplicantsSerializer(
        many=True, read_only=True, source='jobapplication_set')

    class Meta:
        model = JobPostings
        fields = ['jobId', 'isActive', 'jobTitle', 'jobType', 'workType', 'jobLocation',
                  'postedDate', 'applicationDeadline', 'openings', 'applicants']


class CompanyAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = ['username', 'firstname', 'lastname', 'email']


class CompanyProfileSerializer(serializers.ModelSerializer):
    employeeSize = NestedDictField()
    companyType = NestedDictField()
    industry = NestedDictField()
    branches = NestedDictField(required=False)
    companyAdmin = CompanyAdminSerializer(source='user', read_only=True)

    class Meta:
        model = CompanyProfile
        fields = ['id', 'companyAdmin', 'companyBanner', 'companySlug', 'companyLogo', 'tagline', 'companyName', 'companyEmail', 'tagline',
                  'companyPhone', 'establishedYear', 'marketCap', 'fundingRaised',
                  'yearlyRevenue', 'headquarters', 'branches', 'description', 'companyType',
                  'industry', 'branches', 'companyWebsite', 'employeeSize', 'linkedin', 'instagram', 'twitter', 'isDraft', 'user']
        read_only_fields = ['id']

    def create(self, validated_data):
        return CompanyProfile.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class CompanyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyProfile
        fields = ['companySlug', 'companyName', 'companyLogo']


class JobPostingSerializer(serializers.ModelSerializer):
    jobType = NestedDictField()
    jobCategory = NestedDictField()
    workType = NestedDictField()
    experience = NestedDictField()
    currency = NestedDictField()
    requiredSkills = serializers.ListField(child=SkillDictField())
    companyData = CompanyDataSerializer(source='company', read_only=True)

    class Meta:
        model = JobPostings
        fields = ['id', 'jobId', 'company', 'companyData', 'jobTitle', 'jobType', 'jobCategory', 'workType', 'experience', 'postedDate', 'currency', 'lowestSalary', 'highestSalary',
                  'requiredSkills', 'jobLocation', 'jobDescription', 'applicationDeadline', 'openings', 'applicants', 'applyLink', 'applyWithUs', 'isActive', 'isArchived']
        read_only_fields = ['id', 'jobId', 'company']

    def create(self, validated_data):
        company = validated_data.pop('company', None)
        job_id = ''.join(secrets.choice(string.ascii_uppercase) for _ in range(4)) + \
                 ''.join(secrets.choice(string.digits) for _ in range(4))
        return JobPostings.objects.create(company=company, jobId=job_id, **validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class JobApplicationSerializer(serializers.ModelSerializer):
    jobPosting = serializers.PrimaryKeyRelatedField(
        queryset=JobPostings.objects.all())
    candidate = serializers.PrimaryKeyRelatedField(
        queryset=UserDetails.objects.all())

    class Meta:
        model = JobApplication
        fields = ['id', 'jobPosting', 'candidate', 'status', 'appliedDate']
        read_only_fields = ['id', 'appliedDate']

    def create(self, validated_data):
        return JobApplication.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class SavedJobSerializer(serializers.ModelSerializer):
    jobPosting = serializers.PrimaryKeyRelatedField(
        queryset=JobPostings.objects.all())
    candidate = serializers.PrimaryKeyRelatedField(
        queryset=UserDetails.objects.all())

    class Meta:
        model = SavedJob
        fields = ['id', 'jobPosting', 'candidate', 'savedAt']
        read_only_fields = ['id', 'appliedDate']

    def create(self, validated_data):
        return SavedJob.objects.create(**validated_data)

    def update(self, instance, validated_data):
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
