+++
author = ""
comments = true
date = "2016-09-12T15:33:44+08:00"
draft = false
image = ""
menu = ""
share = true
tags = ["lift", "daily"]
title = "Build Successed"

+++
拖延症晚期的我终于把博客建起来了，顺手吧时间记录一下

 
> * 2015-12-XX 想要做一个静态博客
> * 2016-01-XX 开始考虑用什么技术做，敲定生成静态博客的引擎为 [HUGO](http://gohugo.io)
> * 2016-01-XX 希望可以用到好看的字体，找个多个方案，最终选择使用了 [fontmin](http://ecomfe.github.io/fontmin/) 生成字体文件
> * 2016-01-XX 使用 [又拍云](https://www.upyun.com/index.html) 的 `CDN` 服务，加速博客的 `CSS`、`JS` 和字体等静态资源文件
> * 2016-01-XX 使用 `GO` 语言,  写了一个简单的 `HTTP Server` 用于 `hook` 当 `Github` 中 `Blog` 仓库提交事件。实现自动更新
> * 2016-01-XX 尝试直接部署到服务器成功
> * 2016-01-XX 希望可以实现项目的 `Docker` 化
> * 2016-02-XX ~ 2016-09-08 拖延症发作，中间买了两个很土豪的买了两个 `VPS` ，然后我拖我拖我拖拖拖
> * 2016-09-09 突然想起来，不能拖了，爬起来就是干。重新看了一下代码，决定不用 `GO` 写的那个 `HOOK` 服务器了，因为 [fontmin](http://ecomfe.github.io/fontmin/)  跟 
[又拍云](https://www.upyun.com/index.html) 的 `SDK` 都是使用的 [Node](https://nodejs.org) 版本。所以直接用 `Node` 重写了 `hook` 服务器
> * 2016-09-10 把所有软件版本更新，开始 `Docker` 化边调试边完成 `Dockerfile` 文件
> * 2016-09-11 终于，调试结束上线，修改了一些样式问题


拖延症晚期，真可怕（逃...  

但是，终于还是完成了 
