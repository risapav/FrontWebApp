/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('modal.ctrl',['backbone.marionette', 'backbone.radio', 'underscore'], 
function (Mn, Ra, _) {
    //       
    const View = require('MODAL/view.js');         
    //
    return Mn.Object.extend({
        modalView: null,
        headerView: null,
        bodyView: null,
        footerView: null,
        channelName: 'ChModal',
        radioEvents: {
            'show:modal': 'showModal',
            'close:modal': 'closeModal'
        },
        onBeforeDestroy: function(){
console.log('modal.ctrl onBeforeDestroy');
        },
        closeModal: function(options){
            // find App object           
            const App = Ra.channel('ChApp').request('app:this');
            // find parent view
            const paView = App.getView();
            const dialogRegion = paView.getRegion('dialog');
            if(this.modalView){
                this.modalView.triggerMethod('demodalize', dialogRegion);
            }
            dialogRegion.empty();                
        },
        showModal: function (options) {
            if(options === null){options = {};}
            const opt = _.defaults(options, {
                header: View.header,
                body: View.body,
                footer: View.footer
            });
            // find App object           
            const App = Ra.channel('ChApp').request('app:this');
            // prepare views
            this.modalView = new View.modal();            
            // find parent view   
            const paView = App.getView();
            const dialogRegion = paView.getRegion('dialog');
            dialogRegion.show(this.modalView);     
            // prepare subview header            
            this.header = new opt.header;
            this.modalView.showChildView('header', this.header);
            // prepare subview body
            this.body = new opt.body;      
            this.modalView.showChildView('body', this.body);
            // prepare subview footer
            this.footer = new opt.footer;       
            this.modalView.showChildView('footer', this.footer);          
            //modalize view
            if(this.modalView){
                this.modalView.triggerMethod('modalize', dialogRegion);
            };
//            this.$el.modal({backdrop: this.model.get('backdrop')});
        }
    });   
});