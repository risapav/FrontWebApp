/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer.app',['backbone.marionette', 'backbone.radio'], 
    function (Mn, Ra) {
        //
        const Ch = Ra.channel('foo');
        //     
        const Ct = require('FOOTER/cntrl.js');
        //
        return Mn.AppRouter.extend({
            controller: new Ct,

            routes: {
                'foo': 'showFooter',
                'foo:msg': 'msgFooter'
            },
            showFooter: function (){           
                Ch.trigger('show:cpy');
            },
            msgFooter: function (options){              
                Ch.trigger('show:msg', options);
            }    
        });
});   