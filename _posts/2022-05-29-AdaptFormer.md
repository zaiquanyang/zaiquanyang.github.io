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
之前的VPT也是类似的工作，但是作者发现Prompt tuning 受微调的Token数目较大影响，对于图像分类这样需要比较少的tokens的任务而言，效果还行，但是对于视频理解这样需要更多 tokens 参数学习的时候，效果就不好了，出于此作者就提出了一种扩展性更强的方案 AdaptFormer。

对比图如下：作者设计的方法在以少量参数微调的情况下，取得了媲美 Fine-tune 全部参数的效果，同时也由于几乎同时期的 VPT.

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p2esj0b7j30k90ksqb8.jpg" width="300"></div>


### 🦖 方法

不同于VPT 在 Token Space 引入更多可学习的参数， 本文是在VIT内部引入较少的参数来进行微调， simple  yet effective, 个人比较喜欢这类的工作，没有堆很多玄乎的卷积层，且简单有效。

作者怎么设计的呢？先睹为快！

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p2butqjfj314k0k4ao1.jpg" width="600"></div>

从上图可以看出作者在VIT的每个Block内的 MLP 进行了略微的设计, 替换为 AdaptMLP，如图所示 AdaptMLP 除了包含原先的 MLP 分支外，额外的分支就是两层 全连接层，中间加一个ReLU，最后的输出经过一个缩放因子，计算公式为：

$$
\tilde{x}_{\ell}=\operatorname{ReLU}\left(\mathrm{LN}\left(x_{\ell}^{\prime}\right) \cdot \boldsymbol{W}_{\text {down }}\right) \cdot \boldsymbol{W}_{\mathrm{up}}
$$

通过残差的方式和原先的MLP输出结合：

$$
x_{\ell}=\operatorname{MLP}\left(\mathrm{LN}\left(x_{\ell}^{\prime}\right)\right)+s \cdot \tilde{x}_{\ell}+x_{\ell}^{\prime}
$$
里面有一个缩放因子 $$s$$.

**参数分析**

AdaptMLP额外引入的参数来自于两个全连接层，参数分别为 $$\boldsymbol{W}_{\text {down }} \in \mathbb{R}^{d \times \hat{d}}$$, $$\boldsymbol{W}_{\text {up}} \in \mathbb{R}^{d \times \hat{d}}$$, 这里 $$\hat{d} \ll d$$.

**适用性**

由于AdaptMLP 没有改变任何 Transformer 自身结构，因此能够作为插件应用在任何其它 Vison Transformer结构中。
作者称之前的 prompt-related 方法就不太适合一些 金字塔特征结构的 VIT 变体。
此外，作者也注意到 prompt-related 的方法在从视觉任务应用到视频任务上时，后者需要引入较多的 可学习Tokens。

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p36dpvcej30gs0iigq2.jpg" width="300"></div>



### 🦖 实验

作者在图像domain和视频domain任务上做对比实验

- 不管是在自监督预训练模型还是在有监督预训练模型， 结果表明作者的 AdaptFormer 都非常 Nice.

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p39d8zx0j30on094tj2.jpg" width="600"></div>

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p3f9jht9j30q008047i.jpg" width="600"></div>

- 随着微调参数变化的鲁棒性

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p3i56iynj30pf0dxgv9.jpg" width="600"></div>

鲁棒性这块也好于 VPT, VPT的微调参数一旦超过某个任务所能接受的阈值就会明显掉点，而AdaptFormer没有。

- 关于模型AdaptMLP设计的一些消融实验

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p3jysc55j30po08iwll.jpg" width="600"></div>


更多分析和实验细节参考文章原文和附录。
