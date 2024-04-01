/** "Action" is a description of what you want to do ,
 *  while "dispatch " is the function that carries out that action... */

/* In an Express.js application, a "controller" refers to a part of your code
that is responsible for handling the- application's- logid. Controllers are
typically used to process incoming requests, interact with models (data sources),
and send responses back to clients. They help organize your application by
separating concerns and following the MVC (Model-View-Controller) design pattern.**/
  
const User = require("../models/user-model");
// const bcrypt = require("bcryptjs");
const Home= async(req ,res)=>{
    try {
        console.log(req.body);
        res.status(200).send("best series by controller....");
    } catch (error) {
        console.log(error);
    }
}
// const register = async (req,res)=>{
//     try {
//         res.status(200).send({message : req.body});
//         //res.status(200).send("best series by controller using register....");
        
//     } catch (error) {
//         res.status(400).send({msg:"page is not found!!"})
//     }
// }

/*
1. Get Registration Data:
Retrieve USer Data  (username, email, password)
2. Check Email Existence : Check if the email is already registered.
3. Hash password : securely hash the password
4. Create User : Create new user with hashed password
5. Save to DB : 9 Save user data to the database.
6. Respond : Respond with "Registration Successful # or handle errors./*/


const register = async (req,res)=>{
    try {
        const {username,email,phone,password} = req.body;
        const  userExist = await User.findOne({email:email});
   
        if(userExist){
            return res.status(400).json({message:"email already exist"});
        }
   

        //bcrypt is used for storing data in database with encryption..
        //higher the saltRound , more saffer your data..
        /* 
        .........this is very time consuming...........
        const saltRound = await bcrypt.genSalt(10);
        const hash_pass = await bcrypt.hash(password,saltRound);
        */
        const UserCreated = await User.create({username,email,phone,password});//password:hash_pass
        res.status(200).json({
            msg:"registration successfully..",
            "data":UserCreated,
           token : await UserCreated.generateToken(),
           userId:UserCreated._id.toString()
        });
   
    } catch (error) {
        res.status(500).body("eroor");
    }
}

const login= async(req,res)=>{
    try {
        const{email,password } = req.body;

        const userExist = await User.findOne({email});
       
        if(!userExist){
            return res.status(400).json({message:"INvalid Credentials"});            
        }

        // const isValidPass = await bcrypt.compare(password,userExist.password);
        const isValidPass = await userExist.comparePass(password);

        if(isValidPass){
            res.status(200).json({
                msg:"Login successfully..",
                token : await userExist.generateToken(),
                userId:userExist._id.toString()
            });
        }
        else{
            res.status(401).json({message:"Invalid Password"});
        }
    } catch (error) {
        
    }

};

const user = async (req,res)=>{
    try {
        const userData =  req.User;
        console.log("this is data from auth-controller",userData);

        return res.status(200).json({ userData});
    } catch (error) {
        console.log(`error from the user route ${error}`);
    }
};

module.exports={user,Home,register,login};