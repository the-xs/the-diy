#A simple project setup for hot reload

## To run
```javascript
npm install
npm run start
```

Enter anything in the input box, change the content inside div: app.js and save. Check the browser updates.

## Or to follow procedures
```javascript
// init the package.json
npm init -y 

// install react
npm install --save react react-dom

// install babel
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2

// install webpack
npm install --save-dev webpack webpack-dev-server

// install react-hot-loader 3
npm install --save-dev react-hot-loader@3.0.0-beta.6

// create babel configuration
touch .babelrc

// create webpack configuration
touch webpack.config.js

// add react files as needed
// add npm command
// run the webpack-dev-server
```
