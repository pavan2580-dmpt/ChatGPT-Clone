const mongoose = require('mongoose')

const PostPrompt = mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        prompts:{
            type:[{String}],
            timestamp:true
        }

    }
)
module.exports = mongoose.model("prompt",PostPrompt);