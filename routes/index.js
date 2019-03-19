var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UF AP Credit Calculator' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  var creditsForm = {};
  res.locals.scores = {};

  for(var key in req.body){
    if (req.body[key] != '') {
      res.locals.scores[key] = req.body[key];
    }
  }
console.log(res.locals.scores);
  res.render('calc', { title: 'UF AP Credit Calculator'});
});

module.exports = router;
