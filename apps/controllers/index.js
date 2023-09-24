// module.exports.home = function (req, res, next) {
//     res.render('index',
//         {
//             title: 'COMP229',
//             username: 'Julio'
//         }
//     );
// }

// module.exports.about = function (req, res, next) {
//     res.render('index',
//         {
//             title: 'About',
//             username: 'Julio'
//         }
//     );
// }

exports.home = function(req, res) {
    res.render('index', {title: 'Home'});
};