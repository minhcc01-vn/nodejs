const db = require('../db')
const shortid = require('shortid');

class UserController {
    index(req, res) {
        res.render('users', {
            users: db.get('users').value()
        })
    }

    search(req, res) {
        var q = req.query.q
        var matchedUser = db.get('users').value().filter((user) => {
            return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
        });
        res.render('users', {
            search: q,
            users: matchedUser
        })
    }

    create (req, res) {
        res.render('users/create')
    }

    postCreate (req, res) {
        req.body.id = shortid.generate();
        
        db.get('users').push(req.body).write()
        res.redirect('/users')            

    }

    show(req, res) {
        var id = req.params.id
        var user = db.get('users').find({id: id}).value()
        res.render('users/view', {
            users: user
        })
    }
}

module.exports = new UserController;