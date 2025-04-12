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
    <td>\(G\sim H\)</td>
    <td>群 \(G\) 和 \(H\) 同态（homomorphic）</td>
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
  <tr>
    <td>&emsp;</td>
    <td>&emsp;</td>
  </tr>
  <tr>
    <td>\(\text{ad}\)</td>
    <td>作用在 \(\mathfrak{g}\) 上的线性算符 \(\text{ad}_X(Y)\equiv[X,Y]\)</td>
  </tr>
  <tr>
    <td>\(\text{Ad}\)</td>
    <td>作用在 \(\mathfrak{g}\) 上的线性算符 \(\text{Ad}_A(X)\equiv AXA^{-1}\)</td>
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

### **实例**：*正交群 $O(n)$*

考虑一个 $n$ 维的实内积空间（欧几里得空间）$V$，在 $V$ 上的等距变换就是保距离和角度的变换。给定一个正交归一基 $\mathcal{B}$，在这个基下我们有

$$
\begin{align*}
[v]^T[w]=(v|w)=(Tv|Tw)=[v]^T[T]^T[T][w]
\end{align*}
$$

于是我们得到 $[T]^T[T]=I$，或者
$$
[T]^T=[T]^{-1}
$$

也就是说，所有正交矩阵组成了正交群 $O(n)$。

### **实例**：*酉群 $U(n)$*

考虑复矢量内积空间 $V$。定义算符 $T^\dagger$ 为 算符 $T$ 的***伴随（adjoint）***，且满足
$$
\boxed{
(T^\dagger v|w)\equiv (v|Tw)
}
$$
对于等距变换

$$
\begin{align*}
(v|w)=(Tv|Tw)=(T^\dagger Tv|w),\ \forall v,w\in V
\end{align*}
$$

于是我们得到 $T^\dagger T=TT^\dagger =I$，或者

$$
\boxed{
T^\dagger=T^{-1}
}
$$

满足这个式子的算符被称作***幺正的（unitary）***(1)。如果 $V$ 的维数是 $n$，且在 $V$ 中选定了一组正交归一基，那么我们有
{ .annotate }

1. “酉”和“幺正”都是对 unitary 这个单词的翻译，其实并没有什么不同。

$$
[T]^\dagger=[T]^{-1}
$$

也就是说，在正交归一基下，酉算符可以用酉矩阵来表示（注意如果在非正交归一基下，这个结论就不一定成立）。

???+ note "对于伴随算符的定义"
	我们常常对于 $^\dagger$(dagger) 符号的理解都是对矩阵进行**转置共轭**的操作，但是实际上如果没有矩阵，我们也可以很好的定义伴随（adjoint）算符。<br>首先我们先定义***转置（transpose）***：若 $A$ 是一个作用在 $V$ 上的线性算符，定义 $A$ 的转置 $A^T$ 为作用在 $V^*$ 上的算符，满足<br><center>$\begin{align*} (A^T(f))(v)\equiv f(Av),\ \text{where }v\in V,f\in V^* \end{align*}$</center><br>再用到我们之前的从矢量到对偶矢量的映射 $L:V\to V^*$（或者 $L(w)=(w|\cdot)$），定义 $A$ 的***伴随算符*** $A^\dagger$ 为作用在 $V$ 上的线性算符：
	$$
	A^\dagger\equiv L^{-1}\circ A^T\circ L:V\to V
	$$ 有了这个定义，我们就可以得到<br><center>$\begin{align*} 
	(A^\dagger v|w)&=L(A^\dagger v)(w)\\
	&=A^T(L(v))(w)\\
	&=L(v)(Aw)\\
	&=(v|Aw)
	\end{align*}$</center><br>即我们常见的对于伴随算符的定义。而在正交归一基下我们会有
	$$
	[A^\dagger]=[A]^\dagger
	$$ 在括号外的 $^\dagger$(dagger) 符号就是我们一般理解的转置共轭。通过这样的定义，我们能够脱离矩阵的语言来描述伴随算符。特别地，当 $A^\dagger=A$ 的时候，我们称这个算符为***自伴的（self-adjoint）***或者***厄米的（Hermitian）***。

### **实例**：*洛伦兹群 $O(n-1,1)$*

在闵可夫斯基度规 $\eta$ 下，选取一组正交归一基，$\eta$ 可以写成矩阵形式(1)
{ .annotate }

1. 有的书上对于这个矩阵有不一样的写法，比如可能将 -1 写在第一行第一列，但是不论怎么写，下面的一般性讨论都是成立的。

$$
[\eta]=\begin{pmatrix}
1& & & \\\
& \ddots & & \\\
& & 1 & \\\
& & & -1
\end{pmatrix}
$$

如果 $T\in\text{Isom}(V)$，根据 $(v|w)=\eta(v,w)$ 我们有（在任何基 $\mathcal{B}$ 下）

$$
\begin{align*}
[v]^T[\eta][w]&=\eta(v,w)\\
&=\eta(Tv,Tw)\\
&=[v]^T[T]^T[\eta][T][w]
\end{align*}
$$

上面式子对任何 $v,w\in V$ 都成立，于是我们有

$$
[T]^T[\eta][T]=[\eta]
$$

在分量式下变为：
$$
{T_\mu}^\rho {T_\nu}^\sigma \eta_{\rho\sigma}=\eta_{\mu\nu}
$$

满足上面式子的变换就被称为洛伦兹变换，而所有的洛伦兹变换就组成了洛伦兹群。

???+ note "对等距变换的主动和被动解释"
	如果稍微注意上面对于等距变换的定义的话，就不难发现，我们其实是在使用**主动变换**来定义等距变换的，即在变换下矢量本身发生了变化。当然我们也可以用**被动变换**来定义等距变换，即在变换下矢量不发生变换而基矢和分量发生变换。两种变换实际上是等价的，不过在运算过程中可能会差一个逆运算。

### **实例**：*特殊正交群和特殊酉群*

***特殊正交群（special orthogonal group）***和***特殊酉群（special unitary group）***，分别记作 $SO(n)$ 和 $SU(n)$，分别是 $O(n)$ 和 $U(n)$ 的一个子群。定义为 $O(n)$ 或者 $U(n)$ 中**行列式为 1 的变换**构成的集合。我们在后面的章节会看到，$SO(n)$ 描述的就是 $n$ 维空间的旋转，$SU(2)$ 是描述量子力学中角动量的群，$SU(3)$ 是在粒子物理中米描述夸克的群。

### **实例**：*二元群 $\mathbb{Z}_2$*

考虑只包含两个元素的群，$\mathbb{Z}_2\equiv\{+1,-1\}\subset\mathbb{Z}$，这个群的乘法就是整数的乘法。我们容易看出这是一个阿贝尔群，并且所有两个元素的群都与其同构（或者说只有一个二阶群）。

### **实例**：*$n$ 阶置换群 $S_n$*

$n$ 阶置换群 $S_n$ 就是将 $n$ 个元素进行重新排列的群（permutation group），一共有 $n!$ 个元素。对于任意一种排列 $\sigma$，我们可以将 $n$ 阶置换群的元素写为
$$
\begin{pmatrix}
1&2&\cdots&n\\\
\sigma(1)&\sigma(2)&\cdots &\sigma(n)
\end{pmatrix}
$$
特别的，我们可以将置换群作用在张量积上。考虑 $V$ 上的 $(0,n)$ 张量空间 $\mathcal{T}^0_n(V)$，$S_n$ 作用在张量空间的元素上可以得到

$$
\begin{align*}
\sigma(v_1\otimes v_2\otimes\cdots\otimes v_n)=v_{\sigma(1)}\otimes v_{\sigma(2)}\otimes\cdots\otimes v_{\sigma(n)}
\end{align*}
$$

这样的操作在讨论量子力学中的全同粒子的时候是很有用的。

## 经典和量子力学中的群（The Groups of Classical and Quantum Physics）

### **实例**：*三维特殊正交群 $SO(3)$*

通过欧拉角，我们可以写出 $SO(3)$ 群元的矩阵（其中 $\phi$ 是绕 $z$ 轴的转角，$\theta$ 是绕 $x'$ 轴的转角，$\psi$ 是绕 $z''$ 轴的转角）

