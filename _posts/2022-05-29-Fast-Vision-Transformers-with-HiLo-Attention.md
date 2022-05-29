---
# layout: post
title: Fast Vision Transformers with HiLo Attention  NeurIPS_2022 在投
tags: Transformer 
---

作者是蒙纳什大学Jianfeng Cai团队

[Fast Vision Transformers with HiLo Attention](https://arxiv.org/pdf/2205.13213.pdf)
[Code未开源](https://github.com/zip-group/LITv2)

### 🦖 动机

作者的动机和之前的 Inception Transformer 相似，即使 VIT 中 MHSA (多头自注意力较多关注低频的全局性信息，而对局部的高频信息关注不够)，作者的解决方案是把 MHSA 的多个头进行分组，一组编码高频信息，一组编码低频信息。


<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p2esj0b7j30k90ksqb8.jpg" width="300"></div>

### 🦖 方法

作者首先指出之前的VIT以及其改进版本在速度上其实并没有快多少，要么就是复杂高，需要大量时间访问内存，要么就是引入了一些额外操作，对GPU硬件不友好。
为此作者认为评价一个VIT是否速度快应该是吞吐量 throughout 而不是 FLOPs。

然后作者自己就根据高频-低频信息的动机提出了自己的解决方案：修改原先的Attention 计算方法。

模型结构如下：
中间那块表示的是 重新设计了的 MHSA， 上分支是借助 Window Local-Self Attention 来编码高频局部信息，下分支是对特征图窗口做 AVG 池化，用以编码低频全局信息。每个分支使用注意力头数加起来等于原先的 MHSA 的头数。

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p406g2tbj30vt0fh7e8.jpg" width="600"></div>

模型设计比较简单，作者然后就分析自己设计的模型在硬件上运行速度更有优势。



### 🦖 实验

这里就不放了，但看在ImageNet-1K上的分类性能是逊于 Inception Transformer 的。
