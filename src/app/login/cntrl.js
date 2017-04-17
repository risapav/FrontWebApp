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
    return Mn.Object.extend({
        channelName: 'login',
        radioEvents: {
            'ping': 'doPing',
            'login': 'doLogin',
            'logout': 'doLogout',
            'signin': 'doSignin'
        },
        onBeforeDestroy: function(){
console.log('login.ctrl onBeforeDestroy');
        },
        doLogin: function(){
            Ra.trigger('modal','show:modal', { 
                header: View.header, 
                body: View.body
            });
        },
        doSignin: function(data){
            //
            var string = '/?ts=' + Date.now();

console.log('doSignin', data, string);            
           //
            var request = $.ajax({
                url: '/login/',
                method: 'POST',
                data: data,
                dataType: 'json',
                timeout: 5000
            });
            //
            request.done(function( data ) {
                if(data.msg){
                    Ra.trigger('foo','show:msg', data.msg);
                }
            });
            //
            request.fail(function( jqXHR, textStatus ) {
                const obj = {
                    type: 'danger',
                    text: 'Server neodpovedal: ' + textStatus
                };
                Ra.trigger('foo','show:msg', obj );
            });             
        },
        doLogout: function(options){      
            //
            var request = $.ajax({
                url: '/logout/',
                method: 'POST',
                data: {},
                dataType: 'json',
                timeout: 5000
            });
            //
            request.done(function( data ) {
                if(data.msg){
                    Ra.trigger('foo','show:msg', data.msg);
                }
            });
            //
            request.fail(function( jqXHR, textStatus ) {
                const obj = {
                    type: 'danger',
                    text: 'Server neodpovedal: ' + textStatus
                };
                Ra.trigger('foo','show:msg', obj );
            });          
        },
        doPing: function(options){      
            //
            var request = $.ajax({
                url: '/ping/',
                method: 'POST',
                data: {},
                dataType: 'json',
                headers: {
                    'x-token' : this.model.get('token')
                },
                timeout: 5000
            });
            //
            request.done(function( data ) {
                if(data.msg){
                    Ra.trigger('foo','show:msg', data.msg);
                }
            });
            //
            request.fail(function( jqXHR, textStatus ) {
                const obj = {
                    type: 'danger',
                    text: 'Server neodpovedal: ' + textStatus
                };
                Ra.trigger('foo','show:msg', obj );
            });          
        }
    });   
});