
# API Documentation for FLE Project

## Authentication Endpoints

### Register
- **URL:** `/api/register`
- **Method:** `POST`
- **Body:**
  - `username`: String (required)
  - `email`: String (required)
  - `password`: String (required)
- **Success Response:**
  - **Code:** 201
  - **Content:** `{ message: 'User registered successfully' }`

### Login
- **URL:** `/api/login`
- **Method:** `POST`
- **Body:**
  - `username`: String (required)
  - `password`: String (required)
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ message: 'User logged in successfully', token: 'JWT_TOKEN' }`

## Lead Management Endpoints

### Create Lead
- **URL:** `/api/leads`
- **Method:** `POST`
- **Body:**
  - `facebookLeadId`: String (required)
  - `name`: String (required)
  - `email`: String (required)
  - `phone`: String (required)
- **Success Response:**
  - **Code:** 201
  - **Content:** `{ lead: LEAD_OBJECT }`

### Get Leads
- **URL:** `/api/leads`
- **Method:** `GET`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ leads: [LEAD_OBJECTS] }`

### Update Lead
- **URL:** `/api/leads/:id`
- **Method:** `PUT`
- **Body:**
  - `name`: String (optional)
  - `email`: String (optional)
  - `phone`: String (optional)
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ lead: UPDATED_LEAD_OBJECT }`

### Delete Lead
- **URL:** `/api/leads/:id`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** 200
  - **Content:** `{ message: 'Lead deleted successfully' }`

## Setup Procedures

- Clone the repository: `git clone https://github.com/Neihouse/FLE-Project.git`
- Install dependencies: `npm install`
- Start the server: `npm start`
- Run tests: `npm test`
