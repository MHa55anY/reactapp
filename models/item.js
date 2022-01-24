const mongoose = require('mongoose');

const Schema =mongoose.Schema;


const ItemSchema = new Schema({
  name:{
      type:String
  },
  type:{
      type:String
  }
},{
    timestamps:true,
})

const Item = mongoose.model('Item',ItemSchema);

module.exports = Item;