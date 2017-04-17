/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('about.view', [ 'backbone.marionette', 'backbone.radio' ],
function ( Mn, Ra ) {
    //
    return {
        Msg: Mn.View.extend({
            className: 'container',
            template: require('ABOUT/msg.tpl'),
            templateContext: function(){
                // find App object             
                const App = Ra.request('app','this');
                //
                return {
                    prgname: App.getOption('prgname'),
                    version: App.getOption('version')
                };   
            }
        })
    };
});