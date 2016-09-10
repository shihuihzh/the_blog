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
	upload.uploadFiles(fontDir, "/fonts/", null)
	console.log("font upload complate...")

	upload.uploadFiles(jsDir, "/js/", "application/javascript")
	console.log("font upload complate...")

	upload.uploadFiles(cssDir, "/css/", "text/css")
	console.log("css upload complate...")

	upload.uploadFiles(imagesDir, "/images/", "image/png")
	console.log("images upload complate...")
	
}