# Project Title (Replace with actual title)

This project is a personal finance dashboard built with React, TypeScript, Vite, and Firebase.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

## Firebase Setup

This project requires a Firebase project to handle authentication and database services.

1.  Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
2.  In your project's settings, add a new Web App.
3.  Copy the `firebaseConfig` object provided by Firebase.
4.  Rename `src/firebaseConfig.ts.example` to `src/firebaseConfig.ts` (or create the file if it doesn't exist).
5.  Replace the placeholder configuration in `src/firebaseConfig.ts` with your actual Firebase project configuration.

## Running the Development Server

To run the application in development mode, use the following command. This will start the Vite development server.

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## Linting and Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting.

To check for issues and apply automatic fixes, run:
```bash
npm run check
```
