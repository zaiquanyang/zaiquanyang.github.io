---
title: Anaconda环境中安装pytorch
tags: Anaconda pytorch
---

### `Anaconda`环境中安装`pytorch`

#### `windows`系统中安装`Anaconda`

[官方下载地址](https://www.anaconda.com/products/individual)

安装过程中有个高级选项设置，第一个选项就是将`Anaconda`添加到系统环境变量，我历次的安装都是打钩这个选项的，没遇到过上面说的额影响其它软件的使用这类问题。如果没有打钩的话，可能需要手动配置添加环境变量, 如下过程：

>windows的话需要去控制面板\系统和安全\系统\高级系统设置\环境变量\用户变量\PATH 中添加 anaconda的安装目录的Scripts文件夹, 比如我的路径是C:\ProgramData\Anaconda3\Scripts, 看个人安装路径不同需要自己调整。
  
配置完成后就可以查看`conda`版本了。查看命令`conda --version`。

`conda`和`Anaconda`的关系：`conda`是一个开源的包管理系统和环境管理系统，用于安装配置多个版本的软件包及其依赖关系，并能在各个版本之中轻松切换，以`python`为例，有的项目文件是旧的版本，有的项目文件是高的版本，为了使得各个项目都能得以运行，就需要`conda`更换调配环境。当然`conda`支持若干语言`Python，R，Ruby，Lua，Scala，Java，Javascript，C / C ++，FORTRAN`。

`Anaconda`是在`conda`基础上进一步开发的，在当今的数据分析中，我们通常会用到很多第三方包，而`Anaconda`除了前面说的包管理器`conda`外，还包含了`pandas, numpy`等常见的科学分析计算包。因此`Anaconda`就是将一些用的较多的包和包管理器整合到了一起。

与`Anaconda`比较类似的还有`Miniconda`.

关于`pip`工具以及`virtualenv`工具的介绍可以参考[Anaconda介绍、安装及使用教程](https://zhuanlan.zhihu.com/p/32925500).

#### `Linux`安装`Anaconda`

可以直接在官网下载上传到服务器，也可以直接使用`wget`下载, [Anaconda各版本网址](https://repo.anaconda.com/archive/)。
复制自己想要的版本网址，输入命令：`wget https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/Anaconda3-2020.07-Windows-x86_64.exe`，即可完成下载。
{:.success}

如果提示没有`wget`，安装命令`yum -y install wget`.

安装`Anaconda`命令`bash Anaconda3-5.3.1-Linux-x86_64.sh`, `Anaconda3-5.3.1-Linux-x86_64.sh`是下载后的文件名字。

安装过程中，一路`enter`就可以了。

当初安装的情形记不太清了，如果出现了命令找不到的错误，可能是因为环境变量没有生效，解决方案参考[conda命令找不到](https://blog.csdn.net/lwgkzl/article/details/89329383), [python命令找不到](https://blog.csdn.net/qq1483661204/article/details/78201451).


#### `pytorch`安装

`windows`和`linux`系统下的安装方法类似。

##### 创建虚拟环境 

在安装`pytorch`之前，需要先创建一个新的虚拟环境。
打开`Anaconda Prompt`或者命令行窗口(Windows系统)，输入创建虚拟环境命令：

`conda  create -n pytorch python=3.7`

这里的`pytorch`是创建的虚拟环境的名称，自己可以随意指定，`python=3.7`指定了该环境的`python`版本为3.7。

删除环境的命令

`conda remove -n pytorch --all`

然后输入`conda activate pytorch`或者`source activate pytorch`就可以进入刚才创建的虚拟环境了。相应的退出环境的命令是`source deactivate pytorch`(linux)，`deactivate`(windows)。

显示已经安装的虚拟环境的命令`conda env list`或者`conda info --envs`, 带星号的是自己当前所在的环境，一般默认创建的虚拟环境为`base`.

##### 包的安装

显示当前环境已经安装的包的信息命令是`conda list`。

在当前的环境中安装包`conda install <pac_name>`, 注意当使用`conda`无法进行安装时，可以使用`pip`进行安装。与`conda`不同，`pip` 是一个包管理器，但无法管理安装环境。此外`conda`也可以安装一些`pip`无法安装的包。此外更多的安装包的方法可以参考[从Anaconda.org安装包](https://zhuanlan.zhihu.com/p/32925500)

包更新命令
`conda update <package_name>`
`conda upgrade <package_name>`

更新多个指定包，则包名以空格隔开，向后排列。如： `conda update pandas numpy matplotlib` 即更新`pandas、numpy、matplotlib`包

##### `安装pytorch`

[pytorch官网](https://pytorch.org/)

进入官网后，要注意`cuda`版本的选择，`windows`系统查看`cuda`版本[参考](https://www.jianshu.com/p/d3b9419a0f89), 如果没有显卡就直接选择 `none`.

直接粘贴复制官网给出的安装`pytorch`命令`conda install pytorch torchvision torchaudio cudatoolkit=10.1 -c pytorch`.

如果觉得安装过慢，甚至安装失败可以配置清华镜像源进行安装

```
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
conda install pytorch torchvision cudatoolkit=9.0 
```
要注意的是及时添加镜像源之后，要去掉官网命令中`-c pytorch`,不然该命令依旧默认是`pytorch`仓库。

当然安装过程中可能还会遇到其它问题，日后再详细记录吧 :)




参考：

https://zhuanlan.zhihu.com/p/32925500<br>
https://blog.csdn.net/qq_43237588/article/details/89183303<br>
https://blog.csdn.net/WannaSeaU/article/details/88427010<br>
https://blog.csdn.net/xo3ylAF9kGs/article/details/104104041/<br>
https://blog.csdn.net/wumenglu1018/article/details/88362927<br>
