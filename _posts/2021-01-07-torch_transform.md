---
title:  transform方法
categories: Pytorch
---

## 随机裁剪：transforms.RandomCrop

`class torchvision.transforms.RandomCrop(size, padding=None, pad_if_needed=False, fill=0, padding_mode='constant')`

**功能**：依据给定的`size`随机裁剪 

**参数**： 

`size`: (sequence or int)，若为sequence,则为(h,w)，若为int，则(size,size);

`padding`: (sequence or int, optional)，此参数是设置填充多少个pixel。 当为int时，图像上下左右均填充int个，例如padding=4，则上下左右均填充4个pixel，若为32 32，则会变成40 40。 当为sequence时，若有2个数，则第一个数表示左右扩充多少，第二个数表示上下的。当有4个数时，则为左，上，右，下。 

`fill`: (int or tuple) 填充的值是什么（仅当填充模式为constant时有用）。int时，各通道均填充该值，当长度为3的tuple时，表示RGB通道需要填充的值。 

`padding_mode`: 填充模式，这里提供了4种填充模式，1.constant，常量。2.edge 按照图片边缘的像素值来填充。3.reflect，暂不了解。 4. symmetric，暂不了解。
