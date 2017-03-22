/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('header.view', ['backbone.marionette'],
function ( Mn ) {
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
    'click #time': function(event) {
      console.log('time clicked', event);
    }
  }  ,              
            onDestroy: function(){
                console.log('onDestroy Menu');
            }
        }), 
        Left: Mn.View.extend({
            template: require('HEADER/left.tpl'),
            el: '#left',
            onDestroy: function(){
                console.log('onDestroy Left');
            }            
        }), 
        Right: Mn.View.extend({
            template: require('HEADER/right.tpl'),
            el: '#right',
            
            onDestroy: function(){
                console.log('onDestroy Right');
            },
    /** reakcie na kliknutie v menu */
  events: {
    'click a#login': function(a,b,c) {
      console.log('a login clicked', a,b,c);
    },
        'click a': function(a,b,c) {
      console.log('a clicked', a,b,c);
    }        
  }    
    /*
ui: {
    login: '#login',
    logout: '#logout'
},
events: {
    'click @ui.login': 'Flogin',
    'click @ui.logout': 'Flogin'
},
            */
/*
            events: {
                'click #login': 'Flogin',//'loginCl',
                'click #logout': 'Flogin'//'logoutCl'
            },
*/
/*
  triggers: {
    'click login': 'link:clicked'
  },

  onLinkClicked: function(view, event) {
    console.log('Show the modal',view, event);
  } ,           
            Flogin: function(a,b,c){
                console.log('Flogin', a, b, c);
            }
*/            
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