/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define('entities.repository', ['backbone', 'underscore'],
function ( Ba, _ ) { 
    const Repository = Ba.Model.extend({
        initialize: function(options){
            options || (options = {});
            this.name = options.name || "NAME";
            this.pswd = options.pswd || "PSWD";

            var self = this;
            this.on("sync", function(){
                self.set({githubName: self.get("name")}, {silent:true});
            });
        },
        sync: function(method, model, options){
            var self = this,
            config = {
                beforeSend: function (xhr) {
                    xhr.setRequestHeader ("Authorization", "Basic " + btoa(self.name + ":" + self.pswd));
//console.log("Authorization " + self.name + ":" + self.pswd + '  ' + btoa(self.name + ":" + self.pswd));                        
                }
            };
            switch(method){
            case 'create':
                config = _.extend(config, {
                    method: 'POST',
                    url: _.result(this, 'urlRoot') + '/create',
                    data: $.param(this['attributes'])
                });
                break;
            case 'read':
                    config = _.extend(config, {
                    method: 'GET',
                    url: _.result(this, 'urlRoot') + '/read?id=' + model.get('id')
                });
                break;
            case 'update':
                config = _.extend(config, {
                    method: 'POST',
                    url: _.result(this, 'urlRoot') + '/update?id=' + model.get('id'),
                    data: $.param(this['attributes'])
                });
                break;
            case 'delete':
                config = _.extend(config, {
                    method: 'DELETE',
                    url: _.result(this, 'urlRoot') + '/delete?id=' + model.get('id')
                });
                break;
            };
            // add API call configuration to the `options` object
            options = _.extend(options, config);
            return Ba.Model.prototype.sync.call(this, method, model, options);
        },        
        url: function(){
            return _.result(this, "urlRoot") + "/repos/" + this.name + "/" + (this.get("githubName") || this.get("name"));
        },
        urlRoot: ''
    });
    
    return Repository;
});