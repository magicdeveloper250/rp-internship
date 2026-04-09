import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserModel from './models/userModel.js';
import bodyParser from 'body-parser';


const app= express();
app.use(cors( {
    
}));
app.use(bodyParser.json());
app.get('/', (req, res)=>{
    return res.send("Hello world");
})

app.post('/api/auth/signup', async(req, res)=>{
    const data= req.body;
    console.log(data);
    let firstName= data.first_name;
    let lastName= data.last_name;
    let email= data.email;  
    let password= data.password;
    const newUser= new UserModel({  first_name:firstName, last_name:lastName, email, password });
    await newUser.save();
    return res.json({success:true, message:"User signed up successfully"});
})
app.post("/api/auth/login", (req, res)=>{
    const data= req.body;                                        
    return res.json({success:true, message:"User logged in"});
})
app.post("/api/auth/logout", (req, res)=>{
    return res.json({success:true, message:"User logged out"});

})
app.post("/api/auth/refresh", (req, res)=>{ 
    return res.json({success:true, message:"Token refreshed"}); 
})

app.listen(5000, ()=>{
    mongoose.connect("mongodb://localhost:27017/notepad").then(()=>{
        console.log("Connected to MongoDB");
    })
    console.log("Server is running on port 5000");          
});                                                                             