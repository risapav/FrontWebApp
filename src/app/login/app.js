/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('login.app',['backbone.marionette', 'backbone.radio'], 
function (Mn, Ra) {
    //
    const Ch = Ra.channel('ChLogin');
    //     
    const Ct = require('LOGIN/cntrl.js');
    //
    return Mn.AppRouter.extend({
        controller: new Ct,

        routes: {
            'login': 'doLogin',
            'logout': 'doLogout'
        },
        doLogin: function(){           
            Ch.trigger('do:login');
        },
        doLogout: function(){           
            Ch.trigger('do:logout');
        }            
    });
});   