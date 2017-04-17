/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('app1.ctrl',['backbone.marionette', 'backbone.radio', 'jquery', 'underscore'], 
function (Mn, Ra, $, _) {
    //       
    const View = require('APP1/view.js'); 
    //
    return Mn.Object.extend({
        channelName: 'app1',
        radioEvents: {
            'run': 'doRun'
        },
        onBeforeDestroy: function(){
console.log('app1.ctrl onBeforeDestroy');
        },
        onDestroy: function(){
console.log('app1.ctrl onDestroy');
        },        
        doRun: function(){
console.log('app1.ctrl doRun');
        }
    });   
});