/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('APP',['jquery', 'underscore', 'backbone', 'backbone.marionette', 'backbone.radio'], 
function( $, _, Bb, Mn, Radio) {
    
    console.log('APP1 =>>',  this);
    
    require("./styles.less");
    // Do something with $ and myModule.
    const MainView = Mn.View.extend({
        template: _.template('<h1><%- title %></h1>'),
        templateContext: {
            title: 'world'
        }
    });
    //
    var footerChannel = Radio.channel('footer');
    var headerChannel = Radio.channel('header');
    var mainChannel = Radio.channel('main');
    //
    const RootView = require('App/view.js');
    // Export a function
    return Mn.Application.extend({
        region: '#root-region',
        
        initialize: function(options) {
//            console.log('My value:', options);//, options.model.get('key'));
console.log('APP2 =>>',  this, options, this.getOption('title'), this.getOption('data'));
        },
        
        onStart: function(options) {     
            //       
            this.showView(new RootView());
            //
            footerChannel.request('show:msg', 'A generic error occurred!');
            headerChannel.request('show:menu', 'A generic error occurred!');
            mainChannel.request('show:main', 'A generic error occurred!');
            //
            var title = Mn.getOption(this,'title');
            var title1 = this.getOption('title');
            console.log('history start', title, title1, this);
//            this.showChildView('main',new MainView({title: title}));
            // Start history when our application is ready
            Bb.history.start();
        }

    });
});

