var express = require('express');
var app = express();
var multer = require('multer');

var fs = require('fs')
var csv = require('fast-csv')
var mysql = require('mysql')

var daterange=require('./Cordinates')
// var db=require('./mod/create_db');
// var tb=require('./mod/csv_into_db');
//const parse      = require('csv-parse');
//const util       = require('util');
//const path       = require('path');
//const async      = require('async');
//const co         = require('co');
//const csvHeaders = require('csv-headers');
//const leftpad    = require('leftpad');
//const csv =require('fast-csv')
//db.create_db("Taxi");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE if not exists  mydb ", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/project/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname  )
  }
})
 
 var upload = multer({ storage: storage })


app.get('/',function(req,res){
  res.sendFile('index.html', {root:__dirname})
  
})

app.post('/profile', upload.single('filename'), function (req, res, next) {

  console.log(req.file.path)

  
    res.sendFile('Date.html',{root : __dirname})
  //put data to table TripData
  // tb.csv_into_db(req.file.path,'Taxi','Trip');
  
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mydb"
    });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE if not exists taxi (medallion VARCHAR(255),pickuptime VARCHAR(255),dropofftime VARCHAR(255),passengers VARCHAR(255),pickupx VARCHAR(255),pickupy VARCHAR(255),dropoffx VARCHAR(255),dropoffy VARCHAR(255),fare VARCHAR(255),paymenttype VARCHAR(255),surcharge VARCHAR(255),mtatax VARCHAR(255),tip VARCHAR(255),tolls VARCHAR(255),total VARCHAR(255))";
        con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        });
    });

    let stream = fs.createReadStream(req.file.path);
    let myData = [];
    let csvStream = csv
        .parse()
        .on("data", function (data) {
            myData.push(data);
        })
        .on("end", function () {
            myData.shift();
            
            //create a new connection to the database
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: "mydb"
        });
        

            // open the connection
            connection.connect((error) => {
                if (error) {
                    console.error(error);
                } else {
                    // let query1 = 'drop table if exists taxi' ;
                    // con.query(query1, [myData], (error, response) => {
                    //     console.log(error || response);
                    // });
                    // var sql = "CREATE TABLE if not exists taxi (medallion VARCHAR(255),pickuptime VARCHAR(255),dropofftime VARCHAR(255),passengers VARCHAR(255),pickupx VARCHAR(255),pickupy VARCHAR(255),dropoffx VARCHAR(255),dropoffy VARCHAR(255),fare VARCHAR(255),paymenttype VARCHAR(255),surcharge VARCHAR(255),mtatax VARCHAR(255),tip VARCHAR(255),tolls VARCHAR(255),total VARCHAR(255))";
                    // con.query(sql, function (err, result) {
                    //         if (err) throw err;
                    //         console.log("Table created");
                    //         });
                    let query2 = 'INSERT INTO taxi (medallion,pickuptime,dropofftime,passengers,pickupx,pickupy,dropoffx,dropoffy,fare,paymenttype,surcharge,mtatax,tip,tolls,total) VALUES ?';
                    con.query(query2, [myData], (error, response) => {
                        console.log(error || response);
                    });
                }
            });
        });

    stream.pipe(csvStream);
     

//   const fileRows = [];
// //open uploaded csvfile
// csv.fromPath(req.file.path)
// .on("data",function(data){
//   fileRows.push(data);
// })
// .on("end",function (){
//   console.log(fileRows[0])
// })

})

app.post('/profile',  function (req, res, next) {
   
    daterange.filterdate('Sdate','Edate');
})


//start server
app.listen(8080,function(){
  console.log('server started on port 8080')
})

app.get('/map1',function(req,res){
    res.sendFile('map1.html',{root : __dirname})
})
app.get('/map2',function(req,res){
    res.sendFile('map2.html',{root : __dirname})
})
app.get('/Date',function(req,res){
    res.sendFile('Date.html',{root : __dirname})
})
app.get('/map',function(req,res){
    res.sendFile('map.html',{root : __dirname})
})