---
# layout: post
title: Inception Transformer NeurIPS_2022 在投
tags: Transformer 
---

一篇在NeurIPS_2022 under review 文章， 改进现有 Vision Transformer 的工作，作者来自颜水成老师团队。

[Inception Transformer](https://arxiv.org/pdf/2205.12956)

[Code代码未开源](https://github.com/sail-sg/iFormer)


低频表征信息（Global）：物体的全局形状、布局结构信息
高频表征信息（Local）：物体的边缘纹理等信息





### 🦖 动机

原先的 Vision Transformer 通过全局性的 Self-Attention 来传递不同 Patch 之间的信息，以整合全局性信息，这种全局性信息被定义为低频信息 low-frequency, 多头注意力 MHSA 也被称为是 low-frequency Mixer. 全局信息一般是指物体的全局形状和布局结构信息等。

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2n4900mi0j30vl0du47u.jpg" width="600"></div>

与 VIT 相反， CNN 则能够很好的获取高频的局部性信息，这也是当前的很多 Conv 和 VIT 融合的主要原因。这里作者从别人的工作 [Do vision transformers see like convolutional neural networks?](https://arxiv.org/abs/2108.08810) 那里受到启发: 有些通道是高频信息，有些通道则是低频信息，因此本文从通道的角度入手解决 VIT 中获取高频信息受限的问题，相比之前一味组合 Conv 和 VIT的工作更加高效，因为之前使用Conv和VIT同时处理的话会有一定的信息冗余的问题。



### 🦖 工作内容

首先从下图整体结构看出作者设计的是一个层级transformer，一共包含四个 Block.


<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2n53bvud3j30va0avq7w.jpg" width="600"></div>

####  🦖  Inception token mixer

本文工作主要是将原先的多头注意力 MHSA 这个只能关注低频的 Mixer, 搞成一个 高低频都接受的 Mixer, 之所以叫 Inception token mixer 应该是和 InceptionNet 有关联？

结构如下：

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2n53ulymoj30a80eeq54.jpg" width="200"></div>
 
原理比较简单， 就是把输入的 Tokens 沿着通道划分成三个部分（文中部分语句说是两个部分，描述有点不清），前两个部分送入到接受高频信息的分支， 剩余的部分送入原先的 Attention 低频分支。

接受高频信息的分支是什么样子呢？可以用下面的式子表示，结合着上图就可以基本明白了。

$$
\boldsymbol{Y}_{h 1}=\mathrm{FC}\left(\operatorname{MaxPool}\left(\boldsymbol{X}_{h 1}\right)\right) \\
\boldsymbol{Y}_{h 2}=\operatorname{DwConv}\left(\operatorname{FC}\left(\boldsymbol{X}_{h 2}\right)\right)
$$

不过这样设计就能捕获高频信息。。我才识学浅，不太理解哈。


#### 🦖  Frequency ramp structure

作者称啊经验上呢视觉模型往往在浅层特征关注高频信息，而在深层关注低频信息，因此作者就是设计让 Inception token mixer 在前面的 Block 中接受较多的特征通道， 而在后面的 Block 中接受较少的通道， 称其为斜坡式频率结构。

### 🦖 实验

- 在ImageNet1K上的分类性能比较，啊挤牙膏式提升。

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2n5eu6axuj30nd0qntro.jpg" width="600"></div>


- 目标检测


<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2n5gy9clzj30mo0fogz7.jpg" width="500"></div>


- 语义分割

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2n5hx0gf1j30gc0d7q9e.jpg" width="300"></div>


- 可视化


<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2n5iilq1jj30mf0egakf.jpg" width="500"></div>
