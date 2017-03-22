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
            channelName: 'ChFooter',
            radioEvents: {
                'show:msg': 'showMsg',
                'show:cpy': 'showCpy'
            },
            timeout: null,
            onBeforeDestroy: function(){
                //destroy timeout
                if( this.timeout ){
                    clearTimeout(this.timeout);
                    this.timeout = null;
                }
            },
            showMsg: function (options) {                
                // find App object             
                const App = Ra.channel('ChApp').request('app:this');
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
                    const footerCh = Ra.channel('ChFooter');           
                    footerCh.trigger('show:cpy');                    
                }, App.getOption('msg_delay'));
            },
            showCpy: function () {
                // find App object           
                const App = Ra.channel('ChApp').request('app:this');
                // find parent view
                const paView = App.getView();
                paView.showChildView('footer', new View.Cpy);               
            }
        });   
});