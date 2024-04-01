const blogmodel = require("../models/blog-model");
const getBlogs = async (req,res)=>{
    try {
        const response = await blogmodel.find();
        
        if(!response){
            res.status(404).json({msg:"No blog found"});
        }
        console.log("response",response);
        res.status(200).json({Blogs : response});
    } catch (error) {
        console.log(`blogs: ${error}`);
        return res.status(500).json({ msg: "Internal Server Error" });   
    }
}

module.exports= getBlogs;