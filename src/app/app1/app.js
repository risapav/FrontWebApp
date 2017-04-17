/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('app1.app',['backbone.radio'], 
function (Ra) {
    //
    const Ct = require('APP1/cntrl.js');
    //
    const SubApp = require('LIB/subapp.js');
    //
    return SubApp.extend({
        options: { name: 'APP1', resist: false, ctrl: Ct }, 
        //
        routes: {
            'app1': 'run'
        },
        run: function (){
            Ra.trigger('app','run','APP1');
        }
    });
});   