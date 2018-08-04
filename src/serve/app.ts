// Example Express Server with TypeScript:
// https://gist.github.com/romelgomez/3c1776fab4192c7687883c1a2b972c8c

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
import * as express from 'express';
import * as compression from 'compression';
// log requests to the console (express4)
import * as morgan from 'morgan';
// normalize the paths
// http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
import * as path from 'path';
// pull information from HTML POST (express4)
import * as bodyParser from 'body-parser';
// simulate DELETE and PUT (express4)
import * as methodOverride from 'method-override';
import * as helmet from 'helmet'; // Security

// to adequate Angular build /dist/project_name/files...
import { projectName } from './project-name';

/**
 *
 *   App Dependencies
 *
 */
import * as routes from './routes';

export class App {

  protected app: express.Application;

  constructor( NODE_ENV: string = 'development', PORT: string = '9090') {

    // Setting environment for development|production
    process.env.NODE_ENV = process.env.NODE_ENV || NODE_ENV;

    // Setting port number
    process.env.PORT = process.env.PORT || PORT;

    // Create our app w/ express
    this.app = express();
    this.app.use( helmet() );

    if ( NODE_ENV === 'development' ) {
      this.app.use( express.static( path.join(process.cwd(), 'dist', projectName )));
      // log every request to the console
      this.app.use(morgan('dev'));
    } else {
      this.app.use(compression());
      this.app.use( express.static( path.join( process.cwd(), 'dist', projectName ), { immutable : true, maxAge: '7d' }));
    }

    // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.urlencoded({'extended': true}));

    // parse application/json
    this.app.use(bodyParser.json());

    // parse application/vnd.api+json as json
    this.app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

    this.app.use(methodOverride());

    // Setting routes
    const __routes = new routes.Routes();
    __routes.paths(this.app);

    // START the server
    this.app.listen(process.env.PORT, function() {
      if ( NODE_ENV === 'development' ) {
        console.log('The server is running in port localhost: ', 'http://localhost:' + process.env.PORT);
      } else {
        console.log('The server is running in port:', process.env.PORT);
      }
    });

  }

}

// console.log('__dirname',__dirname);
// console.log('process.cwd()',process.cwd());
// console.log('__filename',__filename);
