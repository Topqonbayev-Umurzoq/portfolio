from django.contrib import admin
from .models import Project, Skill

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'technologies_display', 'url', 'github_url')
    list_filter = ('created_at', 'technologies')
    search_fields = ('title', 'description', 'technologies')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)

    def technologies_display(self, obj):
        return ', '.join(obj.technologies) if obj.technologies else 'No technologies'
    technologies_display.short_description = 'Technologies'

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'proficiency', 'proficiency_display')
    list_filter = ('category', 'proficiency')
    search_fields = ('name', 'category')
    ordering = ('category', 'name')

    def proficiency_display(self, obj):
        return f"{obj.proficiency}%"
    proficiency_display.short_description = 'Proficiency'
