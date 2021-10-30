---
<!-- layout: post -->
title: python 导入包出现的bug
tags: BUG
---

记录一下又一次在python项目中导入包时出现的bug, 原因是在激活环境（比如pytorch38）后，`sys.path`会多一个`..lib/model`路径，
而这个路径正好和我要运行的项目中的`model`文件夹重名，导致无法正确导入，那么就需要删除掉这个路径，
根据激活的环境路径找到`/data/env/envs/pytorch38/lib/python3.8`在这里有一个`easy-install.pth`文件(不知道其他情况是不是也是这个名字)，
可以看到里面存储了几个路径列表，其中就包括了上面说的那个`..lib/model`路径，于是把它删除掉，再退出重新激活环境就可以了。哎心累
