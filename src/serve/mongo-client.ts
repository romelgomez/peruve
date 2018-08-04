// var MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// var uri = "mongodb+srv://peruve:xYFe3I9FBFWhwsfI@cluster0-tantz.mongodb.net/test";

// MongoClient.connect(uri, function(err, client) {
//     assert.equal(null, err);

//     console.log("Connected successfully to server");

//     const testDB = client.db('test2');

//     let cursor = testDB.collection('users')
//         .find({}).forEach(function(doc) {
//             console.log(doc);
//           });

//     client.close();
// });


// // import { Observable } from 'rxjs/Observable';
// // import 'rxjs/add/observable/of';
// // import 'rxjs/add/operator/map';

// // testDB.collection('users')
// //     .insertMany([
// //         {name: 'romel'},
// //         {name: 'rudy'},
// //         {name: 'dilia'},
// //         {name: 'alberto'}
// //     ]);

// // .then(function(result) {
// //     // process result
// //     console.log(result);
// // });
// // console.log(cursor);

// // sub$ = Observable
// //     .of(cursor)
// //     .map(x => x); // etc

// // sub$
// //     .subscribe(function(x) { console.log(x); });

// // cursor.map(data => console.log(data));
// // testDB.collection("users").aggregate(...).each(function(err, doc) {
// //     // cursor processing
// // })
// // const db = client.db(dbName);
