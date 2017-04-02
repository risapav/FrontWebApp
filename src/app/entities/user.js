/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define('entities.user', ['backbone', 'underscore'],
function ( Ba, _ ) { 
    //
    const Repository = require('ENTITIES/repository.js');
    //
    const User = Repository.extend({
        defaults: {
             id: null,
             name: '',
             pswd: '',
             role: 'user',
             remember: true
        },
        toJSON: function(){
            var data = _.pick(this.attributes, 'name', 'pswd', 'role');
            return data;
        }        
    });
    
    return User;
});

/*        
        initialize: function(){
            this.listenTo(this, 'sync', function(){
                this.set({ name: this.get('name') },{ silent:true });
    //console.log('Entities.User sync ', this);
            });
        },

        parse: function(response, options){
    //console.log('Entities.User parse', response, options);
            this.set({
                id: response.id,
                name: response.name,
                pswd: response.pswd,
                role: response.role
            });
        },
        validation: {
            'name': {
                msg: 'zadaj meno užívateľa',
                required: true
            },
            'pswd': {
                msg: 'zadaj heslo užívateľa',
                required: true
            },
            'role': {
                required: true
            }
        }
    });
    //
    const UserCollection = Ba.Collection.extend({
        model: User,
        comparator: 'name'
    });
*/    



//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
    //localstorage
//    Entities.configureStorage(Entities.Users);
//    Entities.configureStorage(Entities.UserCollection);
/*
    var initializeData = function(){
        var data = new UserCollection([
            {id:1, name: 'supervisor', pswd: 'super', role: 'admin'},
            {id:2, name: 'admin', pswd: 'admin', role: 'admin'},
            {id:3, name: 'user', pswd: 'user', role: 'user'}
        ]);
        data.forEach(function(data){
            data.save();
        });
    };

    var API = {
        createEntity: function(obj){
            var row = new User({
                name: obj.name, //meno uzivatela
                pswd: obj.pswd, //heslo uzivatela
                role: obj.role //rola uzivatela
            });
            var defer = $.Deferred();
            row.save({
                name: obj.name, //meno uzivatela
                pswd: obj.pswd, //heslo uzivatela
                role: obj.role //rola uzivatela
            },{
                success: function(data, response){
                    App.commands.execute('footer:message', {
                        type: response.type, 
                        text: response.message
                    });
                    defer.resolve(data);
                },
                error: function(data, response){
                    App.commands.execute('footer:message', {
                        type: response.type, 
                        text: response.message
                    });
                    defer.resolve(data);
                }
            },{wait: true});
            return defer.promise();
        },
        readEntity: function(id){
            var row = new Entities.User({ id: id });
            var defer = $.Deferred();
            row.fetch({
                success: function(data, response){
                    App.commands.execute('footer:message', {
                        type: response.type, 
                        text: response.message
                    });
                    defer.resolve(data);
                },
                error: function(data, response){
                    App.commands.execute('footer:message', {
                        type: response.type, 
                        text: response.message
                    });
                    defer.resolve(data);
                }
            });
            return defer.promise();
        },
        updateEntity: function(id, obj){
            var row = new User({
                id: id,
                name: obj.name, //meno uzivatela
                pswd: obj.pswd, //heslo uzivatela
                role: obj.role //rola uzivatela
            });
            var defer = $.Deferred();
            row.save({
                id: id,
                name: obj.name, //meno uzivatela
                pswd: obj.pswd, //heslo uzivatela
                role: obj.role //rola uzivatela
            },{
                success: function(data, response){
                    App.commands.execute('footer:message', {
                        type: response.type, 
                        text: response.message
                    });
                    defer.resolve(data);
                },
                error: function(data, response){
                    App.commands.execute('footer:message', {
                        type: response.type, 
                        text: response.message
                    });
                    defer.resolve(data);
                },
                wait: true,
                validate: true
            });
            return defer.promise();
        },
        deleteEntity: function(id){
            var row = new User({ id: id });
            var defer = $.Deferred();
            row.destroy({
                success: function(data, response){
                    App.commands.execute('footer:message', {
                        type: response.type, 
                        text: response.message
                    });
                    defer.resolve(data);
                },
                error: function(data, response){
                    App.commands.execute('footer:message', {
                        type: response.type, 
                        text: response.message
                    });
                    defer.resolve(data);
                }
            });
            return defer.promise();
        },
        getUserEntities: function(){
            var rows = new UserCollection();
            var defer = $.Deferred();
            rows.fetch({
                success: function(data){
                    defer.resolve(data);
                }
            });
            var promise = defer.promise();
            $.when(promise).done(function(rows){
                if(rows.lenght === 0){
                    var models = initializeData();
                    rows.reset(models);
                }
            });
            return promise;
        }
    };
//----------------------------------------------------------------------------//
App.reqres.setHandler('user:entity:create', function(obj){
    return API.createEntity(obj);
});

App.reqres.setHandler('user:entity:read', function(id){
    return API.readEntity(id);
});

App.reqres.setHandler('user:entity:update', function(id, obj){
    return API.updateEntity(id, obj);
});

App.reqres.setHandler('user:entity:delete', function(id){
    return API.deleteEntity(id);
});

App.reqres.setHandler('user:entities', function(){
    return API.getUserEntities();
});

App.reqres.setHandler("user:entity:new", function(id){
    return new User();
});


*/