/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer.tmp',['Footer/copy.html'],
    function (CopyTpl) {

        return {
            'copy': CopyTpl
        };
    }
);