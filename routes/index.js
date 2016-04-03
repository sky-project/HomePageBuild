
var fs = require('fs');
var mongo = require('mongo');
var http = require('http');
var url = require('url');
var mime = require('mime');
//var jszip = require('jszip')

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Sakai' });
};

exports.post = function(req, res,next){
	debugger;
	var file = req.files.files;
	var tmp_path = file.path;
  console.log("PATH="+file.path)
	var target_path = './upload/' + file.name;
	console.log(file.name);
	var read = fs.createReadStream(tmp_path);
	var write = fs.createWriteStream(target_path);
	read.pipe(write);
	// filesdb.save(
	// 		{name:file,
	// 			url:'aaa'}
	// );
	res.render('index', { title: 'Uploaded!!' });
};

exports.dlfile = function(req, res){
  var uid = req.params.id;
  console.log(uid);
  var filepath =  './upload/' + uid;
  var file = fs.readFile(filepath);
  var zip = new JSZip("DEFLATE");

  // var char = filesdb.findOne(
	// 	    {
	// 	        url : aaa
	// 	    },
	// 	    {safe : true},
	// 	    function (err, char){
	// 	        if (err) {
	// 	            throw err;
	// 	        }else{
	// 	            res.send(char.name);
	// 	        }
	// 	    }
	// 	)
  // //res.send =(file, {ContentType : mime.lookup(filepath));
  //res.AddHeader("Content-Disposition", "attachment; filename=" + uid);
  //res.Flush();
  //res.WriteFile(filepath);
  //res.End();
};
