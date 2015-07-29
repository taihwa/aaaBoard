var express = require('express');
var router = express.Router();
var db = require('../modules/db').conn();
var tbl = "testBoard";

/* GET home page. */
router.get('/list', function(req, res, next) {
    var js = {
        title: 'List | aaBoard'
        ,rows: []
    };
    db.query("SELECT * FROM ?",tbl,function(err,result){
        js.rows.push = result;
        res.render('board/list', js);
    });
});

router.get('/write', function(req, res, next) {
    res.render('board/write', { title: 'aaBoard' });
});

router.post('/write', function(req,res) {
    console.log(req.body);
    console.log('write');
    var js = {
        nr: ''
        ,subject: req.body.title
        ,content: req.body.content
        ,regdate: new Date().getTime()
    };
    db.query("INSERT INTO "+tbl+" SET ?",js,function(err,result){
        console.log('write_ok');
    });
});

router.post('/_id', function(req,res) {

});

/*router.delete('/', function(req,res) {

});*/

module.exports = router;