$$
\begin{align*}
R&=\begin{pmatrix}
\cos\psi&\sin\psi&0\\
-\sin\psi&\cos\psi&0\\
0&0&1
\end{pmatrix}\begin{pmatrix}
1&0&0\\
0&\cos\theta&\sin\theta\\
0&-\sin\theta&\cos\theta\\
\end{pmatrix}\begin{pmatrix}
\cos\phi&\sin\phi&0\\
-\sin\phi&\cos\phi&0\\
0&0&1
\end{pmatrix}\\
&=\begin{pmatrix}
\cos\psi\cos\phi-\cos\theta\sin\phi\sin\psi&\cos\psi\sin\phi+\cos\theta\cos\phi\sin\psi&\sin\psi\sin\theta\\
-\sin\psi\cos\phi-\cos\theta\sin\phi\cos\psi&-\sin\psi\sin\phi+\cos\theta\cos\phi\cos\psi&\cos\psi\sin\theta\\
\sin\theta\sin\phi&-\sin\theta\cos\phi&\cos\theta
\end{pmatrix}
\end{align*}
$$

当然，我们这里是主动变换的视角，如果是被动变换的视角，就和上面的结果差一个逆。

### **实例**：*三维正交群 $O(3)$*

由于 $O(3)$ 中的群元也必须是正交变换，所以 $O(3)$ 和 $SO(3)$ 唯一的不同就是：$O(3)$ 的群元 $|R|=\pm 1$，而 $SO(3)$ 的群元 $|R|=1$。$O(3)$ 中 $|R|=-1$ 的变换就被我们称作***瑕旋转（improper rotation）***，相对的 $|R|=1$ 的变换就被称作***旋转（proper rotation）***。瑕旋转中最重要的变换是***反演（inversion）***变换
$$
-I=\begin{pmatrix}
-1&0&0\\\
0&-1&0\\\
0&0&-1
\end{pmatrix}
$$
事实上，任何瑕旋转都可以被写成旋转和反演变换的乘积，即 $R=(-I)(-R)$（这里 $R$ 是瑕旋转，$-R$ 是旋转）。

$O(3)$ 的旋转和瑕旋转两个部分是***不连通的（disconnected）***，也就是说我们没有办法通过连续的参数变换从 $|R|=1$ 的矩阵变成 $|R|=-1$ 的矩阵。我们常常用两个分开的“球”来表示 $O(3)$ 群，其中一个是 $SO(3)$，另一个是 $(-I)SO(3)$。

### **实例**：*二维特殊酉群 $SU(2)$*

$SU(2)$ 群元满足 $A^\dagger=A^{-1}$ 和 $|A|=1$，我们可以将 $A$ 写成下面的矩阵形式

$$
\begin{align*}
\begin{pmatrix}
\alpha&\beta\\
-\bar{\beta}&\bar{\alpha}
\end{pmatrix},\ \alpha,\beta\in\mathbb{C},\ |\alpha|^2+|\beta|^2=1
\end{align*}
$$

我们也可以用欧拉角写出 $SU(2)$ 的群元（这种表示是我们更加常见的）

$$
\begin{pmatrix}
e^{i(\psi+\phi)/2}\cos\frac{\theta}{2}&ie^{i(\psi-\phi)/2}\sin\frac{\theta}{2}\\\
ie^{-i(\psi-\phi)/2}\sin\frac{\theta}{2}&e^{-i(\psi+\phi)/2}\cos\frac{\theta}{2}
\end{pmatrix}
$$

这个矩阵描述的就是 1/2 自旋粒子的转动。显然这个矩阵看上去和 $SO(3)$ 群的矩阵好像可以对应起来，这种感觉是对的，它们之间就是有一些内在联系！我们会在下一章节再讨论这个问题。

### **实例**：*The restricted Lorentz group $SO(3,1)_o$*

The ***restricted Lorentz group***(1) $SO(3,1)_o$ 是 $O(3,1)$ 的子群，并且其中元素满足 $|A|=1$ 且 $A_{44}>1$。其中 $|A|=1$ 这一条件保证时间和空间的取向不会相反，$A_{44}>1$ 这一条件保证了时间的方向不会相反（或者说时间不会倒流）(2)。$SO(3,1)_o$ 中的变换就被称作 ***restriceted Lorentz transformations***。
{  .annotate }

1. 这里我不知道怎么很好的翻译成中文，就直接保留英文了，后同理 :D
1. 这也就是为什么我们不直接写成 SO(3,1)，因为这个群不仅仅要满足行列式为 1。

我们最熟悉的例子是

$$
\begin{align*}
L=\begin{pmatrix}
1&0&0&0\\
0&1&0&0\\
0&0&\gamma&-\beta\gamma\\
0&0&-\beta\gamma&\gamma
\end{pmatrix},\ -1<\beta<1,\gamma=\frac{1}{\sqrt{1-\beta^2}}
\end{align*}
$$

我们一般用**被动视角**来解读这个变换（即矢量本身不发生变换）。这个变换被我们称作一个沿着 $z$ 轴的 ***boost***，也可以被写成

$$
\begin{align*}
L=\begin{pmatrix}
1&0&0&0\\
0&1&0&0\\
0&0&\cosh u&-\sinh u\\
0&0&-\sinh u&\cosh u
\end{pmatrix},\ u\in \mathbb{R}
\end{align*}
$$

这里的 $u$ 被定义为***快度（rapidity）***，其和 $\beta$ 的关系为
$$
\tanh u=\beta
$$
如果我们将这个变换推广到一般情形，即沿着 $\boldsymbol{\beta}=(\beta_x,\beta_y,\beta_z)$ 进行 boost，那我们就可以得到一般的变换矩阵

$$
\begin{align*}
L=\begin{pmatrix}
\frac{\beta^2_x(\gamma-1)}{\beta^2}+1&\frac{\beta_x\beta_y(\gamma-1)}{\beta^2}&\frac{\beta_x\beta_z(\gamma-1)}{\beta^2}&-\beta_x\gamma\\
\frac{\beta_y\beta_x(\gamma-1)}{\beta^2}&\frac{\beta^2_y(\gamma-1)}{\beta^2}+1&\frac{\beta_y\beta_z(\gamma-1)}{\beta^2}&-\beta_y\gamma\\
\frac{\beta_z\beta_x(\gamma-1)}{\beta^2}&\frac{\beta_z\beta_y(\gamma-1)}{\beta^2}&\frac{\beta^2_z(\gamma-1)}{\beta^2}+1&-\beta_z\gamma\\
-\beta_x\gamma&-\beta_y\gamma&-\beta_z\gamma&\gamma
\end{pmatrix}
\end{align*}
$$

???+ note "如何得到一般情况下的 boost 矩阵？"
	要得到上面这个的 boost 矩阵，考虑空间旋转矩阵<br><center>$R=\begin{pmatrix}
	\frac{\beta_x}{\sqrt{\beta^2-\beta_z^2}}&\frac{\beta_x\beta_z}{\beta\sqrt{\beta^2-\beta^2_z}}&\frac{\beta_x}{\beta}&0\\
	-\frac{\beta_x}{\sqrt{\beta^2-\beta^2_z}}&\frac{\beta_y\beta_z}{\beta\sqrt{\beta^2-\beta^2_z}}&\frac{\beta_y}{\beta}&0\\
	0&-\frac{\sqrt{\beta^2-\beta_z^2}}{\beta}&\frac{\beta_z}{\beta}&0\\
	0&0&0&1
	\end{pmatrix}$</center><br>可以验证这是一个正交矩阵，能将标准基 $\{\hat{\boldsymbol{x}},\hat{\boldsymbol{y}},\hat{\boldsymbol{z}}\}$ 旋转至 $\{\boldsymbol{r}_1,\boldsymbol{r}_2,\hat{\boldsymbol{\beta}}\}$ 上，其中 $\boldsymbol{r}_1$ 和 $\boldsymbol{r}_2$ 是和方向 $\hat{\boldsymbol{\beta}}$ 垂直的单位矢量。进行旋转变换：<br><center>$L=R\begin{pmatrix} 1&0&0&0\\ 0&1&0&0\\ 0&0&\gamma&-\beta\gamma\\ 0&0&-\beta\gamma&\gamma \end{pmatrix}R^T$</center><br>就可以得到上面的一般方向 boost 的矩阵。虽然我们后面会用更加优雅的方式导出上面的 boost 矩阵，但是这里可以作为一个 brute-force 矩阵乘法的练习。

