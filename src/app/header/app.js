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
 * Popis modulu Routers.Header
 * @name Routers.Header
 * @namespace Routers
 * @memberOf App.Header
 */
APP.module('Routers.Header', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) {
        /** @lends App#Header.Routers */
//----------------------------------------------------------------------------//
    /**
     * @class
     * @extends Marionette.AppRouter
     * @private
     * @memberOf App.Header.Routers
     */
    var Router = Marionette.AppRouter.extend({
        /** @type {object} */
        appRoutes: {
            'menu': 'menu',
            'time': 'time',
            //zisti v akej ulohe je uzivatel
            'ping': 'ping'
        }
    });
//----------------------------------------------------------------------------//
    /**
     * @class
     * @private
     * @memberOf App.Header.Routers
     */
    var API = {
        /**
         * Zobrazenie menu
         * @param {object} options
         * @returns {none}
         */
        menu: function (options) {
            require(['apps/header/cntrl'], function () {
                App.execute('Header','Show.Menu',options);
            });
        },
        /**
         * Zobrazenie casu po vyprsani timeoutu menuTimer
         * @param {object} options
         * @returns {undefined}
         */
        time: function (options) {
            require(['apps/header/cntrl'], function () {
                APP.execute('Header','Show.Time',options);
            });
        },
        /**
         * Pingnutie servera po vyprsani timeoutu pingTimer
         * @param {object} options
         * @returns {undefined}
         */
        ping: function (options) {
            require(['apps/header/cntrl'], function () {
                /** pingnutie servera pre zistenie uzivatelskej role */
                APP.execute('Header','Com.Ping',options);
            });
        }
    };
//----------------------------------------------------------------------------//
/**
 * Iniciacia subaplikacie pred spustenim before:start module
 * @event
 * @memberOf App.Header.Routers
 * @param {object} options
 */
    Mod.on('before:start', function (options) {
        new Router({controller: API});
    });
//----------------------------------------------------------------------------//
/**
 * Iniciacia subaplikacie po spusteni start module
 * @event
 * @memberOf App.Header.Routers
 * @param {object} options
 */
    Mod.on('start', function (options) {
        options = options || {};
        App.commands.execute('header:menu', _.extend({role: 'none'}, options));
        App.commands.execute('header:ping', {});
    });
//----------------------------------------------------------------------------//
/**
 * Iniciacia subaplikacie po spusteni
 * @event
 * @memberOf App.Header.Routers
 * @param {object} options
 */
    Mod.listenTo(Mod, 'header:time', function (options) {
        API.time(options);
    });
//----------------------------------------------------------------------------//
/**
 * Iniciacia subaplikacie po spusteni
 * @event
 * @memberOf App.Header.Routers
 * @param {object} options
 */
    Mod.listenTo(Mod, 'header:menu', function (options) {
        API.menu(options);
    });
//----------------------------------------------------------------------------//
/**
 * Iniciacia subaplikacie po spusteni
 * @event
 * @memberOf App.Header.Routers
 * @param {object} options
 */
    Mod.listenTo(Mod, 'header:ping', function (options) {
        API.ping(options);
    });
//----------------------------------------------------------------------------//
/**
 * Spustace viditelne z celej aplikacie
 * @event
 * @memberOf App.Header.Routers
 */
    App.commands.setHandlers({
        'header:time': function (options) {
            Mod.trigger('header:time', options);
        },
        'header:menu': function (options) {
            Mod.trigger('header:menu', options);
        },
        'header:ping': function (options) {
            Mod.trigger('header:ping', options);
        }
    });
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return  APP.module('Routers.Header');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//
