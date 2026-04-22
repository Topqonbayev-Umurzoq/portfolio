from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.core.paginator import Paginator
from django.db.models import Q
from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Project, Skill
from .forms import ContactForm
from .serializers import ProjectSerializer, SkillSerializer

def home(request):
    # Get query parameters for filtering and searching
    search_query = request.GET.get('search', '')
    category_filter = request.GET.get('category', '')
    sort_by = request.GET.get('sort', '-created_at')  # Default: newest first

    # Filter projects
    projects = Project.objects.all()

    if search_query:
        projects = projects.filter(
            Q(title__icontains=search_query) |
            Q(description__icontains=search_query) |
            Q(technologies__icontains=search_query)
        )

    # Sort projects
    if sort_by == 'title':
        projects = projects.order_by('title')
    elif sort_by == 'created_at':
        projects = projects.order_by('created_at')
    else:  # '-created_at' or default
        projects = projects.order_by('-created_at')

    # Paginate projects
    paginator = Paginator(projects, 6)  # 6 projects per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    # Get all skills
    skills = Skill.objects.all().order_by('category', '-proficiency')

    # Group skills by category for better display
    skills_by_category = {}
    for skill in skills:
        if skill.category not in skills_by_category:
            skills_by_category[skill.category] = []
        skills_by_category[skill.category].append(skill)

    context = {
        'projects': page_obj,
        'skills_by_category': skills_by_category,
        'name': settings.PORTFOLIO_OWNER_NAME,
        'search_query': search_query,
        'category_filter': category_filter,
        'sort_by': sort_by,
    }
    return render(request, 'portfolio/home.html', context)

@login_required
def admin_panel(request):
    # Get query parameters
    search_query = request.GET.get('search', '')
    model_type = request.GET.get('model', 'project')  # 'project' or 'skill'

    projects = Project.objects.all()
    skills = Skill.objects.all()

    # Apply search filter
    if search_query:
        if model_type == 'project':
            projects = projects.filter(
                Q(title__icontains=search_query) |
                Q(description__icontains=search_query) |
                Q(technologies__icontains=search_query)
            )
        elif model_type == 'skill':
            skills = skills.filter(
                Q(name__icontains=search_query) |
                Q(category__icontains=search_query)
            )

    # Paginate for admin view
    projects_paginator = Paginator(projects.order_by('-created_at'), 10)
    skills_paginator = Paginator(skills.order_by('category', 'name'), 10)

    projects_page = request.GET.get('projects_page')
    skills_page = request.GET.get('skills_page')

    projects_page_obj = projects_paginator.get_page(projects_page)
    skills_page_obj = skills_paginator.get_page(skills_page)

    context = {
        'projects': projects_page_obj,
        'skills': skills_page_obj,
        'search_query': search_query,
        'model_type': model_type,
        'total_projects': projects.count(),
        'total_skills': skills.count(),
    }
    return render(request, 'portfolio/admin.html', context)

def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Send email
            subject = f"Portfolio Contact: {form.cleaned_data['subject']}"
            message = f"""
            From: {form.cleaned_data['name']} ({form.cleaned_data['email']})

            Message:
            {form.cleaned_data['message']}
            """
            from_email = form.cleaned_data['email']
            to_email = [settings.PORTFOLIO_OWNER_EMAIL]

            try:
                send_mail(subject, message, from_email, to_email)
                messages.success(request, 'Your message has been sent successfully!')
                return redirect('home')
            except Exception as e:
                messages.error(request, f'Failed to send message: {str(e)}')
        else:
            messages.error(request, 'Please correct the errors below.')
    else:
        form = ContactForm()

    return render(request, 'portfolio/contact.html', {'form': form})


# API ViewSets
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'description', 'technologies']
    ordering_fields = ['created_at', 'title']

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all().order_by('category', '-proficiency')
    serializer_class = SkillSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name', 'category']
    ordering_fields = ['name', 'category', 'proficiency']
