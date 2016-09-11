var fc = require('./script/font-creator');
var upload = require('./script/upload-all');
var exec = require('child_process').exec;
var http = require('http');
var url = require('url');

var PORT = 8888;

// 更新 Git
var pullFromGit = function(callback) {
	exec('git pull', function(error, stdout, stderr) {
		if(error) {
			console.log("pull Error, " + stderr);
		} else {
			console.log("pull complate, " + stdout);
			callback();
		}
	});
} 

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    if(pathname.indexOf("github_hook.json")) {
    	pullFromGit(function() {
    		fc.create();
			upload.uploadAll();
    	})
    }

    response.write("Hello World!");
    response.end();
});

server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");

