/**
 * Module representing a template.
 * @module
 * @param {type} APP
 * @param {type} Views
 * @return {object} description
 */
define([
    'app',
    'apps/version/view', 
    'enti/library'
], function (APP, Views) {
    'use strict';
//----------------------------------------------------------------------------//
/**
 * Popis modulu Version
 * @name Version
 * @namespace Version
 * @memberOf App
 * @see App#myInstanceMethod
 */
APP.module('Version', /** @lends App#Version */ APP.Submodule);
//----------------------------------------------------------------------------//
/**
 * Popis modulu Version.Controllers
 * @class App.Version#Controllers
 * @namespace Version.Controllers
 * @memberOf App
 */
APP.module('Version.Controllers', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) {
        /** @lends App.Version#Controllers */
//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
    /**
     * Class description Show
     * @extends Marionette.Controller
     * @memberOf App.Version.Controllers
     * @private
     */
    var Show = Marionette.Controller.extend({
        /**
         *
         * @param {type} options
         * @returns {undefined}
         */
        Message: function(options){
            //nacitaj kniznice
            var promise = App.reqres.request('library:entities');           
            promise.then(function(lib){               
                //zobraz layout
                var layoutView = new Views.Layout(options);
                App.mainRegion.show(layoutView);
                //zobraz version okno
                var view = new Views.Message({lib: lib});
                App.panelRegion.show(view);                
            });
        }
    });
//----------------------------------------------------------------------------//
    /**
     * @event App.Version.Controllers#before:start
     * @returns {undefined}
     */
    Mod.on('before:start', function(){
        this.Show = new Show();
    },this);
//----------------------------------------------------------------------------//
    /**
     * @event App.Version.Controllers#stop
     * @returns {undefined}
     */
    Mod.on('stop', function(){
        this.Show.destroy();
    }, this);
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return  APP.module('Version.Controllers');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//


