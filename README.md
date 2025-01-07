# Todo App

## 1. Introduction

The Todo app helps users list, edit, manage, and delete tasks they need to complete. It is part of the third challenge of the CompassUol scholarship program focused on cross-platform mobile development using React Native.

## 2. Features

### Login Screen
- Input fields for username and password.
- Password visibility toggle button.
- Automatic alert if the entered data is incorrect.
- Login button authenticates valid users, so they don't need to repeat the process every time they open the app.

### Home Screen
- Logout button to allow users to disconnect from their account and log in with another one.
- Search bar to find tasks, whether completed or not.
- Tabs to toggle between "completed tasks" and "all tasks," giving users better control over what they've done and what remains.
- A dynamic task area that displays loading state, loaded data, or an empty state when no data is available.
- Task area lists incomplete tasks first, followed by completed ones.
- Task cards allow users to:
  - Mark or unmark a task as completed.
  - Delete a task.
  - Edit a task starting from the existing content.
- Create button to add a new task.

## 3. Installation

To install dependencies, use `npm install` or `yarn install` to gain access to all the resources required by the app.

## 4. How to Use

When you open the app, you'll see the login screen where you can use the username **"admin"** and the password **"password"** to authenticate. Once logged in, you won't need to log in again unless you log out from the home screen.

On the home screen, after the data has loaded, you can:
- Create a new task.
- View listed tasks.
- Search for tasks.
- Mark tasks as completed.
- Remove or edit tasks.

The choice is entirely yours! After navigating the app, you can log out by pressing the logout button or simply close the app. When you reopen it, your data will be reloaded from where you left off.

## 5. Technologies Used

- React Native with TypeScript and the following libraries:
  - Axios
  - React Navigation
  - React SVG
  - Splashscreen
  - React Fonts
  - styled-components