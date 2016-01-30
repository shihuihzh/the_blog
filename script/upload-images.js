var upload = require('./upload');

var imagesDir = "./static/images"
upload.uploadFiles(imagesDir, "/images/", "image/png")