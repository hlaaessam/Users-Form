<h1 text-center> Users Form</h1>

<h3>Project Setup Instructions</h3>

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


