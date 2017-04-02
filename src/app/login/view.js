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
                var data = Sy.serialize(this);
                this.model.set(data);
                this.model.save();
                
/*                        
                $('button').bind('click', function() {
                    $.post('/?ts=' + Date.now(), $('#f').serialize(), function(d) {
                        var err = $('#error');
                        if (d instanceof Array) {
                            err.empty();
                            d.forEach(function(o) {
                                err.append('<div>' + o.error + '</div>');
                            });
                            err.show();
                            return;
                        };
                        err.hide();
                        window.location.href = '/';
                    });
                });
*/                
                const Ch = Ra.channel('ChLogin');
                Ch.trigger('signin', this.model.toJSON());    
            },
            onDestroy: function(){
                console.log('onDestroy mbody');
            }            
        })
    };
});