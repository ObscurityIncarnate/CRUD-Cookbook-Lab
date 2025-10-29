const isSignedOut =  (req, res, next)=>{
    if(req.session.user){
        res.render("/")
    }
    next();
}

export default isSignedOut;