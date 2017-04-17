/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('app2.ctrl',['backbone.marionette', 'backbone.radio', 'jquery', 'underscore'], 
function (Mn, Ra, $, _) {
    //       
    //const View = require('APP1/view.js'); 
    //
    return Mn.Object.extend({
        channelName: 'app2',
        radioEvents: {
            'run': 'doRun'
        },
        onBeforeDestroy: function(){
console.log('app2.ctrl onBeforeDestroy');
        },
        onDestroy: function(){
console.log('app2.ctrl onDestroy');
        },        
        doRun: function(){
console.log('app2.ctrl doRun');
        }
    });   
});