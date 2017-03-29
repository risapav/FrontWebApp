/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('login.ctrl',['backbone.marionette', 'backbone.radio'], 
function (Mn, Ra) {
    //       
    const View = require('LOGIN/view.js'); 
    //
    const Ch = Ra.channel('ChModal');
    //
    return Mn.Object.extend({
        channelName: 'ChLogin',
        radioEvents: {
            'do:login': 'doLogin',
            'do:logout': 'doLogout'
        },
        onBeforeDestroy: function(){
console.log('login.ctrl onBeforeDestroy');
        },
        doLogin: function(){
            Ch.trigger('show:modal', { 
                header: View.header, 
                body: View.body
            });
        },
        doLogout: function () {
  
        }
    });   
});