# Project

This project serves as a comprehensive template for developing full-stack applications using a modern tech stack. It includes a frontend built with React, Pico CSS for styling, and Apollo Client for state management and GraphQL operations. The backend is powered by Node.js, Express for routing, Prisma as an ORM, Apollo Server for handling GraphQL requests, and PostgreSQL for data persistence. Testing is facilitated by Jest and React Testing Library. The entire application is containerized using Docker for ease of deployment. The project structure is well-organized into separate directories for frontend and backend, each with its own Dockerfile and package.json. This template provides a solid starting point for building scalable, testable, and deployable web applications.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [With Docker](#with-docker)
- [Running Tests](#running-tests)
- [Ports](#ports)
- [Environment Variables](#environment-variables)

## Project Structure

```
.
├── backend
│   ├── src
│   │   ├── resolvers
│   │   ├── prisma
│   │   ├── __tests__
│   ├── package.json
│   ├── Dockerfile
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   ├── package.json
│   ├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Technologies Used

- **Frontend:**
  - React
  - Pico CSS
  - Apollo Client

- **Backend:**
  - Node.js
  - Express
  - Prisma
  - Apollo Server
  - PostgreSQL

- **Testing:**
  - Jest
  - React Testing Library

- **Deployment:**
  - Docker

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your machine.
- Node.js and npm (for local development).

### Installation

Clone the repository:

```bash
git clone https://github.com/beingforthebenefit/project-template.git
cd project-template
```

## Running the Application

### With Docker

Build and start the Docker containers:

```bash
docker-compose up --build
```

This command will build the Docker images and start the containers for the frontend, backend, and PostgreSQL database.

Access the application:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:4000/graphql](http://localhost:4000/graphql)

## Running Tests

To run tests for the frontend and backend, use the following commands:

- **Frontend Tests:**
  ```bash
  cd frontend
  npm run test
  ```

- **Backend Tests:**
  ```bash
  cd backend
  npm run test
  ```

## Ports

- **Frontend:** `3000`
- **Backend:** `4000`
- **Database:** `5432`

## Environment Variables

Create a `.env` file in the root of the `backend` directory with the following content:

```env
DATABASE_URL=postgresql://eventhub_user:password@db:5432/eventhub?schema=public
SECRET=your_jwt_secret
```

Make sure to replace `your_jwt_secret` with a secure secret for JWT.
