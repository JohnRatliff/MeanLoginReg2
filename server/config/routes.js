var userController = require("../controllers/userController");
var path = require('path');

module.exports = function(app) {

    // GET: Retrieve all users
    app.get('/api/users', function(req, res) {
        console.log("routes:----------------------getAll----------------------")
        userController.getAll(req, res);
    });

    // GET: Retrieve a user by ID
    app.get('/api/users/:id', function(req, res) {
        console.log("routes:----------------------getOneById/:id----------------------")
        userController.getOneById(req, res);
    });

    // GET: Retrieve a user by email
    app.get('/api/users/email/:email', function(req, res) {
        console.log("routes:----------------------getOneByEmail/:email----------------------")
        userController.getOneByEmail(req, res);
    });

    // POST: Create a new user {user}
    app.post('/api/users', function(req, res) {
        console.log("routes:----------------------new----------------------")
        userController.new(req, res);
    });

    // POST: User Login {email: xxx, password: xxx}
    app.post('/api/users/login', function(req, res) {
        console.log("routes:----------------------login----------------------")
        userController.login(req, res);
    });

    // PUT: Update a user by ID {user}
    app.put('/api/users/:id', function(req, res) {
        console.log("routes:----------------------update----------------------")
        userController.update(req, res);
    });

    // PUT: Change Login Password {oldpassword: xxx, newpassword: xxx}
    app.put('/api/users/changepassword/:id', function(req, res) {
        console.log("routes:----------------------changepassword----------------------")
        userController.updatePassword(req, res);
    });

    // DELETE: Delete a user by ID
    app.delete('/api/users/:id', function(req, res) {
        console.log("routes:----------------------deleteById----------------------")
        userController.deleteById(req, res);
    });

    // DELETE: Delete all users
    app.delete('/api/users', function(req, res) {
        console.log("routes:----------------------deleteAll----------------------")
        userController.deleteAll(req, res);
    });

    // Triggered when none of the above routes matched the url
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
};