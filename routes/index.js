var express = require('express');
const { route } = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/setTitle/:app', (req, res, next) => {
  res.render('index', { title: req.app });
});

module.exports = router;
