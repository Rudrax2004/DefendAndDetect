const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllUsers = async (req, res, next) => {
    try {
        const responseUser = await User.find({}, { password: 0 });
        console.log(responseUser);
        if (!responseUser || responseUser.length === 0) {
            return res.status(404).json({ message: "No user found." });
        }
        res.status(200).json(responseUser);
    } catch (error) {
        next(error);
    }
};

const getAllcontacts = async (req, res, next) => {
    try {
        const responseContact = await Contact.find();
        console.log(responseContact);
        if (!responseContact || responseContact.length === 0) {
            return res.status(404).json({ message: "No Contact found." });
        }
        res.status(200).json(responseContact);
    } catch (error) {
        next(error);
    }
};

const deleteUserById = async (req, res) => {
    try {
        let id= req.params.id; // Assuming _id is present in the request body
        console.log(`id from request:${id}`);

        // Use deleteOne to delete the user by _id
        const deleteOperationResult = await User.deleteOne({ _id: id });

        // Check the result of the delete operation
        if (deleteOperationResult.deletedCount === 1) {
            // If one document was deleted successfully
            return res.status(200).json({ message: "User deleted successfully", users: [deleteOperationResult] });
        } else {
            // If no document was deleted (perhaps the user with the provided _id was not found)
            return res.status(404).json({ message: "User not found or could not be deleted" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
const getUserById = async (req, res) => {
    try {
        let id= req.params.id; 
        console.log(`id from request in getUserById :${id}`);

        const response = await User.findOne({ _id: id },{password:0});
        console.log(response);

        return res.status(200).json(response);
      
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const updateUserById = async (req, res) => {
    try {
        let id= req.params.id; 
        
        console.log(`id from request in updateUserById :${id}`);
        
        const updateData = req.body;
        
        const updatedResponse = await User.updateOne(
            { _id: id },
            {
                $set : updateData,
            });
       
            console.log(updatedResponse);

        return res.status(200).json(updatedResponse);
      
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = {
    getAllUsers,
    getAllcontacts,
    deleteUserById,
    getUserById,
    updateUserById
};
