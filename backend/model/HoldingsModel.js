const { model } = require("mongoose");

const {HoldingsSchema} = require("../schemas/HoldingsSchema");

const HoldingsModel = new model("holding", HoldingsSchema);// creating new Model & //"holding" plural (i.e "holdings" will be DB's Collections, so here holding is automatically taken by mangoDB and it will add s and make it collection name

module.exports={HoldingsModel};