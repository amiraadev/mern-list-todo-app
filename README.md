# mern-list-todo-app

This is a simple MERN (MongoDB, Express, React, Node.js) to-do app that allows users to manage their tasks.
## Live preview
https://mern-list-todo-app.onrender.com/
## Features

- User can view a list of tasks
- User can add a new task
- User can mark a task as complete
- User can delete a task

## Folder Structure

The project is organized into two main folders:

- `api`: Contains the backend code written in Node.js using Express framework.
- `client`: Contains the frontend code written in React.

## Installation

To run the app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/mern-todo-app.git`
2. Navigate to the `api` folder: `cd mern-todo-app/api`
3. Install the dependencies: `npm install`
4. In the `api` folder, create a `.env` file.
5. Add the following environment variable to the `.env` file: PORT, MONGO_DB_URI.
6. Replace `your_mongodb_uri` with your MongoDB connection URI
7. Start the backend server: `npm start`
8. Open a new terminal window and navigate to the `client` folder: `cd ../client`
9. Install the dependencies: `npm install`
10. Start the frontend development server: `npm start`

The app should now be running on `http://localhost:3000`.

## Technologies Used

- MongoDB: Database to store the tasks
- Express: Backend web framework for Node.js
- React: Frontend JavaScript library for building user interfaces
- Node.js: JavaScript runtime environment


