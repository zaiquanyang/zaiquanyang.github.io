---
layout: post
title: Simpler is Better Few-shot Semantic Segmentation with ClassifierWeight Transformer
tags: 论文阅读笔记
---

[Simpler is Better: Few-shot Semantic Segmentation with ClassifierWeight Transformer 2021_ICCV](https://arxiv.org/abs/2108.03032)


## 论文简要介绍
- 任务：少样本分割问题
- 贡献：
  - 提出了一种新的少样本分割模型训练范式，与以往的同时关注特征提取器和分类器不同，本文将二者分开，并对分类器使用元学习训练策略。
  - 提出了一种叫做 `Classifier Weight Transformer`的自适应分类器，其实就是在`qkv`的注意力基础上加入了一种所谓的`classifier-to-query-image`注意力，和Agzsl里的自适应注意力思想基本一样。、
  - 模型结果基本SOTA.


## 模型概览



