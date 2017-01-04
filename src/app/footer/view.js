/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer.view', ['App/app.js', 'backbone', 'backbone.marionette', 'Footer/temp.js'],
    function (APP, Bb, Mn, Templates) {
        
Mod.Message = Marionette.ItemView.extend({

    className: 'navbar navbar-static-bottom text-center alert',

    id: 'messageRegion',

    tagName: 'div',

    template: false
});

Mod.Copyright = Marionette.ItemView.extend({

    className: 'navbar navbar-static-bottom text-center alert',

    tagName: 'div',

    template: _.template(Templates.copy)
});
        
        var View = Mn.View.extend({
            template: '#tpl-view-with-regions',

            regions: {
              firstRegion: '#first-region'
            },

            onRender: function() {
              this.showChildView('firstRegion', new SubView());
            },

            onSomeEvent: function() {
              var first = this.getChildView('firstRegion');
              first.doSomething();
            }
        });
          
    return { 'APP.Footer.View': new View };
});