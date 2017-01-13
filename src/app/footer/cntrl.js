/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer.ctrl',['backbone.marionette', 'backbone.radio'], 
    function (Mn, Radio) {
        //       
        const View = require('./view.js');
        //       
        const appChannel = Radio.channel('app');
        const App = appChannel.request('app:this');
        //
        return Mn.Object.extend({
            channelName: 'footer',
            radioEvents: {
                'show:msg': 'showMessage',
                'show:cpy': 'showFooter'
            },

            showMessage: function (options) {
                const view = new View({template: false});
                App.view.showChildView('footer', view);
                //
                if (options.type) {
                    view.$el.addClass(options.type);
                }
                if (options.text) {
                    view.$el.text(options.text);
                }
                //spusti casovac na prepnutie
//                Mod.Timeout.start();
console.log('showMessage>>', view, this, App);
            },

            showFooter: function () {
                const view = new View();
                App.view.showChildView('footer', view);
console.log('showFooter>>', view, this, App);                
            }
        });
    
});

/*
APP.module('Footer', APP.Submodule, {isPermanent: true});

APP.module('Footer.Controllers', 
    function (Mod, App, Backbone, Marionette, $, _) {

    var Show = Marionette.Controller.extend({

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

        Footer: function (options) {
            var view = new Views.Copyright();
            App.footerRegion.show(view);
        }
    });

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

    Mod.on('start', function(){
        this.listenTo(this.Timeout, 'Expired', function(options){
            App.commands.execute('footer:show');
//            console.log('footer/timer/expired', options);
        }, this);
    });

    Mod.on('stop', function(){
        this.Timeout.destroy();
        this.Show.destroy();
    }, this);

});

*/
