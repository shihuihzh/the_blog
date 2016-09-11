var upload = require('./upload');

var fontDir = "./static/fonts"
var jsDir = "./static/js"
var cssDir = "./static/css"
var imagesDir = "./static/images"
//uploadFiles(fontDir, "/fonts/", null)
//upload.uploadFiles(jsDir, "/js/", "application/javascript")
//uploadFiles(cssDir, "/css/", "text/css")
//uploadFiles(imagesDir, "/images/", "image/png")

exports.uploadAll = function() {
	console.log("font upload...")
	upload.uploadFiles(fontDir, "/fonts/", null)
	
	console.log("js upload...")
	upload.uploadFiles(jsDir, "/js/", "application/javascript")
	
	console.log("css upload...")
	upload.uploadFiles(cssDir, "/css/", "text/css")
	
	console.log("images upload...")
	upload.uploadFiles(imagesDir, "/images/", "image/png")
	
}