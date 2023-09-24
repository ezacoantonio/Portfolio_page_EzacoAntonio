// var express = require('express');
// var router = express.Router();

//  let indexController = require('../controllers/index');

// /* GET home page. */
// router.get('/', indexController.home);

// router.get('/about', indexController.about);

// module.exports = router;

const express = require('express');
const router = express.Router();

let indexController = require('../controllers/index');

router.get('/', indexController.home);

// New routes
router.get('/about', function(req, res, next) {
    res.render('about');
  });
  
  router.get('/projects', function(req, res, next) {
    res.render('projects');
  });
  
  router.get('/services', function(req, res, next) {
    res.render('services');
  });
  
  router.get('/contact', function(req, res, next) {
    res.render('contact');
  });

module.exports = router;
