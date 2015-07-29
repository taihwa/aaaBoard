var express = require('express');
var router = express.Router();
var db = require('../modules/db').conn();
var tbl = "testBoard";

/* GET home page. */
router.get('/', function(req, res, next) {
    var js = {
        title: 'List | aaBoard'
    };

    db.query("SELECT * FROM ?",tbl,function(err,result){
        js.rows = result;
        res.render('board/list', js);
    });



});

router.get('/write', function(req, res, next) {
    //res.render('board/list', { title: 'aaBoard' });
});

router.post('/write', function(req,res) {
    console.log('write');
    var js = {
        nr: ''
        ,subject: 'test'
        ,content: 'test test'
    }
    db.query("INSERT INTO "+tbl+" SET ?",js,function(err,result){
        console.log('write_ok');
    });
});

router.post('/_id', function(req,res) {

});

/*router.delete('/', function(req,res) {

});*/

module.exports = router;