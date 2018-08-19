'use strict';

// normalize the paths : http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
import * as path from 'path';
import * as express from 'express';
import { send } from 'q';

// const Q = require('q');
import * as Q from 'q';
import * as sgMail from '@sendgrid/mail';
sgMail.setApiKey('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');

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
        // name: string;
        // email: string;
        // phone: string;
        // message: string;

        const emailData = req.body;

        const msg = {
            to: 'bmxandcode@gmail.com',
            from: emailData['email'],
            subject: 'Hola Romel, al parecer tienes un nuevo cliente!',
            text: `
                Aquí el mensaje
                ---------------------------------------------- \n
                Nombre:     ${emailData['name']} \n
                Correo:     ${emailData['email']} \n
                Telefono:   ${emailData['phone']} \n
                Mensaje:    ${emailData['message']} \n
            `,
        };

        sgMail.send(msg)
            .then( sg_res => {
                res.send({
                    result: 'ok',
                    details: sg_res
                });
            }, err => {
                res.status(400);
                res.send({
                    result: 'fail',
                    details: err
                });
            });


    });


    app.get('*', (req: express.Request, res: express.Response) => {
        defaultRoute(req, res);
    });

  }

}
