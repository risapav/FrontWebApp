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
            templateContext: function(){
                // find App object             
                const App = Ra.request('app','this');
                //
                return {
                    webname: App.getOption('webname')
                };   
            },
            className: 'container-fluid',
            regions: {
                left: '#left',
                right: '#right'
            },
            /** reakcie na kliknutie v menu */
            events: {
                'click a.request': function(event) {
                    const data = $(event.currentTarget).data('request');
console.log('click a.request ', data);                    
                    //channel && event
                    if(data.c && data.e){
                        //options
                        if(!data.o){
                            data.o = {};
                        }
                        //channel event options
                        Ra.request(data.c, data.e, data.o);                        
                        //Ra.channel(data.c).request(data.e); 
                    }
                },
                'click a.trigger': function(event) {
                    const data = $(event.currentTarget).data('trigger');
console.log('click a.trigger ', data);                    
                    //channel && event
                    if(data.c && data.e){
                        //options
                        if(!data.o){
                            data.o = {};
                        }
                        //channel event options
                        Ra.trigger(data.c, data.e, data.o);
                        //Ra.channel(data.c).trigger(data.e); 
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