// Require mongoose
const mongoose = require('mongoose');

// Get mongoose connection
const mongooseConnection = require('../config/mongooseConnection');


const userSchema = new mongoose.Schema({
    firstname: { type: String, minlength: [3, 'First Name must contain a minimum of 3 characters.']},
    lastname: { type: String, minlength: [3, 'Last Name must contain a minimum of 3 characters.']},
    email: { 
        type: String, 
        lowercase: true, 
        minlength: [3, 'Email Address must contain a minimum of 3 characters.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email Address is invalid']
    },
    city: {type: String },
    state: {type: String },
    country: {type: String },
    isactive: { type: Boolean, default: true },
    isadministrator: { type: Boolean, default: false },
    password: { type: String, required: true}
}, {timestamps: true});



module.exports = mongoose.model('user', userSchema);
