/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */
        
require(['ROOT/app.js'], function(App){
    //    
    //    
    const app = new App({
        title: 'Marionette spustene', 
        version: '0.0.1', 
        prgname: 'APP_1',
        msg_delay: 5000
    });
    //start app   
    app.start();
});
