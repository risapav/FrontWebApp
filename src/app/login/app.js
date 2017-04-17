/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('login.app',['backbone.radio'], 
function (Ra) {
    //
    const Ct = require('LOGIN/cntrl.js');
    //
    const SubApp = require('LIB/subapp.js');
    //
    return SubApp.extend({
        options: { name: 'LOGIN', resist: true, ctrl: Ct }, 
        //
        routes: {
            'login': 'Login',
            'logout': 'Logout',
            'signin': 'Signin',
            'signout': 'Signout'
        },
        Login: function (){           
            Ra.trigger('login','login');
        },
        Logout: function (){           
            Ra.trigger('login','logout');
        },
        Signin: function (options){
            Ra.trigger('login','signin', options);
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
            Ra.trigger('login','signout', options);           
        }

    });
});   