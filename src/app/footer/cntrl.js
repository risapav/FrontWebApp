/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer.ctrl',['backbone.marionette', 'backbone.radio'], 
function (Mn, Ra) {
    //       
    const View = require('FOOTER/view.js');         
    //
    return Mn.Object.extend({
        channelName: 'foo',
        radioEvents: {
            'info': 'lastMsg',
            'show:msg': 'showMsg',
            'show:cpy': 'showCpy'
        },
        timeout: null,
        initialize: function(){       
            Ra.trigger('foo','show:cpy');
        },
        onBeforeDestroy: function(){
            //destroy timeout
            if( this.timeout ){
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        },
        //zobraz predosle message
        lastMsg: function(){
            Ra.trigger('foo','show:msg', {});
        },
        // options = { type: warning', text: 'footer text' }
        showMsg: function (options) {                
            // find App object             
            const App = Ra.request('app','this');
            // find parent view
            const paView = App.getView();
            const chView = new View.Msg(options);
            paView.showChildView('footer', chView);
            //destroy timeout
            if( this.timeout ){
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(function(){
                //
                const Ch = Ra.channel('foo');           
                Ch.trigger('show:cpy');                    
            }, App.getOption('msg_delay'));
        },
        showCpy: function () {
            // find App object             
            const App = Ra.request('app','this');
            // find parent view
            const paView = App.getView();
            paView.showChildView('footer', new View.Cpy);               
        }
    });   
});