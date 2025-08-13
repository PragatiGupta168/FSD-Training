
const userDefault = function(req, res){
    res.send("<h1 align='center'> User Default Page </h1>")
}

const userHome = function(req, res){
    res.send("<h1 align='center'> User Home Page </h1>")
}

module.exports = {userDefault, userHome}