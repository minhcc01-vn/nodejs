class SiteControllers {
    home(req, res) {
        res.render('../views')
    }
}

module.exports = new SiteControllers