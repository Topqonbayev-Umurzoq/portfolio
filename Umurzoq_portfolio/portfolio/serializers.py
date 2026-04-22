from rest_framework import serializers
from .models import Project, Skill

class ProjectSerializer(serializers.ModelSerializer):
    technologies_display = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'url', 'github_url',
                 'technologies', 'technologies_display', 'created_at']

    def get_technologies_display(self, obj):
        return obj.get_technologies_list()

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name', 'category', 'proficiency']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name', 'category', 'proficiency']