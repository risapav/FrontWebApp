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
            'loff': 'appLoaderOff'
            },
            appLoaderOn: function(){
console.log('appLoaderOn1');                  
                Ra.channel('ChApp').request('app:lon');
console.log('appLoaderOn2');                
            },
            appLoaderOff: function(){
console.log('appLoaderOff1');                
                Ra.channel('ChApp').request('app:loff');
console.log('appLoaderOff2');                
            },            
            showMenu: function(){                     
                Ch.trigger('show:menu');
            },            
            showLeft: function(){                   
                Ch.trigger('show:left');
            },
            showRight: function(){                   
                Ch.trigger('show:right');
            }    
        });
});           