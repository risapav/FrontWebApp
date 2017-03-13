/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('about.ctrl',['backbone.marionette', 'backbone.radio'], 
    function (Mn, Radio) {
        //       
        const View = require('ABOUT/view.js');
        //       
        const Channel = Radio.channel('ChApp');
        const App = Channel.request('app:this');
        //
        return Mn.Object.extend({
            channelName: 'ChAbout',
            radioEvents: {
                'show:about': 'showAbout'
            },
            showAbout: function(){
                const view = new View();
                App.view.showChildView('main', view);
            }
        });
});