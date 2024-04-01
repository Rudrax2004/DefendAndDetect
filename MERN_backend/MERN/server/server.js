const cors = require("cors");
require("dotenv").config();//this is done for dotenv connection// Load environment variables from .env file
const express = require("express");
const app = express();//make server, etx..
const connectDb = require("./Utilies/db");

//mount router : To use the router in your main express app,you can mount it 
//as specific URL prefix....
const authRouter = require("./Router/auth-router");
const contactRouter = require("./Router/contact-router");
const blogRouter = require("./Router/blog-router");
const fyqRouter = require('./Router/lab-router');
const adminRouter = require("./Router/admin-router");
const errorMiddleware = require("./middlerwares/error-middleware");
//handle cors...
var corsOptions = {
    origin : "http://localhost:5173",
    methods : "GET,POST,PUT,DELETE,HEAD,PATCH",
    credentials : true,
};
app.use(cors(corsOptions));


app.use(express.json());
/************************************************
never forget to put forword slash.........
*************************************************/
app.use("/api/auth",authRouter);
app.use("/api/form",contactRouter);
app.use("/api/data",blogRouter);
app.use("/api/admin",adminRouter);
app.use('/api/fyq', fyqRouter);


//error middleware should be added after all routes
app.use(errorMiddleware);


/* app.get("/",(req,res)=>{
     res.status(200).send("best series");
 });
*/
 const PORT = 5000;
   connectDb().then(()=>{
        app.listen(PORT,()=>{ //to run server ..
        console.log(`server is running on :${PORT}`);
        })
    })


/*: This line of code adds Express middleware that parses
incoming request bodies with JSON payloads. It's important to place this before
any routes that need to handle JSON data in the request body. This middleware is
responsible for parsing JSON data from requests, and it should be applied at the
beginning of your middleware stack to ensure it's available for all subsequent
route handlers.
 npm init -y
npm i express
 nodemon is used to make server running wihtout refreshing.: :
 npm i nodemon
nodemon server.js {file name} ::if it give auth error then do Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
//in power shell*/


//server terminal : npm i mongoose
//npm i dotenv  // use : in URI to connect with atlas we provide our sensitive info so to hide we use dotenv*/