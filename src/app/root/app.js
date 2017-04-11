/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('root.app',['backbone', 'backbone.marionette', 'backbone.radio', 'jquery'], 
function( Bb, Mn, Ra, $) {
    //
    const RootView = require('ROOT/view.js');
    //
    const ModalApp = require('MODAL/app.js');     
    //
    const LoginApp = require('LOGIN/app.js');     
    //
    const HeaderApp = require('HEADER/app.js');
    //  
    const FooterApp = require('FOOTER/app.js');  
   
    //  
//    const AboutApp = require('ABOUT/app.js'); 
//    require("./styles.less");  
    // Export a function
    return Mn.Application.extend({
        channelName: 'app',
        region: '#root',
        radioRequests: {
            'app:this': 'appThis',
            'app:lon': 'appLoOn',
            'app:loff': 'appLoOff'
        },
        //vrat 'this' hlavnej aplikacie
        appThis: function (){
            return this;
        },
        //zobraz data loader
        appLoOn: function (){
            $('.loader').show();
        },      
        //skry data loader
        appLoOff: function (){  
            $('.loader').hide();
        },         
        onStart: function () {   
            // create root layout     
            this.showView(new RootView());
            // create modal
            this.modalA = new ModalApp();     
            // create login
            this.loginA = new LoginApp();             
            // create footer
            this.footerA = new FooterApp();
            Ra.channel('foo').trigger('show:cpy');  
            // create header                                 
            this.headerA = new HeaderApp();
            Ra.channel('menu').trigger('show:menu');
            //
//            this.SubApp = new AboutApp();
//            const aboutChannel = Ra.channel('about');           
//            aboutChannel.trigger('show:about');
            // Start history when our application is ready
            Bb.history.start();
        }
    });
});

