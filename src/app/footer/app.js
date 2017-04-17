/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer.app',['backbone.radio'], 
function (Ra) {
    //
    const Ct = require('FOOTER/cntrl.js');
    //
    const SubApp = require('LIB/subapp.js');
    //
    return SubApp.extend({
        options: { name: 'FOOTER', resist: true, ctrl: Ct }, 
        //
        routes: {
            'foo': 'show',
            'foo:msg': 'msg'
        },
        show: function (){           
            Ra.trigger('foo','show:cpy');
        },
        // options = { type: warning', text: 'footer text' }
        msg: function (options){              
            Ra.trigger('foo','show:msg', options);
        }        
    });
});   