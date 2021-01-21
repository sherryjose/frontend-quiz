# FrontendQuiz

Below is the behaviour of the application:
1.	The home page lists out each quiz with its respective name and description. User can choose to start any quiz from the page.
2.	The quiz questions are shown one after the other. The next question gets displayed automatically either when the user selects an option or when the time limit of 15 seconds expires for a question.
3.	The final page shows the score obtained in the quiz, along with correct answers. User is given the choice to go back to the home page and attempt any quiz.

Angular features used:
- Custom pad-start pipe to transform the timer display
- Custom progress bar attribute directive that helps indicate the number of questions navigated through the quiz
- A mock module that provides an http interceptor which handles the fetching of mock data (ref: https://firstclassjs.com/mock-fake-backend-api-in-angular-how-to/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
