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
        const Controller = require('FOOTER/cntrl.js');
        //
        const Channel = Ra.channel('ChFooter');
        //     
        return Mn.AppRouter.extend({
            controller: new Controller,

            routes: {
                'footer:show': 'showFooter',
                'footer:message': 'msgFooter'
            },
            showFooter: function(){           
                Channel.trigger('show:cpy');
            },
            msgFooter: function(options){              
                Channel.trigger('show:msg', options);
            }    
        });
});   