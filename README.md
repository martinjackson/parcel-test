
# Parcel Test: ParcelBundler, React Front End, Node API Back End

## Description

This is a example project: React FrontEnd and Node API back end.

The project is split into **_two_** sections:

- **Front-End** (`src/` directory) Single Page App with React, React-Router, React-Router-Menu components.
- **Back-End** (`server/` directory) NodeJS, Express, API logic needed by application.

## Getting Started

- __Clone this project__

```bash
  cd ~/projects
  git clone https://github.com/martinjackson/parcel-test.git
  cd parcel-test
```

## Available Scripts

In the project directory, you can run:

### `yarn setup`    *run first* to fetch all the project's dependencies

Alternately: npm run setup

### `yarn start`   (live development environment)

Runs the app in the development mode with every source file save being hot-loaded into the Browser

ParcelBundler watches the FrontEnd for changes.

Babel-Node is watching the BackEnd for changes.

- NODE_ENV=development
- runs Parcel Bundler and Node API on Port 1234
   (will auto launch the browser [http://localhost:1234](http://localhost:8080))

### `yarn run prod`

- will not start the Parcel Bundler in watch mode
- NODE_ENV=production
- starts the API server (Nodejs/Express) on port 3001
- waiting on you to open your browser [http://localhost:3001](http://localhost:3001)'

### `yarn run pack`  (prep for a production release)

- builds the bundle (index.js) with sourcemap (index.map) and debug info into the server/public folder

----------------

## Project Structure

```bash
$ tree -I node_modules
.
├── package.json                  project's npm requirements and scripts
├── README.md                     This introduction
├── server
│   ├── package.json              seperate project dependancies for the back-end
│   ├── public
│   │   ├── index.js          built by parcel from src/*.js
│   │   ├── index.map         sourcemaps built by parcel
│   │   └── index.html        starter html
│   └── server.js             logic for NodeJS back-end
├── src
│   ├── index.js              Front-end entry
│   ├── index.css             style modification from default menu colors
│   ├── HelloWorld.tsx        example TypeScript React Component
│   ├── Page.js               React Component asking server API for markdown file
│   ├── ReactRouterMenu.js    code modified from react-route-menu
│   └── Status.js             React Component asking server API for live JSON
└── .babelrc                  React and Env plugins for babel (used by parcel Bundler)

```

### Yarn tips

> info There appears to be trouble with your network connection. Retrying...

```bash
yarn install --network-timeout 1000000
```

### Upgrading Notes:

curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential

