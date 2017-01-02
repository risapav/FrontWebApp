/**
 * Module representing a template.
 * @module
 * @param {type} APP
 * @param {type} Templates
 * @return {object} description
 */
define([
    'app',
    'apps/footer/temp'
],
    function (APP, Templates) {
        'use strict';
//----------------------------------------------------------------------------//
/**
 * Popis modulu Footer.Views
 * @class App.Footer#Views
 * @namespace Footer.Views
 * @memberOf App
 */
APP.module('Footer.Views',
    function (Mod, App, Backbone, Marionette, $, _) {
//----------------------------------------------------------------------------//
/**
 * Class description view
 * @class App.Footer.Views#Message
 * @extends Marionette.ItemView
 * @memberOf App.Footer.Views
 */
Mod.Message = Marionette.ItemView.extend({
    /**
     * @type {string}
     * @default
     */
    className: 'navbar navbar-static-bottom text-center alert',
    /**
     * @type {string}
     * @default
     */
    id: 'messageRegion',
    /**
     * @type {string}
     * @default
     */
    tagName: 'div',
    /**
     * @type {string}
     * @default
     */
    template: false
});
//----------------------------------------------------------------------------//
/**
 * Class description view
 * @name Footer.Views#Copyright
 * @class App.Footer.Views#Copyright
 * @extends Marionette.ItemView
 * @memberOf App.Footer.Views
 */
Mod.Copyright = Marionette.ItemView.extend({
    /**
     * @type {string}
     * @default
     */
    className: 'navbar navbar-static-bottom text-center alert',
    /**
     * @type {string}
     * @default
     */
    tagName: 'div',
    /**
     * @type {string}
     * @default
     */
    template: _.template(Templates.copy)
});
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return APP.module('Footer.Views');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//