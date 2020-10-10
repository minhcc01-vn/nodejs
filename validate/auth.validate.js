const db = require('../db')

module.exports.loginValidate = (req, res, next) => {

    var email = req.body.email
    var password = req.body.password
    var user = db.get('users').find({email: email}).value()

    if(!user) {
        res.render('auth/login', {
            errors: ['User does not exists!'],
            value: req.body
        });
        return;
    }

    if(user.password !== password) {
        res.render('auth/login', {
            errors: ['Wrong password!'],
            value: req.body
        });
        return;
    }
    
    res.cookie('userId', user.id)
    next(); 
}
       
