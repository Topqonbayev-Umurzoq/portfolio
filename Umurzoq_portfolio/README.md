# Umurzoq Portfolio

A modern, professional portfolio website built with Django 6.0.4 featuring a cosmic/space theme.

## Features

✅ **Security Hardened**
- Environment variable configuration
- Authentication required for admin panel
- Production-ready settings

✅ **Advanced Functionality**
- Search and filter projects
- Sort projects by date/title
- Pagination for large datasets
- Contact form with email integration
- REST API endpoints
- Admin panel with full CRUD operations

✅ **Modern UI/UX**
- Cosmic space theme with animations
- Responsive design (mobile-friendly)
- Smooth scrolling navigation
- Interactive particle effects

✅ **Developer Experience**
- Comprehensive test suite
- REST API with Django REST Framework
- Proper model relationships
- Clean, maintainable code

## Quick Start

### Prerequisites
- Python 3.8+
- Virtual environment (recommended)

### Installation

1. **Clone and setup:**
```bash
cd Umurzoq_portfolio
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

2. **Environment variables:**
Create a `.env` file in the project root:
```bash
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
PORTFOLIO_OWNER_NAME=Umurzoq Topqonbayev
PORTFOLIO_OWNER_EMAIL=umurzoq@example.com
```

3. **Database setup:**
```bash
python manage.py migrate
python manage.py createsuperuser
```

4. **Run the server:**
```bash
python manage.py runserver
```

Visit `http://localhost:8000` to see your portfolio!

## Admin Panel

Access the admin panel at `/admin-panel/` (requires login)
- View all projects and skills
- Search and filter functionality
- Pagination for large datasets

Default admin credentials:
- Username: `admin`
- Password: `admin123`

## API Endpoints

The portfolio includes a REST API:

- `GET /api/projects/` - List all projects
- `GET /api/skills/` - List all skills
- `POST /api/projects/` - Create project (authenticated)
- `POST /api/skills/` - Create skill (authenticated)

## Project Structure

```
Umurzoq_portfolio/
├── config/                 # Django settings
├── portfolio/             # Main app
│   ├── models.py         # Database models
│   ├── views.py          # View logic
│   ├── serializers.py    # API serializers
│   ├── forms.py          # Contact form
│   ├── tests.py          # Test suite
│   └── templates/        # HTML templates
├── static/               # Static files
├── media/               # User uploaded files
└── db.sqlite3           # Database
```

## Key Features Explained

### Search & Filter
- Search projects by title, description, or technologies
- Sort by newest/oldest first or alphabetically
- Real-time filtering without page reload

### Contact Form
- Integrated email sending
- Form validation
- Success/error messages
- Configurable recipient

### Admin Panel
- Protected by authentication
- Dashboard with statistics
- Search functionality
- Pagination for performance

### API
- RESTful endpoints
- JSON responses
- Authentication required for writes
- Search and filtering support

## Testing

Run the test suite:
```bash
python manage.py test
```

## Deployment

### For Production:

1. **Set environment variables** (see .env example above)
2. **Use PostgreSQL** instead of SQLite
3. **Configure static/media file serving**
4. **Set up proper email backend**
5. **Enable HTTPS**
6. **Configure ALLOWED_HOSTS**

### Sample production settings:
```bash
DEBUG=False
SECRET_KEY=your-secure-secret-key
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
DATABASE_URL=postgresql://user:password@host:port/database
```

## Technologies Used

- **Backend:** Django 6.0.4, Django REST Framework
- **Database:** SQLite (dev) / PostgreSQL (prod)
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Email:** SMTP integration
- **Authentication:** Django auth system

## Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests for new features
4. Ensure all tests pass
5. Submit a pull request

## License

This project is open source and available under the MIT License.