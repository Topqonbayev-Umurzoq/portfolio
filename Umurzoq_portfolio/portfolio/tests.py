from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from .models import Project, Skill

class ProjectModelTest(TestCase):
    def setUp(self):
        self.project = Project.objects.create(
            title="Test Project",
            description="A test project description",
            technologies=["Python", "Django", "JavaScript"],
            url="https://example.com",
            github_url="https://github.com/example/test"
        )

    def test_project_creation(self):
        self.assertEqual(self.project.title, "Test Project")
        self.assertEqual(len(self.project.technologies), 3)
        self.assertEqual(self.project.technologies[0], "Python")

    def test_project_str_method(self):
        self.assertEqual(str(self.project), "Test Project")

class SkillModelTest(TestCase):
    def setUp(self):
        self.skill = Skill.objects.create(
            name="Python",
            category="Backend",
            proficiency=85
        )

    def test_skill_creation(self):
        self.assertEqual(self.skill.name, "Python")
        self.assertEqual(self.skill.category, "Backend")
        self.assertEqual(self.skill.proficiency, 85)

    def test_skill_str_method(self):
        self.assertEqual(str(self.skill), "Python")

class ViewTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='admin',
            password='password123'
        )
        self.project = Project.objects.create(
            title="Test Project",
            description="Test description",
            technologies=["Python"]
        )
        self.skill = Skill.objects.create(
            name="Python",
            category="Backend",
            proficiency=90
        )

    def test_home_view(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Test Project")
        self.assertContains(response, "Python")

    def test_admin_panel_requires_login(self):
        response = self.client.get(reverse('admin_panel'))
        self.assertEqual(response.status_code, 302)  # Redirect to login

    def test_admin_panel_with_login(self):
        self.client.login(username='admin', password='password123')
        response = self.client.get(reverse('admin_panel'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Test Project")

    def test_contact_view(self):
        response = self.client.get(reverse('contact'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Get In Touch")

class APITests(TestCase):
    def test_projects_api(self):
        response = self.client.get('/api/projects/')
        self.assertEqual(response.status_code, 200)

    def test_skills_api(self):
        response = self.client.get('/api/skills/')
        self.assertEqual(response.status_code, 200)
