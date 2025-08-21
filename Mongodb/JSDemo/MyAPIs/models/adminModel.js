
// Mongoose module ko import kar rahe hain
const mongoose = require('mongoose')

// User ke liye schema banaya – iska matlab ek user document me kya-kya hoga
const UserSchema = new mongoose.Schema({
    userName: { type: String, required: true }, // user ka naam (string hona zaroori hai)
    password: { type: String, required: true }, // user ka password (compulsory)
    emailId: { type: String, required: true, unique: true }, // email id bhi dena zaroori hai
    isActive: { type: Boolean, required: true, default: false }, // account active hai ya nahi (default: false)
    hasRole: { type: String, enum: ["admin", "user"], default: 'user' }, // role ya toh admin ya user (default: user)
    createdAt: { type: Date, default: Date.now }, // account banne ka time (auto set hota hai)
    regDate : { type: Date, required: true, default: Date.now },
    profilePic: { type: String}
})

// Model banaya jisse database me collection create hoga (UserModel)
const UserModel = new mongoose.model('UserData',UserSchema)

// Is model ko export kar diya taaki dusri files me use ho sake
module.exports = UserModel