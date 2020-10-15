var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.listen(8000)

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'A1!B2@C3#',
	database : 'chad'
});


app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// Gets all the values from the table after join

app.get('/getdata',function(req,res){
    var sql = "select p.project_title,p.date_added,c.category_name,u.username from ilance_projects as p join ilance_users as u on p.user_id = u.user_id left join ilance_categories as c on p.cid = c.cid ;"
    connection.query(sql,function(err,result){
        if(err) throw err
        else
        res.json(result)
    })
});

// Gets the values from the table according to the page numbers

app.get('/getdata/:value1',function(req,res){
    var sql = "select p.project_title,p.date_added,c.category_name,u.username from ilance_projects as p join ilance_users as u on p.user_id = u.user_id left join ilance_categories as c on p.cid = c.cid LIMIT 2 OFFSET "+req.params.value1
    connection.query(sql,function(err,result){
        if(err) throw err
        else
        res.json(result)
    })
});

// Gets the sorted value accroding to the criteria set

app.get('/sortdata/:value3/:value4', function(req,res){
    var sql = "select p.project_title,p.date_added,c.category_name,u.username from ilance_projects as p join ilance_users as u on p.user_id = u.user_id left join ilance_categories as c on p.cid = c.cid order by "+req.params.value3+" ASC LIMIT 2 OFFSET "+req.params.value4
    connection.query(sql,function(err,result){
        if(err) throw err
        else
        res.json(result)
    })
})
