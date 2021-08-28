---
layout: post
title: Feature Transformation Ensemble Model with Batch Spectral Regularization for Cross-Domain Few-Shot Classification
tags: Cross-Domain Few-Shot-Learning
---

[Feature Transformation Ensemble Model with Batch Spectral Regularization for Cross-Domain Few-Shot Classification](https://arxiv.org/pdf/2005.08463v3.pdf)

作者：Bingyu Liu, Zhen Zhao, Zhenpeng Li, Jianan Jiang, Yuhong Guo, Jieping Ye ;         AI Tech, DiDi ChuXing

---------------------------------------------------------

## 本文的主要工作

<div align=center><img src="https://i.postimg.cc/nV6rnSJm/QQ-20210828114036.png" width="600"></div>

- `propose a feature transformation ensemble model with batch spectral regularization for the Crossdomain few-shot learning`
  - `Ensemble (Feature Transformation Ensemble Model)` 就是对`feature extraction network`提取出来的单个视觉特征进行多种正交变换(随机生成一个对称矩阵，并计算得到他的特征向量作为视觉特征的变换因子)，计算预测的交叉熵损失
  - `BSR (Batch Spectral Regularization)`：这个技术最早是在NIPS2019的一篇文章[1]中提出的, 认为最下化特征矩阵(由一个batch的视觉特征组成)的奇异值有助于减少模型fine-tune过程中的负迁移影响。


## 实验结果

<div align=center><img src="https://i.postimg.cc/kgC5bVDX/QQ-20210828115520.png" width="600"></div>

- `Feature Transformation Ensemble Model`和`BSR`对模型带来的提升较多。


[1] Chen X, Wang S, Fu B, et al. Catastrophic forgetting meets negative transfer: Batch spectral shrinkage for safe transfer learning[J]. 2019.

