 ---
title: PCA介绍
tags: 机器学习 算法
---
 
 **UserWarning: The given NumPy array is not writeable, and PyTorch does not support non-writeable tensors. This means you can write to the underlying (supposedly non-writeable) NumPy array using the tensor. You may want to copy the array to protect its data or make it writeable before converting it to a tensor. This type of warning will be suppressed for the rest of this program.**
 
 问题解决思路：
 
这种问题一般是由于获得的`ndaray`对象是不可写的， `print(arr.flags['WRITEABLE'])`会输出`False`。因此只要对获得的不可写的对象进行拷贝一份即可`numpy.cp(obj)`

案例：

```
data = PIL_obj # 通过PIL库读取的图片数据
self.transform = transforms.Compose([transforms.RandomCrop(84, padding=4),
                                                 lambda x: np.copy(np.asarray(x)),
                                                 transforms.ToTensor(),
                                                 normalize])
self.transform(data)
```
在没有使用`np.copy()`的情况下就会报上面的警告。
