/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('login.ctrl',['backbone.marionette', 'backbone.radio', 'jquery', 'underscore'], 
function (Mn, Ra, $, _) {
    //       
    const View = require('LOGIN/view.js'); 
    //
    const Ch = Ra.channel('ChModal');
    //
    return Mn.Object.extend({
        channelName: 'ChLogin',
        radioEvents: {
            'do:login': 'doLogin',
            'do:logout': 'doLogout',
            'signin': 'doSignin'
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
        doSignin: function(options){
console.log('doSignin', options);            
        },
        doLogout: function(options){    
console.log('doSignout', options);     

            var request = $.ajax({
                url: '/logout/',
                method: 'POST',
                data: { 
                    id : 1,
                    
                    role: 'user'
                },
                dataType: 'json'
            });

            request.done(function( data ) {
console.log('done ajax ', data.msg );

                Ra.channel('ChFooter').trigger('show:msg', data.msg);
            });

            request.fail(function( jqXHR, textStatus ) {
console.log('fail ajax ', jqXHR, textStatus );
            });

console.log('doSignout', options);            
        }        
    });   
});