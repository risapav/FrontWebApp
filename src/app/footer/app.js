/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer',['App/app.js', 'backbone.marionette', 'backbone.radio'], 
    function (APP, Mn, Radio, Controller) {
        var Controller = require('./cntrl.js');
        
        var Router = Mn.AppRouter.extend({
            controller: Controller,

            appRoutes: {
                'footer:show': 'showFooter',
                'footer:message': 'showMessage'
            }
        });
    
    return {'APP.Routers.Footer': Router };
});

/*
APP.module('Routers.Footer', 
    function (Mod, App, Backbone, Marionette, $, _) {

    var Router = Marionette.AppRouter.extend({

        appRoutes: {
            'message': 'message',
            'footer': 'show'
        }
    });

    Mod.on('before:start', function (options) {
        new Router({controller: API});
    });

    Mod.on('start', function (options) {
        App.commands.execute('footer:message', {type: 'alert', text: 'pokus'});
    });

    Mod.on('stop', function (options) {
        console.log('module ', App.currentAPP.moduleName);
    });

    Mod.listenTo(Mod, 'footer:show', function (options) {
        API.show(options);
    });

    Mod.listenTo(Mod, 'footer:message', function (options) {
        API.message(options);
    });

    App.commands.setHandlers({

        'footer:show': function (options) {
            Mod.trigger('footer:show', options);
        },

        'footer:message': function (options) {
            Mod.trigger('footer:message', options);
        }
    });
    
*/    