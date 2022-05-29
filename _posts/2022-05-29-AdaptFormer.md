---
# layout: post
title: AdaptFormer dapting Vision Transformers for Scalable Visual Recognition  NeurIPS_2022 在投
tags: Transformer 
---

[AdaptFormer: dapting Vision Transformers for Scalable Visual Recognition](https://arxiv.org/pdf/2205.13535.pdf)
[Code](https://github.com/ShoufaChen/AdaptFormer)

作者是港大罗平老师团队。

这个工作对标的是 3月份出的 [VPT: Visual prompt tuning](http://arxiv.org/abs/2203.12119)以及 [Visual prompting: Modifying pixel space to adapt pre-trained models](https://arxiv.org/abs/2203.17274)， 不得不感慨作者的速度太快了。



### 🦖 动机

Vision Transformer 在计算机视觉中取得了较大的成功，但是在下游任务中微调 VIT 其实是一个比较耗费成本的事情，微调大量的参数比较费劲。作者就想着引入较少的参数，在不用微调全部参数的情况下取得和微调全部参数一样好甚至更优的效果。

对比图如下：作者设计的方法在以少量参数微调的情况下，取得了媲美 Fine-tune 全部参数的效果，同时也由于几乎同时期的 VPT.

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p2esj0b7j30k90ksqb8.jpg" width="300"></div>


### 🦖 方法

不同于VPT 在 Token Space 引入更多可学习的参数， 本文是在VIT内部引入较少的参数来进行微调， simple  yet effective, 个人比较喜欢这类的工作，没有堆很多玄乎的卷积层，且简单有效。

作者怎么设计的呢？先睹为快！

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p2butqjfj314k0k4ao1.jpg" width="600"></div>

从上图可以看出作者在VIT的每个Block内的 MLP 进行了略微的设计，



### 🦖 实验


