
const express = require('express')
const formidable = require('express-formidable')
const db = require('./dbconn')
const adminodel = require('./models/adminModel')
const app = express()
//console.log(app);

const HOST = 'localhost'//127.0.0.1 ethernet ko test krta hai and also it is a loopback IP
const PORT = 8000

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(formidable())

const adminRoutes = require('./Routes/adminRoutes')
app.use('/admin',adminRoutes)

const userRoutes = require('./Routes/userRoutes')
app.use('/user',userRoutes)

//For Login
app.get('/login',(req,res)=>{
    res.render('login',{msg: null})
})
app.post('/login',async (req,res)=>{

    const user = await adminodel.findOne({emailId:req.fields.mailId})
    // console.log(user);
    if(user)
    {
    if(user && (user.password === req.fields.pwd)){
        res.redirect(user.hasRole === 'admin'?'/admin': '/user')
    }
    }
    else
    {
        res.render('login', {msg: 'Invalid User Id'})
    }
    
    // res.render('login',{msg: null})
})


//http://localhost:8000 
app.get('/',(req, res)=>{
    // res.send("<h1 align='center'> Application Default Page </h1>")
    let name ='Pragati'
    let msg = "<font size='4'face='chiller'> Hello! </font>"
    let isValid = true
    res.render('default',{name, msg, isValid})
})



//http://localhost:8000/home 
app.get('/home',(req,res)=>{
    // res.send("<h1 align='center'> Application Home  Page </h1>")

    let fruitsNames = ["Apple","Mango","Banana","PineApple","Grapes"]

    let userData= {uid: 1001, unm: 'Pragati', gender: 'Female'}
    res.render('home',{fruitsNames, userData})
})

//http://localhost:8000/about
app.get('/about',(req,res)=>{
    res.send("<h1 align='center'> Application About  Page </h1>")
})

//http://localhost:8000
app.post('/',(rq,res)=>{
    res.send("Post Request Handler.....")
})

app.listen(PORT, HOST, (err)=>{
    if(err)
        console.log(err);
    else
        console.log(`Server running at http://${HOST}:${PORT}`);
})
