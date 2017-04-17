/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('about.ctrl',['backbone.marionette', 'backbone.radio'], 
function (Mn, Ra) {
    //       
    const View = require('ABOUT/view.js');         
    //
    return Mn.Object.extend({
        channelName: 'about',
        radioEvents: {
            'show': 'show'
        },
        initialize: function(){       
            Ra.trigger('about','show');
        },
        onBeforeDestroy: function(){
            // find App object             
            const App = Ra.request('app','this');
            // find parent view
            const paView = App.getView();
            const mainRegion = paView.getRegion('main');
            mainRegion.empty();           
        },
        show: function () {         
            // find App object             
            const App = Ra.request('app','this');         
            // find parent view
            const paView = App.getView();           
            const mainRegion = paView.getRegion('main');          
            mainRegion.show(new View.Msg());                
        }
    });   
});