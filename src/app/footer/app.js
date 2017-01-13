/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer.app',['backbone.marionette', 'backbone.radio'], 
    function (Mn, Radio) {
        //
        const Controller = require('./cntrl.js');
        //
        const footerChannel = Radio.channel('footer');
        //     
        return Mn.AppRouter.extend({
            controller: new Controller,

            routes: {
                'footer:show': 'showFooter',
                'footer:message': 'showMessage'
            },
            showFooter: function(){           
                footerChannel.trigger('show:cpy');
            },
            showMessage: function(options){              
                footerChannel.trigger('show:msg', options);
            }    
        });
});   