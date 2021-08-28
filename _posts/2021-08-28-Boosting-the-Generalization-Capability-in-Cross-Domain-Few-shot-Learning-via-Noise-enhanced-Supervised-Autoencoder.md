---
layout: post
title: Boosting the Generalization Capability in Cross-Domain Few-shot Learning via Noise-enhanced Supervised Autoencoder 2021_ICCV
tags: Cross-Domain Few-Shot-Learning
---

[Boosting the Generalization Capability in Cross-Domain Few-shot Learning via Noise-enhanced Supervised Autoencoder](https://arxiv.org/abs/2108.05028)

-------------------------------------------------------------------------------------------------------------------------

## 论文的工作

- 提出了一种泛化能力的模型noise-enhanced supervised autoencoder (NSAE) 用于解决少样本学习中的跨域问题。
  -  `NSAE`应用并改进了 `Supervised autoencoder`[1], 并将其用在模型的两阶段训练当中，提高模型的泛化能力。

- motivation 
  -  `our observation is that generalization capability plays a vital role for representation learning in crossdomain settings.`.
  -  `Under this intuition, we focus on boosting the generalization capability of the transfer learning based methods`.

## 模型

模型的主要改进地方就是在在原先的有监督自编码器上将重建后的图像也作为原始输入。

<div align=center><img src="https://i.postimg.cc/mrKdV1qK/QQ-20210828152519.png" width="600"></div>






[1] Lei Le, Andrew Patterson, and Martha White. Supervised autoencoders: Improving generalization performance with unsupervised regularizers. Advances in neural information processing systems, 31:107–117, 2018.
