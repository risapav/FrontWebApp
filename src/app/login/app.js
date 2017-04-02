/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('login.app',['backbone.marionette', 'backbone.radio'], 
function (Mn, Ra) {
    //
    const Ch = Ra.channel('ChLogin');
    //     
    const Ct = require('LOGIN/cntrl.js');
    //
    return Mn.AppRouter.extend({
        controller: new Ct,

        routes: {
            'login': 'Login',
            'logout': 'Logout',
            'signin': 'Signin',
            'signout': 'Signout'
        },
        Login: function (){           
            Ch.trigger('do:login');
        },
        Logout: function (){           
            Ch.trigger('do:logout');
        },
        Signin: function (options){
            Ch.trigger('signin', options);
/*            
            options = _.extend({
                model: App.HeaderApp.Show.Model,
                type: 'POST',
                data: _.pick(App.HeaderApp.Show.Model.attributes, 
                    'name', 'pswd', 'remember' ),
                url:  App.settings.get('urlRoot') + App.settings.get('urlSignIn')
            }, options);
*/            
            /** vykonaj ping na server */
/*            
            App.executeAction('LoginApp', App.LoginApp.Show.Controller.Ping, options);  
            
            $.post('/?ts=' + Date.now(), $('#f').serialize(), function(d) {
                    var err = $('#error');
                    if (d instanceof Array) {
                            err.empty();
                            d.forEach(function(o) {
                                    err.append('<div>' + o.error + '</div>');
                            });
                            err.show();
                            return;
                    };
                    err.hide();
                    window.location.href = '/';
            });
*/            
        },
        SignOut: function (options){
            Ch.trigger('signout', options);           
        }

    });
});   