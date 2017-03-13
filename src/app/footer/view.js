/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer.view', [ 'backbone.marionette' ],
function ( Mn ) {
    //
    const Tmp1 = require('FOOTER/cpy.tpl');
    const Tmp2 = require('FOOTER/msg.tpl');
    //
    return {
        Cpy: Mn.View.extend({
            template: Tmp1,
            className: 'container'
        }),
        Msg: Mn.View.extend({
            template: Tmp2,
            templateContext: function() {
                return {
                    text: this.getOption('text')
                };
            },
            className: 'container',
            initialize: function(options){
                if (options.type) {
                    this.$el.addClass(options.type);
                }
            }
        })
    };
});