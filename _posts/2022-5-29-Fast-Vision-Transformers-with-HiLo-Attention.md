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


<div align=center><img src="http://tva1.sinaimg.cn/large/007d2DYjly1h2p406g2tbj30vt0fh7e8.jpg" width="600"></div>


