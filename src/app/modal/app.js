/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('modal.app',['backbone.radio'], 
function (Ra) {
    //
    const Ct = require('MODAL/cntrl.js');
    //
    const SubApp = require('LIB/subapp.js');
    //
    return SubApp.extend({
        options: { name: 'MODAL', resist: true, ctrl: Ct }, 
        //
        routes: {
            'modal': 'showModal',
            'modal:close': 'closeModal'
        },
        showModal: function (options){           
            Ra.trigger('modal','show:modal', options);
        },
        closeModal: function (){           
            Ra.trigger('modal','close:modal');
        }            
    });
});   