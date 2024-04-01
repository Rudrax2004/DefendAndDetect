const { z } = require("zod");


//creating an object schema
const loginSchema = z.object({
    email : z
    .string({required_error:'Email is required!'})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least of 3 chars."})
    .max(255,{message:"Email must be not be more than 255 characters"}),
    
    password : z
    .string({required_error:'password is required!'})
    .trim()
    .min(6,{message:"password must be at least of 6 chars."})
    .max(1024,{message:"password must be not be more than 1024 characters"}),

});


const signupSchema = z.object({
    username : z
    .string({required_error:'Name is required!'})
    .trim()
    .min(3,{message:"name must be at least of 3 chars."})
    .max(255,{message:"name must be not be more than 255 characters"}),

    email : z
    .string({required_error:'Email is required!'})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be at least of 3 chars."})
    .max(255,{message:"Email must be not be more than 255 characters"}),
    
    phone : z
    .string({required_error:'phone is required!'})
    .trim()
    .min(10,{message:"phone must be at least of 10 chars."})
    .max(20,{message:"phone must be not be more than 20 characters"}),
    
    password : z
    .string({required_error:'password is required!'})
    .trim()
    .min(6,{message:"password must be at least of 6 chars."})
    .max(1024,{message:"password must be not be more than 1024 characters"}),

});

module.exports = {signupSchema,loginSchema};

