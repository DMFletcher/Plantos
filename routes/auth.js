var authController = require('../controllers/authcontroller.js');


module.exports = function (app, passport) {
    app.get('/signup', authController.signup);
    app.get('/login', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/myPlants',
        failureRedirect: '/signup'
    }
    ));
    app.get('/myPlants', isLoggedIn, authController.dashboard);

    app.get('/logout', authController.logout);

    // function isLoggedIn(req, res, next) {

    //     if (req.isAuthenticated())

    //         return next();

    //     res.redirect('/signin');

    // }
    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/myPlants',

        failureRedirect: '/login'
    }
));
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
         
            return next();
             
        res.redirect('/signin');
     
    }


}