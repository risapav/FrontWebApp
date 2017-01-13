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
        const View = require('./view.js');
        //       
        const appChannel = Radio.channel('app');
        const App = appChannel.request('app:this');
        //
        return Mn.Object.extend({
            channelName: 'about',
            radioEvents: {
                'show:about': 'showAbout'
            },
            showAbout: function(){
                const view = new View();
                App.view.showChildView('main', view);
            }
        });
});