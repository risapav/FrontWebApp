/**
 * @copyright (c) 2015
 * @author Pavol Riša
 * Module representing a template.
 * @module
 * @param {type} APP
 * @param {type} Views
 * @return {object} description
 */
define([
    'app',
    'apps/footer/view',
    'obje/timer'
], function (APP, Views) {
    'use strict';
//----------------------------------------------------------------------------//
/**
 * Popis modulu Footer
 * @name Footer
 * @namespace Footer
 * @memberOf App
 * @see App#myInstanceMethod
 */
APP.module('Footer', /** @lends App#Footer */ APP.Submodule, {isPermanent: true});
//----------------------------------------------------------------------------//
/**
 * Popis modulu Footer.Controllers
 * @class App.Footer#Controllers
 * @namespace Footer.Controllers
 * @memberOf App
 */
APP.module('Footer.Controllers', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) {
        /** @lends App.Footer#Controllers */
//----------------------------------------------------------------------------//
    /**
     * Class description Show
     * @extends Marionette.Controller
     * @memberOf App.Footer.Controllers
     * @private
     */
    var Show = Marionette.Controller.extend({
        /**
         * napis spravu do footeru
         * @param {object} options
         * @returns {undefined}
         */
        Message: function (options) {
            var view = new Views.Message();
            App.footerRegion.show(view);
            if (options.type) {
                view.$el.addClass(options.type);
            }
            if (options.text) {
                view.$el.text(options.text);
            }
            //spusti casovac na prepnutie
            Mod.Timeout.start();
        },
        /**
         * napis copyright do footeru
         * @param {object} options
         * @returns {undefined}
         */
        Footer: function (options) {
            var view = new Views.Copyright();
            App.footerRegion.show(view);
        }
    });
//----------------------------------------------------------------------------//
    /**
     * @event App.Footer.Controllers#before:start
     * @returns {undefined}
     */
    Mod.on('before:start', function(){
        this.Show = new Show();
        //nastav generovanie udalosti po vyprsani timeoutu
        this.Timeout = App.reqres.request('object:timer:new', {
            type: 'timeout',
            delay: App.getOption('footerTimerDelay'),
            name: 'footer timer'
        });
//console.log('footer before:start<<<<<<<<<<<<<<<', Mod, App);
    },this);
//----------------------------------------------------------------------------//
    /**
     * @event App.Footer.Controllers#start
     * @returns {undefined}
     */
    Mod.on('start', function(){
        this.listenTo(this.Timeout, 'Expired', function(options){
            App.commands.execute('footer:show');
//            console.log('footer/timer/expired', options);
        }, this);
    });
//----------------------------------------------------------------------------//
    /**
     * @event App.Footer.Controllers#stop
     * @returns {undefined}
     */
    Mod.on('stop', function(){
        this.Timeout.destroy();
        this.Show.destroy();
    }, this);
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return  APP.module('Footer.Controllers');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//