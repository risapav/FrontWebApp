/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('about.app',['backbone.marionette', 'backbone.radio'], 
    function (Mn, Radio) {
        //
        const Controller = require('ABOUT/cntrl.js');
        //
        const Channel = Radio.channel('ChAbout');
        //           
        return Mn.AppRouter.extend({
            controller: new Controller,
            routes: {
                'about': 'showAbout'
            },
            showAbout: function(){           
                Channel.trigger('show:about');
            }
        });
});  