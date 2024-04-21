const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      
      
      // // NOTE: THIS IS ONLY FOR TESTING PURPOSES {
      // req.session.save(() => {
      //   // Set the 'loggedIn' session variable to 'true'
      //   req.session.loggedIn = true;
      // });
      // // }
      // Send over the 'loggedIn' session variable to the 'homepage' template
      res.render('start',  {
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/auth-login', async (req, res) => {
    try {
      res.render('auth-login');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/auth-register', async (req, res) => {
    try {
      res.render('auth-register');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

    router.get('/auth-recoverpw', async (req, res) => {
    try {
      res.render('auth-recoverpw');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
    });

  module.exports = router;