/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('footer.view', [ 'backbone.marionette' ],
    function ( Mn ) {
        //    
        require("./footer.less");
        //
        const Template = require('Footer/copy.tpl');
        //
        return Mn.View.extend({
           template: Template,
           className: 'container'
        });
});