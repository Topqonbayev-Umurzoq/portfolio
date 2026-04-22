from django.shortcuts import render
from .models import Project, Skill

def home(request):
    projects = Project.objects.all()
    skills = Skill.objects.all()
    context = {
        'projects': projects,
        'skills': skills,
        'name': 'Umurzoq Topqonbayev'
    }
    return render(request, 'portfolio/home.html', context)

def admin_panel(request):
    projects = Project.objects.all()
    skills = Skill.objects.all()
    context = {
        'projects': projects,
        'skills': skills,
    }
    return render(request, 'portfolio/admin.html', context)
