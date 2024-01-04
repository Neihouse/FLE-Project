
# API Documentation for Lead Management System

## Authentication

### POST /api/auth/register
Registers a new user.
- **Parameters**
  - `username`: String, required
  - `email`: String, required
  - `password`: String, required

### POST /api/auth/login
Authenticates a user and returns a token.
- **Parameters**
  - `email`: String, required
  - `password`: String, required

## Leads

### GET /api/leads
Retrieves a list of leads.
- **Query Parameters**
  - `skip`: Number, optional
  - `limit`: Number, optional

### POST /api/leads
Creates a new lead.
- **Body**
  - `name`: String, required
  - `email`: String, required
  - `phone`: String, required

### DELETE /api/leads/:id
Deletes a lead by ID.
- **URL Parameters**
  - `id`: String, required

## Error Handling
All endpoints return appropriate HTTP status codes along with error messages in case of failure.

## Security
Endpoints requiring authentication expect a valid JWT token to be provided in the `Authorization` header.

