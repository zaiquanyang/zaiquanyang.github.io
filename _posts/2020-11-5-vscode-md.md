---
title: vscode中多行数学公式对齐
tags: markdown、数学公式
---

# `vscode-markdown`
使用`vscode`书写`markdown`时将多行公式对齐需要注意的问题

首先安装一些插件
## `align`
$$
\begin{aligned}
x&=a+b+c\\
&=d+e\\
&=f+g
\end{aligned}
$$
该方法使用 `align` 可能会渲染失败，可以替换成 `aligned`.

$$
\begin{aligned}
f(x) =& \frac{1}{\int_x\eta(x)\mathrm{d}x}g(x) \tag{2}
\end{aligned}
$$
