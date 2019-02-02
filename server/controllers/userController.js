var User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);

module.exports = {
    // Retrieve all Users
    getAll: function(req, res) {
        console.log("controller:------------------------getAll------------------------");

        User.find({}, null, {sort: {email: 1}})
            .then(Users => {
                console.log("Retrieve all Users", Users);
                res.json({action: "GetAll", result: "Success", data: Users});
            })
            .catch(err => {
                console.log("controller:-----------------------getAll: error------------------------");
                console.log("Error occurred finding User.  See err object, below:");
                console.log(err);

                res.json({action: "GetAll", result: "Error", error: err});
            })
    },

    // Retrieve a User by ID
    getOneById: function(req, res) {
        console.log("controller:------------------------getOneById------------------------");
        console.log("Retrieve User by ID: ", req.params.id);

        User.findById(req.params.id)
            .then(user => {
                console.log("Retrieve a User by ID:", user);
                res.json({action: "GetOneById", result: "Success", data: user});
            })
            .catch(err => {
                console.log("controller:------------------------getOneById: error------------------------");
                console.log("Error occurred retrieving user by ID.  See err object, below:");
                console.log(err);
                
                res.json({action: "GetOneById", result: "Error", error: err});
            })
    },

    // Retrieve a User by Email
    getOneByEmail: function(req, res) {
        console.log("controller:------------------------getOneByEmail------------------------");
        console.log("Retrieve User by Email: ", req.params.email);

        User.find({ email: req.params.email})
            .then(user => {
                console.log("Retrieve a User by Email:", user);
                res.json({action: "GetOneByEmail", result: "Success", data: user});
            })
            .catch(err => {
                console.log("controller:------------------------getOneByEmail: error------------------------");
                console.log("Error occurred retrieving User by Email.  See err object, below:");
                console.log(err);
                
                res.json({action: "GetOneByEmail", result: "Error", error: err});
            })
    },

    // Create a User 
    new: function(req, res) {
        console.log("controller:------------------------new------------------------");
        console.log("Create User: ", req.body);

        // Ensure the password is at least 3 characters long
        if( req.body.password.trim().length < 3) {
            return res.json({action: "New", result: "Error", error: {message: "Password must contain a minimum of 3 characters."}});
        }

        // Ensure email address is unique
        User.find({email:req.body.email})
            .then(user => {
                console.log('new', user);
                if( user.length > 0) {
                    // Another user exists with this email address
                    res.json({action: "New", result: "Error", error: {message: "Email Address must be unique."}});
                } else {
                    let hashedPassword = bcrypt.hashSync(req.body.password, bcryptSalt);
                    newuser = {
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        city: req.body.city,
                        state: req.body.state,
                        country: req.body.country,
                        isactive: req.body.isactive,
                        isadministrator: req.body.isadministrator,
                        password: hashedPassword
                    };
                            
                    // Save new User to DB
                    User.create(newuser)
                        .then(user => {
                            res.json({action: "New", result: "Success", data: user});
                        })
                        .catch(err => {
                            console.log("controller:------------------------new: error------------------------");
                            console.log("Error occurred saving new User.  See err object, below:");
                            console.log(err);
                             res.json({action: "New", result: "Error", error: err});
                        });
                }
            })
            .catch(err => {
                console.log("controller:------------------------new: error------------------------");
                console.log("Error occurred retrieving User by Email.  See err object, below:");
                console.log(err);
                
                res.json({action: "New", result: "Error", error: err});
            })
    },

    login: function(req, res) {
        console.log("controller:------------------------login------------------------");
        //console.log("Login User: ", req.body);

        const loginPassword = req.body.password;

        // Lookup user by email
        User.find({ email: req.body.email})
            .then(user => {
                console.log('login find:', user);
                if( user.length === 1) {
                    if( user[0].isactive === false) {
                        res.json({action: "Login", result: "Error", error: {message: "User is inactive."}});
                    } else if( bcrypt.compareSync( loginPassword, user[0].password)) {
                        login = { 
                            isloggedin: true, 
                            userid: user[0]._id, 
                            email: user[0].email, 
                            firstname: user[0].firstname, 
                            lastname: user[0].lastname,
                            city: user[0].city,
                            state: user[0].state,
                            country: user[0].country,
                            isactive: user[0].isactive,
                            isadministrator: user[0].isadministrator
                        };
                        res.json({action: "Login", result: "Success", data: login});
                    } else {
                        res.json({action: "Login", result: "Error", error: {message: "Invalid password"}});
                    }
                } else {
                    res.json({action: "Login", result: "Error", error: {message: "Invalid Email Address"}});
                }
            })
            .catch(err => {
                res.json({action: "Login", result: "Error", error: err});
            });
    },

    // Update user/:id {user}
    update: function(req, res) {
        console.log("controller:------------------------update------------------------");
        console.log("Update User: ", req.body);
        
        // Ensure email address is unique
        User.find({email:req.body.email, _id: {$ne: req.params.id}})
            .then(user => {
                if( user.length > 0) {
                    // Email address is NOT unique, DO NOT update user
                    res.json({action: "Error", result: "Success", error: {message: "Email Address must be unique."}});
                } else {
                    // Email address is unique, update user
                    updateuser = {
                        userid: req.params.id,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        city: req.body.city,
                        state: req.body.state,
                        country: req.body.country,
                        isactive: req.body.isactive,
                        isadministrator: req.body.isadministrator
                    };        
                    User.findByIdAndUpdate(req.params.id, updateuser, {new: true, runValidators: true})
                        .then(user => {
                            updateuser = {
                                userid: user._id,
                                email: user.email,
                                firstname: user.firstname,
                                lastname: user.lastname,
                                city: user.city,
                                state: user.state,
                                country: user.country,
                                isactive: user.isactive,
                                isadministrator: user.isadministrator
                            }
                            console.log("after update success:", user);
                            res.json({action: "Update", result: "Success", data: updateuser});
                        })
                        .catch(err => {
                            console.log("controller:------------------------update: error------------------------");
                            console.log("Error occurred updating User.  See err object, below:");
                            console.log(err);
            
                            res.json({action: "Update", result: "Error", error: err});
                        })
                }
            })
            .catch(err => {
                console.log("controller:------------------------update: error------------------------");
                console.log("Error occurred retrieving User by Email and Id.  See err object, below:");
                console.log(err);
                
                res.json({action: "Update", result: "Error", error: err});
            })
    },

    // Update user password 
    updatePassword: function(req, res) {
        console.log("controller:------------------------updatePassword------------------------");
        console.log("Update User Password: ", req.body);

        // req.body = { oldpassword: xxxx, newpassword: xxxx }

        // Ensure new password is at least 3 characters long
        if( req.body.newpassword.trim().length < 3) {
            return res.json({action: "New", result: "Error", error: {message: "The New Password must contain a minimum of 3 characters."}});
        }
        
        User.findById( req.params.id)
            .then(user => {
                if( user) {
                    if( user.isactive === false) {
                        res.json({action: "UpdatePassword", result: "Error", error: {message: "User is inactive."}});
                    } else if( bcrypt.compareSync( req.body.oldpassword, user.password)) {
                        let hashedPassword = bcrypt.hashSync(req.body.newpassword, bcryptSalt);
                        let updateuserpassword = {
                            email: user.email,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            city: user.city,
                            state: user.state,
                            country: user.country,
                            isactive: user.isactive,
                            isadministrator: user.isadministrator,
                            password: hashedPassword 
                        };
                        User.findByIdAndUpdate(req.params.id, updateuserpassword, {new: true, runValidators: true})
                            .then(user => {
                                updateuser = {
                                    email: user.email, 
                                    firstname: user.firstname, 
                                    lastname: user.lastname,
                                };
                                res.json({action: "UpdatePassword", result: "Success", data: updateuser});
                            })
                            .catch(err => {
                                console.log("controller:------------------------updatePassword: error------------------------");
                                console.log("Error occurred updating User Password.  See err object, below:");
                                console.log(err);
                
                                res.json({action: "UpdatePassword", result: "Error", error: err});
                            });
                    } else {
                        // oldpassword != existing password, DO NOT update password
                        res.json({action: "UpdatePassword", result: "Error", error: {message: "Existing password is invalid."}});
                    }
                } else {
                    res.json({action: "UpdatePassword", result: "Error", error: {message: `User Id (${req.params.id}) was not found.`}});
                }
            })
            .catch(err => {
                console.log("controller:------------------------updatePassword: error------------------------");
                console.log("Error occurred retrieving User by Id.  See err object, below:");
                console.log(err);
                
                res.json({action: "UpdatePassword", result: "Error", error: err});
            })
    },

    // POST: Delete User By Id
    deleteById: function(req, res) {
        console.log("controller:------------------------deleteById------------------------");
        console.log("Delete User: ", req.params.id);
        
        User.findByIdAndRemove(req.params.id)
            .then(User => {
                res.json({action: "DeleteById", result: "Success", data: User});
            })
            .catch(err => {
                console.log("controller:------------------------deleteById: error------------------------");
                console.log("Error occurred deleting User by Id.  See err object, below:");
                console.log(err);

                res.json({action: "DeleteById", result: "Error", error: err});
            })
    },

    // POST: Delete all Users
    deleteAll: function(req, res) {
        console.log("controller:------------------------deleteAll------------------------");
        console.log("Delete All Users");
        
        User.remove({})
            .then(User => {
                res.json({action: "DeleteAll", result: "Success", data: User});
            })
            .catch(err => {
                console.log("controller:------------------------deleteById: error------------------------");
                console.log("Error occurred deleting all users.  See err object, below:");
                console.log(err);

                res.json({action: "DeleteAll", result: "Error", error: err});
            })
    }
};