# 群，李群和李代数（Groups, Lie Groups, and Lie Algebras）

如果没有学过群论的话，这一章节可能读起来会有一些吃力，至少可能在一些 mathematical deduction 上会有所困惑。毕竟要在短短的两章过一遍群论的大部分内容本来就是一件困难的事情，因此这一章节起，我会以我自己的视角撰写笔记，对于书中一些简单的例子会选择性的删去，而主要保留最有 insight 的部分。下面是书中对于群、李群和李代数的描述：

- *Group* is just a set of transformations that are composable and invertible.
- *Lie group* is a group which can be smoothly parameterized by one or more contimuous variables.
- The vector space of infinitesimal generators of a matrix Lie group forms a *Lie algebra*.

## 记号汇总

<table border="0" class="dataframe" style="border-collapse: separate; border-spacing: 30px 0;">
  <tr>
    <th style="text-align: left;"><b>符号</b></th>
    <th style="text-align: left;"><b>含义</b></th>
  </tr>
  <tr>
    <td>\(GL(V)\)</td>
    <td>矢量空间 \(V\) 上的一般线性群（general linear group）</td>
  </tr>
  <tr>
    <td>\(GL(n,\mathbb{R})\)</td>
    <td>\(n\) 维实一般线性群</td>
  </tr>
  <tr>
    <td>\(GL(n,\mathbb{C})\)</td>
    <td>\(n\) 维复一般线性群</td>
  </tr>
  <tr>
    <td>\(\text{Isom}(V)\)</td>
    <td>矢量空间 \(V\) 上的等距群（isometry group）</td>
  </tr>
  <tr>
    <td>\(O(n)\)</td>
    <td>\(n\) 维空间 \(V\) 上的正交群（orthogonal group）</td>
  </tr>
  <tr>
    <td>\(U(n)\)</td>
    <td>\(n\) 维空间 \(V\) 上的酉群（unitary group）</td>
  </tr>
  <tr>
    <td>\(O(n-1,1)\)</td>
    <td>\(n\) 维空间 \(V\) 上的洛伦兹群（Lorentz group）</td>
  </tr>
  <tr>
    <td>\(SO(n)\)</td>
    <td>\(n\) 维空间 \(V\) 上的特殊正交群（special orthogonal group）</td>
  </tr>
  <tr>
    <td>\(SU(n)\)</td>
    <td>\(n\) 维空间 \(V\) 上的特殊酉群（special unitary group）</td>
  </tr>
  <tr>
    <td>\(\mathbb{Z}_2\)</td>
    <td>二元群（只有两个元素的群）</td>
  </tr>
  <tr>
    <td>\(S_n\)</td>
    <td>\(n\) 阶置换群</td>
  </tr>
  <tr>
    <td>&emsp;</td>
    <td>&emsp;</td>
  </tr>
  <tr>
    <td>\(SO(n-1,1)_o\)</td>
    <td>The restricted Lorentz group</td>
  </tr>
  <tr>
    <td>&emsp;</td>
    <td>&emsp;</td>
  </tr>
  <tr>
    <td>\(G\simeq H\)</td>
    <td>群 \(G\) 和 \(H\) 同构（isomorphic）</td>
  </tr>
  <tr>
    <td>&emsp;</td>
    <td>&emsp;</td>
  </tr>
  <tr>
    <td>\(\mathfrak{gl}(n,\mathbb{C})\)</td>
    <td>\(GL(n,\mathbb{C})\) 群的李代数</td>
  </tr>
  <tr>
    <td>\(\mathfrak{o}(n)\)</td>
    <td>\(O(n)\) 群的李代数</td>
  </tr>
  <tr>
    <td>\(\mathfrak{u}(n)\)</td>
    <td>\(U(n)\) 群的李代数</td>
  </tr>
  <tr>
    <td>\(\mathfrak{o}(n,n-1)\)</td>
    <td>\(O(n,n-1)\) 群的李代数</td>
  </tr>
  <tr>
    <td>\(\mathfrak{so}(n)\)</td>
    <td>\(SO(n)\) 群的李代数</td>
  </tr>
  <tr>
    <td>\(\mathfrak{su}(n)\)</td>
    <td>\(SU(n)\) 群的李代数</td>
  </tr>
