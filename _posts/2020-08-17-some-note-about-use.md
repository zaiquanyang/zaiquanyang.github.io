---
title: some note about use
tags: git
---

**基于Jekyll-github_page 博客站点的使用说明**

本博客为了能够实时预览，在本地也创建了一个git仓库，该仓库可以和自己github中的一个仓库同步。平时如果没有预览的需要的话，也可以不同步。

同步仓库的命令是：
```
git pull origin master # 一般创建初始化本地仓库后，对应的远程库可能有一些其它内容(或者新的修改)，需要通过该命令先让本地库与远程库同步，之后才可以将本地修改的版本顺利上传同步到远程库 
# origin 是本地库的默认名称
# master 是远程库的分支名
git push -u origin master
```

在本地增加新的内容的命令：
```
cd local_repo
git add xxx.md  #t 添加新创建的的文件或者文件夹
git commit -m "submit info"   # 添加关于本次内容修改或者创建的信息
```
删除本地库中的文件夹或者文件
```
git rm xxx.md # 删除版本库中的文件
git commit -m "submit info"  # 提交删除信息
```
关于 git 更多的使用方法和原理，以后有时间再观看一下有关视频后再写。。。。
