/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('modal.view', ['backbone.marionette', 'underscore'],
function ( Mn, _ ) {
    //
    return {      
        header: Mn.View.extend({
            attributes: {
                'type': 'button',
                'data-dismiss': 'modal',
                'aria-label': 'Close'
            },
            className: 'close',
            tagName: 'button',
            template: require('MODAL/header.tpl'),
            onDestroy: function(){
                console.log('onDestroy mheader');
            }            
        }),    
        body: Mn.View.extend({
            template: require('MODAL/body.tpl'),
            onDestroy: function(){
                console.log('onDestroy mbody');
            }            
        }),
        footer: Mn.View.extend({
            template: require('MODAL/footer.tpl'),
            onDestroy: function(){
                console.log('onDestroy mfooter');
            }            
        }),        
        modal: Mn.View.extend({ 
            attributes: {
                role: 'document'
            },
            className: 'modal-dialog',
            template: require('MODAL/modal.tpl'),            
            regions: {
                header: '.modal-header',
                body: '.modal-body',
                footer: '.modal-footer'
            },     
            onDestroy: function(){
                console.log('onDestroy modal');
            },            
            onModalize: function(region){ 
                region.$el.modal('show');
console.log('onModalize', region);                
            },
            onDemodalize: function(region){ 
                region.$el.modal('hide'); 
console.log('onDeModalize', region);                
            }                       
        })
    };
});