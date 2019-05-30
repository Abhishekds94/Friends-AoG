'use strict';

//For importing modules from AoG library
const { dialogflow } = require('actions-on-google');

//For importing Firebase functions for deployment
const functions = require('firebase-functions');


//Instantiate Dialogflow
const app = dialogflow({ debug: true });


//Set dialoagflow object to handle Post request 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);