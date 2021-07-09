# Frontend Tasks

The frontend is stored in the `/client` folder

## Preparation

Before writing our code, we should install our dependencies

From the `root` (/) of the project, in the terminal, type:

    - `cd client`
    - `npm i`

To run the frontend at any time, you can use the following command

    - `npm start`

## Task 1 - Read the code in your frontend application

Spend some time familiarising yourself with the frontend code in the `/client` folder

- `App.js` - is the root of our application. Uses the package `react-router-dom` to handle frontend routing
- `/components` - contains all the components for our application
- `/components/ResetPassword` - contains the files for the `ResetPassword` component
- `/components/ResetPassword/index.js` - the root of the `ResetPassword` component

> You will also notice CSS files with the name `module`, for example `index.module.css`
>
> These are CSS modules. The content can be treated as an object when imported.
>
> You can read more about CSS modules [here](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

## Task 2 - Installing react-router-dom

We will want to use routing to allow the application to load different components, based on the routes used in the URL

> Note: `react-router-dom` is designed specifically for browsers

1. Install the `react-router-dom` npm package

> Hint: Make sure you are in the `/client` folder when you install this!

## Task 3 - Using react-router-dom

1. Inside `App.js`, import the following objects from `react-router-dom`: `BrowserRouter, Route, Switch`

2. Import the `ResetPassword` component

2. Use these React elements to create a path for `/reset-password`, so that it directs to the `ResetPassword` component

If you run the frontend server, you should see the header text from the `ResetPassword` component

## Task 4 - Creating a login page

Create a new component `Login`.

1. Add a form which takes the user's username and password

2. Add a handler to the form, so that when submitted the form contacts the `/login` endpoint you created in your backend. If the endpoint returns with a `200` status code, we can assume the user correctly logged in.

3. Import and add the `Login` component to the `App.js` file so that any URL with the path `/login` will be directed to this component

## Task 5 - Setting up state in the ResetPassword component

Open the file `/components/ResetPassword/index.js`

Create 3 new state variables, using appropriate names where necessary and using the `useState` hook:

1. the username the client has supplied (string)
   
2. the password the client has supplied (string)
   
3. if the username supplied by the client is valid or not (boolean)

## Task 6 - Updating our password state

Modify the `input` field for the `password`, so that when the `onChange` event is triggered, it updates its respective state (which you created in Task 4.1)

## Task 7 - Updating our username state

1. Create a handler function which handles changes from the `user_name` field. This handler function will be triggered by the `onChange` event. This handler function should do the following:
    - updates its respective state (which you created in Task 4.2)
    - calls the `/check-username` endpoint you created in the backend
    - listens to the response of the `/check-username` endpoint you created. If the response is a `200` the boolean state you created in Task 4.3 should be `true`, otherwise it should be `false`
    
## Task 8 - Disabling and enabling the password field

If we look at the update password `button`, it is currently set to `disabled="disabled"`.

1. Change this attribute to use a condition, so if the state you created in Task 4.3 is `false`, the button is disabled. If it is `true`, the button should not be disabled.

## Task 9 - Add a handler to the Update Password button

We want to make it so that clicking on the button creates an action

1. Write a handler function for the Update Password button. This handler should contact the `/reset-password` endpoint you created in your backend

2. If the response from the client is `200`, you can redirect the user to the `/login` page, otherwise, reset the form so that the user can try again