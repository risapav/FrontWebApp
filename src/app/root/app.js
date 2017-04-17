/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('root.app',['jquery', 'underscore'], 
function($, _) {
    //
    const RootView = require('ROOT/view.js');
    //zoznam vsetkych subApp, ktore budu spustane v aplikacii
    const Modules = [
        require('MODAL/app.js'),
        require('LOGIN/app.js'),
        require('HEADER/app.js'),
        require('FOOTER/app.js'),
        require('ABOUT/app.js'),
        require('APP1/app.js'),
        require('APP2/app.js'),
        require('APP3/app.js')
    ];
    //
    const App = require('LIB/app.js');
    //
    return App.extend({      
        modules: Modules,
        region: '#root',
        radioEvents: function(){
            return _.extend({},App.prototype.radioEvents,{

            });
        },        
        radioRequests: function(){
            return _.extend({},App.prototype.radioRequests,{
                //loader on
                'lon': 'appLoOn',
                //loader off
                'loff': 'appLoOff'
            });
        },
        //zobraz data loader
        appLoOn: function (){ $('.loader').show(); },      
        //skry data loader
        appLoOff: function (){ $('.loader').hide(); },         
        onStart: function () {  
            // create root layout     
            this.showView(new RootView());
            //call previous class onStart
            App.prototype.onStart.call(this);            
        }
    });
});