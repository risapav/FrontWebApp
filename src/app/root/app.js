/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


define('APP',['jquery', 'underscore', 'backbone.marionette'], function( $, _, Mn) {
    
    require("./styles.less");
    // Do something with $ and myModule.
    const MainView = Mn.View.extend({
        template: _.template('<h1><%= title %></h1>')
    });

    // Export a function
    return Mn.Application.extend({
        region: '#main-region',
        
        initialize: function(options) {
            console.log('My value:');//, options.model.get('key'));
        },
        
        onStart: function() {
            this.showView(new MainView());
        }

    });
});

