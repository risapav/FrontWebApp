/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('header.app',['backbone.radio'], 
function (Ra) {
    //
    const Ct = require('HEADER/cntrl.js');
    //
    const SubApp = require('LIB/subapp.js');
    //
    return SubApp.extend({
        options: { name: 'HEADER', resist: true, ctrl: Ct }, 
        //    
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
            Ra.trigger('menu','role',' User');
        },
        doAdmin: function(){
            Ra.trigger('menu','role',' Admin');
        },
        doSuper: function(){
            Ra.trigger('menu','role',' Super');
        },        
        showMenu: function (){                     
            Ra.trigger('menu','show:menu');
        }
    });
});           