/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('about.view', ['backbone.marionette','backbone.radio'],
    function ( Mn, Radio ) {
        //    
//        require("./header.less");
        //       
        const appChannel = Radio.channel('app');
        const App = appChannel.request('app:this');
        //
        const Template = require('About/about.tpl');   
        //
        return Mn.View.extend({
            template: _.template(
                Template({
                    prgname: App.getOption('prgname'),
                    version: App.getOption('version')
                })
            )
                        
        });
});