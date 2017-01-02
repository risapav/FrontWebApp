/**
 * Module representing a template.
 * @module
 * @param {type} APP
 * @param {type} Templates
 * @return {object} description
 */
define(['app',
    'apps/version/temp'
],
    function (APP, Templates) {
        'use strict';
//----------------------------------------------------------------------------//
/**
 * Popis modulu Version.Views
 * @name Version.Views
 * @namespace Views
 * @memberOf App.Version
 */
APP.module('Version.Views', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) { /** @lends App#Version.Views */
//----------------------------------------------------------------------------//
    /**
     * Class description view
     * @class
     * @name Message
     * @extends Marionette.ItemView
     * @memberOf App.Version.Views
     */
    Mod.Message = Marionette.ItemView.extend({
        className: 'table-responsive',
        template: _.template(Templates.version),
        templateHelpers: function () {          
            return { lib: this.getOption('lib')};
        }
    });
//----------------------------------------------------------------------------//
    /**
     * zobrazenie zakladneho rozlozenia layoutu
     * @class
     * @name Message
     * @extends Marionette.LayoutView
     * @memberOf App.Version.Views
     */
    Mod.Layout = Marionette.LayoutView.extend(/** @lends App#Version#Views.Layout */{
        /** @lends Version.Views.LayoutView.prototype */
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
return APP.module('Version.Views');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------/