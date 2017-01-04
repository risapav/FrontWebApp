/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('APP',['jquery', 'underscore', 'backbone', 'backbone.marionette'], 
function( $, _, Bb, Mn) {
    
    console.log('APP1 =>>',  this);
    
    require("./styles.less");
    // Do something with $ and myModule.
    const MainView = Mn.View.extend({
        template: _.template('<h1><%- title %></h1>'),
        templateContext: {
            title: 'world'
        }
    });

    // Export a function
    return Mn.Application.extend({
        region: '#main-region',
        
        initialize: function(options) {
//            console.log('My value:', options);//, options.model.get('key'));
console.log('APP2 =>>',  this, options, this.getOption('title'), this.getOption('data'));
        },
        
        onStart: function(options) {
console.log('APP3 =>>',  this, options, this.getOption('data'));            
            // Start history when our application is ready
            Bb.history.start();
            
            //
            var title = Mn.getOption(this,'title');
            var title1 = this.getOption('title');
            console.log('history start', title, title1, this);
            this.showView(new MainView({title: title}));
        }

    });
});

