---
# layout: post
title: Coarse-to-Fine Vision Transformer  BMVC-2022
tags: Transformer 
---

作者是厦门大学 Rongrong Ji 团队。

[Coarse-to-Fine Vision Transformer](https://arxiv.org/abs/2203.03821)

[Code已开源](https://github.com/ChenMnZ/CF-ViT)



### 🦖 动机


作者动机是想设计一个更加高效的 VIT, 图像冗余信息较多， 造成 VIT 过于昂贵的计算量，提出的
两阶段 VIT 包括 coarse  inference  stage 和 fine-grained  granularity stage。

在粗粒度阶段，切分的 Patch 比较大，序列长度短，可以进行更加高效的全局注意力计算，而后   the  informative  patches  are  identified  and  further  re-split  in  a  fine-grained  granularity。


<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p4s9la4gj30yt0fqwr3.jpg" width="600"></div>




### 🦖 方法


<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p4t3pkxbj30z30fjtfq.jpg" width="600"></div>


<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p4tvxr4sj312t0l4nap.jpg" width="600"></div>



### 🦖 实验



