/**
 * Module representing a template.
 * @module
 * @param {type} APP
 * @param {type} Templates
 * @return {object} description
 */
define([
    'app',
    'apps/about/temp'
],
    function (APP, Templates) {
        'use strict';
//----------------------------------------------------------------------------//
/**
 * Popis modulu About.Views
 * @name module('About.Views')
 * @namespace Views
 * @memberOf App.About
 */
APP.module('About.Views', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) { /** @lends App#About#Views */
//----------------------------------------------------------------------------//
/**
 * Class description view
 * @class
 * @name Message
 * @extends Marionette.ItemView
 * @memberOf App.About.Views
 */
Mod.Message = Marionette.ItemView.extend(/** @lends App#About#Views.Message */{
    template: _.template(Templates.about),
    templateHelpers: function () {
        return {
            prgname: App.getOption('prgname'),
            version: App.getOption('version')
        };
    }
});
//----------------------------------------------------------------------------//
/**
 * zobrazenie zakladneho rozlozenia layoutu
 * @class
 * @name Message
 * @extends Marionette.LayoutView
 * @memberOf App.About.Views
 */
Mod.Layout = Marionette.LayoutView.extend(/** @lends App#About#Views.Layout */{
    /** @lends About.Views.LayoutView.prototype */
    template: _.template(Templates.layout),
    tagName: 'div',
    className: 'row',

    regions: {
        sidebarRegion: '#sidebar-region',
        panelRegion: '#panel-region'
    },
    initialize: function(){
        App.addRegions(this.getRegions());
    }
});
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return APP.module('About.Views');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//