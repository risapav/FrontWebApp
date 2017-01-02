/**
 * Module representing a template.
 * @module
 * @param {type} APP
 * @param {type} Views
 * @return {object} description
 */
define([
    'app',
    'apps/header/view',
    'obje/timer',
    'enti/user'
], function (APP, Views) {
    'use strict';
//----------------------------------------------------------------------------//
/**
 * Popis modulu Header
 * @name Header
 * @namespace Header
 * @memberOf App
 * @see App#myInstanceMethod
 */
APP.module('Header', /** @lends App#Header */ APP.Submodule, {isPermanent: true});
//----------------------------------------------------------------------------//
/**
 * Popis modulu Header.Controllers
 * @module Header.Controllers
 * @namespace Controllers
 * @memberOf App.Header
 */
APP.module('Header.Controllers', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) {
        /** @lends App#Header.Controllers */
//----------------------------------------------------------------------------//
    /**
     * Class description Controller
     * @name App.Header.Controllers.Controller
     * @extends Marionette.Controller
     * @memberOf App.Header.Controllers
     * @private
     */
    var Com = Marionette.Controller.extend({
        Ping: function (options) {
            var ajaxOptions = _.extend({
                type: 'GET',
                url: App.getOption('urlRoot') + App.getOption('urlPing')
            }, options);
            $.ajax(ajaxOptions).always(function () {
       
            }).success(function (payload, textStatus, jqXHR) {
                //odlozit aktualnu rolu uzivatela
                switch(payload.role){
                    case 'admin': Mod.Model.set('role', 'admin');break;
                    case 'user': Mod.Model.set('role', 'user');break;
                    default: Mod.Model.set('role', '');break;
                }
                //napisat chybovu hlasku do footer
                App.commands.execute('footer:message', {
                    type: payload.type,
                    text: payload.message
                });
            }).error(function (payload, textStatus, errorThrown) {
                if (payload.status) {
                    App.commands.execute('footer:message', {
                        type: 'alert-danger',
                        text: payload.statusText + ' ' + payload.status
                    });
                }
            });
            //spusti casovac pingnutia servera
            Mod.pingTimer.start();
        }
    });
//----------------------------------------------------------------------------//
    /**
     * Class description Controller
     * @name App.Header.Controllers.Show
     * @extends Marionette.Controller
     * @memberOf App.Header.Controllers
     * @private
     */
    var Show = Marionette.Controller.extend({
        /**
         * vykresli layout
         * @param {type} options
         * @returns {undefined}
         */
        Layout: function (options) {

        },
        /**
         * vykresli cas v header menu
         * @param {type} options
         * @returns {undefined}
         */
        Time: function (options) {
            //vykresli layout
            var layout = new Views.Layout(
                _.extend({}, {model: Mod.Model}, options)
            );
            App.headerRegion.show(layout);
            //vykresli cas
            var view = new Views.Time(options);
            App.menuRegion.show(view);
        },
        /**
         * vykresli header menu
         * @param {type} options
         * @returns {undefined}
         */
        Menu: function (options) {
            //vykresli layout
            var layout = new Views.Layout(
                _.extend({}, {model: Mod.Model}, options)
            );
            App.headerRegion.show(layout);
            //vykresli menu
            var view = new Views.Menu(
                _.extend({}, {model: Mod.Model}, options)
            );
            App.menuRegion.show(view);
            //spusti casovac na prepnutie
            Mod.menuTimer.start();
        }
    });
//----------------------------------------------------------------------------//
    /**
     * @event App.Header.Controllers#before:start
     * @returns void
     */
    this.on('before:start', function(){
        //priprav controller zobrazovania
        this.Show = new Show();
        //priprav controller pingovania servera
        this.Com = new Com();
        /**
         * nastav generovanie udalosti po vyprsani timeoutu
         * @public
         */
        this.menuTimer = App.reqres.request('object:timer:new', {
            name: 'menu/time',
            type: 'timeout',
            delay: App.getOption('menuTimerDelay')
        });
        /**
         * nastav generovanie udalosti po vyprsani timeoutu
         * @public
         */
        Mod.pingTimer = App.reqres.request('object:timer:new', {
            name: 'ping/timer',
            type: 'interval',
            delay: App.getOption('pingTimerDelay')
        });
        //priprav model
        this.Model = App.reqres.request('user:entity:new',
            {pingTimer: Mod.pingTimer, menuTimer: Mod.menuTimer}
        );
    }, this);
//----------------------------------------------------------------------------//
    /**
     * @event App.Header.Controllers#start
     * @returns {undefined}
     */
    Mod.on('start', function(){
        /**
         * Osetrenie udalosti Expired pre aktualizovanie casu v menu
         * @event Expired
         * @param {Object} options
         */
        this.listenTo(Mod.menuTimer, 'Expired', function (options) {
            App.commands.execute('header:time', options);
        });
        /**
         * Osetrenie udalosti Expired pre generovanie pingnutia servera
         * @event
         * @param {Object} options
         */
        this.listenTo(Mod.pingTimer, 'Expired', function (options) {
            App.commands.execute('header:ping');
        });
    });
//----------------------------------------------------------------------------//
    /**
     * @event App.Header.Controllers#stop
     * @returns void
     */
    this.on('stop', function () {
        this.pingTimer.destroy();
        this.menuTimer.destroy();
        this.Com.destroy();
        this.Show.destroy();
        this.Model.destroy();
    }, this);
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return  APP.module('Header.Controllers');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//