var UPYUN = require('upyun');
var fs = require('fs')
//var crypto = require('crypto');

// 又拍云仓库与创库管理员密码
var upyun = new UPYUN('', '', '', null, 'legacy');

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
			//var md5 = crypto.createHash('md5');
		
			obj.size = states.size; //文件大小，以字节为单位
			obj.name = file; //文件名
			obj.path = path + '/' + file; //文件绝对路径

			// 计算md5
			//md5.update(fs.readFileSync(obj.path));
			//obj.md5 = md5.digest('hex');

			filesList.push(obj);
		}
	}
}

/*upyun.getUsage(function(err, result) {
	console.log(result)
})*/

/*upyun.createDir("/test", function(err, result) {
	console.log(result)
})*/

// upyun.listDir("/", function(err, result) {
// 	console.log(JSON.stringify(result.data.files));
// })


exports.uploadFiles = function(fileDir, destDir, contentType) {
	var filesList = [];
	readFile(fileDir, filesList);

	filesList.forEach(function(e, i) {
		upyun.uploadFile(destDir + e.name, e.path, contentType, true, function(err, result) {
			if (err) {
				console.log(err)
			} else {
				console.log(result)
			}
					
		});
	});

}


