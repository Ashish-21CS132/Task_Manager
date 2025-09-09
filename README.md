# MERN Task Manager

A Task_Manager MERN App
# Home Page 
<img width="1896" height="950" alt="Home_page_t" src="https://github.com/user-attachments/assets/a3656998-3145-4097-95b3-80b23e4cc801" />

# Sign Up Page
<img width="1873" height="879" alt="sign_up_t" src="https://github.com/user-attachments/assets/0ff740ea-74c9-4716-ac2e-6262937bbf3c" />

# Login Page
<img width="1910" height="879" alt="login_page_t" src="https://github.com/user-attachments/assets/e38cadf9-da18-436f-8ad8-187da91977da" />

# Task Page
<img width="1887" height="868" alt="add_task_t" src="https://github.com/user-attachments/assets/0beb8987-3cbe-4b8d-8946-8006bf43fc03" />

# Add Task
<img width="1889" height="879" alt="add_taskpage_t" src="https://github.com/user-attachments/assets/16506fa6-f2ac-48d9-8c09-0305c43d6db0" />


## Installation and Setup

1. Install all the dependencies

   ```sh
   npm run install-all
   ```

2. Create a file named ".env" inside the backend folder. Add MONGODB_URL AND ACCESS_TOKEN.

3. Start the application

   ```sh
   npm run dev
   ```

4. Go to http://localhost:3000

## Backend API

<pre>
- POST     /api/auth/signup
- POST     /api/auth/login
- GET      /api/tasks
- GET      /api/tasks/:taskId
- POST     /api/tasks
- PUT      /api/tasks/:taskId
- DELETE   /api/tasks/:taskId
- GET      /api/profile
</pre>

## Frontend pages

<pre>
- /                 Home Screen (Public home page for guests and private dashboard (tasks) for logged-in users)
- /signup           Signup page
- /login            Login page
- /tasks/add        Add new task
- /tasks/:taskId    Edit a task
</pre>

## npm scripts

At root:

- `npm run dev`: Starts both backend and frontend
- `npm run dev-server`: Starts only backend
- `npm run dev-client`: Starts only frontend
- `npm run install-all`: Installs all dependencies and dev-dependencies required at root, at frontend and at backend.

Inside frontend folder:

- `npm start`: Starts frontend in development mode
- `npm run build`: Builds the frontend for production to the build folder
- `npm test`: Launches the test runner in the interactive watch mode
- `npm run eject`: This will remove the single build dependency from the frontend.

Inside backend folder:

- `npm run dev`: Starts backend using nodemon.
- `npm start`: Starts backend without nodemon.