如果我们将上面快度和 $\beta$ 的关系在三维空间中写出，就有
$$
\boldsymbol{\beta}=\frac{\tanh u}{u}\boldsymbol{u},\ u=|\boldsymbol{u}|
$$
这样任意方向、大小的 boost 都可以写为下面矩阵的形式

$$
\begin{align*}
L=\begin{pmatrix}
\frac{u^2_x(\cosh u-1)}{u^2}+1&\frac{u_xu_y(\cosh u-1)}{u^2}&\frac{u_xu_z(\cosh u-1)}{u^2}&-\frac{u_x}{u}\sinh u\\
\frac{u_yu_x(\cosh u-1)}{u^2}&\frac{u^2_y(\cosh u-1)}{u^2}+1&\frac{u_yu_z(\cosh u-1)}{u^2}&-\frac{u_y}{u}\sinh u\\
\frac{u_zu_x(\cosh u-1)}{u^2}&\frac{u_zu_y(\cosh u-1)}{u^2}&\frac{u^2_z(\cosh u-1)}{u^2}+1&-\frac{u_z}{u}\sinh u\\
-\frac{u_x}{u}\sinh u&-\frac{u_y}{u}\sinh u&-\frac{u_z}{u}\sinh u&\cosh u
\end{pmatrix}
\end{align*}
$$

这看起来及其复杂，如果感兴趣的话下面的命题可以作为矩阵运算的练习，但是这里直接不加证明的给出结论：**boost 操作在矩阵乘法下不封闭**（或者说两个 boost 相乘可能得到的就不是一个 boost 的操作）。这一结论直接导致了电子的托马斯旋进，当然我们会在后面用更加简洁的方法证明这件事情。

现在我们已经知道 boost 的矩阵形式了，那么对于 $SO(3,1)_o$ 群的任意群元 $A$，我们不加证明的给出，其可以被写成 $A=LR'$，这里
$$
R'=\begin{pmatrix}
R&\\\
&1
\end{pmatrix}, \ R\in SO(3)
$$
而 $L$ 就是上面给出的 boost 矩阵。注意到 $L$ 和 $R'$ 各有 3 个自由度，因此对于 $SO(3,1)_o$ 群的群元 $A=LR'$ 来说，**一共有六个自由参数**。

### **实例**：*The extended Lorentz group $O(3,1)$*

相比于 $SO(3,1)_o$，$O(3,1)$ 中多出两个操作：空间反演 $P$（也称作 ***parity***）和时间反演 $T$

$$
\begin{align*}
P=\begin{pmatrix}
-1&0&0&0\\
0&-1&0&0\\
0&0&-1&0\\
0&0&0&1
\end{pmatrix},\ T=\begin{pmatrix}
1&0&0&0\\
0&1&0&0\\
0&0&1&0\\
0&0&0&-1
\end{pmatrix}
\end{align*}
$$

这个群也被称作 improper 或者 extended Lorentz group。容易看出，$|P|=|T|=-1$，这其实和 $O(3)$ 群中的反演元素 $-I$ 很像。我们可以类比 $O(3)$ 群将 $O(3,1)$ 分为**四个不连通的部分**，它们之间的关系如下图所示。

<img src="../../../../assets/img/tensors-group-theory/o31.png" alt="o31"/>

!!! info "注："
	从上面这张图我们可以更清晰的看出，仅仅让 $|A|=1$ 是没有办法给出 $SO(3,1)_o$ 的。$SO(3,1)_o$ 和 $PTSO(3,1)_o$ 中的元素行列式都是 1，但是只有满足 $A_{44}>0$ 的那一部分才是 restricted Lorentz group。

### **实例**：*二维特殊线性群 $SL(2,\mathbb{C})$*

这个群**不是**等距变换群，但是其在物理中也非常常用。$SL(2,\mathbb{C})$ 被定义为所有行列式为 1 的 2x2 矩阵，对于 $A\in SL(2,\mathbb{C})$ 我们可以写成

$$
\begin{align*}
A=\begin{pmatrix}
a&b\\
c&d
\end{pmatrix},\ a,b,c,d\in\mathbb{C},\ ad-bc=1
\end{align*}
$$

行列式为 1 的条件限制使得 $A$ 有三个复数参数，或者**六个实数参数**，和 $SO(3,1)_o$ 是一样的！实际上，$SL(2,\mathbb{C})$ 和 $SO(3,1)_o$ 的关系就好像 $SU(2)$ 和 $SO(3)$ 的关系一样，$SL(2,\mathbb{C})$ 表示的正是 1/2 自旋粒子的洛伦兹变换！

我们不加证明的给出 $SL(2,\mathbb{C})$ 中的 boost 矩阵写为（快度为 $\boldsymbol{u}$）

$$
\begin{align*}
\tilde{L}=\begin{pmatrix}
\cosh \frac{u}{2}+\frac{u_z}{u}\sinh\frac{u}{2}&-\frac{1}{u}(u_x-iu_y)\sinh\frac{u}{2}\\
-\frac{1}{u}(u_x+iu_y)\sinh\frac{u}{2}&\cosh \frac{u}{2}-\frac{u_z}{u}\sinh\frac{u}{2}
\end{pmatrix},\ \boldsymbol{u}\in\mathbb{R}^3
\end{align*}
$$

而对于 $A\in SL(2,\mathbb{C})$，总可以被分解为 $A=\tilde{L}\tilde{R}$，其中 $\tilde{R}\in SU(2)$。这其实和 $SO(3,1)_o$ 群中元素的分解是非常类似的。

最后，我们用下表来总结一下上面这些群的关系。

<table border="0" class="dataframe" style="border-collapse: separate; border-spacing: 10px 0;">
  <tr>
    <th style="text-align: left;"><b>Summary</b></th>
    <th style="text-align: left;">&emsp;</th>
    <th style="text-align: left;"><b>Lorentz transformations</b></th>
    <th style="text-align: left;"><b>Description</b></th>
  </tr>
  <tr>
    <td>\(SU(2)\)</td>
    <td>\(\subset\)</td>
    <td>\(SL(2,\mathbb{C})\)</td>
    <td>Quantum-mechanical</td>
  </tr>
  <tr>
    <td>\(SO(3)\)</td>
    <td>\(\subset\)</td>
    <td>\(SO(3,1)_o\)</td>
    <td>Proper</td>
  </tr>
  <tr>
    <td>&emsp;\(\cap\)</td>
    <td>&emsp;</td>
    <td>&emsp;\(\cap\)</td>
    <td>-</td>
  </tr>
  <tr>
    <td>\(O(3)\)</td>
    <td>\(\subset\)</td>
    <td>\(O(3,1)\)</td>
    <td>Improper</td>
  </tr>
</table>

## 同态和同构（Homomorphism and Isomorphism）

**<u>定义</u>**：给定两个群 $G,H$，若存在映射 $\Phi:G\to H$ 使得
$$
\boxed{\Phi(g_1g_2)=\Phi(g_1)\Phi(g_2),\ \forall g_1,g_2\in G}
$$
即**保持乘法结构不变**，那么我们就说 $G$ 和 $H$ 同态，记作 $G\sim H$，而 $\Phi$ 被称作一个到 $H$ 上的***同态映射（homomorphism）***。注意 $\Phi$ 不一定是一个一对一的映射，如果 $\Phi$ 是一个一对一的映射，我们就说 $G$ 和 $H$ 同构，记作 $G\simeq H$，而 $\Phi$ 被称作一个到 $H$ 上的***同构映射（isomorphism）***。

如果 $G\simeq H$，那么有 $H\simeq G$。对于同构的两个群，我们认为它们是完全一样的。

???+ note "群和矩阵表示"
	我们在之前的讨论中并没有明确区分群元和矩阵表示这两个概念。比如对于 $SO(2)$ 的群元，我们会将其写为
	$$
	A=\begin{pmatrix}
	\cos\theta&-\sin\theta&0\\\
	\sin\theta&\cos\theta&0\\\
	0&0&1
	\end{pmatrix}
	$$ 事实上，我们只能说这个矩阵是 $SO(2)$ 群的一个表示，概念上它并不完全和 $SO(2)$ 群一致。但是这个矩阵构成的群和 $SO(2)$ 群是同构的，因此我们实际上就把它们看作是同一个群而不做任何区分了。

