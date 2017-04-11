/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */
        
require(['ROOT/app.js', 'bootstrap'], function(App){   
    //    
    const app = new App({
        title: 'Marionette spustene', 
        //verzia aplikacie
        version: '0.0.1', 
        //nazov aplikacie
        prgname: 'APP_1',
        //spozdenie pocas ktoreho sa zobrazuje info sprava
        msg_delay: 5000,
        role: 'admin'
    });
    //start app   
    app.start();
});
