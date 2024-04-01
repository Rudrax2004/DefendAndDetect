const mongoose = require("mongoose")
// URI ="mongodb://127.0.0.1:27017/mern_admin"
//mongoose.connect(URI);

/* here we declare our sensitive info...snehal7850 is password of mongoDB*/
URI = "mongodb+srv://snehalsalodiya:snehal7850@cluster0.2xxvoht.mongodb.net/mern_admin"
//URI = process.env.MONGODB_URI
const connectDb =async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection succesful to DB");
    } catch (error) {
        console.error("not connected");
        process.exit(0);   
    }
}

module.exports=connectDb;