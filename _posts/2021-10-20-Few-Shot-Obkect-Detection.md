---
<!-- layout: post -->
title: Few Shot Object Detection
tags: Few-shot-obeject-detection
---


### 1. DeFRCN: Decoupled Faster R-CNN for Few-Shot Object Detection

- 会议： ICCV2021
- 作者： 旷视科技
- 文章链接：[arXiv](https://arxiv.org/pdf/2108.09017.pdf)
- 代码：[github](https://github.com/er-muyue/DeFRCN)



#### **Motivation** and **Contribution**

- `Faster-RCNN`作为少样本检测的检测器存在两个问题
  - 类不可知的`RPN` 和 类可知的 `RCNN` 之间的矛盾性
  - 需要等变性特征的回归任务和需要不变性特征的分类任务之间的矛盾

- 因此作者提出了要减少`RPN`和`RCNN`之间的耦合性，提出了一种梯度解耦层，减少`RPN`在优化过程中对`BackBone`的影响，通过调节
`RPN`和`RCNN`之间的纠缠性，大大提高了少样本检测的性能。针对回归和分类任务之间的矛盾性，作者提出利用`ImageNet`上预训练
  的`1k`分类器来校正`Faster-RCNN`的分类器的结果。

#### 方法介绍

模型的改进比较简单，就是`GDL`梯度解耦层，`GDL`的实现是一个`channel-wise weight`，为了解耦`RPN`和`RCNN`之间的关联性，`GDL`层在向`BackBone`回传
梯度的时候缩放梯度（甚至是停止梯度回传）

 <div align=center><img src="https://i.postimg.cc/fTMCtbH9/DeFRCN-1.png" width="500"></div>

`PCB`是一个无参的分类校正模块。

#### 实验结果

- 实现的细节
  - 在`Base training`阶段，作者利用`GDL`层截断了`RPN`的回传梯度，而`RCNN`的梯度则进行了一定的缩放。**这说明了减少类不可知的`RPN`对`BackBone`
    即特征提取的影响是比较关键的，直觉上可能是其弱化了特征的可分类性，使`RCNN`性能变差，而这对少样本检测任务是至关重要的。**
  - 在`Novel training`阶段，`RPN`和`RCNN`的梯度几乎都被截断了(`GDL`的参数 $\lambda$ 被设置为0.01)，**这说明在`Novel Fine-tune`阶段要尽可能
    减少少样本数据对`BackBone`的影响，直觉上这些少样本数据可能会降低在`Base data`上训好的`BackBone`的泛化性，而过拟合到训练当中用到的少量样本
    中的任务无关特征**。

- SOTA比较和Ablation实验

    - SOTA比较

    <div align=center><img src="https://i.postimg.cc/g2XZnFPh/DeFRCN-2.png" width="500"></div>

    - `RPN`和`RCNN`的耦合性对结果的影响，验证了合理控制二者之间的耦合性对检测任务尤其是少样本任务的重要性

    <div align=center><img src="https://i.postimg.cc/5yKX2p7p/DeFRCN-3.png" width="500"></div>



### 2. FSCE: Few-Shot Object Detection via Contrastive Proposal Encoding

- 会议： CVPR2021
- 作者： 旷视科技
- 文章链接：[arXiv](https://arxiv.org/pdf/2108.09017.pdf)
- 代码：[github](https://github.com/er-muyue/DeFRCN)


<font color=#8A2BE2>我是蓝色</font>





