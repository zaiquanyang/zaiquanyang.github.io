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
- 作者： 南加州大学、旷视科技
- 文章链接：[arXiv](https://openaccess.thecvf.com/content/CVPR2021/papers/Sun_FSCE_Few-Shot_Object_Detection_via_Contrastive_Proposal_Encoding_CVPR_2021_paper.pdf)
- 代码：[github](https://github.com/MegviiDetection/FSCE)


#### **Motivation** and **Contribution**

**Motivation**

- 作者认为与`GT_Box`有着不同交并比的`Proposals`有着类似于对比学习的样本增强的思想，而正负样本的对比学习有利于增强特征表示的泛化能力，
  因此作者沿着对比学习的思想针对目标检测任务设计了基于`Proposal`的对比学习模型FSCE`Few-Shot object detection via Contrastive proposals Encoding`。
- 本文也给出了关于`FSD`任务不少的 insights
  - <font color=red>少样本检测任务在 fine-tuning 后的 RPN 对 novel class 的分类比定位更容易出现错误，模型学习到的分类器更容易混淆 novel class
  中的相似类别比如 cow 和 horse ,其实本质上应该还是由于 few-shot 导致的，因此解决分类错误问题是提升少样本检测性能的关键。</font>
  原文叙述为：
    ```markdown
    In few-shot detection, one might naturally conjecture the localization of novel objects is going to under-perform its base categories counterpart, with
the concern that rare objects would be deemed as background [14, 13, 18].
    However, based on our experiments with Faster R-CNN [4], the commonly adopted detector in few-shot detection, class-agonistic region proposal network
(RPN) is able to make foreground proposals for novel instances, and the final box regressor can localize novel instances  quite accurately.
    ```
  作者用可视化验证了自己的观点
    <div align=center><img src="https://i.postimg.cc/prLsYM9J/FSCE-1.png" width="500"></div>

  左图给出了不同类之间的余弦相似度，`base class` bus 和 `novel class` bird的相似度是-0.1， 但是 novel class `cow` 和 novel class `horse`
的相似度却高达0.39，这表明 `novel class`的实例特征区分度较弱。这也与本文的目的提升类内特征表示的紧凑性，增加类之间的方差相呼应。

  - 本文还提到为了获得类之间更好的分类边界通常一个做法就是使用一个有较大边缘距离的分类器，比如使用一些loss将类之间的拉的更开，但是对于few-shot这样的
    data-hunger的任务设置下，这种做法很难取得较为理想的性能[20]. 而最近兴起的contrastive learning在各项任务中都表现出了不错的知识迁移能力。而且在
    对比学习中的正负样本增强和检测任务中各种proposal有着相似的功能，因此可以尝试使用对比学习提升表征的区分度和泛化能力。
    原文：
    ```markdown
    Therefore in this work, we explore to extend the supervised batch contrastive approach [34] to few-shot object detection.
    We believe the contrastively learned object representations aware of the intra-class compactness and the inter-class difference
    can ease the misclassification of unseen objects as similar categories.
    ```
**contribution**
首次将对比学习的思想引入了少样本检测任务当中，通过设计一个简单而高效的模型在少样本检测性能上取得了明显的提升。
To our best knowledge, we are the first to bring contrastive learning into few-shot object detection. Our simple design
sets the new state-of-the-art in any shot (1, 2, 3, 5, 10, and 30), with up to +8:8% on the standard PASCAL VOC
benchmark and +2:7% on the challenging COCO benchmark.

#### 方法介绍

作者首先基于自己的观察在TFA[16]的基础上稍作修改，提出了一个更强的baseline,
作者观察到模型在fine-tuning阶段与base-training相比而言，proposals from positive anchors 只有后者的1/4，这是由于RPN在fine-tuning
对于anchor的评分较低，导致了较少的proposals可以进入RoI进行分类，为此作者double了RPN经过NMS后的proposal数目。
此外作者采样了原先设置的proposals 数目的一半送入分类器和回归器计算损失。作者称`in fine-tuning stage the discarded half contains
only backgrounds (standard RoI batch size is 512, and the number of foreground proposals are far less than half of it).`
这个地方不理解作者用意？
作者给出了新的baseline的结果
<div align=center><img src="https://i.postimg.cc/MKhhxXfk/FSCE-3.png" width="400"></div>


<div align=center><img src="https://i.postimg.cc/DwnPqKtJ/FSCE-2.png" width="500"></div>


#### 实验结果

SOTA实验

<div align=center><img src="https://i.postimg.cc/jS0km9Bt/FSCE-4.png" width="500"></div>

<div align=center><img src="https://i.postimg.cc/GtTqSJQ4/FSCE-5.png" width="500"></div>


消融实验
<div align=center><img src="https://i.postimg.cc/sftrfTb0/FSCE-6.png" width="500"></div>



[16] Frustratingly simple few-shot object detection. In International Conference on Machine Learning (ICML), July 2020
[20] Cosface: Large margin cosine loss for deep face  recognition. In 2018 IEEE/CVF Conference on Computer Vision and Pattern Recognition


<table><tr><td bgcolor=red>我是蓝色yellow</td></tr></table>





