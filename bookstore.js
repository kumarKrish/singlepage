const express = require('express');
const app = express();
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

app.get('/',function(req,res){

	const url = 'mongodb://127.0.0.1:27017/bookstore';

	// use connect method to connect to server

	MongoClient.connect(url,function(err,client){
		// console.log('db',db);
		// console.log('error',err);
		const myAwesomeDB = client.db('bookstore')

	const Collection =myAwesomeDB.collection('math');
	Collection.find({}).toArray(function(err,docs){
	console.log("find the following records");
	console.log(docs);
	client.close()
	res.send();
	});

	});

});

// post
app.post('/',function(req,res){
	const url = 'mongodb://127.0.0.1:27017/bookstore';
	MongoClient.connect(url,function(err,client){
		if(err) throw err;
		const dbo = client.db('bookstore');
		var myobj = { chapter: "quantum physics", address: "Highway 37" };
		dbo.collection("math").insertOne(myobj, function(err, res) {
        if (err) throw err;
       console.log("1 document inserted");
       db.close();
  });
})

})

//put
app.put('/',function(req,res){
	const url = 'mongodb://127.0.0.1:27017/bookstore';
MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  const dbo = client.db("bookstore");
  const myquery = { chapter1: "real" };
  const newvalues = { $set: {chapter1: "Mickey", address: "Canyon 123" } };
  dbo.collection("math").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    client.close();
  });
});
})


// delete
app.delete('/',function(req,res) {
	const url = 'mongodb://127.0.0.1:27017/bookstore/';
MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  var dbo = client.db("bookstore");
  var myquery = { chapter1: 'real' };
  dbo.collection("math").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    client.close();
  });
});
})
	


app.listen(3000, function(){
 console.log('hey server started at port 3000!');
})
exports.app=app;
