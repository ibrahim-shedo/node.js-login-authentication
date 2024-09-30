# Login Authentication Project

Welcome to the Login Authentication project! This project is built using EJS for frontend templating, Tailwind CSS for styling, Node.js with Express for the backend, and MongoDB for the database.

## Overview
This project aims to provide a simple and secure login authentication system. Users can register for an account, log in, and log out securely.

## Features
- **User registration**: Users can sign up for an account with a unique username and password.
- **User authentication**: Registered users can log in securely using their credentials.
- **Session management**: Sessions are maintained to keep users authenticated across multiple requests.
- **Password hashing**: Passwords are securely hashed before being stored in the database for enhanced security.
- **Database**: MongoDB is used as the database to store user information securely.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd login-authentication-project
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and configure the following environment variables:

    ```makefile
    PORT=3000
    SESSION_SECRET=your_session_secret
    MONGODB_URI=your_mongodb_uri
    ```

   Replace `your_mongodb_uri` with your MongoDB connection string.

5. Start the server:

    ```bash
    npm start
    ```

6. Visit [http://localhost:3000](http://localhost:3000) in your web browser to access the application.

## Dependencies
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **EJS**: Embedded JavaScript templating for generating dynamic HTML pages.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **bcrypt.js**: Library for hashing passwords before storing in the database.
- **Express-session**: Session middleware for Express to manage sessions.
- **Connect-flash**: Flash messages for Express to display notifications.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.

## File Structure
- **`app.js`**: Main entry point of the application.
- **`routes/`**: Contains route handlers for different endpoints.
- **`views/`**: Contains EJS templates for rendering HTML pages.
- **`public/`**: Contains static assets such as CSS files, images, and client-side JavaScript.
- **`models/`**: Contains database models for user authentication.
- **`controllers/`**: Contains controllers for handling business logic.
- **`middlewares/`**: Contains custom middleware functions.

## Usage
1. Navigate to [http://localhost:3000/register](http://localhost:3000/register) to create a new account.
2. After registration, you can log in at [http://localhost:3000/login](http://localhost:3000/login).
3. Once logged in, you will be redirected to the home page.
4. You can log out by clicking on the logout button.

## Contributing
Contributions are welcome! Feel free to submit pull requests or open issues if you encounter any problems or have suggestions for improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
Special thanks to the creators and maintainers of EJS, Tailwind CSS, Node.js, Express, MongoDB, and other dependencies used in this project.
