# Washmen


Washmen Angular Full Stack is a project written with angular as a front end and Nodejs as a backend. Whole stack is in TypeScript, from frontend to backend, giving you the advantage to code in one single language throughout the all stack.


Other tools and technologies used:
* [Angular CLI](https://cli.angular.io): frontend scaffolding
* [Bootstrap](http://www.getbootstrap.com): layout and styles
* [Font Awesome](http://fontawesome.com): icons

## Prerequisites
1. Install [Node.js]
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run
### Development mode with files watching
`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute Angular build, TypeScript compiler and Express server.

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

### Production mode
`npm run prod`: run the project with a production bundle listening at [localhost:3000](http://localhost:3000) 

### Manual mode
1. Build frontend: `npm run builddev` for dev or `npm run build` for prod
2. Build backend: `npm run predev`
3. Run the app: `npm start`

### Docker
1. `sudo docker-compose up`
2. Go to [localhost:3000](http://localhost:3000)


## Running tests
Run `ng test` to execute the frontend unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Run `npm run testbe` to execute the backend tests via [Mocha](https://mochajs.org/) 

## Running linters
Run `npm run lint` to execute [TS linting](https://github.com/palantir/tslint), [HTML linting](https://github.com/htmlhint/HTMLHint) and [SASS linting](https://github.com/sasstools/sass-lint).
