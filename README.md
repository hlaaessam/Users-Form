## [User Form](user-form-wheat.vercel.app)


## Overview
This project contains a simple user form with two pages: one for new users to sign up and another for existing users to sign in. The goal is to provide a clean and user-friendly interface for basic user authentication.


<p align="left"><b>Check our Demo</b></p>

<table align="left">
        <thead>
            <tr>
                <th><a href="https://drive.google.com/file/d/1Zs5XgHgPQK2p6nXpWqAVPgcJ1qHonGgm/view?usp=drive_link">Demo</a></th>
            </tr>
        </thead>
        <tbody>	
          <tr>
		  <th></th>
	  </tr>
        </tbody>
    </table>

<br><br>

## Pages

### 1. Sign Up Page
This page allows new users to create an account by filling out a registration form.

#### Fields:
- **Full Name**
- **Email Address**
- **Password**

#### Features:
- Validation for required fields (e.g., valid email format, password strength).
- Password confirmation check (ensures the password matches the confirm password).
- A "Sign Up" button to submit the form.
- Link to the Sign In page (e.g., "Already have an account? Sign In").

### 2. Sign In Page
This page allows registered users to log in to their accounts.

#### Fields:
- **Email Address**
- **Password**

#### Features:
- Validation for required fields.
- A "Sign In" button to submit the form.
- Link to the Sign Up page (e.g., "Don’t have an account? Sign Up").
- Option to reset the password (e.g., "Forgot Password?").

## Design Considerations
- **Validation Feedback**: Provides visual feedback for form validation errors (e.g., highlighting invalid fields).4
  
<br>
<hr><br>


<h2>Project Setup Instructions</h2>

Follow these steps to get the project running on your local machine.

## Prerequisites

Before you begin, ensure that the following software is installed on your system:

- [Node.js](https://nodejs.org/en/) (If not installed, download and install it from the official website.)

## Installation Guide

1. **Clone the repository** or download the project folder to your local machine.

2. **Open the Project in Visual Studio Code**

   - Open **Visual Studio Code**.
   - Navigate to **File > Open Folder** and choose the project directory:  
     `your-project-name`.

3. **Open the Terminal**

   - In Visual Studio Code, open the integrated terminal by selecting **Terminal > New Terminal**.
   - Make sure the terminal is opened inside the project directory. If not, change the directory to the project folder using:
     ```bash
     cd your-project-name
     ```

4. **Install Project Dependencies**

   - Run the following command in the terminal to install the required dependencies:
     ```bash
     npm install
     ```

5. **Install JSON Server Globally**

   - Install JSON Server globally on your machine with the following command:
     ```bash
     npm install -g json-server@0.17.4
     ```

6. **Run JSON Server**

   - To start the JSON server and watch changes in `db.json`, run:
     ```bash
     json-server --watch db.json
     ```

7. **Run the Project**

   - After setting up everything, you can start the development server using:
     ```bash
     npm run dev
     ```

This will start the project in development mode.

---

### Technologies
- Html
- CSS
- JavaScript


### Platform and Libraries
- React
- Tailwind
- axios
- json Server

<hr font-size=1>

