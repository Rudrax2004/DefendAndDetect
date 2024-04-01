const express = require("express");
const router= express.Router();
const controller = require("../controllers/auth-controller");//when to many pages are there so it make very diff.... : : const register= require("../controllers/auth-controller")
const validate = require("../middlerwares/auth-middleware");
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const authMiddleware = require("../middlerwares/auth-user-middleware");
const blogcontroller = require("../controllers/blog-controller");
const User = require("../models/demo-model");
// router.get("/",(req,res)=>{
//     res.status(200).send("best series by router....");
// });

// method for Controller...
router.route("/home").post(controller.Home);
router.route("/register").post(validate(signupSchema),controller.register);//check data based on ZOD before sending it to database...

/************************
 ------------------------
without zod schema ::::
 ------------------------ 
**************************/
//  router.route("/register").post(controller.register);

router.route("/login").post(validate(loginSchema),controller.login);
router.route("/user").get(authMiddleware , controller.user);
// router.route("/user").get(controller.user);

router.route("/blog").get(blogcontroller);

//*************************************************** */


// second method for router...
router.route("/").get((req,res)=>{
    res.status(200).send("best series");
});

module.exports = router;