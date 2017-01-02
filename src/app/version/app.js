/**
 * Module representing a template.
 * @module
 * @param {type} APP
 * @return {object} description
 */
define(['app'], function(APP) {
    'use strict';
//----------------------------------------------------------------------------//
/**
 * Popis modulu Routers.About
 * @name Routers.About
 * @namespace Routers
 * @memberOf App.About
 */
APP.module('Routers.Version', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) {
        /** @lends App#Version.Routers */
//----------------------------------------------------------------------------//
    /**
     * @class
     * @extends Marionette.AppRouter
     * @private
     * @memberOf App.Version.Routers
     */
    var Router = Marionette.AppRouter.extend({
        /** @type {object} */
        appRoutes: {
            'version': 'show'
        }
    });
//----------------------------------------------------------------------------//
    /**
     * @class
     * @private
     * @memberOf App.Version.Routers
     */
    var API = {
        show: function (options) {
            require(['apps/version/cntrl'], function () {
                /** zobrazenie version okna */
                App.execute('Version', 'Show.Message', options);
            });
        }
    };
//----------------------------------------------------------------------------//
    /**
     * @event App.Version.Routers#before:start
     */
    Mod.on('before:start', function (options) {
        new Router({controller: API});
    });
//----------------------------------------------------------------------------//
    /**
     * @event App.Version.Routers#about:show
     */
    Mod.listenTo(Mod, 'version:show', function (options) {
        API.show(options);
    });
//----------------------------------------------------------------------------//
    /**
     * @event App#version:show
     */
    App.commands.setHandler('version:show', function (options) {
        Mod.trigger('version:show', options);
    });
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return  APP.module('Routers.Version');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//