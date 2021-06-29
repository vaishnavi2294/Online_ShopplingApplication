var mongoose = require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
     
    },
    address: {
      type: String,
      
    },
    number: {
      type: Number,
    
    },
    password: {
      type: String,
    }
  }

)


userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('user', userSchema);
