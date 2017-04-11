/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('header.view', ['backbone.marionette', 'backbone.radio', 'jquery'],
function ( Mn, Ra, $ ) {
    //
    return { 
        Menu: Mn.View.extend({
            template: require('HEADER/menu.tpl'),
            className: 'container-fluid',
            regions: {
                left: '#left',
                right: '#right'
            },
            /** reakcie na kliknutie v menu */
            events: {
                'click a.request': function(event) {
                    const data = $(event.currentTarget).data('request');
                    if(data.ch && data.ev){
                        Ra.channel(data.ch).request(data.ev); 
                    }
                },
                'click a.trigger': function(event) {
                    const data = $(event.currentTarget).data('trigger');
                    if(data.ch && data.ev){
                        Ra.channel(data.ch).trigger(data.ev); 
                    }
                }
            },              
            onDestroy: function(){
                console.log('onDestroy Menu');
            }
        }), 
        Left: Mn.View.extend({
            template: require('HEADER/left.tpl'),
            el: '#left',
            modelEvents: {
                'change:role': 'actOnChange'
            },
            actOnChange: function(){
                this.render();
            },
            onDestroy: function(){
                console.log('onDestroy Left');
            }            
        }), 
        Right: Mn.View.extend({
            template: require('HEADER/right.tpl'),            
            el: '#right',  
            modelEvents: {
                'change:role': 'actOnChange'
            },
            actOnChange: function(){
                this.render();
            },
            onDestroy: function(){
                console.log('onDestroy Right');
            },   
            onRender: function(){               
            }
        }),
        Time: Mn.View.extend({
            template: require('HEADER/time.tpl'),
            el: '#time',
     /** reakcie na kliknutie v menu */
  events: {
    'click #time': function(event) {
      console.log('time clicked', event);
    }
  }  ,         
            onDestroy: function(){
                console.log('onDestroy Time');
            }
        })        
    };
});