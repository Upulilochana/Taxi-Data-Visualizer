let mysql = require('mysql');
const tripdata=[];
module.exports=function filterdata(sdate,edate){

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = ('select medallion from taxi where pickuptime LIKE "4/17/13%"');
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    });
});}
