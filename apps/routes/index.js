// This is the main entry point for the application.
// It sets up the server, requires routes, and handles middleware.


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

  
  router.get('/resume', function(req, res, next) {
    var filePath = path.join(__dirname, '../public/Resume Ezaco Antonio.pdf'); // Replace 'your-file-name.pdf' with your actual file name
    res.sendFile(filePath);
  });
  
module.exports = router;
