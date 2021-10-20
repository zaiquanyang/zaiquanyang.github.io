---
<!-- layout: post -->
title: Few Shot Object Detection
tags: Few-shot-obeject-detection
---

### DeFRCN: Decoupled Faster R-CNN for Few-Shot Object Detection

- 会议： ICCV2021
- 作者： 旷视科技
- 代码：[github](https://github.com/er-muyue/DeFRCN)



#### **Motivation** and **Contribution**

- `Faster-RCNN`作为少样本检测的检测器存在两个问题
  - 类不可知的`RPN` 和 类可知的 `RCNN` 之间的矛盾性
  - 需要等变性特征的回归任务和需要不变性特征的分类任务之间的矛盾

- 因此作者提出了要减少`RPN`和`RCNN`之间的耦合性，提出了一种梯度解耦层，减少`RPN`在优化过程中对`BackBone`的影响，通过调节
`RPN`和`RCNN`之间的纠缠性，大大提高了少样本检测的性能。针对回归和分类任务之间的矛盾性，作者提出利用`ImageNet`上预训练
  的`1k`分类器来校正`Faster-RCNN`的分类器的结果。

#### 方法介绍


 <div align=center><img src="https://i.postimg.cc/fTMCtbH9/DeFRCN-1.png" width="600"></div>


#### 实验结果
