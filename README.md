# Interview Scheduler

Scheduler is a single-page app built with React, Webpack, Babel, Axios, and Webpack Dev Server. I used Storybook, Jest, and Cypress for testing and development. This app allows you to schedule, edit, and delete appointments.


## APP Demo

### Creating an appointment

!["Creating an appointment"](https://github.com/AliHashemi86/scheduler/blob/master/docs/Create%20an%20appointment.gif)


### Editing an appointment

!["Editing an appointment"](https://github.com/AliHashemi86/scheduler/blob/master/docs/Edit%20an%20appointment.gif)


### Deleting an appointment

!["Deleting an appointment"](https://github.com/AliHashemi86/scheduler/blob/master/docs/Delete%20an%20appointment.gif)


## Get Started

- Fork and clone this repository.
- Install dependencies with npm install.
- Start the web server with npm start. The app will be served at http://localhost:8000/.
- Both servers run concurrently; requests are proxied from the Webpack development server to the API server.
- Visit http://localhost:8000/ in your browser.
- Select a day of the week and add your appointment where a time slot is available.
- You can edit or delete existing appointments.



## Dependencies

- axios: "^0.26.0"
- classnames: "^2.2.6"
- normalize.css: "^8.0.1"
- react: "^16.9.0"
- react-dom: "^16.9.0"
- react-scripts: "3.0.0"



## Dev-Dependencies

- "@babel/core: "^7.4.3"
- @storybook/addon-actions: "^5.0.10"
- @storybook/addon-backgrounds: "^5.0.10"
- @storybook/addon-links: "^5.0.10"
- @storybook/addons: "^5.0.10"
- @storybook/react: "^5.0.10"
- @testing-library/jest-dom: "^4.0.0"
- @testing-library/react: "^8.0.7"
- @testing-library/react-hooks: "^7.0.2"
- babel-loader: "^8.0.5"
- cypress: "^9.5.1"
- node-sass: "^4.14.0"
- prop-types: "^15.8.1"
- react-test-renderer: "^16.9.0"


## Install dependencies

 `npm install`

## Running Webpack Development Server

`npm start`

## Running Jest Test Framework

`npm test`

## Running Storybook Visual Testbed

`npm run storybook`
