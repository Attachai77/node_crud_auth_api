const express = require('express');
const bodyParser = require('body-parser')

const userRouter  = require('./route/users')
const authRouter = require('./route/auth')

const app = new express();
app.use(bodyParser())

// app.get('/demo',(req,res) => {
//     res.json({
//         demo:1111
//     })
// } )

app.use('/users', userRouter)

app.use('/auth', authRouter)

app.listen(3000, ()=> {
    console.log('Litening port 3000')

});