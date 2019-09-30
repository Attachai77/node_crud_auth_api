const { Router } = require('express')
const TokenMiddleware = require('../middleware/token')

const UserMiddleware = require('../middleware/user.middleware')
const UserModel = require('../model/user.model')

const router = new Router()


//read
router.get('/', TokenMiddleware.verifyToken(), async (req,res) => {
    // res.send('555555555555555555');
    // res.json({
    //     ddd:6666
    // })
    const { search } = req.query
    const results = await UserModel.findUserAll(search)
    res.json({
        status:200,
        message:'find',
        results
    })
})

router.get('/:id', TokenMiddleware.verifyToken(), async (req,res) => {
    const result = await UserModel.findById(req.params.id)

    if(!result){
        return res.json({
            sttus:200,
            message : "user not found"
        })
    }

    res.json({
        status:200,
        message: 'find by id',
        result
    })
})

//create
router.post ('/', TokenMiddleware.verifyToken(), UserMiddleware.checkUser() , async (req,res) => {
    const { username , password ,email , age  } = req.body 
    await UserModel.CreateUser(username , password ,email , age)
    res.json({
        status:201,
        message:'created'
    }).status(201)
})

//update
router.patch('/:id', TokenMiddleware.verifyToken(), async (req,res) => {
    await UserModel.updateUser(req.params.id , req.body.email, req.body.age)
    res.json({
        status:200,
        message:'uodated'
    })
})

//delete
router.delete('/:id', TokenMiddleware.verifyToken(), async (req, res) => {
    await UserModel.deleteUser(req.params.id)
    res.json({
        status:200,
        message:'deleted'
    })
})



module.exports = router;