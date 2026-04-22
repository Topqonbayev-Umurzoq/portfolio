from django.urls import path, include
from django.contrib.auth import views as auth_views
from rest_framework.routers import DefaultRouter
from . import views

# API Router
router = DefaultRouter()
router.register(r'api/projects', views.ProjectViewSet)
router.register(r'api/skills', views.SkillViewSet)

urlpatterns = [
    path('', views.home, name='home'),
    path('contact/', views.contact_view, name='contact'),
    path('admin-panel/', views.admin_panel, name='admin_panel'),

    # Authentication URLs
    path('login/', auth_views.LoginView.as_view(
        template_name='portfolio/login.html',
        redirect_authenticated_user=True
    ), name='login'),
    path('logout/', auth_views.LogoutView.as_view(
        next_page='home'
    ), name='logout'),

    # API URLs
    path('', include(router.urls)),
]