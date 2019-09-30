const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const UserModel = require('../model/user.model')

exports.checkUser = () => async (req, res, next) => {

    const { username } = req.body
    const find = await UserModel.findUsername(username)
    if(find){
        return res.json({
            status:200,
            message: 'user existed'
        })
    }

    next()
}


exports.checkLogin = () => async (req, res, next) => {
    const { username , password } = req.body
    const find  = await UserModel.findLoginUser(username)

    if(!find){
        return res.json({
            status: 200,
            message: "Incorect username or password"
        })
    }


    const compare = bcrypt.compareSync(password, find.password)
    console.log(compare)
    if (!compare) {
        return res.json({
            status: 401,
            message: "Incorect username or password"
        }).status(401)
    }

    req.token = jwt.sign( {
        userId: find.id
    },
    'UvFZNbUaEMUjTAFPwGAsQ8zwR8M2LrNm'
    ,{
        expiresIn:'1d'
    })

    next()
}