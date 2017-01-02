/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const Bb = require('backbone');
const Mn = require('backbone.marionette');
import App from './app/root/app.js';

// Create our Application
const app = new App();

// Start history when our application is ready
app.on('start', function() {
    Bb.history.start();
    console.log('history start');
});

//start app
app.start({
  data: {
    title: 'Marionette says hello!'
  }
});




