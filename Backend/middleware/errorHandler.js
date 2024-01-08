const {constants} = require("../Constants")
const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.status:500;

        switch(statusCode){
            case constants.VALIDATION_ERROR: {res.json({title: "VALIDATION_ERROR"  ,message :err.message,stackTrace:err.stack});
                        break;}
            case constants.UNAUTHORIZED: {res.json({title: "UNAUTHORIZED"  ,message :err.message,stackTrace:err.stack});
                        break;}
            case constants.FORBIDEN:{ res.json({title: "FORBIDEN"  ,message :err.message,stackTrace:err.stack});
                        break;}
            case constants.NOT_FOUND: {res.json({title: "NOT_FOUND"  ,message :err.message,stackTrace:err.stack});
                        break; }   
            case constants.SERVER_ERROR: {res.json({
                title: "Not found",
                message :err.message,
                stackTrace:err.stack
            });
                        break;   }       
            default:{
                console.log("no Error ,All good!")
                break;
            }
        }


}

module.exports  = errorHandler