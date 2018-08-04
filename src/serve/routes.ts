'use strict';

// normalize the paths : http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
import * as path from 'path';
import * as express from 'express';
// to adequate Angular build /dist/project_name/files...
import { projectName } from './project-name';


export class Routes {

  defaultRoute(req: express.Request, res: express.Response) {
    res.sendFile('index.html', {
      root: path.join(process.cwd(), 'dist', projectName)
    });
  }

  paths(app: express.Application) {

    app.get('/', function(req, res) {
        // Rewrite Cache-Control set defined in app.js
        // res.set({
        //  'Cache-Control': 'no-cache'
        // });
        this.defaultRoute(req, res);
    });

    app.get('/my-resume', function(req: express.Request, res: express.Response) {
        this.defaultRoute(req, res);
    });

    app.get('/contact', function(req: express.Request, res: express.Response) {
        this.defaultRoute(req, res);
    });

    app.get('/login', function(req: express.Request, res: express.Response) {
        this.defaultRoute(req, res);
    });

    app.get('/account', function(req: express.Request, res: express.Response) {
        this.defaultRoute(req, res);
    });

    app.get('/terms-of-service', function(req: express.Request, res: express.Response) {
        this.defaultRoute(req, res);
    });

    app.get('/privacy-policy', function(req: express.Request, res: express.Response) {
        this.defaultRoute(req, res);
    });

    // TO-DO API
    app.post('/api/to-do', function(req: express.Request, res: express.Response) {
        console.log('sabe one to-do ');
    });

    app.get('/api/to-do', function(req: express.Request, res: express.Response) {
        console.log('Get all to-do');
    });

    app.get('/api/to-do/:id', function(req: express.Request, res: express.Response) {
        console.log('get to-do by id:', req.params.id);
    });

    app.get('/oops', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res);
    });

    app.get('*', (req: express.Request, res: express.Response) => {
      this.defaultRoute(req, res);
    });

  }

}
