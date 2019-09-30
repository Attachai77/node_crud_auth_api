const jwt = require('jsonwebtoken')

exports.verifyToken = () => async (req , res , next ) => {
    const { token } = req.headers

    jwt.verify(token , 'UvFZNbUaEMUjTAFPwGAsQ8zwR8M2LrNm' , (err, decode) => {
        if (err) {
            res.json({
                status:401,
                message:"token invalid or token expired"
            })
        }else{
            res.userId = decode.userId
            next()
        }
    })
}