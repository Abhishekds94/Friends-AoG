'use strict'

//For importing modules from AoG library
const {dialogflow} = require('actions-on-google');

//For importing Firebase functions for deployment
const functions = require('firebase-functions');


//Instantiate Dialogflow
const app = dialogflow({debug:true});

//Default Welcome Intent
app.intent('Default Welcome Intent', (conv) => {
    conv.ask(`<speak> Welcome! Who is your favorite character among Joey, Chandler, Monica, Rachel, Ross and Phoebe?</speak>`);
});

//Joey
app.intent('Joey', (conv, { Joey }) => {
    conv.ask(`<speak> Heyy! I am Joey</speak>`);
})

//Chandler
app.intent('Chandler', (conv, { Chandler }) => {
    conv.ask(`<speak> Heyy! I am Chandler</speak>`);
})

//Monica
app.intent('Monica', (conv, { Monica }) => {
    conv.ask(`<speak> Heyy! I am Monica</speak>`);
})

//Rachel
app.intent('Rachel', (conv, { Rachel }) => {
    conv.ask(`<speak> Heyy! I am Rachel</speak>`);
})

//Ross
app.intent('Ross', (conv, { Ross }) => {
    conv.ask(`<speak> Heyy! I am Ross</speak>`);
})

//Phoebe
app.intent('Phoebe', (conv, { Phoebe }) => {
    conv.ask(`<speak> Heyy! I am Phoebe</speak>`);
})




//Set dialoagflow object to handle Post request 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);