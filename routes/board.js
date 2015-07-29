var express = require('express');
var router = express.Router();
var db = require('../modules/db').conn();
var tbl = "testBoard";
var boardName = "board";

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('list');
    var js = {
        title: 'List | aaBoard'
        ,boardName: boardName
        ,rows: []
    };

    db.query("SELECT * FROM "+tbl,function(err,results){
        console.log('list_ok');
        js.rows = results;
        res.render('board/list', js);
    });
});

router.get('/write', function(req, res, next) {
    res.render('board/write', { title: 'write | aaBoard',boardName: boardName });
});

router.post('/write', function(req,res) {
    console.log(req.body);
    console.log('write');
    var js = {
        nr: ''
        ,subject: req.body.subject
        ,regdate: new Date().getTime()
    };
    db.query("INSERT INTO "+tbl+" SET ?",js,function(err,result){
        console.log('write_ok');
    });
});


router.get('/:_id', function(req, res, next) {
    console.log('read');
    var _id = req.params._id;
    var js = {
        title: 'Read | aaBoard'
        ,boardName: boardName
        ,row: {}
    };

    db.query("SELECT * FROM "+tbl+" WHERE nr=?",[_id],function(err,results){
        console.log('read-ok');
        js.row = results[0];
        console.log(js);
        res.render('board/read', js);
    });
});

router.get('/edit/:_id', function(req,res) {
    var _id = req.params._id;
    var js = {
        title: 'Read | aaBoard'
        ,boardName: boardName
        ,row: {}
    };
    db.query("SELECT * FROM "+tbl+" WHERE nr=?",[_id],function(err,results) {
        console.log('edit');
        js.row = results[0];
        res.render('board/write', js);
    });
});

router.post('/edit/:_id', function(req,res) {
    var _id = req.params._id;
    var js = {
        subject: req.body.subject,
        content: req.body.content
    };
   db.query("UPDATE "+tbl+ " SET subject=:subject, content = :content WHERE nr="+ db.escape(_id), js, function(err,result) {
       if(!err)
        res.redirect("/"+boardName);
   });
});



module.exports = router;