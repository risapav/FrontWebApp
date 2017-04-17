/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('sub.app',['backbone.marionette'], 
function (Mn) {      
    //
    return Mn.AppRouter.extend({
        initialize: function(){           
            //ak ma byt subapp resistentne v pamati, potom ho spusti okamzite           
            if(this.options['resist']){
                this.start();
            }  
        },
        //controller object
        controller: null,        
        //start sub application
        start: function(){        
            //ak je uz subApp spustene, potom nevykona nic
            if(this.controller){
                return;
            }         
            //ak existuje sablona pre controller
            if(this.options['ctrl']){
               this.controller = new this.options['ctrl'];              
            }        
        },
        //stop sub application, free allocated memory
        stop: function(){    
            //ak je uz subApp spustene
            if(this.controller){
                //korektne ukonci subApp
                this.controller.destroy();
                this.controller = null;
            }
        }        
    });   
});
    