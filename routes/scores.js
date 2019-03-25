var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('scores', { title: 'UF AP Credit Calculator' });
});

module.exports = router;
