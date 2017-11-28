const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('landing');
});

router.get('/home', (req, res) => {
  res.render('web/home');
});

module.exports = router;
