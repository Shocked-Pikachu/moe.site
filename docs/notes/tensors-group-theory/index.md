# 张量和群论简介

这里主要记录了我在由 Nadir Jeevanjee 写的 *An Introduction to Tensors and Group Theory for Physicists (2 ed.)* 中的笔记，基本按照这本书的框架和脉络整理。这本书是一个非常适用于物理专业学生入门张量运算和群论，里面有关于张量、群、李群李代数、群表示论的详细介绍，并且引入和物理相关的例子，十分易于理解。此外，这本书的数学逻辑十分严谨，和很多其他物理书不同，这本书按照数学书的框架编写，所有记号都有清晰的定义，也很适合用于物理学专业学生建立一套完整的数学体系。

## 常见记号

由于本人在读书的时候经常会被一些记号所困惑，所以在整理的时候会格外注意记号的使用，基本在每一章中都会将所有的记号现放在章节最前，并且做好索引。

下面是常用的记号，会在这个笔记中反复出现，后面不再赘述。

<table border="0" class="dataframe" style="border-collapse: separate; border-spacing: 30px 0;">
  <tr>
    <th style="text-align: left;"><b>符号</b></th>
    <th style="text-align: left;"><b>含义</b></th>
  </tr>
  <tr>
    <td>\(\mathbb{N}\)</td>
    <td>正整数集</td>
  </tr>
  <tr>
    <td>\(\mathbb{Z}\)</td>
    <td>整数集</td>
  </tr>
  <tr>
    <td>\(\mathbb{R}\)</td>
    <td>实数集</td>
  </tr>
  <tr>
    <td>\(\mathbb{C}\)</td>
    <td>复数集</td>
  </tr>
  <tr>
    <td>\(\in\)</td>
    <td>属于（"is an element of"）</td>
  </tr>
  <tr>
    <td>\(\notin\)</td>
    <td>不属于（"is not an element of"）</td>
  </tr>
  <tr>
    <td>\(\forall\)</td>
    <td>任意/对于所有（"for all"）</td>
  </tr>
  <tr>
    <td>\(\subset\)</td>
    <td>属于（"is a subset of"）</td>
  </tr>
  <tr>
    <td>\(\equiv\)</td>
    <td>定义为</td>
  </tr>
  <tr>
    <td>\(f : A \rightarrow B\)</td>
    <td>表示映射 \(f\) 使得集合 \(A\) 中的元素对应到集合 \(B\) 中去</td>
  </tr>
  <tr>
    <td>\(f : a \mapsto b\)</td>
    <td>表示映射 \(f\) 将元素 \(a\) 对应到元素 \(b\) 上</td>
  </tr>
  <tr>
    <td>\(\circ\)</td>
    <td>表示映射的复合，也就是如果 \(f : A \rightarrow B\) 且 \(g : B \rightarrow C\)，那么 \(f \circ g : A \rightarrow C\) 由该式给出 \((f \circ g)(a) \equiv f(g(a))\)</td>
  </tr>
  <tr>
    <td>\(A\times B\)</td>
    <td>有序数对 \({(a,b)}\) 的集合，其中 \(a\in A, b\in B\)，也被称为 \(A\) 和 \(B\) 的<i>笛卡尔积（cartesian product）</i></td>
  </tr>
  <tr>
    <td>\(\mathbb{R}^n\)</td>
    <td>\(\underbrace{\mathbb{R} \times \ldots \times \mathbb{R}}_{n \text{ times}}\)</td>
  </tr>
  <tr>
    <td>\(\mathbb{C}^n\)</td>
    <td>\(\underbrace{\mathbb{C} \times \ldots \times \mathbb{C}}_{n \text{ times}}\)</td>
  </tr>
</table>