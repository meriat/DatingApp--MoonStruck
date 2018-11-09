# Moonstruck

#### By Connor McCarthy, David Zhu, Meria Thomas, Derek Smith

This project was generated with [Angular CLI] version 1.0.0.

## Description
Moonstruck is a dating app that let's a user see a list of people that are similar to them in taste by taking a survey.

## Setup/Installation Requirements

- Clone this repository from https://github.com/Connor85/DatingApp.git

- Navigate to the "DatingApp" folder in your terminal and run "npm install" to install necessary plugins.

## API Key for Firebase:

Create a file in src/app/api-keys.ts
Insert code:

export const masterFirebaseConfig = { apiKey: "xxx", authDomain: "angulargroupweek.firebaseapp.com", databaseURL: "xxx", projectId: "xxx", };

Replace xxx with firebase apikey data

## Specification
- The application lets a user to sign up via email and password.
- The application allows the user to log in with the email and password to their account
- Once logged in, the user can take a survey test that will assign them with a trait color.
- User can go back to their account and see their matches with the same color and other matches.
- The application lets user chat with other people which is (still in progress).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Known bugs
- The application won't showcase the chat feature.
- The application wont list out the user's with the same color from the database yet.

## Technologies Used

- TypeScript
- HTML & CSS
- Bootstrap & Animate.css
- Angular 5
- Firebase
