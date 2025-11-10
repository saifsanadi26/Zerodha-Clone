const {Schema} = require("mongoose");  // here we are requering the Class called "Schema", which will come from mongoose as it was mongoose set up

//giving the name for the Schema (typically it will be the same name as the file name(i.e HoldingsSchema))
const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = {HoldingsSchema};