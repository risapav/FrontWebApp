/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('login.view', ['backbone.marionette', 'backbone.radio', 'backbone', 'underscore'],
function ( Mn, Ra, Ba, _ ) {
    //
    const User = new Ba.Model({user: 'pokus', pswd: '', remember: true});
    //
    return {      
        header: Mn.View.extend({
            template: require('LOGIN/header.tpl'),
            onDestroy: function(){
                console.log('onDestroy mheader');
            }            
        }),    
        body: Mn.View.extend({
            model: User,
            template: require('LOGIN/body.tpl'),
            onDestroy: function(){
                console.log('onDestroy mbody');
            }            
        })
    };
});