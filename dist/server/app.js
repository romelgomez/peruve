"use strict";
// Example Express Server with TypeScript:
// https://gist.github.com/romelgomez/3c1776fab4192c7687883c1a2b972c8c
exports.__esModule = true;
/**
// Angular Project
npm install --save @angular/material @angular/cdk @angular/animations @angular/flex-layout hammerjs --save
npm i @ngx-translate/core @ngx-translate/http-loader --save
npm i lodash @types/lodash --save
npm i rxjs rxjs-compat --save
npm i q --save
npm i nodemailer --save
npm i ngx-spinner --save
npm i ng-snotify --save
npm i mongodb --save
npm i firebase angularfire2 --save

// Server
npm i express @types/express --save
npm i compression @types/compression --save
npm i morgan @types/morgan --save
npm i path --save
npm i body-parser @types/body-parser
npm i helmet @types/helmet --save
npm i method-override @types/method-override --save

// Build
npm i gulp gulp-typescript gulp-nodemon del --save-dev
*/
/**
 * Vendors Dependencies
 */
var express = require("express");
var compression = require("compression");
// log requests to the console (express4)
var morgan = require("morgan");
// normalize the paths
// http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
var path = require("path");
// pull information from HTML POST (express4)
var bodyParser = require("body-parser");
// simulate DELETE and PUT (express4)
var methodOverride = require("method-override");
var helmet = require("helmet"); // Security
// to adequate Angular build /dist/project_name/files...
// const angular = require('./../../angular.json');
/**
 *
 *   App Dependencies
 *
 */
var routes = require("./routes");
var App = /** @class */ (function () {
    function App(NODE_ENV, PORT) {
        if (NODE_ENV === void 0) { NODE_ENV = 'development'; }
        if (PORT === void 0) { PORT = '9090'; }
        // Setting environment for development|production
        process.env.NODE_ENV = process.env.NODE_ENV || NODE_ENV;
        // Setting port number
        process.env.PORT = process.env.PORT || PORT;
        // Create our app w/ express
        this.app = express();
        this.app.use(helmet());
        if (NODE_ENV === 'development') {
            // this.app.use( express.static( path.join(process.cwd(), 'dist', angular.defaultProject )));
            this.app.use(express.static(path.join(process.cwd(), 'dist')));
            // log every request to the console
            this.app.use(morgan('dev'));
        }
        else {
            this.app.use(compression());
            this.app.use(express.static(path.join(process.cwd(), 'dist'), { immutable: true, maxAge: '7d' }));
            // this.app.use( express.static( path.join( process.cwd(), 'dist', angular.defaultProject ), { immutable : true, maxAge: '7d' }));
        }
        // parse application/x-www-form-urlencoded
        this.app.use(bodyParser.urlencoded({ 'extended': true }));
        // parse application/json
        this.app.use(bodyParser.json());
        // parse application/vnd.api+json as json
        this.app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        this.app.use(methodOverride());
        // Setting routes
        var __routes = new routes.Routes();
        __routes.paths(this.app);
        // START the server
        this.app.listen(process.env.PORT, function () {
            if (NODE_ENV === 'development') {
                console.log('The server is running in port localhost: ', 'http://localhost:' + process.env.PORT);
            }
            else {
                console.log('The server is running in port:', process.env.PORT);
            }
        });
    }
    return App;
}());
exports.App = App;
// console.log('__dirname',__dirname);
// console.log('process.cwd()',process.cwd());
// console.log('__filename',__filename);
