# TechBridge Task 7

A small Express-based web app that serves the TechBridge internship experience and exposes task data through a simple JSON API.

## Project overview

This project includes:
- A static frontend in the `public/` folder
- A Node.js/Express server in `server.js`
- Structured task content in `tasks.json`
- Task tracks for:
  - `data-analytics`
  - `web-development`

## Features

- Serves the public landing pages and dashboard experience
- Exposes task data via the `/api/tasks` endpoint
- Supports filtering by track using the `track` query parameter
- Allows easy local development with a single Node.js server

## Tech stack

- Node.js
- Express
- HTML/CSS/JavaScript frontend assets

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm start
   ```

3. Open the app in your browser:

   ```text
   http://localhost:3000
   ```

## API

### Get all tasks

```bash
http://localhost:3000/api/tasks
```

### Get tasks for a specific track

```bash
http://localhost:3000/api/tasks?track=web-development
```

```bash
http://localhost:3000/api/tasks?track=data-analytics
```

## Project structure

```text
.
├── public/           # Static frontend files
├── server.js         # Express server setup and API routes
├── tasks.json        # Curriculum task data
├── package.json     # Project scripts and dependencies
├── package-lock.json
├── .gitignore
└── README.md
```

## Notes

- The app is configured to serve static files automatically from the `public` directory.
- CORS is enabled for API requests from frontend pages.
- The JSON tasks are organized by track, making it easy to extend with new learning paths.
