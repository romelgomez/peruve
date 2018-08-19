'use strict';
exports.__esModule = true;
// normalize the paths : http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
var path = require("path");
var sgMail = require("@sendgrid/mail");
sgMail.setApiKey('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');
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.prototype.paths = function (app) {
        /**
         *  GENERICS ROUTES
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
        function defaultRoute(req, res) {
            res.sendFile('index.html', {
                root: path.join(process.cwd(), 'dist')
            });
        }
        function limaRoute(req, res) {
            res.sendFile('lima/index.html', {
                root: path.join(process.cwd(), 'dist')
            });
        }
        /**
         *  RUTAS
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
        app.get('/', function (req, res) {
            // Rewrite Cache-Control set defined in app.js
            // res.set({
            //  'Cache-Control': 'no-cache'
            // });
            defaultRoute(req, res);
        });
        app.get('/my-resume', function (req, res) {
            res.sendFile('resume.html', {
                root: path.join(process.cwd(), 'dist')
            });
        });
        app.get('/lima', function (req, res) {
            limaRoute(req, res);
        });
        app.get('/lima/blog', function (req, res) {
            limaRoute(req, res);
        });
        app.get('/lima/login', function (req, res) {
            limaRoute(req, res);
        });
        app.post('/contact-me', function (req, res) {
            // name: string;
            // email: string;
            // phone: string;
            // message: string;
            var emailData = req.body;
            var msg = {
                to: 'bmxandcode@gmail.com',
                from: emailData['email'],
                subject: 'Hola Romel, al parecer tienes un nuevo cliente!',
                text: "\n                Aqu\u00ED el mensaje\n                ---------------------------------------------- \n\n                Nombre:     " + emailData['name'] + " \n\n                Correo:     " + emailData['email'] + " \n\n                Telefono:   " + emailData['phone'] + " \n\n                Mensaje:    " + emailData['message'] + " \n\n            "
            };
            sgMail.send(msg)
                .then(function (sg_res) {
                res.send({
                    result: 'ok',
                    details: sg_res
                });
            }, function (err) {
                res.status(400);
                res.send({
                    result: 'fail',
                    details: err
                });
            });
        });
        app.get('*', function (req, res) {
            defaultRoute(req, res);
        });
    };
    return Routes;
}());
exports.Routes = Routes;
