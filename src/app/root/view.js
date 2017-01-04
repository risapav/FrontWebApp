/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('root.view', ['underscore', 'backbone.marionette'],
    function (_, Mn) {
        
        const Template = _.template(require('App/layout.html'));
        
        return Mn.View.extend({
            template: Template,
            regions: {
                header: '#header-region',
                footer: '#footer-region',
                main: '#main-region'
            }
        });       
});