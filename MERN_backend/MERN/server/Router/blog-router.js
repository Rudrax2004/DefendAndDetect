const express = require("express");
const   Router = express.Router();
const blogcontroller = require("../controllers/blog-controller");

Router.route("/blog").get(blogcontroller);
Router.route("/").get((req,res)=>{
    res.status(200).send("blog-router..");
});

module.exports = Router;