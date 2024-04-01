/**
 * sechma is the structure of the doc within collection.
 * it specifies the field , their types and any additonal constraints or validations..
 */
require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    username :{
        type:String,
        require:true
    } ,
    email :{
        type:String,
        require:true
    } ,
    phone :{
        type:String,
        require:true
    } 
    ,password :{
        type:String,
        require:true
    } 
    ,isAdmin:{
        type : Boolean,
        default:false
    }
});
 
 //?*********** secure the password with the bcrypt..with middleware..
userSchema.pre('save',async function(next){
    const user = this;

    if(!user.isModified("password")){
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_pass = await bcrypt.hash(user.password,saltRound);
        user.password=hash_pass;
    } catch (error) {
        next(error);
    }
})


//*******************************#what iS JWT?*****************************************
// - JSON web Tokens (I₩T) is an open standard (RFC 7519) that defines a compact and self-contained way
//for securely transmitting information between parties as a JSON object.
//? - INTs are often used for authentication and authorization in web applications.
//1. rauthentication:* Verifying the identity of a user or client.
// 2. "sAuthorization:** Determining what actions a user or client is allowed to perform.
//#*Components of a JwT:₩

// - Header :  Contains metadata about the token, such as the type of token and the signing algorithm
//being used.
// - Payload: Contains claims or statements about an entity (typically, the user) and additional data.
//Common claims include user ID, username, and expiration time.
// - Signature: To verify that the sender of the JT is who it says it is and to ensure that the
//message wasn't changed along the way, a signature is included.


/*---Tokens, such as JTs (JSON Web Tokens), are typically not stored in the database along with other user
details. Instead, they are issued by the server during the authentication process and then stored an the
client-side (e.g., in cookies or local storage) for later use.---*/

userSchema.methods.generateToken = async function () {
    try {
        const key= "mysecret";
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            key,
            {
                expiresIn: "30d",
            }
        );
    } catch (error) {
        console.error(error);
    }
};

userSchema.methods.comparePass = async function(password){
    return bcrypt.compare(password,this.password);
}


/**Model: Acts as a higher-level abstraction that interacts with the database based
 on the defined schema. It represents a collection and provides an interface for
 querying, creating, updating, and deleting documents in that collection
 Models are created from schemas and enable you to work with MongoDB
 data in a more structured manner in your application */
 
 const User = new mongoose.model("User",userSchema);//USer is created in our database with Userschema.. 
 
module.exports = User;