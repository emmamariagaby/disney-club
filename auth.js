module.exports = function requireSignIn(req, res, next){
    if (req.session.user) {
        next()
    } else {
        res.status(403).json('You have to be logged in to create a new character')
    }
} 