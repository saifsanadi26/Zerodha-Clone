const { model } = require("mongoose");

const {OrdersSchema} = require("../schemas/OrdersSchema");

const OrdersModel = new model("order", OrdersSchema);// creating new Model & //"holding" plural (i.e "holdings" will be DB's Collections, so here holding is automatically taken by mangoDB and it will add s and make it collection name

module.exports={OrdersModel};