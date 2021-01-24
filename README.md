# FrontendQuiz

Below is the behaviour of the application:
1.	The home page lists out each quiz with its respective name and description. User can choose to start any quiz from the page.
2.	The quiz questions are shown one after the other. The next question gets displayed automatically either when the user selects an option or when the time limit expires for a question.
3.	The final page shows the score obtained in the quiz, along with correct answers. User is given the choice to go back to the home page and attempt any quiz.

Angular features used:
- Custom pad-start pipe to transform the timer display
- Custom progress bar attribute directive that helps indicate the number of questions navigated through the quiz
- A mock module that provides an http interceptor which handles the fetching of mock data (ref: https://firstclassjs.com/mock-fake-backend-api-in-angular-how-to/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

Run `npm run start:mock` to execute the script command `ng serve --c=mock` for the dev server to use mock environment.
