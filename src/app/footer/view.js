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
    return {
        Cpy: Mn.View.extend({
            template: require('FOOTER/cpy.tpl'),
            className: 'container'
        }),
        Msg: Mn.View.extend({
            template: require('FOOTER/msg.tpl'),
            templateContext: function() {
                return {
                    text: this.getOption('text')
                };
            },
            className: 'alert',
            initialize: function(options){               
                if (options.type) {
                    this.$el.addClass('alert-' + options.type);
                }
            }
        })
    };
});