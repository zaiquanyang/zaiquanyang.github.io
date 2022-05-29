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

在粗粒度阶段，切分的 Patch 比较大，序列长度短，可以进行更加高效的全局注意力计算，而后 如果分类的置信度不高，就再执行 fine-grained  granularity stage， **the  informative  patches  are  identified  and  further  re-split  in  a  fine-grained  granularity。**

其实之前已经有不少致力于减少VIT中 redundant tokens，像

PS-VIT (tch slimmingfor  efficient  vision  transformers) , 

DynamicViT(Dynamicvit:  Efficientvision transformers with dynamic token sparsification), 

EVIT(Evit: Expediting visiontransformers via token reorganizations)。

DGE (ynamicgrained encoder for vision transformer)

DVT (Not all images are worth16x16 words: Dynamic transformers for efficient image recognition)

...

作者指出两点观察：

- 粗粒度比如 7x7 的 Patch划分也能够基本识别出图像中的 informative region，如右图所示，注意的是这里是根据 Cls-Token 的 Attention来判断一个 Patch 的重要性，这在之前的工作已经被提出过，左图是把 14x14=196个Patch按照重要性分成前100和后100分别输入到训练好的 Deit-S 中计算分类准确度，横坐标是12个index，估计是对应12个Block的 Cls-Attention的结果。

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p4s9la4gj30yt0fqwr3.jpg" width="600"></div>

- 大多数的图片其实不需要 14x14 这么细的划分就能取得很好的分类结果，好吧差了6个点，也不算少了。

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p58ayjl4j308v05uac7.jpg" width="200"></div>

受上面的观察启发，就提出了 coarse-to-fine  vision  transformer.

### 🦖 方法


<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p4t3pkxbj30z30fjtfq.jpg" width="600"></div>


<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p4tvxr4sj312t0l4nap.jpg" width="600"></div>



### 🦖 实验

<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p4usbc0vj313s0o80z6.jpg" width="600"></div>