</table>



## 群：定义和实例（Group: Definition and Examples）

**<u>定义</u>**：群（group）$G$ 是一个带有乘法运算的集合，满足下面性质

1. (Closure) $\forall g,h\in G, g\cdot h\in G$
2. (Associativity) $\forall g,h,k\in G,$ $g\cdot(h\cdot k)=(g\cdot h)\cdot k$
3. (Existence of the identity) There exists an element $e\in G$, such that $g\cdot e=e\cdot g=g$, for all $g\in G$
4. (Existence of inverses) $\forall g\in G,\exists h\in G$, such that $g\cdot h=h\cdot g=e$, $h$ is denoted $g^{-1}$

如果对于群中任意两个元素，乘法运算是**可交换的**，即 $g\cdot h=h\cdot g$，那么我们就说这个群是一个***阿贝尔群（abelian group）***，否则这个群就是一个非阿贝尔群。

!!! info "注："
	虽然群的定义非常简单，但是就是这样简单的定义已经非常严格，后面我们会看到，仅从这个定义出发，我们就会得到非常有趣的性质！另外其实在数学上，有限群（群元个数有限）和无限群（群元个数无限）的性质是有所差别的，但是作为物理学家，我们基本上也都不怎么区分有限群和无限群 (๑´ڡ`๑)。

### **实例**：*一般线性群（The general linear group）*

矢量空间 $V$ 上的***一般线性群（general linear group）***，记作 $GL(V)$，这是 $\mathcal{L}(V)$ 的子群，包含了所有 $\mathcal{L}(V)$ 中的**可逆**线性变换。我们很容易可以验证 $GL(V)$ 满足上面群定义中的 4 条性质，因此是一个群。

对于数域 $C$ 上的 $n$ 维矢量空间 $V$，若我们选取一组基，就可以将线性变换写成矩阵的性质：$T\in GL(V)\to[T]\in M_n(C)$，那么显然这些矩阵 $[T]$ 也构成一个群，记为 $GL(n,C)$。当 $C=\mathbb{R}$ 时我们得到 $GL(n,\mathbb{R})$，这被称作 $n$ 维实一般线性群；当 $C=\mathbb{C}$ 时我们得到 $GL(n,\mathbb{C})$，这被称作 $n$ 维复一般线性群。

一般线性群有一些重要的子群(1)，例如***等距群（isometry group）***。给定 $V$ 中的一个非退化厄米形式，考虑非退化厄米形式 $(\cdot|\cdot)$ 的变换
{ .annotate }

1. 子群（subgroup）就是群的子集，且这个子集构成一个群。

$$
\boxed{
(Tv|Tw)=(v|w),\ \forall v,w\in V
}
$$

这些变换被称为等距变换(1)，由所有等距变换构成的群称为等距群（我们容易验证这是一个群），记作 $\text{Isom}(V)$。我们下面会看到，$\text{Isom}(V)$ 的矩阵表示就是正交矩阵、酉矩阵、或者洛伦兹矩阵(2)，这由 $V$ 是否为实空间还是复空间，以及 $(\cdot |\cdot)$ 是否具有正定性决定。
{ .annotate }

1. 若把上面非退化厄米形式看作距离的话，这就是一个保距离的变换（"iso-metry"="same length"）。
1. 矩阵表示（matrix representation）就是用矩阵的形式将群元写出来。或者严谨地说是矩阵空间和群的同态。

## 经典和量子力学中的群（The Groups of Classical and Quantum Physics）

## 同态和同构（Homomorphism and Isomorphism）

## 从李群到李代数（From Lie Groups to Lie Algebras）