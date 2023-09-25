// var express = require('express');
// var router = express.Router();

//  let indexController = require('../controllers/index');

// /* GET home page. */
// router.get('/', indexController.home);

// router.get('/about', indexController.about);

// module.exports = router;

const express = require('express');
const path = require('path');

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


  router.get('/Resume', function(req, res, next) {
    res.render('Resume');
  });

  router.get('/project1', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/static-projects/project1/index.html'));
  });

  router.get('/project1', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/static-projects/project2/index.html'));
  });

  router.get('/project1', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/static-projects/project3/index.html'));
  });
  
  
module.exports = router;
