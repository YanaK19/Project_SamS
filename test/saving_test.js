const mocha = require('mocha');
const assert = require('assert');
const Products = require('./products');

describe("saving tests", function(){

    it('save records', function(done){
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

        new Products({
            group: "protein",
            name: "eggs",
            price100gr: 0.3,
            kcal: 157,
            pc: 55
        }).save();

        new Products({
            group: "protein",
            name: "fish",
            price100gr: 0.8,
            kcal: 140
        }).save();

        new Products({
            id: 4,
            group: "protein",
            name: "shrimps",
            price100gr: 1.2,
            kcal: 95
        }).save();

        new Products({
            id: 5,
            group: "greenVeg",
            name: "lettuce",
            price100gr: 0.2,
            kcal: 14
        }).save();

        new Products({
            id: 6,
            group: "greenVeg",
            name: "peas",
            price100gr: 0.5,
            kcal: 42,
            pc:135
        }).save();

        new Products({
            id: 7,
            group: "greenVeg",
            name: "broccoli",
            price100gr: 0.5,
            kcal: 28
        }).save();

    });
});