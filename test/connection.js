const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//подождать соединения
before(function(done){
    mongoose.connect('mongodb://localhost/project', {useNewUrlParser: true, useUnifiedTopology: true});

    mongoose.connection.once('open', function(){
        console.log('connection has been made');
        done();
    }).on('error', function(error){
        console.log('connection error:', error);
    });
});

//перед каждым тестом удалять существующую коллекцию
beforeEach(function(done){
    mongoose.connection.collections.products.drop(function(){
        done();
    });
});

