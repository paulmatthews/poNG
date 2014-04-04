# poNG

This project is an AngularJS application that allows the developers at KYN to track competitors
for Ping Pong tournaments in the rumpus room.

## Getting Started

This application was built using the [angular-seed][angular-seed] project.  The Clone and Install
Dependencies sections are modified for poNG

### Clone poNG

Clone the poNG repository using [git][git]:

```
git clone https://github.com/paulmatthews/poNG.git
cd poNG
```

### Install Dependencies

The [angular-seed][angular-seed] project has two kinds of dependencies in this project: tools and
angular framework code.  The tools help them manage and test the application.

* They get the tools we depend upon via `npm`, the [node package manager][npm].
* They get the angular code via `bower`, a [client-side code package manager][bower].

They have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

### Run the Application

They have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.
