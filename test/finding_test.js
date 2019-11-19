const assert = require('assert');
const Products = require('./products');



describe("finding tests", function(){

    beforeEach(function(done){
        var p = new Products({
            group: "protein",
            name: "chicken",
            price100gr: 0.7,
            kcal: 190,
            pc: 1500
        });

        p.save().then(function(){
            assert(p.isNew === false);
            done();
        });
    });
    
    it('find records', function(done){
        Products.findOne({name: 'chicken'}).then(function(result){
            assert(result.name === 'chicken');
            done();
        })
    });

});
