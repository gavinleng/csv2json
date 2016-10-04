/*
 * Created by G on 04/10/2016.
 */

var fs = require("fs");
var Converter = require("csvtojson").Converter;
var converter = new Converter({});

var cfg = require("./data-config.js");

var inPath = cfg.inPath;
var outPath = cfg.outPath;

converter.fromFile(inPath, function(err,data){
	if (err) throw err;
	
	var dd, i;
	var lendata = data.length;
	var d = "";
	
	for (i = 0;  i <lendata; i++) {
		dd = data[i];
		d  += JSON.stringify(dd, null, 0) + "\n";
	}
	
	fs.writeFile(outPath, d , 'utf8', function(err) {
		if (err) throw err;
		console.log('File is saved!');
	});
});