var upload = require('./upload');

var fontDir = "./static/fonts"
var jsDir = "./static/js"
var cssDir = "./static/css"
var imagesDir = "./static/images"
//uploadFiles(fontDir, "/fonts/", null)
upload.uploadFiles(jsDir, "/js/", "application/javascript")
//uploadFiles(cssDir, "/css/", "text/css")
//uploadFiles(imagesDir, "/images/", "image/png")