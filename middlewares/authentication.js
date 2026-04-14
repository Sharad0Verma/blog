const {validateToken} = require('../services/authentication');

function checkForAuthenticationCokkie(cokieName){
    return (res,req,next)=>{
        const tokenCokkieValue = req.cokkies[cokieName];
        if(!tokenCokkieValue){
            return next();
        }
        try {
            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
            return next();
        }
        catch(err){}
         
    }
}
module.exports={
    checkForAuthenticationCokkie,
}