const {Schema,model} = require("mongoose");
const mongoose = require("mongoose");
//here we dont require mongoose.schema 
const contactSchema = new mongoose.Schema({
    username :{
        type : String ,
        require : true
    },
    email:{
        type : String , 
        require : true
    },
    phone:{
        type : String,
        require : true,
    },
    message : {
        type : String,
        require : true
    },
});

const ContactModel = new mongoose.model('Contact',contactSchema);//Contact is database name....
module.exports = ContactModel;