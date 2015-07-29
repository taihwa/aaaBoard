/**
 * Created by before0912 on 2015-07-29.
 */
var mysql      = require('mysql');
//var connection = mysql.createConnection({
var connection = mysql.createPool({
    host     : 'bokdol.net',
    user     : 'aa',
    password : 'ehdtls1ck',
    database : 'aa',
    insecureAuth: true,
    connectionLimit: 10
});

exports.conn = function(){
    return connection;
}