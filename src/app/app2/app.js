/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('app2.app',['backbone.radio'], 
function (Ra) {
    //
    const Ct = require('APP2/cntrl.js');
    //
    const SubApp = require('LIB/subapp.js');
    //
    return SubApp.extend({
        options: { name: 'APP2', resist: false, ctrl: Ct }, 
        //
        routes: {
            'app2': 'run'
        },
        run: function (options){
            Ra.trigger('app','run','APP2');
        }
    });
});   