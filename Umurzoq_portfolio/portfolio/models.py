from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    technologies = models.JSONField(default=list, help_text="List of technologies used")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Project'
        verbose_name_plural = 'Projects'

class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)  # e.g., Frontend, Backend
    proficiency = models.IntegerField(default=50)  # 0-100

    def __str__(self):
        return self.name
