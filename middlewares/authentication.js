const {validateToken} = require('../services/authentication');

function checkForAuthenticationCookie(cookieName){
    return (res,req,next)=>{
        const tokenCookieValue = req.cookies?.[cookieName];
        if(!tokenCookieValue){
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
    checkForAuthenticationCookie,
}