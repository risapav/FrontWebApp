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
        const Ch = Ra.channel('ChHeader');
        //
        const Ct = require('HEADER/cntrl.js');
        //
        return Mn.AppRouter.extend({
            controller: new Ct,
            routes: {
                'menu': 'showMenu',
                'left': 'showLeft',
                'right': 'showRight',
                'lon': 'appLoaderOn',
                'loff': 'appLoaderOff',
                'user': 'doUser',
                'admin': 'doAdmin',
                'super': 'doSuper'
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
            appLoaderOn: function (){                
                Ra.channel('ChApp').request('app:lon');                
            },
            appLoaderOff: function (){               
                Ra.channel('ChApp').request('app:loff');             
            },            
            showMenu: function (){                     
                Ch.trigger('show:menu');
            },            
            showLeft: function (){                   
                Ch.trigger('show:left');
            },
            showRight: function (options){                   
                Ch.trigger('show:right', options);
            }    
        });
});           