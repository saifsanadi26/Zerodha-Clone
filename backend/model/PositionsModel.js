const { model } = require("mongoose");

const {PositionsSchema} = require("../schemas/PositionsSchema");

const PositionsModel = new model("position", PositionsSchema);// creating new Model & //"holding" plural (i.e "holdings" will be DB's Collections, so here holding is automatically taken by mangoDB and it will add s and make it collection name

module.exports={PositionsModel};