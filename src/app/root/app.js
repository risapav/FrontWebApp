/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('root.app',['backbone', 'backbone.marionette', 'backbone.radio'], 
function( Bb, Mn, Radio) {
    //    
//    require("./styles.less");  
    // Export a function
    return Mn.Application.extend({
        channelName: 'app',
        region: '#app',
        radioRequests: {
            'app:this': 'getThis'
        },
        getThis: function(){
            return this;
        },
        onStart: function(app, options) {               
            //    
            const RootView = require('App/view.js'); 
            this.view = new RootView();
            const mainRegion = this.getRegion('app');
            mainRegion.show(this.view);
            //
            const HeaderApp = require('Header/app.js');                        
            this.header = new HeaderApp();
            //
            const FooterApp = require('Footer/app.js');                        
            this.footer = new FooterApp();
            //
            const AboutApp = require('About/app.js');                        
            this.SubApp = new AboutApp();
            //
            const headerChannel = Radio.channel('header');           
            headerChannel.trigger('show:m_0');            
            const footerChannel = Radio.channel('footer');           
            footerChannel.trigger('show:cpy');
            const aboutChannel = Radio.channel('about');           
            aboutChannel.trigger('show:about');            
            // Start history when our application is ready
            Bb.history.start();
        }
    });
});

