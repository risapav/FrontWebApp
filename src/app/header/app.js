/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('header.app',['backbone.marionette', 'backbone.radio'], 
    function (Mn, Ra) {
        //        
        const Ch = Ra.channel('menu');
        //
        const Ct = require('HEADER/cntrl.js');
        //
        return Mn.AppRouter.extend({
            controller: new Ct,
            routes: {
                'menu': 'showMenu',
                'user': 'doUser',
                'admin': 'doAdmin',
                'super': 'doSuper'
            },
            onRoute: function(name, path, args) {
                console.log('User navigated to ' + path,name, path, args);
            },
            doUser: function(){
                Ch.trigger('do:role',{role: ' User'});
            },
            doAdmin: function(){
                Ch.trigger('do:role',{role: ' Admin'});
            },
            doSuper: function(){
                Ch.trigger('do:role',{role: ' Super'});
            },        
            showMenu: function (){                     
                Ch.trigger('show:menu');
            }
        });
});           