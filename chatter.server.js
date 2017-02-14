'use strict';

var express = require('express');
var app = express();
var sampleData = require('./db/sample.json');

app.use('/vendor', express.static('./node_modules'));
app.use('/', express.static('./public'));

app.get('/api', function(req, res){
	res.send(sampleData);
});

app.listen('3000', function(){
	console.log('Running on 3000.');
});
