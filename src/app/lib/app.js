/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('app.app',['backbone', 'backbone.marionette', 'underscore'], 
function( Bb, Mn, _) {
    //
    return Mn.Application.extend({
        subApp: null,
        modules: [],
        channelName: 'app',   
        radioEvents: {
            //run subapp
            'run': 'runSubApp'            
        },       
        //run subApp
        runSubApp: function(name){       
            //ak je spustena akakolvek subApp
            if(this.subApp){
                //ak je spustene subApp take ako chceme spustit
                if(this.subApp.options['name'] === name){
                    //neurobi nic
                    return;
                }
                //korektne ukonci predoslu subApp
                this.subApp.stop();
                this.subApp = null;                
            }          
            //vyhladaj aplikaciu pre spustenie
            var subApp = _.find(this.modules, function(module){
                if(module.options['name'] === name){
                    return module;
                }
            });   
            //spusti aplikaciu
            if(subApp){
                this.subApp = subApp;
                this.subApp.start();
            }           
        },
        radioRequests: {
            //return this
            'this': 'appThis'
        },        
        //vrat 'this' hlavnej aplikacie
        appThis: function (){ 
            return this; 
        },
        onStart: function(){            
            // start each module
            const self = this;          
            _.each(this.modules, function(module, num, list){     
                self.modules[num] = new module;         
            });    
            // Start history when our application is ready
            Bb.history.start();
        }        
    });
});

