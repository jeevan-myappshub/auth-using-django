# auth-using-django

A simple authentication API built with Django and Django REST Framework, using a custom user model with JWT-based authentication.

## Features

- User registration with hashed passwords
- User login with JWT token issuance (stored in HTTP-only cookies)
- User profile endpoint (requires authentication)
- User logout (JWT cookie deletion)
- Custom user model using email as the unique identifier
- CORS enabled for API access from different origins

## Project Structure

```
auth-using-django/
│
├── auth/
│   ├── manage.py
│   ├── requirements.txt
│   ├── db.sqlite3
│   ├── auth/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   ├── asgi.py
│   ├── users/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── apps.py
│   │   ├── admin.py
│   │   ├── tests.py
│   │   └── migrations/
│   └── ...
└── README.md
```

## Setup Instructions

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd auth-using-django/auth
```

### 2. Create and activate a virtual environment

```sh
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

### 3. Install dependencies

```sh
pip install -r requirements.txt
```

### 4. Configure the database

- By default, the project is set up for MySQL. Update the database settings in [`auth/auth/settings.py`](auth/auth/settings.py) as needed.
- For SQLite (for testing), change the `DATABASES` setting to:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

### 5. Apply migrations

```sh
python manage.py makemigrations
python manage.py migrate
```

### 6. Create a superuser (optional, for admin access)

```sh
python manage.py createsuperuser
```

### 7. Run the development server

```sh
python manage.py runserver
```

## API Endpoints

All endpoints are prefixed with `/api/`.

| Method | Endpoint      | Description            | Auth Required |
|--------|--------------|------------------------|--------------|
| POST   | /api/register | Register a new user    | No           |
| POST   | /api/login    | Login and get JWT      | No           |
| GET    | /api/user     | Get current user info  | Yes (JWT)    |
| POST   | /api/logout   | Logout (delete JWT)    | Yes (JWT)    |

### Example Request/Response

#### Register

```http
POST /api/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

#### Login

```http
POST /api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

Response (sets `jwt` cookie):

```json
{
  "jwt": "<token>"
}
```

#### Get User

```http
GET /api/user
Cookie: jwt=<token>
```

Response:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### Logout

```http
POST /api/logout
Cookie: jwt=<token>
```

Response:

```json
{
  "message": "success"
}
```

## Custom User Model

The project uses a custom user model [`users.User`](auth/users/models.py) with email as the unique identifier. Update `AUTH_USER_MODEL` in [`auth/auth/settings.py`](auth/auth/settings.py) accordingly.

## Security Notes

- The JWT secret is hardcoded as `'secret'` in [`users/views.py`](auth/users/views.py). Change this to a secure value and move it to environment variables for production.
- CORS is enabled for all origins for development. Restrict this in production.
- Do not use `DEBUG = True` in production.

## License

MIT License

---

**Author:** Jeevan Kumar Sugali