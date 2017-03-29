/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('header.ctrl',['backbone.marionette', 'backbone.radio', 'moment'], 
function (Mn, Ra, Mo) {
    //       
    const View = require('HEADER/view.js');
    //       
    return Mn.Object.extend({
        menuView: null,
        leftView: null,
        rightView: null,
        channelName: 'ChHeader',          
        radioEvents: {
            'show:menu': 'showMenu',
            'show:time': 'showTime'
        },
        timeout: null,
        onBeforeDestroy: function(){
            //destroy timeout
            if( this.timeout ){
                clearInterval(this.timeout);
                this.timeout = null;
            }
        },        
        showMenu: function(){
            // find App object           
            const App = Ra.channel('ChApp').request('app:this');
Ra.channel('ChApp').request('app:lon');            
            // prepare views
            this.menuV = new View.Menu();            
            // find parent view            
            const paView = App.getView();         
            paView.showChildView('header', this.menuV);
            // prepare subview left
            this.leftV = new View.Left();
            this.leftV.render();
            // prepare subview right
            this.rightV = new View.Right();
            this.rightV.render();
            // prepare subview time
            this.timeV = new View.Time();
            this.timeV.render();
            //destroy timeout
            if( this.timeout ){
                clearInterval(this.timeout);
            }
            this.timeout = setInterval(function(){
                //
                const headerCh = Ra.channel('ChHeader');           
                headerCh.trigger('show:time');                    
            }, 1000);  
Ra.channel('ChApp').request('app:loff');             
        },
        showTime: function(){ 
            var now = new Mo();
            var text = now.format('DD.MM.YYYY HH:mm:ss');
            document.getElementById('dtText').innerHTML=text;
        }       
    });
});

/*
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

    var Show = Marionette.Controller.extend({

        Layout: function (options) {

        },

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

    this.on('before:start', function(){
        //priprav controller zobrazovania
        this.Show = new Show();
        //priprav controller pingovania servera
        this.Com = new Com();

        this.menuTimer = App.reqres.request('object:timer:new', {
            name: 'menu/time',
            type: 'timeout',
            delay: App.getOption('menuTimerDelay')
        });

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

    Mod.on('start', function(){

        this.listenTo(Mod.menuTimer, 'Expired', function (options) {
            App.commands.execute('header:time', options);
        });

        this.listenTo(Mod.pingTimer, 'Expired', function (options) {
            App.commands.execute('header:ping');
        });
    });

    this.on('stop', function () {
        this.pingTimer.destroy();
        this.menuTimer.destroy();
        this.Com.destroy();
        this.Show.destroy();
        this.Model.destroy();
    }, this);
//----------------------------------------------------------------------------//
});//end of module
*/