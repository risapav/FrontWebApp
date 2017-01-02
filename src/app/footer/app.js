/**
 * Module representing a template.
 * @module
 * @param {type} APP
 * @return {object} description
 */
define(['app'], function (APP) {
    'use strict';
//----------------------------------------------------------------------------//
/**
 * Popis modulu Routers.Footer
 * @class App.Routers#Footer
 * @namespace Routers.Footer
 * @memberOf App
 */
APP.module('Routers.Footer', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) {
        /** @lends App.Routers#Footer */
//----------------------------------------------------------------------------//
    /**
     * @class
     * @extends Marionette.AppRouter
     * @private
     * @memberOf App.Footer.Routers
     */
    var Router = Marionette.AppRouter.extend({
    /** @type {object} */
        appRoutes: {
            'message': 'message',
            'footer': 'show'
        }
    });
//----------------------------------------------------------------------------//
    /**
     * @class
     * @private
     * @memberOf App.Footer.Routers
     */
    var API = {
        show: function (options) {
            require(['apps/footer/cntrl'],function(){
                App.execute('Footer','Show.Footer',options);
            });
        },
        message: function (options) {
            require(['apps/footer/cntrl'],function(){
                App.execute('Footer','Show.Message',options);
            });
        }
    };
//----------------------------------------------------------------------------//
/**
 * @event App.Footer.Routers#before:start
 */
    Mod.on('before:start', function (options) {
        new Router({controller: API});
    });
//----------------------------------------------------------------------------//
/**
 * @event App.Footer.Routers#start
 */
    Mod.on('start', function (options) {
        App.commands.execute('footer:message', {type: 'alert', text: 'pokus'});
    });
//----------------------------------------------------------------------------//
/**
 * @event App.Footer.Routers#stop
 */
    Mod.on('stop', function (options) {
        console.log('module ', App.currentAPP.moduleName);
    });
//----------------------------------------------------------------------------//
/**
 * @event App.Footer.Routers#foter:show
 */
    Mod.listenTo(Mod, 'footer:show', function (options) {
        API.show(options);
    });
//----------------------------------------------------------------------------//
/**
 * @event App.Footer.Routers#foter:message
 */
    Mod.listenTo(Mod, 'footer:message', function (options) {
        API.message(options);
    });
//----------------------------------------------------------------------------//
/**
 * App.commands pre Footer
 */
    App.commands.setHandlers({
        /**
         * @event App#footer:show
         * @param {object} options
         * @returns void
         */
        'footer:show': function (options) {
            Mod.trigger('footer:show', options);
        },
        /**
         * @event App#footer:message
         * @param {object} options
         * @returns void
         */
        'footer:message': function (options) {
            Mod.trigger('footer:message', options);
        }
    });
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return  APP.module('Routers.Footer');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//