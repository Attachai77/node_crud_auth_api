const { Router } = require('express')

const UserMiddleware = require('../middleware/user.middleware')
const UserValidate = require('../middleware/validator/user.validate')

const router = new Router()

router.post('/login', 
    UserValidate.ValidateLoginForm(),
    UserMiddleware.checkLogin(), 
    (req,res) => {
        res.json({
            status:200,
            message:'login success.',
            token: req.token
        })
})

module.exports = router