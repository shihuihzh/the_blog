//var htmlToText = require('html-to-text');
var fs = require('fs')
var Fontmin = require('fontmin');

var fileDir = "./content"
var srcPath = "./fonts/SourceHanSans.ttf"
var destPath = "./static/fonts"


var getAllFileText = function(fileDir, callback) {
	var output = "";
	var filesList = [];
	readFile(fileDir, filesList);

	(function next(i, len) {
		if (i < len) {
			fs.readFile(filesList[i].path,'utf-8', function(err, text) {
				if (err) {
					callback(err)
				} else {
					for(var ii = 0; (ii < text.length); ii++) {
						if(output.indexOf(text[ii]) == -1) {
							output = output.concat(text[ii]);
						}
						
					}
					
					next(i + 1, len)
				}

			});
		} else {
			callback(null, output);
		}
	}(0, filesList.length));


}

//遍历读取文件
function readFile(path, filesList) {
	files = fs.readdirSync(path); //需要用到同步读取
	files.forEach(walk);

	function walk(file) {
		states = fs.statSync(path + '/' + file);
		if (states.isDirectory()) {
			readFile(path + '/' + file, filesList);
		} else {
				//创建一个对象保存信息
				var obj = new Object();
				obj.size = states.size; //文件大小，以字节为单位
				obj.name = file; //文件名
				obj.path = path + '/' + file; //文件绝对路径
				filesList.push(obj);
		}
	}
}

getAllFileText(fileDir, function(err, text) {
	console.log(text.length);
	console.log(text);
	var fontmin = new Fontmin()
		.src(srcPath)
		/*.use(Fontmin.otf2ttf({
		    text: text
		}))*/
		.use(Fontmin.glyph({
			text: text,
			hinting: false
		}))
		.use(Fontmin.ttf2eot())
		.use(Fontmin.ttf2woff())
		.use(Fontmin.ttf2svg())
		.dest(destPath);

	fontmin.run(function(err, files) {
		if (err) {
			throw err;
		}

		//console.log(files[0]);
		// => { contents: <Buffer 00 01 00 ...> }
	});
});