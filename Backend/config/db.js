const mongoose = require('mongoose')

const connectDb = async()=>{
    try{
        const connect =await mongoose.connect('mongodb+srv://pavanganesh:pavanganesh@cluster0.axrs7n2.mongodb.net/GPT?retryWrites=true&w=majority')
        console.log("Conntected to DB ",connect.connection.host,connect.connection.name)

    }
    catch(err){
        console.log("Error in mongoose",err);
       

    }
}
module.exports = connectDb;