/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('root.view', ['backbone.marionette'],
function ( Mn ) { 
    //
    return Mn.View.extend({
        template: require('ROOT/layout.tpl'),
        regions: {
            loader: '.loader',
            header: '#header',
            dialog: '#dialog',
            footer: '#footer',
            main: '#main'
        }
    });       
});