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
    const ModalApp = require('MODAL/app.js');     
    //
    const HeaderApp = require('HEADER/app.js');
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
            return this;
        },
        onStart: function() {   
            // create root layout     
            this.showView(new RootView());
            // create modal
            this.modalA = new ModalApp();            
            // create footer
            this.footerA = new FooterApp();
            Ra.channel('ChFooter').trigger('show:cpy');  
            // create header                                 
            this.headerA = new HeaderApp();
            Ra.channel('ChHeader').trigger('show:menu');
            //
//            this.SubApp = new AboutApp();
//            const aboutChannel = Ra.channel('about');           
//            aboutChannel.trigger('show:about');
            // Start history when our application is ready
            Bb.history.start();
        }
    });
});

