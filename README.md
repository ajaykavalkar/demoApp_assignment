# DemoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Process and Architecture

This project has three component as 
- home-page with job search & register button
- register
- edit-profile

registration form has validation for required fields (first name), image upload with size restriction - 310 x 325 px.

## Development server

Initially install node_modules packages with `npm install` (for Ubuntu `sudo npm install`).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

if Run on Ubuntu then  serve as `sudo ng serve`.

## JSON-SERVER

For data mocking [json-server](https://www.npmjs.com/package/json-server) is used.

Initially install json-server using `npm install -g json-server`.

for Run mock database run command as `json-server db.json --watch`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
