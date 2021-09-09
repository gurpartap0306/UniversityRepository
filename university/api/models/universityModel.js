'user strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UniversitySchema = new Schema ({
    name:{
        type: String
    },
    address:{
        type: String
    },
    phone:{
        type: String
    }
});

module.exports = mongoose.model('Universities',UniversitySchema);
