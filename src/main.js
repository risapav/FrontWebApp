/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */
        
require(['ROOT/app.js', 'bootstrap'], 
function(App){   
    //    
    const app = new App({
        title: 'Marionette spustene', 
        //verzia aplikacie
        version: '0.0.5', 
        //nazov aplikacie
        prgname: 'Demo aplikácia',
        //nazov aplikacie
        webname: 'Web Demo',
        //interval aktualizovania casu [ms]
        refresh: 500,
        //spozdenie pocas ktoreho sa zobrazuje info sprava [ms]
        msg_delay: 5000,
        role: 'admin'
    });
    //start app   
    app.start();
});
