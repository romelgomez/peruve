// 'use strict';

// // normalize the paths : http://stackoverflow.com/questions/9756567/do-you-need-to-use-path-join-in-node-js
// import * as path from 'path';
// import * as express from 'express';
// // to adequate Angular build /dist/project_name/files...
// // import { projectName } from './project-name';
// import { Result } from 'range-parser';

// const nodemailer = require('nodemailer');
// const Q = require('q');


// interface EmailOptions {
//   from: string;
//   to: string;
//   subject: string;
//   text: string;
//   html?: string;
// }


// function sendEmail ( emailOptions: EmailOptions ): Promise<{}> {
//   const deferred = Q.defer();

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         type: 'OAuth2',
//         user: 'calatolima@gmail.com',
//         clientId: '462272583161-11ebup35goceut82g7jf7boon6btl503.apps.googleusercontent.com',
//         clientSecret: 'Ot6aa3I8DciAPFMP89Mzl8tM',
//         refreshToken: '1/BWhBvLquuNkM_MqVboavU54_nKfI5K_T5pTplKSPeBM',
//       },
//     });

//   transporter.sendMail( emailOptions, function (err: Object, res: Object) {
//       if ( err ) {
//           deferred.reject(err);
//       } else {
//           deferred.resolve(res);
//       }
//   });

//   return deferred.promise;
// }

// export class Routes {

//   defaultRoute(req: express.Request, res: express.Response) {
//     res.sendFile('index.html', {
//       root: path.join(process.cwd(), 'dist', projectName)
//     });
//   }

//   paths(app: express.Application) {

//     app.get('/', (req: express.Request, res: express.Response) => {
//       this.defaultRoute(req, res);
//     });

//     app.get('/subscribe', (req: express.Request, res: express.Response) => {
//       this.defaultRoute(req, res);
//     });

//     app.get('/terms-and-conditions', (req: express.Request, res: express.Response) => {
//       this.defaultRoute(req, res);
//     });

//     app.get('/oops', (req: express.Request, res: express.Response) => {
//       this.defaultRoute(req, res);
//     });

//     app.post('/api/send-email', (req: express.Request, res: express.Response) => {
//       // console.log('req.body', req.body);
//       // console.log('api');

//       const subscription = req.body;

//       // res.redirect('/muchas-gracias');
//       // res.redirect('/oops');

//       let sex = '';
//       switch ( subscription['sex'] ) {
//         case 'female':
//             sex = 'Femenino';
//             break;
//         case 'male':
//             sex = 'Masculino';
//             break;
//         default:
//           sex = 'Reservado';
//       }

//       /*
//         {
//           "name":"Romel Javier Gomez Herrera",
//           "age":21,
//           "sex":"male",
//           "email":"bmxquiksilver7185@gmail.com",
//           "phone":"4129427966",
//           "veteran":"no",
//           "referred":"si",
//           "suggestion":"bmxquiksilver7185@gmail.com"
//         }
//       */

//       sendEmail({
//         from: 'CALATO',
//         to: 'calatolima@gmail.com',
//         subject: 'CALATO - ¡Nueva solicitud de suscripción!',
//         text: `
//           Hola, un nuevo cliente quiere unirse a calato! \n\n

//           Sus datos son: \n
//           ---------------------------------------------- \n
//           Nombre: ${subscription['name']} \n
//           Edad: ${subscription['age']} \n
//           Sexo: ${sex} \n
//           Correo: ${subscription['email']} \n
//           Teléfono: ${subscription['phone']} \n\n

//           Preguntas: \n
//           ----------------------------------------------\n
//           ¿Alguna vez has participado en una reunión de este tipo?\n
//           ${subscription['veteran']}\n
//           ¿A través de qué medio llegaste a nuestra página?\n
//           ${subscription['referred']}\n
//           Te gustaría que se realice una temática en específico. Déjanos tu sugerencia...\n
//           ${subscription['suggestion']}
//         `,
//         html: `
//           <h2>Hola, un nuevo cliente quiere unirse a calato!</h2>

//           <h3>Sus datos son:</h3>
//           ---------------------------------------------- <br>
//           <b>Nombre:</b> ${subscription['name']} <br>
//           <b>Edad:</b> ${subscription['age']} <br>
//           <b>Sexo:</b> ${sex} <br>
//           <b>Correo:</b> ${subscription['email']} <br>
//           <b>Teléfono:</b> ${subscription['phone']} <br><br>

//           <h3>Preguntas:</h3>
//           ----------------------------------------------<br>
//           <b>¿Alguna vez has participado en una reunión de este tipo?</b><br>
//           ${subscription['veteran']}<br><br>
//           <b>¿A través de qué medio llegaste a nuestra página?</b><br>
//           ${subscription['referred']}<br><br>
//           <b>Te gustaría que se realice una temática en específico. Déjanos tu sugerencia...</b><br>
//           ${subscription['suggestion']}
//         `
//       })
//         .then(function ( response: Object ) {
//           res.send({
//             result: 'ok'
//           });
//         }, function () {
//           res.send({
//             result: 'error'
//           });
//         });

//     });

//     app.post('/api/test', (req: express.Request, res: express.Response) => {

//       //   {
//       //     accepted:[
//       //        'calatolima@gmail.com'
//       //     ],
//       //     rejected:[
//       //     ],
//       //     envelopeTime:700,
//       //     messageTime:1118,
//       //     messageSize:586,
//       //     response:'250 2.0.0 OK 1533260127 r138-v6sm910652vke.35 - gsmtp',
//       //     envelope:{
//       //        from:'',
//       //        to:[
//       //           Array
//       //        ]
//       //     },
//       //     messageId:'<3b74c1b6-b4c7-87aa-1216-9674750b16dd@romel>'
//       //  }

//       sendEmail({
//         from: 'CALATO',
//         to: 'calatolima@gmail.com',
//         subject: 'CALATO - ¡Nueva solicitud de suscripción!',
//         text: 'Hola De nuevo... \n esta es otra linea',
//       })
//         .then(function ( response: Object ) {
//           res.send({
//             result: 'ok'
//           });
//         }, function () {
//           res.send({
//             result: 'error'
//           });
//         });


//     });


//     app.get('test', (req: express.Request, res: express.Response) => {
//       res.sendFile('runtime.a66f828dca56eeb90e02.js', {
//         root: path.join(process.cwd(), 'dist', projectName)
//       });
//     });


//     app.get('*', (req: express.Request, res: express.Response) => {
//       this.defaultRoute(req, res);
//     });

//   }

// }
