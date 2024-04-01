const Contact = require("../models/contact-model");



const contactForm = async(req,res)=>{
    try { 
        const {username,email,phone,message} = req.body;
       const createdData =  await Contact.create({username,email,phone,message});
        return res.status(200).json({msg :createdData });
    } catch (error) {
        return res.status(500).json({msg : "msg not delivered!"});        
    }
};

module.exports = contactForm;