/**
 * Module representing a template.
 * @module
 * @param {type} APP
 * @return {object} description
 */
define('about',['app'], function(APP) {
    'use strict';
//----------------------------------------------------------------------------//
/**
 * Popis modulu Routers.About
 * @name Routers.About
 * @namespace Routers
 * @memberOf App.About
 */
APP.module('Routers.About', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) {
        /** @lends App#About.Routers */
//----------------------------------------------------------------------------//
    /**
     * @class
     * @extends Marionette.AppRouter
     * @private
     * @memberOf App.About.Routers
     */
    var Router = Marionette.AppRouter.extend({
        /** @type {object} */
        appRoutes: {
            'about': 'show'
        }
    });
//----------------------------------------------------------------------------//
    /**
     * @class
     * @private
     * @memberOf App.About.Routers
     */
    var API = {
        show: function (options) {
            //zobrazit loader
            App.commands.execute('loader:show', options);
            require(['apps/about/cntrl'], function () {
                /** zobrazenie about okna */
                App.execute('About', 'Show.Message', options);
            });
        }
    };
//----------------------------------------------------------------------------//
    /**
     * @event App.About.Routers#before:start
     */
    Mod.on('before:start', function (options) {
        new Router({controller: API});
    });
//----------------------------------------------------------------------------//
    /**
     * @event App.About.Routers#about:show
     */
    Mod.listenTo(Mod, 'about:show', function (options) {
        API.show(options);
    });
//----------------------------------------------------------------------------//
    /**
     * @event App#about:show
     */
    App.commands.setHandler('about:show', function (options) {
        Mod.trigger('about:show', options);
    });
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return  APP.module('Routers.About');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//