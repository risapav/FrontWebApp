/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('header.ctrl',['backbone.marionette', 'backbone', 'backbone.radio', 'moment'], 
function (Mn, Ba, Ra, Mo) {
    //       
    const View = require('HEADER/view.js');
    //       
    const Model = Ba.Model.extend({
        defaults:{
            role: ' User'
        }
    });
    //
    return Mn.Object.extend({
        model: null,
        menuView: null,
        leftView: null,
        rightView: null,
        channelName: 'menu',          
        radioEvents: {
            'role': 'doRole',
            'show:menu': 'showMenu',
            'show:time': 'showTime'
        },
        timeout: null,
        initialize: function(){             
            this.model = new Model;
            Ra.trigger('menu','show:menu');
        },
        onBeforeDestroy: function(){          
            //destroy timeout
            if( this.timeout ){
                clearInterval(this.timeout);
                this.timeout = null;
            }
            //destroy model
            if( this.model ){
                delete this.model;
                this.model = null;
            }
        },
        doRole: function(data){            
            if(data){
                this.model.set('role',data);               
            }
        },            
        showMenu: function(){
            // find App object                   
            const App = Ra.request('app','this');       
            // prepare views
            this.menuV = new View.Menu();            
            // find parent view            
            const paView = App.getView();         
            paView.showChildView('header', this.menuV);
            // prepare subview left
            this.leftV = new View.Left({model: this.model});
            this.leftV.render();
            // prepare subview right
            this.rightV = new View.Right({model: this.model});
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
                Ra.trigger('menu','show:time');                    
            }, 1000);              
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