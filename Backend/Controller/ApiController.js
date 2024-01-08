const asyncHandler = require("express-async-handler")
const DataGpt = require("../model/DataGPt");
const PostPrompt = require("../model/Promts")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nm = require('nodemailer')
const axios = require('axios');




//@des check the email exsistance
//@route Get api/check
//@access public
const CheckEmail = asyncHandler(async(req,res)=>{
    
    const EMAIL = req.body.email;
   
    if(!EMAIL){
        
        res.status(200).send("all fields are required..");
        throw new Error("All fields are required");
    }
    else{
        
    const Exists = await DataGpt.findOne({email:EMAIL});
    if(Exists){
        
            res.status(200).send("user is registered");
            throw new Error("User mail is already registerd");
    }
    else{
       
    
                const randomNumbers = [];
                for (let i = 1; i <= 4; i++) {
                  const randomNumber = Math.floor(Math.random() * 10) + 1;
                  randomNumbers.push(randomNumber);
                }
                

// const options = {
//   method: 'POST',
//   url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': 'YOUR_SENDGRID_API_KEY', // Replace with your SendGrid API key
//     'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
//   },
//   data: {
//     personalizations: [
//       {
//         to: [
//           {
//             email: 'jiramac694@fandsend.com' // Replace with the recipient's email address
//           }
//         ],
//         subject: `${randomNumbers}`
//       }
//     ],
//     from: {
//       email: 'pavanganesh2580@gmail.com' // Replace with the sender's email address
//     },
//     content: [
//       {
//         type: 'text/plain',
//         value: 'Hello, World!'
//       }
//     ]
//   }
// };

// async function sendEmail() {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // Call the sendEmail function to send the email
// sendEmail();


    }






}
});



//@des Get the user prompt
//@route post api/prompt
//@access private
const getPrompt = asyncHandler(async(req,res)=>{
    
    const { email, prompt } = req.body; 
    let existingData = await PostPrompt.findOne({ email });
    if (existingData) {
      existingData.Prompts.push(prompt);
      await existingData.save();
      console.log("done prompt")
    } else {
      const newData = new PostPrompt({
        email: email,
        prompts: [prompt]
      });
      await newData.save();
      console.log("done user");
    }

    res.status(200).json({ message: 'Data added successfully!' }); 
});

// @des send user prompts to the front-end
// @route post api/prompt
//@route private
const SendPrompt = asyncHandler(async(req,res)=>{
    const sendEmail = req.params.id;
    const presentINdb = await PostPrompt.findOne({email:sendEmail});
    if(presentINdb){
        res.status(200).send(presentINdb.prompts);
    }
    else{
        res.status(201).send("unalbe to fetch...")
    }





})







//@des create the user 
//@route post api/create
//@access public
const createUser =asyncHandler(async (req,res)=>{
    const {first,last,email,pass} = req.body
    if(!first || !last || !email || !pass){
        res.status(400);
        throw new Error("All fiels are mandatory");
    }
    const UserAvail = await DataGpt.findOne({email})
    if(UserAvail){
        res.status(400).send("User already registered");
        throw new Error("user already registered")
    }
    
        //Hash password
    const hashedPassword = await bcrypt.hash(pass,10);
    const user = await DataGpt.create({
        first:first,
       Last: last,
       email: email,
       Password: hashedPassword
    });
   
    console.log("user created")

    if(user){
        res.status(200).json({_id:user.id,email:user.email})
    }else{
        res.status(400);
        throw new Error("User data is in valid")
    }

    res.status(200).send("post user data")
   
})


//@des login the user 
//@route post api/login
//@access public
const Loginuser =asyncHandler(async (req,res)=>{
    console.log(req.body)
    const {email,pass} = req.body
    if(!email || !pass){
        res.status(400);
        throw new Error("All fiels are mandatory");
    }else{
        const Login = await DataGpt.findOne({email});
        if(!Login){
            res.status(404).send("invalid email")
            throw new Error("no email found");
        }else{
            // comapre password
            if( await bcrypt.compare(pass,Login.Password) ){
                const key = "pavan"
                const accessToken = jwt.sign({ 
                    user:{
                        id:Login.id,
                        email:Login.email
                    }
                },key,{expiresIn:"10m"}
                )
                res.status(200).json({accessToken})
               
            }
            else{
                res.status(401).send("Invalid Password");
                throw new Error("Invlaid Password");
            }

        }
    }
    
    res.status(200).send("login user ")
})


//@des delete the user 
//@route delete api/delete
//@access private
const DELeteUser = asyncHandler(async(req,res)=>{
    const USER = DataGpt.findById(req.params.id)
    if(USER){
    await DataGpt.deleteOne(USER);
    res.status(200).send("user is deleted")
    }else{
        res.status(404).send("no user found");
        throw new Error("User not found");
    }

    res.status(200).send(`delete the user ${req.params.id} `)
})



module.exports = {
    getPrompt,
    createUser,
    DELeteUser,
    Loginuser,
    CheckEmail,
    SendPrompt
}