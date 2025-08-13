
const express = require('express')
const router = express.Router()

const { userDefault, userHome } = require('../controllers/userController')

// //localhost:8000/User
// router.get('/',(req,res)=>{
//     res.send("<h1 align='center'> User Default Page </h1>")
// })

// //localhost:8000/User/home
// router.get('/home',(req,res)=>{
//     res.send("<h1 align='center'> User  Home Page </h1>")
// })isme bbi same admin ki trh karenge

//localhost:8000/User
router.get('/',userDefault)

//localhost:8000/User/home
router.get('/home',userHome)

module.exports = router