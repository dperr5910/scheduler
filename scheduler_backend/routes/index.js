var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Applepearcube4',
  database: 'mydb'
})



/* GET home page. */
connection.connect();
var results = connection.query('SELECT * FROM accounts', function (err, rows, fields) {
  if (err) throw err
  results = rows[0].name;
  connection.end();
  return rows[0].name;
  
});
connection.end()

router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express', dylan:results});
});

router.get('/add', function(req, res, next) {
  connection.connect();
  connection.query("INSERT INTO `mydb`.`accounts` (`accounts_id`, `email`, `name`, `hashed_password`, `salt`) VALUES ('234', 'hello', 'hello', 'hello', 'hello');", function (err, rows, fields) {
    if (err) throw err
    console.log("done");
  });
  connection.end()
  res.render('index', { title: 'Express', dylan:results});
});

module.exports = router;



