// Express module ko import kar rahe hain
const express = require('express')

const userRoute = require('./routes/userRoute')

// express ka instance banaya jisse app banaya
const app = express()

// Host aur Port define kiya jaha server chalega
const HOST = 'localhost'
const PORT = 8000


// Pehla user-defined middleware - har request pr chalega
app.use((req, res, next) => {
    console.log("MiddleWare 1"); // Console me message print karega
    next(); // Next middleware ko call karega
})

// Dusra middleware - ye bhi har request pr chalega
app.use((req, res, next) => {
    console.log("MiddleWare 2"); // Console me message print karega
    // const err = new Error("Error......")//WE CREATE ERROR TO HANDLE IT BY (next();)ERROR HANDLING MIDDLEWRAE.
    // next(err);
    next();
    // res.send("Response Send by MiddleWare 2") // Client ko response bhej dega
    // Iske baad koi aur middleware ya route kaam nahi karega
})

app.use('/home', (req, res, next) => {
    console.log("MiddleWare Home"); // Console me print karega jab /home route hit hoga
    next(); // Next middleware ya route handler ko call karega
})

app.use('/user', userRoute)


// GET request ke liye default route banaya '/'
app.get('/', (req, res) => {
    res.send("<h1 align='center'> Application Default Page</h1>") // HTML response bhejta hai
})

app.get('/home', (req, res) => {
    res.send("<h1 align='center'> Application Home Page</h1>") // HTML response bhejta hai
})

app.get('/about', (req, res) => {
    res.send("<h1 align='center'> Application About Page</h1>") // HTML response bhejta hai
})


//Error Handling MiddleWare
app.use((err, req, res, next)=>{
    console.log("Error Handling MiddleWare..");
    next();
})

// Server ko start karne ke liye listen method
app.listen(PORT, HOST, (err) => {
    if (err)
        console.log('Error'); // Agar error aayi toh print karega
    else
        console.log(`Server Running at http://${HOST}:${PORT}`); // Server chalne pr ye message aayega
})
