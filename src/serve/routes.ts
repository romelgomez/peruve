'use strict';

// normalize the paths : http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
import * as path from 'path';
import * as express from 'express';

// to adequate Angular build /dist/project_name/files...
// const angular = require('./../../angular.json');



export class Routes {


  paths(app: express.Application) {

    /**
     *  GENERICS ROUTES
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    function defaultRoute(req: express.Request, res: express.Response) {
        res.sendFile('index.html', {
            root: path.join(process.cwd(), 'dist')
        });
    }

    function limaRoute(req: express.Request, res: express.Response) {
        res.sendFile('lima/index.html', {
            root: path.join(process.cwd(), 'dist')
        });
    }

    /**
     *  RUTAS
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

    app.get('/', function(req, res) {
        // Rewrite Cache-Control set defined in app.js
        // res.set({
        //  'Cache-Control': 'no-cache'
        // });
        defaultRoute(req, res);
    });

    app.get('/my-resume', function(req: express.Request, res: express.Response) {
        res.sendFile('resume.html', {
            root: path.join(process.cwd(), 'dist' )
        });
    });

    app.get('/lima', function(req: express.Request, res: express.Response) {
        limaRoute(req, res);
    });

    app.get('/lima/blog', function(req: express.Request, res: express.Response) {
        limaRoute(req, res);
    });

    app.get('/lima/login', function(req: express.Request, res: express.Response) {
        limaRoute(req, res);
    });

    app.post('/contact-me', function(req: express.Request, res: express.Response) {
        res.send({
            result: 'ok',
            data: req.body
        });

        // res.status(400);
        // res.send('None shall pass');
    });

    // app.get('/login', function(req: express.Request, res: express.Response) {
    //     this.defaultRoute(req, res);
    // });

    // app.get('/account', function(req: express.Request, res: express.Response) {
    //     this.defaultRoute(req, res);
    // });

    // app.get('/terms-of-service', function(req: express.Request, res: express.Response) {
    //     this.defaultRoute(req, res);
    // });

    // app.get('/privacy-policy', function(req: express.Request, res: express.Response) {
    //     this.defaultRoute(req, res);
    // });

    // // TO-DO API
    // app.post('/api/to-do', function(req: express.Request, res: express.Response) {
    //     console.log('sabe one to-do ');
    // });

    // app.get('/api/to-do', function(req: express.Request, res: express.Response) {
    //     console.log('Get all to-do');
    // });

    // app.get('/api/to-do/:id', function(req: express.Request, res: express.Response) {
    //     console.log('get to-do by id:', req.params.id);
    // });

    // app.get('/oops', (req: express.Request, res: express.Response) => {
    //   this.defaultRoute(req, res);
    // });

    app.get('*', (req: express.Request, res: express.Response) => {
        defaultRoute(req, res);
    });

  }

}
