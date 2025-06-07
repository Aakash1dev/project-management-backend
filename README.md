# project-management-backend
Build Authentication & Settings API
This repository contains the backend API for project management platform. The API provides user authentication, manages user preferences, and offers dummy data for dashboard summaries

## Features Implemented

### User Authentication System
* **`POST /api/register`**: Allows new users to create an account with `name`, `email`, and `password`.
* **`POST /api/login`**: Authenticates an existing user and returns a JSON Web Token (JWT) for subsequent authenticated requests.
* **`GET /api/profile`**: (Protected) Retrieves the details of the authenticated user.

### Preferences API
* **`POST /api/preferences`**: (Protected) Saves or updates user-specific preferences (e.g., `theme`, `dashboardLayout`). Data is linked to the authenticated user's ID.
* **`GET /api/preferences`**: (Protected) Returns the saved preferences for the authenticated user.

## Tech Stack Used

* **Node.js**: JavaScript runtime environment.
* **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
* **MongoDB**: NoSQL document database for data storage.
* **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js, providing schema validation and easy interaction with the database.
* **jsonwebtoken (JWT)**: Used for secure, stateless user authentication.
* **bcrypt.js**: For hashing and salting passwords, ensuring secure storage of user credentials.
* **dotenv**: To manage environment variables (e.g., database URI, JWT secret) securely.
* **Joi**: For robust input validation on incoming API requests, ensuring data integrity and security.

## Folder Structure

├── config/                  # Database connection setup
│   └── db.js
├── controllers/             # Business logic for API endpoints
│   ├── authController.js
│   ├── preferencesController.js
├── middleware/              # Express middleware (e.g., authentication, validation)
│   ├── authMiddleware.js
│   └── validate.js
├── models/                  # Mongoose schemas and models for data structure
│   ├── Preferences.js
│   └── User.js
├── routes/                  # API endpoint definitions
│   ├── auth.js
│   ├── preferences.js
├── utils/                   # Utility functions (e.g., JWT token generation)
│   └── generateToken.js
├── validators/              # Joi schemas for input validation
│   ├── userValidator.js
│   ├── preferencesValidator.js
├── .env.example             # Example .env file (DO NOT COMMIT ACTUAL .env)
├── .gitignore               # Files/folders to ignore in Git
├── package.json             # Project dependencies and scripts
├── server.js                # Main server entry point
