# Polling System API

<h4>This is an API-based polling system implemented in Node.js and mongoDB. The system allows users to create questions, add options to questions, and vote for their preferred options.</h4>

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Local Setup](#local-setup)
- [API Endpoints](#api-endpoints)

## Features

* Create a question with options.
* Add options to an existing question.
* Vote for an option of a question.
* Delete a question (optional: If none of its options have votes).
* Delete an option (optional: If it has no votes).
* View a question with its options and votes

## Folder Structure

The project follows a scalable folder structure to separate models, controllers, and routes. Here's an overview of the folders and their contents:

- /models: Contains the data models representing the schema of questions and options.
- /controllers: Handles business logic and data manipulation for each API endpoint.
- /routes: Defines the routes for various API endpoints.
- /config: Configuration files for the database, server, or any other settings.

## Local Setup

1. Clone the Git Repository:

   ```bash
   git clone https://github.com/pranav9708/polling_API.git

2. Install Dependencies:
    ```bash
    cd polling-system-api
    npm install

3. Configure Database:

    Open the /config/db.js file and set up your database connection details according to the database system you are using (e.g., MongoDB, PostgreSQL, MySQL).

4. To start the API server, run the following command:
    ```bash
    npm start

## API Endpoints

* POST /questions/create: Create a new question.
* POST /questions/:id/options/create: Add options to an existing question.
* POST /options/:id/add_vote: Increment the vote count for a specific option.
* GET /questions/:id: View a question and its options.
* DELETE /questions/:id: Delete a question (optional: If none of its options have votes).
* DELETE /options/:id: Delete an option (optional: If it has no votes).