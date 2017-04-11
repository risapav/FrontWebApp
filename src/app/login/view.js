/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('login.view', ['backbone.marionette', 'backbone.radio', 'backbone', 'backbone.syphon', 'underscore'],
function ( Mn, Ra, Ba, Sy, _ ) {
    //
    const User = require('ENTITIES/user.js');
console.log('User', User);    
    //
    return {      
        header: Mn.View.extend({
            template: require('LOGIN/header.tpl'),
            onDestroy: function(){
                console.log('onDestroy mheader');
            }            
        }),    
        body: Mn.View.extend({
            model: new User,
            template: require('LOGIN/body.tpl'),
            events: {
                'submit form': 'signForm'
            },
            signForm: function(e){              
                e.preventDefault();
                const data = Sy.serialize(this);
                const Ch = Ra.channel('login');
                Ch.trigger('signin', data); 
            },
            onDestroy: function(){
                console.log('onDestroy mbody');
            }            
        })
    };
});