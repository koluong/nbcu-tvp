const router = require('express').Router();
const passport = require('passport');

router.get('/', (req, res) => {
  res.render('landing');
});

router.get('/home', (req, res) => {
  res.render('web/home');
});

module.exports = router;
