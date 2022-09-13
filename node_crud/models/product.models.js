const mongoose = require('mongoose');
const schema   = mongoose.Schema;

const ProductSchema = new schema({
    name:{type:String,require:true,max:100},
    price:{type:Number,require:true,max:100}
});

module.exports = mongoose.model('Product',ProductSchema);
