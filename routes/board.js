var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('board/list', { title: 'aaBoard' });
});

router.post('/', function(req,res) {

});

router.post('/_id', function(req,res) {

});

/*router.delete('/', function(req,res) {

});*/

module.exports = router;