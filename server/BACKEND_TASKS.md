# Backend Tasks

The backend is stored in the `/server` folder

> Note: A route has already been setup for you! In `server.js`, a `/user` route has already been created.

## Preparation

Before writing our code, we should install our dependencies

From the `root` (/) of the project, in the terminal, type:

- `cd server`
- `npm i`

This will automatically install the following packages:
- express
- mongoose
- dotenv

To run the backend at any time, you can use the following command

- `node server.js`

##### If you have nodemon installed

- `nodemon server.js`

## Task 1 - Setting up our database

Since we are going to populate the database with our own data, we are going to need to set it up manually (rather than relying on MongoDB to automatically create it for us)

Using either the MongoDB Atlas Dashboard, or the MongoDB Compass desktop client:

1. Create a new database called `"fullstack-reset-password"`

2. Create a collection called `users`

3. Now we have our database and collection setup, we can import our sample data. Import the file `MOCK_DATA.json` into your `users` collection

> Note: If you review the data in the `MOCK_DATA.json` file, you will notice that none of the users have passwords. Instead, we will build an application to update each user with a new password.

## Task 2 - Write a .env file

> Note: For this assignment, we already assume you have a MongoDB server, and know how to access your credentials.

1. Create a file in your root folder called `.env`. This file will contain all the connection information for accessing your database.

2. Copy and paste the text in the file `.env.example`, into your `.env` file

3. For the key `DB_NAME`, refer to the database you created in Task 1 **fullstack-reset-password**

4. For the other keys, fill in the details as provided to you by your MongoDB service.
    - DB_HOST=
    - DB_USER=
    - DB_PASS=

## Task 3 - Creating your schema

Analyse the data in the now updated collection **users**

1. In the `/models/User.js` file, finish writing the schema based on the data present in the **users** collection.
   
The rest has already been done for you!

## Task 4 - Setting up the endpoints

Open the file `/routes/user.js`. We will create 3 endpoints here.

Instead of writing the handlers directly in this file, we will import them from the `/controllers` folder and assign them as the handler to each endpoint

1. Create 3 endpoints, `check-username` (GET) and `reset-password` (PUT) and `login` (POST)

2. Import the controllers from `/controllers/userControllers` and assign them to their respective endpoint

## Task 5 - Writing the checkUsername controller

For this controller, we can assume the client will send the `username` as a request parameter

Open the file `/controllers/user.js`

1. Import the `User` model

2. Setup the `checkUsername` controller so that it receives a parameter from the client
   
3. Search the `User` model for the parameter. If a user is found, send a `200` response to the client, otherwise send a `404` response.

## Task 6 - Install and import bcrypt

1. Install the `bcrypt` npm package

2. Import the `bcrypt` package into `/controllers/userControllers`

## Task 7 - Writing the resetPassword controller

For this controller, we can assume the client will send their username and their new password as part of the request body

1. Find the user by their username from the `User` model

2. Use the `bcrypt.hash()` method to create a new hash of the password supplied by the client

3. Update the user with the hashed password, and change the field `reset_password` from `true` to `false`

4. If updating the password was successful, send a `200` status code to the client, otherwise send a `500` error code

## Task 8 - Writing the login controller

For this controller, we can assume the client will send their username and their password as part of the request body

1. Find the user by their username from the `User` model

2. If the field `reset_password` is set to `true`, redirect the user to the `/reset-password` page

3. Otherwise use the `bcrypt.compare()` method to check that the supplied password, when hashed matches the hashed password in the database

4. If the result of this is `true`, send a status code of `200` to the client. Otherwise send `500`

## Task 9 - Running and testing our API

Now everything is setup, test your API with a testing tool such as Postman or Insomnia, (or any other tool).

Validate that the results you receive are what you would expect. You can check which are valid usernames by looking through your `users` collection

Now move onto the [frontend tasks](../client/FRONTEND_TASKS.md) 🥳
