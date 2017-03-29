/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('modal.view', ['backbone.marionette', 'backbone.radio'],
function ( Mn, Ra ) {
    //
    return {      
        header: Mn.View.extend({        
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
                //feedback for close modalize event
                region.$el.on('hidden.bs.modal', function (e) {
                    const Ch = Ra.channel('ChModal');
                    Ch.trigger('close:modal');
                });         
                //show modalized view
                region.$el.modal('show');
            },
            onDemodalize: function(region){ 
                //shut off feedback for close modalize event
                region.$el.off('hidden.bs.modal');
                //remove modalized view
                region.$el.modal('hide');              
            }                       
        })
    };
});