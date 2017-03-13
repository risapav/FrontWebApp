/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('root.app',['backbone', 'backbone.marionette', 'backbone.radio'], 
function( Bb, Mn, Ra) {
    //
    const RootView = require('ROOT/view.js');
    //
 //   const HeaderApp = require('HEADER/app.js');
    //  
    const FooterApp = require('FOOTER/app.js');  
    //  
//    const AboutApp = require('ABOUT/app.js'); 
//    require("./styles.less");  
    // Export a function
    return Mn.Application.extend({
        channelName: 'ChApp',
        region: '#root',
        radioRequests: {
            'app:this': 'appThis'
        },
        appThis: function(){
            console.log('request appThis');
            return this;
        },
        onBeforeStart: function() {
          
        },
        
        onStart: function() {   
            // create root layout     
            this.showView(new RootView());
            //                                 
//            this.header = new HeaderApp();
            //
            this.footer = new FooterApp();
            const footerCh = Ra.channel('ChFooter');           
//            footerCh.trigger('show:cpy');  
            footerCh.trigger('show:msg', {type: 'alert-danger', text: 'pokus'});          
            //
//            this.SubApp = new AboutApp();
            //         
//            const headerChannel = Ra.channel('header');           
//            headerChannel.trigger('show:m_0'); 
            //         

            //     
//            const aboutChannel = Ra.channel('about');           
//            aboutChannel.trigger('show:about');
            // Start history when our application is ready
            Bb.history.start();
        }
    });
});

