const UserModel = require('../models/adminModel')

const adminDefault = function(req, res){
    // res.send("<h1 align='center'> Admin Default Page </h1>")
    res.render('adminViews/admindefault')
}

const adminHome = function(req, res){
    // res.send("<h1 align='center'> Admin Home Page </h1>")


    let userData = [
        {uid: 1001, unm: 'Pragati', email: 'pragati168@gmail.com'},
        {uid: 1001, unm: 'Parul', email: 'parul68@gmail.com'},
        {uid: 1001, unm: 'Pooja', email: 'pooja18@gmail.com'},
        {uid: 1001, unm: 'Mona', email: 'mona8944@gmail.com'},
        {uid: 1001, unm: 'Robbin', email: 'robbin90@gmail.com'}
    ]
    res.render('adminViews/home.ejs',{userData})
}


const getAdminData = function(req,res){
    let nm = req.params.adminNm
    res.send(`<h1 align='center'> Admin ${nm} Data Page </h1>`)
}


//localhost:8000/admin/addUser, method=post
const addUser = async function(req,res)
{
    if(req.method === 'POST'){
        // console.log(req.fields);
        const newUser = new UserModel({
        userName : req.fields.unm,
        password: req.fields.pwd,
        emailId: req.fields.mailId    
        })

        let user = await newUser.save()
        // console.log(u);
        if(user){
            // res.render('adminViews/addUser', {msg: "Record added successfully")}
            res.json({ msg: "Record Added Successfully.....", user})//13-aug
        }
    }
    else

    res.render('adminViews/addUser',{msg: null})
}


//https://localhost:8000/admin/showUser
const showUsers = async function (req,res) {

    const userData = await UserModel.find();
    // console.log("userData");
    // res.render('adminViews/showUsers',{userData})
    res.status(200).json(userData)   //13-aug
}

const editUser = async function (req,res) {

    if(req.method === 'POST'){
        const updUser = await UserModel.findByIdAndUpdate(req.params.id, { userName: req.fields.unm, password:req.fields.pwd, emailId:req.fields.mailId},{new: true})
        if(updUser)
                res.render('adminViews/editUser',{userData: updUser, msg: "User Updated Successfully..."})
    }
    else
        {
    const userData = await UserModel.findOne({_id: req.params.id})
    // console.log(userData);
    res.render('adminViews/editUser',{userData, msg:null})
    }
}


const deleteUser = async function (req,res) {
    const user =  await UserModel.findByIdAndDelete (req.params.id)
    if(user)
        res.redirect('/admin/showUser')
}



module.exports = {adminDefault, adminHome, getAdminData, addUser, showUsers, editUser, deleteUser}

