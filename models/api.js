const mongoose = require('mongoose');

const Schema =mongoose.Schema;


const CountSchema = new Schema({
    
  count:{
      type:Number
  },

},{
    timestamps:true,
})

const Count = mongoose.model('Count',CountSchema);

module.exports = Count;