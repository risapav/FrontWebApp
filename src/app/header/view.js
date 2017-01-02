/**
 * Module representing a template.
 * @module
 * @param {type} APP
 * @param {type} Templates
 * @return {object} description
 */
define([
    'app',
    'apps/header/temp',
    'moment',
    'bootstrap'
],
    function (APP, Templates, Moment) {
        'use strict'; 
//----------------------------------------------------------------------------//

APP.module('Header.Views', /** @class */
    function (Mod, App, Backbone, Marionette, $, _) { /** @lends App#Header.Views */
//----------------------------------------------------------------------------//
/**
  * Class description view
  * @class
  * @name Layout 
  * @extends Marionette.ItemView
  * @memberOf App.Header.Views
  */
 Mod.Layout = Marionette.LayoutView.extend(/** @lends App.Header.Views.Layout */{
     template: _.template(Templates.layout),
     tagName: 'div',
     regions: {menuRegion: '#menu-region'},
     /** reakcie na kliknutie v menu */
     events: {
         'click #brand': 'brandClicked'
     },
     /** reakcia na kliknute tlacitko v menu */
     brandClicked: function () {
         /** pingni server */
         App.commands.execute('header:ping', {});
     },
     initialize: function () {
         App.addRegions(this.getRegions());       
     }
 });
//----------------------------------------------------------------------------//
/**
 * Class description view
 * @class
 * @name Menu
 * @extends Marionette.ItemView
 * @memberOf App.Header.Views
 */
Mod.Menu = Marionette.ItemView.extend(/** @lends App.Header.Views.Menu */{
    tagName: 'div',
    template: false,
    templateHelpers: function () {
        return { role: this.model.get('role') };
    },
    /** reakcie na kliknutie v menu */
    events: {
        'click .navbar-nav': 'menuClicked'
    },
    /** reakcia na kliknute tlacitko v menu */
    menuClicked: function () {
        //nastavit casovac na prepinanie v menu
        var menuTimer = this.model.get('menuTimer');
        menuTimer.start();
    },
    modelEvents: {
        'change:role': 'roleChanged'
    },
    roleChanged: function () {
        //prekreslit menu
        this.render();
    },    
    //vyber sablony podla role
    onBeforeRender: function () {
        var role = this.model.get('role');
        var template = false;
        switch (role) {
            case 'admin': template = Templates.menu2; break;
            case 'user': template = Templates.menu1; break;
            default: template = Templates.menu0; break;
        }
        _.extend(this.options, {template: _.template(template)});
    }
});
//----------------------------------------------------------------------------//
    /**
     * Class description view
     * @class
     * @name Time
     * @extends Marionette.ItemView
     * @memberOf App.Header.Views
     */
Mod.Time = Marionette.ItemView.extend(/** @lends App.Header.Views.Time */{
    /**
     * @type {string}
     * @default
     */
    tagName: 'div',
    /**
     * @type {string}
     * @default
     */
    template: _.template(Templates.time),
    /** reakcie na kliknutie v menu */
    events: {'click #time': 'timeClicked'},
    /** reakcia na kliknute tlacitko v menu */
    timeClicked: function () {
        //vypni cas a zapni menu
        App.commands.execute('header:menu', {});
    },
    /**
     * @constructor
     * @param {type} options
     * @returns {undefined}
     */
    initialize: function (options) {
        this.timeTimer = App.reqres.request('object:timer:new', {
            name: 'update/time',
            type: 'interval',
            delay: App.getOption('updateTimeDelay')
        });
        //ukoncenie casovaca pri zruseni menu
        this.listenTo(this, 'before:destroy', function (arg1, arg2) {
            this.timeTimer.destroy();
        }, this);
        //po vykresleni casu spusti casovanie
        this.listenTo(this, 'show', function () {
            this.$time = this.$el.find('#time');
            this.listenTo(this.timeTimer, 'Expired', function (options) {
                var now = new Moment();
                var text = now.format('DD.MM.YYYY HH:mm:ss');
                this.$time.text(text);
            }, this);
            this.timeTimer.start();
        }, this);
    }
});
//----------------------------------------------------------------------------//
});//end of module
//----------------------------------------------------------------------------//
return APP.module('Header.Views');
//----------------------------------------------------------------------------//
});//end of define
//----------------------------------------------------------------------------//