**<u>定义</u>**：设 $G\sim H$，定义映射 $\Phi$ 的同态核为
$$
K\equiv \{g\in G|\Phi(g)=e'\}
$$
其中 $e'$ 是 $H$ 中的单位元。换句话说，同态核就是 $G$ 中与 $H$ 中的单位元素对应的所有元素的集合。如果 $\Phi$ 是一对一的同构映射，那么显然同态核就是 $K=\{e\}$。

若 $G\sim H$，则我们有同态核定理：

1. 同态核 $K$ 是 $G$ 的不变子群；
2. 商群 $G/K\simeq H$。

（上面的定理需要不变子群和商群的概念，默认这里已经知道）如果要用更简单的语言描述上面的定理，就是：给定 $g\in G,\Phi(g)=h$，对于任意 $k\in K$，我们都有
$$
\Phi(kg)=\Phi(k)\Phi(g)=h
$$
或者说 $Kg\equiv\{kg|k\in K\}$ 就是 $G$ 中所有会被 $\Phi$ 映射到 $h$ 上的元素集合。

### **实例**：*$SU(2)$ 和 $SO(3)$*

$SU(2)$ 和 $SO(3)$ 的同态映射 $\rho:SU(2)\to SO(3)$ 定义如下：考虑 $2\times2$ 的零迹反厄米矩阵，记作 $\mathfrak{su}(2)$（其实就是李代数，后面我们会说明可以这么记的原因），我们可以将 $X$ 写为

$$
\begin{align*}
X=\frac12\begin{pmatrix}
-iz&-y-ix\\
y-ix&iz
\end{pmatrix},\ x,y,z\in\mathbb{R}
\end{align*}
$$

如果取基矢量为

$$
\begin{align*}
S_1\equiv-\frac{i}{2}\sigma_x\begin{pmatrix}
0&-i\\
-i&0
\end{pmatrix},\ S_2\equiv -\frac{i}{2}\sigma_y\begin{pmatrix}
0&-1\\
1&0
\end{pmatrix},\ S_3\equiv -\frac{i}{2}\sigma_z\begin{pmatrix}
-i&0\\
0&i
\end{pmatrix}
\end{align*}
$$

那么我们就有 $X=xS_1+yS_2+zS_3$。于是 $X$ 在这组基 $\mathcal{B}=\{S_1,S_2,S_3\}$ 下对应的列向量就是

$$
[X]=\begin{pmatrix}
x\\\
y\\\
z
\end{pmatrix}
$$

$A\in SU(2)$ 作用到 $X\in\mathfrak{su}(2)$ 上的映射是 $X\mapsto AXA^{\dagger}$，不难验证这个映射是线性的。若我们定义 $\rho(A)$ 为

$$
[AXA^{\dagger}]=\rho(A)[X]
$$

其中 $\rho(A)$ 作用在列向量 $[X]$ 上的方式就是平常的矩阵乘法，那么我们可以证明 $\rho(A)\in SO(3)$：

注意到 $\det X=\frac14(x^2+y^2+z^2)=\frac14||[X]||^2$，我们有

$$
\begin{align*}
||\rho(A)[X]||^2=||[AXA^{\dagger}]||=4\det(AXA^{\dagger})=4\det X=||[X]||^2
\end{align*}
$$

这说明 $\rho(A)\in O(3)$，可以进一步证明 $\det \rho(A)=1$，于是 $\rho(A)\in SO(3)$（这里忽略这个证明）。这样我们就可以构建出一个同态映射

$$
\begin{align*}
\rho:SU(2)&\to SO(3)\\
A&\mapsto \rho(A)
\end{align*}
$$

事实上，如果用欧拉角写出 $A$ 的矩阵

$$
A=\begin{pmatrix}
e^{i(\psi+\phi)/2}\cos\frac{\theta}{2}&ie^{i(\psi-\phi)/2}\sin\frac{\theta}{2}\\\
ie^{-i(\psi-\phi)/2}\sin\frac{\theta}{2}&e^{-i(\psi+\phi)/2}\cos\frac{\theta}{2}
\end{pmatrix}
$$

那么

$$
\begin{align*}
\rho(A)=\begin{pmatrix}
\cos\psi\cos\phi-\cos\theta\sin\phi\sin\psi&\cos\psi\sin\phi+\cos\theta\cos\phi\sin\psi&\sin\psi\sin\theta\\
-\sin\psi\cos\phi-\cos\theta\sin\phi\cos\psi&-\sin\psi\sin\phi+\cos\theta\cos\phi\cos\psi&\cos\psi\sin\theta\\
\sin\theta\sin\phi&-\sin\theta\cos\phi&\cos\theta
\end{pmatrix}
\end{align*}
$$

从 $\rho$ 的定义容易看出，$\rho(A)=\rho(-A)$，所以每一个 $R\in SO(3)$ 都对应了两个 $SU(2)$ 群中的元素。我们说 $SU(2)$ 群是 $SO(3)$ 群的***双重覆盖（double-cover）***，这是因为 $\rho$ 是一个二对一的同态映射，核为 $K=\{I,-I\}$。

### **实例**：*$SL(2,\mathbb{C})$ 和 $SO(3,1)_o$*

和 $SU(2)$ 与 $SO(3)$ 一样，$SL(2,\mathbb{C})$ 和 $SO(3,1)_o$ 是一个二对一的同态。对于 $2\times 2$ 的厄米矩阵 $X\in H_2(\mathbb{C})$

$$
\begin{align*}
X=\frac12\begin{pmatrix}
t+z&x-iy\\
x+iy&t-z
\end{pmatrix}=x\sigma_x+y\sigma_y+z\sigma_z+tI
\end{align*}
$$

我们可以用和上一个实例相同的方式定义 $\rho:SL(2,\mathbb{C})\to SO(3,1)_o$，并且这也是一个二对一的映射，核为 $K=\{I,-I\}$。所以 $SL(2,\mathbb{C})$ 是 $SO(3,1)_o$ 群的双重覆盖。

上面关于 $\rho:SU(2)\to SO(3)$ 和 $\rho:SL(2,\mathbb{C})\to SO(3,1)_o$ 的讨论可以由下表总结。

<table border="0" class="dataframe" style="border-collapse: separate; border-spacing: 10px 0;">
  <tr>
    <th style="text-align: left;"><b>Summary</b></th>
    <th style="text-align: left;">&emsp;</th>
    <th style="text-align: left;"><b>Lorentz transformations</b></th>
    <th style="text-align: left;"><b>Description</b></th>
  </tr>
  <tr>
    <td>\(SU(2)\)</td>
    <td>\(\subset\)</td>
    <td>\(SL(2,\mathbb{C})\)</td>
    <td>Quantum-mechanical</td>
  </tr>
  <tr>
    <td>\(\rho\downarrow\)</td>
    <td>&emsp;</td>
    <td>\(\rho\downarrow\)</td>
    <td>&emsp;</td>
  </tr>
  <tr>
    <td>\(SO(3)\)</td>
    <td>\(\subset\)</td>
    <td>\(SO(3,1)_o\)</td>
    <td>Proper</td>
  </tr>
  <tr>
    <td>&emsp;\(\cap\)</td>
    <td>&emsp;</td>
    <td>&emsp;\(\cap\)</td>
    <td>-</td>
  </tr>
  <tr>
    <td>\(O(3)\)</td>
    <td>\(\subset\)</td>
    <td>\(O(3,1)\)</td>
    <td>Improper</td>
  </tr>
</table>

## 从李群到李代数（From Lie Groups to Lie Algebras）

在上面的例子中，有两种类型的群，一种是类似 $SU(2)$ 和 $SO(3)$ 这样可以被参数连续表示的群，还有一种是类似 $\mathbb{Z_2}$ 和 $S_n$ 这样“离散”的群，前者就被称作李群。***李群（Lie group）***是以挪威数学家 Sophus Lie 命名的群，早在 19 世纪晚期 Lie 就开始研究这样的群，这样的群之所以重要是因为我们可以研究那些“无限靠近”单位元的群元，这被物理学家们称作***无穷小变换（infinitesimal transformation）***或者***生成元（generator）***，或者在数学上被称作群的***李代数（Lie algebra）***。

要定义李群，需要拓扑和微分流形的知识，虽然微分流形的概念是很直观的（就是欧几里得空间的拓展），但是如果要严格定义这些内容还是要花费不少时间，所以我们这里给出一个李群的简单“定义”：*李群就是可以被连续的实变量参数化的群，其对应的李代数就是无限靠近单位元的群元。*

如果我们用 $X$ 表示生成元，那么对于一个单参数的映射 $\gamma:\mathbb{R}\to G$，$\{\gamma(t)|t\in \mathbb{R}\}$ 构成了 $G$ 的一个单参数子群

$$
\begin{align*}
\gamma(t)&=\lim_{n\to \infty}(\gamma(t/n))^n\\
&=\lim_{n\to \infty}\left(\gamma(0)+\frac{t}{n}\frac{d\gamma(x)}{dx}\right)^n\\
&=\lim_{n\to \infty}\left(\gamma(0)+\frac{t}{n}X\right)^n\\
&=e^{tX}
\end{align*}
$$

这里给出一个启发式的描述：如果我们将 $G$ 看作一个多维空间（流形）的话，$\gamma(t)=e^{tX}$ 就是一个参数化的曲线，而 $X$ 就是在单位元处沿着曲线 $\gamma(t)$ 的切向量。

<center><img src="../../../../assets/img/tensors-group-theory/lie-group.png" alt="lie-group" style="zoom:30%;" /></center>

## 李代数：定义、性质和实例（Lie Algebras: Definition, Properties, and Examples）

<u>**定义**</u>：给定李群 $G\subset GL(n,\mathbb{C})$，李代数（Lie algebra）$\mathfrak{g}$ 被定义为

$$
\boxed{
\mathfrak{g}\equiv\{X\in M_n(\mathbb{C})|e^{tX}\in G,\forall t\in\mathbb{R}\}
}
$$

!!! info "注："
	上面李群的定义中 $t$ 是一个实数，这直接决定了李群是一个实矢量空间而非复矢量空间。

考虑复数域上的 $n$ 维一般线性群 $GL(n,\mathbb{C})$，如何找到它的李代数 $\mathfrak{gl}(n,\mathbb{C})$ 呢？注意到对于任何 $X\in M_n(\mathbb{C})$，那么对于任何 $t$，$e^{tX}$ 是可逆的，其逆就是 $e^{-tX}$。所以
$$
\mathfrak{gl}(n,\mathbb{C})=M_n(C)
$$
同理 $\mathfrak{gl}(n,\mathbb{R})=M_n(\mathbb{R})$。也就是说，**不可逆**的线性变换构成的群的李代数就是**所有**线性变换构成的空间（李代数中的元素可以是不可逆的）！

!!! info "注："
	当我们把算符放在指数上的时候，我们应该用 Taylor 展开的方式来看待，即
	$$
	e^{tX}=\sum_{n=0}^\infty \frac{1}{n!}(tX)^n
	$$ 我们可以证明 $e^{tX}e^{-tX}=1$<br><center>$\begin{align*}e^{tX}e^{-tX}&=\left(\sum_{n=0}^\infty\frac{1}{n!}(tX)^n\right)\left(\sum_{m=0}^\infty\frac{1}{m!}(-tX)^m\right)\\
	&=\sum_{n=0}^\infty\sum_{m=0}^\infty\frac{1}{n!}(tX)^n\cdot \frac{1}{m!}(-tX)^m\\
	&=\sum_{k=0}^\infty (tX)^k\sum_{n=0}^k\frac{(-1)^{k-n}}{n!(k-n)!}\\
	&=1
	\end{align*}$</center><br>其中第三步用到了 $n+m=k$ 的代换，第四步用到了二项式定理，当 $k\neq 0$ 时，$\sum_{n=0}^k\frac{(-1)^{k-n}}{n!(k-n)!}=(1-1)^k=0$，当 $k=0$ 时，前面一项为 1。

接下来考虑 $\text{Isom}(V)$ 的李代数。由于 $\text{Isom}(V)$ 是等距变换群，我们有
$$
(e^{tX}v|e^{tX}w)=(v|w),\ \forall v,w\in V,t\in\mathbb{R}
$$
两边对 $t$ 求导就可以得到

$$
\begin{align*}
(Xe^{tX}v|e^{tX}w)+(e^{tX}v|Xe^{tX}w)=0,\ \forall v,w\in V,t\in\mathbb{R}
\end{align*}
$$

再令 $t=0$ 我们就得到
$$
\boxed{
(Xv|w)=-(v|Xw),\ \forall v,w\in V
}
$$
这就是等距变换群的李代数的基本性质。注意上面等式两侧相差一个负号，这个负号在后面的讨论中是非常关键的！

### **实例**：*$O(n)$ 的李代数 $\mathfrak{o}(n)$*

考虑欧几里得空间 $V=\mathbb{R}^n$，并将 $O(n)$ 的李代数记作 $\mathfrak{o}(n)$。如果我们采用一组正交归一基，并用 $X$ 表示矩阵 $X\in\mathfrak{o}(n)$，那么我们有

$$
\begin{align*}
(X[v])^T[w]&=-[v]^TX[w],\ \forall v,w\in\mathbb{R}^n\\
\Longleftrightarrow[v]^TX^T[w]&=-[v]^TX[w],\ \forall v,w\in\mathbb{R}^n\\
\Longleftrightarrow \quad \quad X^T&=-X
\end{align*}
$$

也就是说：

<center><b>The Lie algebra of $O(n)$ is the set of $n\times n$ antisymmetrix matrices.</b></center>

因此 $\mathfrak{o}(n)$ 的维数为 $n(n-1)/2$，对于 $n=3$ 的情况，$\dim \mathfrak{o}(n)=3$，三个基可以分别取做沿三个方向的角动量。

### **实例**：*$U(n)$ 的李代数 $\mathfrak{u}(n)$*

考虑带有厄米内积的复矢量空间 $V=\mathbb{C}^n$，并将 $U(n)$ 的李代数记作 $\mathfrak{u}(n)$。对于 $X\in\mathfrak{u}(n)$ 我们有

$$
\begin{align*}
(Xv|w)&=-(v|Xw),\ \forall v,w\in \mathbb{C}^n\\
\Longleftrightarrow (v|X^\dagger w)&=-(v|Xw),\ \forall v,w\in\mathbb{C}^n\\
\Longleftrightarrow \quad \quad X^\dagger &=-X
\end{align*}
$$

也就是说：

<center><b>The Lie algebra of $U(n)$ is the set of $n\times n$ anti-Hermitian matrices.</b></center>

$\mathfrak{u}(n)$ 的维数为 $n^2$，并且注意到实反对称矩阵也可以被看作反厄米矩阵，所以 $\mathfrak{o}(n)\subset\mathfrak{u}(n)$。

???+ note "物理学家对于李代数的定义"
	在物理中，**可观测量可以被看作李代数的元素**（我们在后面章节会再提到这件事情）。但是量子力学基本假设说，可观测量必须是**厄米的**（其本征值是实数），而上面我们看到 $\mathfrak{o}(n)$ 和 $\mathfrak{u}(n)$ 的元素是**反厄米的**！这里就是虚数单位 $i$ 起作用的地方。<br>
	严格来说，$\mathfrak{o}(n)$ 和 $\mathfrak{u}(n)$ 是实数域上的矢量空间。但如果我们忽略数域，直接将李代数中的元素乘以 $i$，我们就可以得到厄米矩阵了，这就是我们熟悉的可观测量。<br>
	在物理中，我们经常会直接将生成元定义成厄米的可观测量，即下面的定义：
	$$
	\mathfrak{g}_\text{physics}=\{X\in M_n(\mathbb{C})|e^{itX}\in G,\forall t\in\mathbb{R}\}
	$$ 之后我们仍然会用李代数最初的定义，而不是物理上常用的定义。但是需要注意的是，在物理文献中，上面的定义是更加常用的。

### **实例**：*$O(n-1,1)$ 的李代数 $\mathfrak{o}(n-1,1)$*

考虑 $n$ 维 Minkowski 空间 $\mathbb{R}^n$，其度规为 $\eta$，并将 $O(n-1,1)$ 的李代数记作 $\mathfrak{o}(n-1,1)$。取正交归一基使得 $[\eta]=\text{Diag}(1,...,1,-1)$，对于 $X\in\mathfrak{o}(n-1,1)$ 我们有

$$
\begin{align*}
[v]^TX^T[\eta][w]&=-[v]^T[\eta]X[w],\ \forall v,w\in\mathbb{R}^n\\
\Longleftrightarrow \quad \quad X^T[\eta]&=-[\eta]X
\end{align*}
$$

将上面等式写成分块矩阵的形式

$$
\begin{align*}
\begin{pmatrix}
X'^{T}&-\boldsymbol{b}\\
\boldsymbol{a}&-X_{nn}
\end{pmatrix}=
-\begin{pmatrix}
X'&\boldsymbol{a}\\
-\boldsymbol{b}&-X_{nn}
\end{pmatrix}
\end{align*}
$$

这意味着 $X$ 有下面的形式

$$
\boxed{
\begin{align*}
X=\begin{pmatrix}
X'&\boldsymbol{a}\\
\boldsymbol{a}&0
\end{pmatrix},\ X'\in\mathfrak{o}(n-1),\boldsymbol{a}\in \mathbb{R}^{n-1}
\end{align*}}
$$

我们可以认为 $X'$ 是 $n-1$ 维空间的旋转，而 $\boldsymbol{a}$ 是在 $\mathbb{R}^{n-1}$ 中沿着该方向的 boost 变换。

我们这里先不加证明的给出下面命题：对于任何有限维矩阵 $X$
$$
\det e^X=e^{\text{Tr}\ X}
$$

!!! info "注："
	对于上面这个命题，可以考虑 $X$ 是可对角化的特殊情况，这种情况下 $X=U\text{Diag}(\lambda_1,...,\lambda_n)U^{-1}$，于是
	$$
	\det e^X = \det e^{\text{Diag}(\lambda_1,...,\lambda_n)}=e^{\lambda_1+\cdots+\lambda_n}
	$$ 即 $\det e^X=e^{\text{Tr}\ X}$。

对于单参数子群 $\{e^{tX}\}\subset GL(n,\mathbb{C})$，我们有
$$
\det e^{tX}=e^{\text{Tr}tX}=e^{t\text{Tr}\ X}
$$

在 $t=0$ 的导数给出
$$
\left.\frac{d}{dt}\det e^{tX}\right|_{t=0}=\text{Tr}\ X
$$
因为行列式给出的是矩阵对于体积的改变，上式告诉我们在单参数子群 $\{e^{tX}\}$ 下，生成元 $X$ 的迹给出的就是**体积变换的速率**。

### **实例**：*$SO(n)$ 和 $SU(n)$ 的李代数， $\mathfrak{so}(n)$ 和 $\mathfrak{su}(n)$*

注意到 $SO(n)$ 和 $SU(n)$ 中只包含行列式为 1 的矩阵，即对任意 $t$，有 $e^{tX}=1$。由上面的命题我们知道
$$
\text{Tr}\ X=0
$$
由于 $\mathfrak{o}(n)$ 中的元素已经是反对称矩阵，所以这个迹为零的条件已经被满足了，也就是说 $\mathfrak{so}(n)=\mathfrak{o}(n)$，在平时我们会将这两个李代数都写为 $\mathfrak{so}(n)$。

为什么两个不一样的李群却有同一个李代数呢？这是因为李代数只能体现群在单位元附近的行为，或者说单位元附近“无限小”变换的行为，而 $SO(n)$ 和 $O(n)$ 在单位元附近的行为就是完全一样的！同样的，$O(3,1)$ 和 $SO(3,1)_o$ 的李代数也是一样的，都记为 $\mathfrak{so}(3,1)$。

但是对于 $\mathfrak{su}(n)$ 来说就不一样了，因为 $\mathfrak{u}(n)$ 是反厄米矩阵，其迹可能不是零。所以 $\mathfrak{su}(n)$ 应该是 $\mathfrak{u}(n)$ 的子集。且迹为零的条件意味着 $\mathfrak{su}(n)$ 的自由度比 $\mathfrak{u}(n)$ 小 1，即
$$
\dim \mathfrak{su}(n)=\dim\mathfrak{u}(n)-1=n^2-1
$$

### 关于李群的命题

若 $\mathfrak{g}$ 是李群 $G$ 的李代数，那么 $\mathfrak{g}$ 有如下性质：

1. $\mathfrak{g}$ 是一个实矢量空间
2. $\mathfrak{g}$ 在对易子（李括号）运算下是封闭的
3. $\mathfrak{g}$ 中的所有元素都满足 Jacobi 恒等式

第一个性质是好理解的，我们在这里不给出更多的证明细节。对于第二个性质，我们考虑 $X\in \mathfrak{gl}(n,\mathbb{C})$ 和 $A\in GL(n,\mathbb{C})$，可以证明（只需要对两边进行泰勒展开就可以证明）
$$
e^{tAXA^{-1}}=Ae^{tX}A^{-1}\in G,\ \forall t\in\mathbb{R}
$$
所以 $AXA^{-1}\in\mathfrak{g}$。现在令 $A=e^{tY}$，则 $e^{tY}Xe^{-tY}\in\mathfrak{g}$，对这个式子在 $t=0$ 处求导就可以得到

$$
\begin{align*}
\left.\frac{d}{dt}e^{tY}Xe^{-tY}\right|_{t=0}&=\left.Ye^{tY}Xe^{-tY}\right|_{t=0}-\left.e^{tY}Xe^{-tY}Y\right|_{t=0}\\
&=YX-XY
\end{align*}
$$

而同时我们有

$$
\begin{align*}
\left.\frac{d}{dt}e^{tY}Xe^{-tY}\right|_{t=0}&=\lim_{h\to0}\frac{e^{hY}Xe^{-hY}-X}{h}
\end{align*}
$$

由于 $\mathfrak{g}$ 是一个实矢量空间，所以等式右边属于 $\mathfrak{g}$(1)，这样我们就证明了 $YX-XY=[Y,X]\in \mathfrak{g}$。
{ .annotate }

1. 严格来说我们这里要用到李群在拓扑意义上的封闭性，不过这里我们不过多讨论这个问题

***Jacobi 恒等式***写为

$$
\begin{align*}
[[X,Y],Z]+[[Y,Z],X]+[[Z,X],Y]=0,\ \forall X,Y,Z\in \mathfrak{g}
\end{align*}
$$

对于 $X,Y,Z\in\mathfrak{g}$，不难得到对于任何 $t$，$e^{tZ}[X,Y]e^{-tZ}\in\mathfrak{g}$。我们将这个式子改写成

$$
e^{tZ}[X,Y]e^{-tZ}=[e^{tZ}Xe^{-tZ},e^{tZ}Ye^{-tZ}]
$$

等式两边分别在 $t=0$ 处求导，得到
$$
[Z,[X,Y]]=[[Z,X],Y]+[X,[Z,Y]]
$$
由于李括号是反交换的，那么我们可以得到 Jacobi 恒等式
$$
[[X,Y],Z]+[[Y,Z],X]+[[Z,X],Y]=0
$$
我们要说明的是，**李代数 $\mathfrak{g}$ 的对易子代数结构和李群 $G$ 上乘积的代数结构是密切相关的**。这在 ***Baker-Campbell-Hausdorff*** (BCH) 公式中得以体现：

$$
\begin{align*}
e^Xe^Y=e^{X+Y+\frac12[X,Y]+\frac{1}{12}[X,[X,Y]]-\frac{1}{12}[Y,[X,Y]]+\cdots}
\end{align*}
$$

可以证明这个指数上的级数是收敛的，并且这个级数只由迭代对易子（iterated commutators）组成，所以等式右侧指数上的部分其实也是 $\mathfrak{g}$ 中的元素。BCH 公式将李群中的乘积表示为李代数的对易子，这也就是说

<center><b>Much of the group structure of $G$ is encoded in the commutator on $\mathfrak{g}$</b></center>

## 经典力学和量子力学中的李代数（The Lie Algebras of Classical and Quantum Physics）

### **实例**：$\mathfrak{so}(3)$

$\mathfrak{so}(3)$ 是所有 $3\times 3$ 反对称矩阵构成的集合（反对称矩阵自动满足零迹条件），所以我们可以取其基为

$$
\begin{align*}
L_1\equiv \begin{pmatrix}
0&0&0\\
0&0&-1\\
0&1&0
\end{pmatrix},\ L_2\equiv \begin{pmatrix}
0&0&1\\
0&0&0\\
-1&0&0
\end{pmatrix},\ L_3\equiv \begin{pmatrix}
0&-1&0\\
1&0&0\\
0&0&0
\end{pmatrix}
\end{align*}
$$

如果用分量的形式写出来就是
$$
\boxed{
(L_i)_{jk}=-\epsilon_{ijk}
}
$$
这说明 $\dim\mathfrak{so}(3)=3$。对任意 $X\in\mathfrak{so}(3)$，可以将其写为

$$
\begin{align*}
X= \begin{pmatrix}
0&-z&y\\
z&0&-x\\
-y&x&0
\end{pmatrix}=xL_1+yL_2+zL_3
\end{align*}
$$

可以验证，基的对易子为

$$
[L_i,L_j]=\sum_{k=1}^3\epsilon_{ijk}L_k
$$

如果我们按照物理学家的定义，将 $\mathfrak{so}(3)$ 的生成元定义为厄米算符 $L_i'\equiv iL_i$，那么上面的对易式会变成

$$
[L_i',L_j']=\sum_{k=1}^3i\epsilon_{ijk}L_k'
$$

这就是大多数量子力学教材中看到的角动量的对易形式了！

我们可以认为生成元 $X$ 生成了一个绕着 $[X]=(x,y,z)$ 的旋转，这是因为对于任何 $v=(v_x,v_y,v_z)\in\mathbb{R}^3$，我们有

$$
\begin{align*}
Xv= \begin{pmatrix}
0&-z&y\\
z&0&-x\\
-y&x&0
\end{pmatrix}\begin{pmatrix}
v_x\\
v_y\\
v_z
\end{pmatrix}=(x,y,z)\times (v_x,v_y,v_z)=[X]\times v
\end{align*}
$$

这说明了如果 $v$ 和 $[X]$ 平行的话，那么 $Xv=0$，于是我们就可以得到
$$
e^{tX}[X]=[X]
$$
**所以 $e^{tX}$ 就是一个以 $[X]$ 为轴的旋转，因为其能够保持 $[X]$ 矢量不发生变化！**

我们之前谈到过角速度实际上是一个反对称的 bivector：$[\tilde{\omega}]=\frac{dA}{dt}A^{-1}$。如果令 $A(t)=e^{tX}$，那么角速度 bivector 就可以写为

$$
\begin{align*}
[\tilde{\omega}]&=\frac{dA(t)}{dt}A^{-1}\\
&=Xe^{tX}e^{-tX}\\
&=X
\end{align*}
$$

这说明

<center><b>The angular velocity bivector is just a rotation generator.</b></center>

而用到我们在[上一章定义的映射](../linear-algebra-tensors/tensors.md/#jmap) $J$，我们就可以得到

$$
[\boldsymbol{\omega}]=[X]
$$
所以赝矢量 $\boldsymbol{\omega}$ 其实就是一个旋转的生成元，能够生成一个绕着 $\boldsymbol{\omega}$ 的一个旋转变换 $e^{t\boldsymbol{\omega}}$。

### **实例**：$\mathfrak{su}(3)$

$\mathfrak{su}(2)$ 是所有 $2\times 2$ 零迹反厄米矩阵构成的集合，所以我们可以取其基为

$$
\begin{align*}
S_1\equiv\frac12\begin{pmatrix}
0&-i\\
-i&0
\end{pmatrix},\ S_2\equiv \frac12\begin{pmatrix}
0&-1\\
1&0
\end{pmatrix},\ S_3\equiv \frac12\begin{pmatrix}
-i&0\\
0&i
\end{pmatrix}
\end{align*}
$$

这说明 $\dim\mathfrak{su}(2)=3$。可以验证，基的对易子为

$$
[S_i,S_j]=\sum_{k=1}^3\epsilon_{ijk}S_k
$$

这和 $\mathfrak{so}(3)$ 的对易关系完全一致！这实际上意味着 $\mathfrak{su}(2)$ 和 $\mathfrak{so}(3)$ 是等价的，并且其对应的李群 $SU(2)$ 和 $SO(3)$ 之间也存在着对应的某种关系，我们在后边会再谈到这个问题。

对任意 $Y\in\mathfrak{su}(2)$，可以将其写为

$$
\begin{align*}
Y= \frac12\begin{pmatrix}
-iz&-i(x-iy)\\
i(x+iy)&iz
\end{pmatrix}=xS_1+yS_2+zS_3
\end{align*}
$$

当然在物理中，我们会将上面的基乘以 $i$ 以使其变成厄米算符，这样就可以得到我们熟悉的泡利矩阵了。

### **实例**：$\mathfrak{so}(3,1)$

我们之前已经讨论过，$X\in \mathfrak{so}(3,1)$ 可以被写为

$$
\boxed{
\begin{align*}
X=\begin{pmatrix}
X'&\boldsymbol{a}\\
\boldsymbol{a}&0
\end{pmatrix},\ X'\in\mathfrak{so}(3),\boldsymbol{a}\in \mathbb{R}^{3}
\end{align*}}
$$

所以将 $\mathfrak{so}(3)$ 的 $L_i$ 嵌入到 $\mathfrak{so}(3,1)$ 就得到三个生成元

$$
\tilde{L_i}\equiv \begin{pmatrix}
L_i&0\\\
0&0
\end{pmatrix}
$$

上面可以生成空间的旋转，被称作 rotation 生成元。我们还可以再定义三个生成元

$$
\begin{align*}
K_1\equiv \begin{pmatrix}
0&0&0&1\\
0&0&0&0\\
0&0&0&0\\
1&0&0&0
\end{pmatrix},\ K_2\equiv \begin{pmatrix}
0&0&0&0\\
0&0&0&1\\
0&0&0&0\\
0&1&0&0
\end{pmatrix},\ K_3\equiv \begin{pmatrix}
0&0&0&0\\
0&0&0&0\\
0&0&0&1\\
0&0&1&0
\end{pmatrix}
\end{align*}
$$

这里的 $K_i$ 可以生成 boost 变换，也被称作 boost 生成元。可以验证下面的对易关系

$$
\begin{align*}
[\tilde{L}_i,\tilde{L}_j]&=\sum_{k=1}^3\epsilon_{ijk}\tilde{L}_k\\
[\tilde{L}_i,K_j]&=\sum_{k=1}^3\epsilon_{ijk}\tilde{K}_k\\
[K_i,K_j]&=-\sum_{k=1}^3\epsilon_{ijk}\tilde{L}_k\\
\end{align*}
$$

这里的第一个对易式就是 $\mathfrak{so}(3)$ 的对易关系。第二个对易式说明 $K_i$ 在旋转变换下和一个矢量的表现是一样的（这在上一章节对于[“矢量算符”](../linear-algebra-tensors/tensors.md/#vector-operator)的定义中提及过）。而第三个对易式说明如果我们连续朝着两个不同的方向进行 boost 变换，那么这两个变换的顺序就会变得很重要。事实上，按一种顺序和按另一种顺序进行 boost 变换的区别实际上就是一个旋转变换！根据 BCH 公式，两个 boost 变换的乘积就不是一个 boost 变换，或者说 **boost 变换不是封闭的**。这直接导致了旋轨耦合中的托马斯进动（Thomas procession）。

???+ note "快度的叠加以及洛伦兹速度变换"
	我们可以将 boost 变换写作 $e^{uK}$，其中 $u$ 是快度（rapidity），可以被看作一种 "boost angle"。若我们朝着一个方向连续进行两次 boost（如朝着 $z$ 轴方向 $K=K_3$），那么根据指数的运算规则
	$$
	e^{u_1K}e^{u_2K}=e^{(u_1+u_2)K}
	$$ 也就是说沿着同一方向快度为 $u_1$ 和 $u_2$ 的 boost 变换叠加就是沿着该方向快度为 $u_1+u_2$ 的 boost。若我们写出双曲正切的和角公式
	$$
	\tanh(u_1+u_2)=\frac{\tanh u_1+\tanh u_2}{1+\tanh u_1\tanh u_2}
	$$ 而速度和快度的关系是 $\beta=tanh u$，于是我们就有速度的叠加公式
	$$
	\beta_{1+2}=\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}
	$$ 这正是洛伦兹的速度变换！我们看到这实际上就是双曲正切的和角公式！

### **实例**：$\mathfrak{sl}(2,\mathbb{C})_{\mathbb{R}}$

$\mathfrak{sl}(2,\mathbb{C})_{\mathbb{R}}$ 是 $SL(2,\mathbb{C})$ 的李代数，是一个**实**矢量空间。因为 $SL(2,\mathbb{C})$ 是所有 $2\times 2$ 的行列式为 1 的复矩阵的集合，所以 $\mathfrak{sl}(2,\mathbb{C})_{\mathbb{R}}$ 就是所有零迹的 $2\times 2$ 的复矩阵的集合。取 $\mathfrak{sl}(2,\mathbb{C})_{\mathbb{R}}$ 一组基为（注意这是实矢量空间，所以相差一个虚数单位 $i$ 的矩阵被看作不同的基）

$$
\begin{align*}
S_1=\frac12\begin{pmatrix}
0&-i\\
-i&0
\end{pmatrix},\ S_2=\frac12\begin{pmatrix}
0&-1\\
1&0
\end{pmatrix},\ S_3=\frac12\begin{pmatrix}
-i&0\\
0&i
\end{pmatrix}\\
\tilde{K}_1\equiv\frac12\begin{pmatrix}
0&1\\
1&0
\end{pmatrix},\ \tilde{K}_2\equiv\frac12\begin{pmatrix}
0&-i\\
i&0
\end{pmatrix},\ \tilde{K}_3\equiv \frac12\begin{pmatrix}
1&0\\
0&-1
\end{pmatrix}
\end{align*}
$$

注意到 $\tilde{K}_i=iS_i$，但我们仍然将其写作两个不同的基。我们可以验证基的对易式

$$
\begin{align*}
[S_i,S_j]&=\sum_{k=1}^3\epsilon_{ijk}\tilde{S}_k\\
[S_i,\tilde{K}_j]&=\sum_{k=1}^3\epsilon_{ijk}\tilde{K}_k\\
[\tilde{K}_i,\tilde{K}_j]&=-\sum_{k=1}^3\epsilon_{ijk}S_k\\
\end{align*}
$$

我们发现这和 $\mathfrak{so}(3,1)$ 的对易关系完全一致！就同 $\mathfrak{su}(2)$ 和 $\mathfrak{so}(3)$ 的关系一样，$\mathfrak{sl}(2,\mathbb{C})_{\mathbb{R}}$ 和 $\mathfrak{so}(3,1)$ 相同的代数结构是和 $SL(2,\mathbb{C})$ 与 $SO(3,1)_o$ 的同态密切相关的。

## 抽象李代数（Abstract Lie Algebra）

*其实我们可以不通过李群来定义李代数，而是直接通过代数结构来定义。*

**<u>定义</u>**：***（实、抽象）李代数（Lie algebra）***是一个实矢量空间 $\mathfrak{g}$，配有一个名为***李括号（Lie bracket）***的运算，它是一个双线性映射 $[\cdot,\cdot]:\mathfrak{g}\times\mathfrak{g}\to \mathfrak{g}$，并且满足下面的性质

1. $[X,Y]=-[Y,X],\ \forall X,Y\in\mathfrak{g}$ (Antistymmetry)
2. $[[X,Y],Z]+[[Y,Z],X]+[[Z,X],Y]=0,$$\ \forall X,Y,Z\in\mathfrak{g}$ (Jacobi identity)

在物理学中存在一些（抽象）李代数，其括号不是对易子，并且通常不与矩阵李群相关联；这一定义使我们能够将这些代数纳入讨论。

### **实例**：*线性算符的李代数 $\mathfrak{gl}(V)$*

令 $V$ 为一个矢量空间，我们可以在线性算符集 $\mathcal{L}(V)$ 引入李括号，从而将其变成李代数（注意这里的线性变换可以是不可逆的！）
$$
[T,U]\equiv TU-UT,\ \forall T,U\in\mathcal{L}(V)
$$
我们可以通过验证这样的定义使得 Jacobi 恒等式得以满足。这样我们就可以将 $\mathcal{L}(V)$ 变为李代数了，记作 $\mathfrak{gl}(V)$。

## 再论同态与同构（Homomorphism and Isomorphism Revisited）

**<u>定义</u>**：对于两个李代数 $\mathfrak{g}$ 和 $\mathfrak{h}$，如果存在线性映射 $\phi:\mathfrak{g}\to\mathfrak{h}$ 使得李括号结构不发生改变，即
$$
\boxed{
[\phi(X),\phi(Y)]=\phi([X,Y]),\ \forall X,Y\in\mathfrak{g}
}
$$
那么就说 $\mathfrak{g}$ 和 $\mathfrak{h}$ 同态，$\phi$ 是一个***李代数同态映射（Lie algebra homomorphism）***。进一步，如果  $\mathfrak{g}$ 和 $\mathfrak{h}$ 有相同的维数，那么它们就是同构的，$\phi$ 被称作***李代数同构映射（Lie algebra isomorphism）***。

有时证明两个李代数同构的最简单方式就是选取一组合适的基，使得两个李代数的基的对易关系完全一样。如果 $\{X_i\}_{i=1,..,n}$ 和 $\{Y_i\}_{i=1,...,n}$ 分别是 $\mathfrak{g}$ 和 $\mathfrak{h}$ 的一组基，且有对应关系

$$
\begin{align*}
[X_i,X_j]&=\sum_{k=1}^n {c_{ij}}^kX_k\\
[Y_i,Y_j]&=\sum_{k=1}^n {d_{ij}}^kY_k
\end{align*}
$$

其中 ${c_{ij}}^k$ 和 ${d_{ij}}^k$ 被称作李代数 $\mathfrak{g}$ 和 $\mathfrak{h}$ 的***结构常数（structure constants）***。那么李代数 $\mathfrak{g}$ 和 $\mathfrak{h}$ 同构的一个充分条件就是 ${c_{ij}}^k={d_{ij}}^k,\forall i,j,k$。因此我们就可以通过这个条件说明 $\mathfrak{so}(3)\simeq\mathfrak{su}(2)$ 以及 $\mathfrak{so}(3,1)\simeq\mathfrak{sl}(2,\mathbb{C})_\mathbb{R}$。

!!! info "注："
	这里将 ${c_{ij}}^k$ 和 ${d_{ij}}^k$ 称作结构常数，但要注意 ${c_{ij}}^k$ 和 ${d_{ij}}^k$ 都和基的选取有关，因此严格来说，它们都不能够被称作“常数”。

### **实例**：*$\text{ad}$ 同态*

定义线性算符 $\text{ad}_X$ 为
$$
\boxed{
\text{ad}_X(Y)\equiv [X,Y],\ \forall X,Y\in\mathfrak{g}
}
$$
其实这是将 $X$ 变成了一个 $\mathfrak{g}$ 上的线性算符 $\text{ad}_X$，这个线性算符又作用在线性空间 $\mathfrak{g}$ 上（看清楚这里面的关系）。我们在讲[矢量空间](../linear-algebra-tensors/vector-spaces.md/#adjoint-action)一节的时候就提到了这种运算，而现在我们在李代数的语境下，$\text{ad}$ 通过作用在 $X$ 上产生了一个两个李代数之间的线性映射

$$
\begin{align*}
\text{ad}:\mathfrak{g}&\rightarrow \mathfrak{gl}(\mathfrak{g})\\
X&\mapsto \text{ad}_X
\end{align*}
$$

那么这个线性映射 $\text{ad}_X$ 是一个同态映射吗？我们这里不加证明的指出，如果
$$
\text{ad}_{[X,Y]}=[\text{ad}_X,\text{ad}_Y]
$$
（注意这里等式左边的李括号是作用在 $\mathfrak{g}$ 上的，右边的李括号是作用在 $\mathfrak{gl}(\mathfrak{g})$ 上的）那么线性映射 $\text{ad}_X$ 就是一个同态映射。我们可以发现，这个条件就等价于 Jacobi 恒等式！这就给了我们另一种解读 Jacobi 恒等式的视角——**Jacobi 恒等式使得 $\text{ad}_X$ 对任何 $X$ 都是一个同态映射**。