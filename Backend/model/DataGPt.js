const mongoose = require('mongoose')

const DataGpt = mongoose.Schema({
        Last:{
            type:String,
            required :true
        },
        first:{
            type:String,
            required :true
        },
        email:{
            type:String,
            required :true
        },
        Password:{
            type:String,
            required :true
        }
    },
        {
            timestamp:true,
        }

)

module.exports = mongoose.model("UserDataGpt",DataGpt);