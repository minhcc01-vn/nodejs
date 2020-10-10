class AutherController {
    
    login(req, res) {
        res.render('../views/auth/login')
    }

    postLogin(req, res) {
        res.redirect('/users')
    }
}

module.exports = new AutherController