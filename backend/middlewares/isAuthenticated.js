import jwt from "jsonwebtoken";

const isAuthenticated = async (req,res,next) => {
    try {
        const token = req.cookies.token;
        console.log("Token received from client:", req.cookies.token);
        if(!token){
            return res.status(401).json({
                message: "user not authenticated",
                success: false
            })
        }
        const decode = jwt.verify(token,process.env.SECRET_KEY);
        // if(!decode){
        //     return res.status(401).json({
        //         message: "invalid token",
        //         success: false
        //     })
        // }
        req.id= decode.userId;
        next();
    } catch (error) {
        console.error("JWT verification failed:", error.message);
    return res.status(401).json({
      message: "Invalid or expired token",
      success: false,
    });
    }
}

export default isAuthenticated;
