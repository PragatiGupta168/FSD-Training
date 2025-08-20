
const express = require('express')
const router = express.Router()

const {adminDefault, adminHome, getAdminData, addUser, showUsers, editUser, deleteUser} = require('../controllers/adminController')

// //localhost:8000/admin
// router.get('/',(req,res)=>{
//     res.send("<h1 align='center'> Admin Default Page </h1>")
// })

// //localhost:8000/admin/home
// router.get('/home',(req,res)=>{
//     res.send("<h1 align='center'> Admin  Home Page </h1>")
// })Yaha se hum logo n handler hta diya hai jisse controller ka part implement ho yuki controller ke andr hi main content hota hai 

//localhost:8000/admin
router.get('/',adminDefault)

//localhost:8000/admin/home
router.get('/home',adminHome)

//localhost:8000/admin/addUser
router.get('/addUser', addUser)

//For post request 
router.post('/addUser', addUser)

//localhost:8000/admin/showUser
router.get('/showUser', showUsers)

//localhost:8000/admin/editUser
router.get('/editUser/:id', editUser)
// router.post('/editUser/:id', editUser)
router.patch('/editUser/:id', editUser)

//localhost:8000/admin/deleteUser
router.get('/deleteUser/:id', deleteUser)
router.post('/deleteUser/:id', deleteUser)


//localhost:8000/admin/Pragati
router.get('/:adminNm',getAdminData)


module.exports = router