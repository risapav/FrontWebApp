/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer.view', [ 'backbone.marionette', 'backbone.radio', 'jquery' ],
function ( Mn, Ra, $ ) {
    //
    return {
        Cpy: Mn.View.extend({
            template: require('FOOTER/cpy.tpl'),
            className: 'container',
            /** reakcie na kliknutie v menu */
            events: {
                'click a.trigger': function(event) {
                    const data = $(event.currentTarget).data('trigger');
//                  console.log('click a.trigger ', data);                    
                    //channel && event
                    if(data.c && data.e){
                        //options
                        if(!data.o){
                            data.o = {};
                        }
                        //channel event options
                        Ra.trigger(data.c, data.e, data.o);
                    }
                }
            }
        }),
        Msg: Mn.View.extend({
            template: require('FOOTER/msg.tpl'),
            templateContext: function() {
                // find App object             
                const App = Ra.request('app','this');
                return {
                    text: App.getOption('text')
                };
            },
            className: 'alert',
            initialize: function(options){ 
                // find App object             
                const App = Ra.request('app','this');
                App.mergeOptions(options,['text','type']);
                if (App.getOption('type')) {
                    this.$el.addClass('alert-' + App.getOption('type'));
                }
            }
        })
    };
});