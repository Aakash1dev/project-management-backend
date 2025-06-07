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

## Setup Instructions

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* **Node.js**: Make sure you have Node.js (v14 or higher recommended) and npm installed.
* **MongoDB**: Have a MongoDB instance running locally, or access to a cloud-based MongoDB (e.g., MongoDB Atlas).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    cd YOUR_REPO_NAME
    ```
    (Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details)

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file:**
    Create a file named `.env` in the root of the project.
    **Important:** This file should NOT be committed to version control.
    ```
    # .env
    MONGO_URI=mongodb://localhost:27017/project_management_db # Or your MongoDB Atlas URI
    JWT_SECRET=aVeryStrongAndLongRandomSecretKeyForJWT
    PORT=5000
    ```
    * Replace `YOUR_MONGODB_URI` with your actual MongoDB connection string.
    * Replace `aVeryStrongAndLongRandomSecretKeyForJWT` with a truly random, long string for security.

4.  **Start the server:**
    ```bash
    node server.js
    ```
    The server should start on the port specified in your `.env` file (default: `5000`). You should see messages like "MongoDB Connected..." and "Server running on port 5000" in your terminal.

