/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('header.view', ['backbone.marionette'],
    function ( Mn ) {
        //    
        require("./header.less");
        //
        const TemplateMenu0 = require('Header/menu_0.tpl');
        const TemplateMenu1 = require('Header/menu_1.tpl');
        const TemplateMenu2 = require('Header/menu_2.tpl');
        //
        return { 
            Menu0: Mn.View.extend({
                template: TemplateMenu0
                
            }),
            Menu1: Mn.View.extend({
                template: TemplateMenu1
                
            }),
            Menu2: Mn.View.extend({
                template: TemplateMenu2
                
            })
        };
});