var mongoose = require('mongoose');

module.exports.MemberSchema = mongoose.Schema({
    firstName : {
        type :String,
        required : true,
        trim : true
    },
    lastName : {
        type : String,
        required : true,
        trim : true
    },
    memberid : {
        required : true,
        //unique,
        type : String
    } ,
    password : {
        type: String,
        required: true
    },
    department : {
        type : [String],
        required : true
        // is it required????
    },
    address : {
        type : String,
        required : true,
        trim : true
    },
    typeOfUser : {
        type : [String],
        required : true
    },
    phoneNumber : {
        type : String,
        trim : true,
        required : true
    },
    email : {
        type : String,
        required : true,
        trim : true
    },
    sex : {
        type : [String],
        required : true
    },
    dateOfBirth : {
        type : Date,
        required : true
    },

})