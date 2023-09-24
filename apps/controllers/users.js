module.exports.users = function (req, res, next) {
    res.send('respond with a resource');
}

module.exports.profile = function (req, res, next) {
    res.render('users',
        {
            title: 'Profile Page',
            username: 'Julio'
        }
    );
}