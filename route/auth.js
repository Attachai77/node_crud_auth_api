const { Router } = require('express')
const UserMiddleware = require('../middleware/user.middleware')

const router = new Router()

router.post('/login', UserMiddleware.checkLogin(), (req,res) => {
    res.json({
        status:201,
        message:'login success',
        token: req.token
    })
})

module.exports = router