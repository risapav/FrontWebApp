define([
    'app',
    'apps/about/view'
], function(APP, Views){
    'use strict';
//----------------------------------------------------------------------------//
APP.module('About', APP.Submodule);
//----------------------------------------------------------------------------//
APP.module('About.Controllers', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) {
//----------------------------------------------------------------------------//
    var Show = Marionette.Controller.extend({
        Message: function(options){
            //vykresli layout
            var layoutView = new Views.Layout(options);
            App.mainRegion.show(layoutView);
            //vykresli about spravu
            var view = new Views.Message(options);
            App.panelRegion.show(view);           
        }
    });
//----------------------------------------------------------------------------//
    Mod.on('before:start', function(){
        this.Show = new Show();
    });
//----------------------------------------------------------------------------//
    Mod.on('stop', function(){
        this.Show.destroy();
    });
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return  APP.module('About.Controllers');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//


