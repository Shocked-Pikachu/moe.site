# 张量（Tensors）

## 记号汇总

<table border="0" class="dataframe" style="border-collapse: separate; border-spacing: 30px 0;">
  <tr>
    <th style="text-align: left;"><b>符号</b></th>
    <th style="text-align: left;"><b>含义</b></th>
  </tr>
  <tr>
    <td>\(\mathcal{T}^r_s\)</td>
    <td>矢量空间 \(V\) 上的 \((r,s)\) 张量空间</td></td>
  </tr>
  <tr>
    <td>\(\epsilon\)</td>
    <td>Levi-Citita 张量</td></td>
  </tr>
  <tr>
    <td>\(\bar{\epsilon}_{ijk}\)</td>
    <td>Levi-Civita 符号</td>
  </tr>
  <tr>
    <td>&emsp;</td>
    <td>&emsp;</td>
  </tr>
  <tr>
    <td>\(v\otimes w\)</td>
    <td>矢量 \(v\) 和 \(w\) 的张量积</td>
  </tr>
</table>

???+ note "Einstein 求和法则"
	从这一章起我们开始使用 Einstein 求和法则：当表达式中出现两个重复指标（且一个为上指标一个为下指标）的时候，就意味着要对这个重复的指标求和。比如我们将 $v=\sum_{i=1}^nv^ie_i$ 写为 $v=v^ie_i$，将线性算符作用在矢量上写为
	$$
	Te_j=\sum_{i=1}^n {T_j}^{i}e_i={T_j}^{i}e_i
	$$ 被求和的指标称为***哑指标（dummy index）***，而未被求和的指标就被称为***自由指标（free index）***。例如在上面的例子中，$i$ 是哑指标而 $j$ 是自由指标。


## 一些基本定义（Basic Definitions）

<u>**定义**</u>：在矢量空间 $V$ 中的 $(r,s)$ 张量就是定义在下面空间的 $C$ 值函数 $T$

$$
\underbrace{V\times \cdots \times V}_{r \text{ times}}\times\underbrace{V^*\times \cdots \times V^*}_{s \text{ times}}
$$

且对于每一个分量都是线性的，即

$$
\begin{align*}
&T(v_1+cw,v_2,...,v_r,f_1,...,f_s)\\
=&T(v_1,v_2,...,v_r,f_1,...,f_s)+cT(w,v_2,...,v_r,f_1,...,f_s)
\end{align*}
$$

这个性质也被称作***多重线性（multilinearity）***。按照这样的定义，对偶矢量可以被看作 $(1,0)$ 张量，矢量可以被看作 $(0,1)$ 张量。特别的，我们规定标量是 $(0,0)$ 张量。如果我们将 $V$ 上的 $(r,s)$ 张量集合记做 $\mathcal{T}_s^r(V)$ 或者 $\mathcal{T}^r_s$，那么所有 $(r,s)$ 张量共同构成一个新的矢量空间（check it!）。

考虑选取 $V$ 的一组基 $\{e_i\}_{i=1,...,n}$，对应的对偶基为 $\{e^i\}_{i=1,...,n}$，并将 $v_p$ 的第 $i$ 个分量记做 $v_p^i$，将 $f_q$ 的第 $j$ 个分量记做 $f_{qj}$，那么根据张量的多重线性，我们有

$$
\begin{align*}
T(v_1,...,v_r,f_1,...,f_s)&=v_1^{i_1}...v_r^{i_r}f_{1j_1}...f_{sj_s}T(e_{i1},...,e_{i_r},e^{j_1},...,e^{j_s})\\
&\equiv v_1^{i_1}...v_r^{i_r}f_{1j_1}...f_{sj_s}{T_{i_1\cdots i_r}}^{j_1\cdots j_s}
\end{align*}
$$

其中

$$
\boxed{
\begin{align*}
{T_{i_1\cdots i_r}}^{j_1\cdots j_s}\equiv T(e_{i_1},...,e_{i_r},e^{j_1},...,e^{j_s})
\end{align*}}
$$

定义为 $T$ 在基 $\{e_i\}_{i=1,...,n}$ 下的***分量（component）***（注意分量是数字！）。*张量的分量实际上就是张量作用在基向量后得到的值。*

我们可以通过在上一部分提到的 $L:V\rightarrow V^*$ 映射以及 $L^{-1}$ 来改变 $T$ 的类型。比如，如果 $T$ 是一个 $(1,1)$ 张量，分量为 ${T_i}^j$，那么我们就可以将其变成 $(2,0)$ 张量 $\tilde{T}$：
$$
\tilde{T}(v,w)=T(v,L(w))
$$
注意这里 $v,w\in V$，而 $L(w)\in V^*$。考虑 $\tilde{T}$ 的分量
$$
T_{ij}=\tilde{T}(e_i,e_j)=T(e_i,g_{jk} e^k)=g_{jk}{T_i}^j
$$

!!! info "注："
	正是因为我们要完成升降指标的操作，我们才将 $T(e_i,e^j)$ 写为 ${T_i}^j$ 而不是 $T_i^j$。如果写成后一种形式，上下标没有前后之分，那么升降指标的操作就会出现歧义！

当然如果我们只写分量的话，我们一般就会略去 tilde 符号（写 $T_{ij}$ 而非 $\tilde{T}_{ij}$），而根据上下标来判断其是什么张量。

<u>**实例**</u>：*量子力学中的线性算符*

事实上，我们可以将我们可以将线性算符看作 $(1,1)$ 张量：
$$
	A(v,f)\equiv f(Av)
$$
考虑量子力学的线性算符。给定希尔伯特空间中的一个算符 $H$，并且取一组正交归一基 $\{e_i\}$（在狄拉克记号中我们写作 $\{|i\rangle\}$），我们常常会将 $H(e_i)$ 写作 $H|i\rangle$，将 将 $\tilde{e}_j(e_i)=(e_j|e_i)$ 写作 $\langle j|i\rangle$，将 $(e_j|He_i)$ 写作 $\langle j|H|i\rangle$。因此根据上面的定义，我们得到

$$
\begin{align*}
{H_i}^j&=H(e_i,e^j)\\\
&=e^j(He_i)\\\
&=\langle j|H|i\rangle
\end{align*}
$$

这些分量就是***矩阵元（matrix element）***，我们也可以将 ${H_i}^j$ 编排为矩阵形式。

**<u>实例</u>**：*Levi-Civita 张量*

考虑 $\mathbb{R}^3$ 中的 ***Levi-Civita 张量***：
$$
\epsilon(u,v,w)\equiv(u\times v)\cdot w
$$
从它的定义中我们看出，$\epsilon$ 就类似于计算平行六面体体积的算符。考虑 Levi-Civita 张量的分量，若取 $\mathbb{R}^3$ 的一组标准基 $\{e_1,e_2,e_3\}$，则我们有

$$
\begin{align*}
\epsilon_{ijk}&=\epsilon(e_i,e_j,e_k)\\
&=(e_i\times e_j)\cdot e_k\\
&=\bar{\epsilon}_{ijk}
\end{align*}
$$

其中 $\bar{\epsilon}_{ijk}$ 是 Levi-Civita 符号，也就是 $\epsilon$ 张量的分量 $\epsilon_{ijk}$（注意符号的区别），定义为

$$
\begin{align*}
\bar{\epsilon}_{ijk}=\begin{cases}
+1&\text{if}\ \{ijk\}=\{1,2,3\},\{2,3,1\},\text{or}\ \{3,1,2\}\\
-1&\text{if}\ \{ijk\}=\{3,2,1\},\{1,3,2\},\text{or}\ \{2,1,3\}\\
0&\text{otherwise}
\end{cases}
\end{align*}
$$

!!! info "注："
	实际上叉乘这个运算只能存在于 3 维空间（还有 7 维空间），而在其他维度的矢量空间中都不是良好定义的。原因在后面的章节会提到，这里我们先接受在 $\mathbb{R}^3$ 上存在叉乘的运算，并且运算规则就是平常我们大家学习过的那种。

**<u>实例</u>**：*转动惯量张量*

惯量张量 $\mathcal{I}$ 是一个在 $\mathbb{R}^3$ 中的 $(2,0)$ 张量，通过作用在角速度矢量上得到刚体转动的动能
$$
\frac12\mathcal{I}(\omega,\omega)=K
$$
我们也可以将 $\mathcal{I}$ 的一个指标上升变成一个 $(1,1)$ 张量，这样 $\mathcal{I}$ 就变成了一个线性算符，通过作用在角速度矢量上得到角动量，即
$$
L=\mathcal{I}\omega
$$
而如果用矩阵（分量）的形式写出来，上面两个式子就会变成（注意当我们说“矩阵”的时候，就默认已经选定了一组基）

$$
\begin{align*}
K&=\frac12[\omega]^T[\mathcal{I}][\omega]\\
[L]&=[\mathcal{I}][\omega]
\end{align*}
$$

注意由于我们是在三维欧几里得空间使用正交归一基，所以指标的上升和下降不会对张量的矩阵形式产生影响（度规是单位矩阵），因此在这里 $(2,0)$ 张量和 $(1,1)$ 张量的矩阵是一样的。

<u>**实例**</u>：*度规张量*

欧几里得空间 $\mathbb{R}^n$ 和 Minkowski 4 维时空 $\mathbb{R}^4$ 度规是一个对称的 $(2,0)$ 张量：$g_{ij}= g(e_i,e_j)\equiv (e_i|e_j)$，我们也可以定义反度规（inverse metric）$g^{ij}$，这是一个 $(0,2)$ 张量。另外对于 $V$ 上的度规，我们有
$$
{g_i}^j={\delta_i}^j
$$
这是因为

$$
\begin{align*}
{g_i}^j&=g(e_i,e^j)\equiv g(e_i,\tilde{e^j})\\
&=g(e_i,g^{jk}e_k)=g^{jk}g_{ik}={\delta_i}^j
\end{align*}
$$


???+ note "为什么我们不考虑 $\mathbb{C}^n$ 的度规？"
	如果在 $\mathbb{C}^n$ 上定义度规，那么 $g(w,v)=(w|v)$ 就不是双线性的，$g$ 对于 $w$ 是共轭线性的，这不满足张量的定义！

**<u>实例</u>**：*二阶非线性极化率*

*这部分是书中没有的，但是我在学习非线性光学的时候碰到了，发现是一个很好的张量的例子，所以放在这里。*

一阶级化率是一个线性算符，即 $(1,1)$ 张量，其输入一个电场矢量，吐出一个一阶极化强度矢量，写成分量式是

$$
P^{(1)}_i=\sum_j\epsilon_0\chi^{(1)}_{ij}E_j
$$

这里我们不区分上下指标，这是因为我们在欧几里得空间处理问题，当取正交归一基的时候，升降指标不改变分量的值。

在非线性光学中，二阶非线性极化率的定义如下：

$$
\boldsymbol{P}^{(2)}=\epsilon_0\chi^{(2)}:\boldsymbol{E}_1\boldsymbol{E}_2
$$

这相当于输入两个矢量，输出一个矢量，这实际上可以看作一个 $(2,1)$ 张量，为什么呢？考虑 $(2,1)$ 张量 $T\in \mathcal{T}^2_1$，对于 $v,w\in V,f\in V^*$，定义

$$
T(f,v,w)\equiv f(T(v,w))
$$

其中 $T(v,w)\in V$，这样就就是输入两个矢量输出一个矢量的算符了。为了记号的简洁，我们先忽略极化强度和极化率右上角的 $^{(2)}$ 标号，写成分量形式就是

$$
P^i=\epsilon_0{\chi^i}_{jk}E_1^jE_2^k
$$

由于我们在欧几里得空间，所以总可以选取正交归一基，使得升降指标不改变分量**（实际上在大部分经典场景下我们都是这么做的）**，这样我们就将上面的式子改写为

$$
P_i^{(2)}=\sum_{j,k}\epsilon_0\chi^{(2)}_{ijk}E_{1j}E_{2k}
$$

这就是我们平常在课本上看到的式子了！更高阶的极化率以此类推是 $(n,1)$ 张量。

???+ note "双点乘是什么运算？"
	上面在写二阶极化率的定义时，我们用到了“$:$”这个符号，这个符号被称作“双点乘”，也会在物理的其他地方碰到。**双点乘实际上是指标的收缩，**指标缩并的概念在[后面章节](#v-v-tensor-products-of-v-and-v)就会讲到。为了直观说明这件事情，考虑点乘运算：$v\cdot w=v^iw_i$，这就是一种收缩（两个 $i$ 收缩了）。而双点乘运算发生在两个张量之间：$A:B=A^{ij}B_{ij}$，其实就是收缩两个指标，因而用到两个点。我们上面的两个张量是 $\chi^{(2)}$ 和 $\boldsymbol{E}_1\boldsymbol{E}_2$，后者是两个电场矢量的并矢，更精确的说，是[张量积](#the-tensor-product-definition-and-properties)。<br>但是这样的写法（双点乘、并矢）只适用于少数张量的运算，没有办法推广。指标运算的含义更佳清晰且能够直接推广至高维情况，所以学习一般形式的指标运算是必要的。

## 基变换（Change of Basis）

物理学中，我们常会说满足矢量/张量变换的量才被称作矢量/张量。接下来我们考虑在矢量空间 $V$ 中的两个不同基 $\mathcal{B}=\{e_i\}_{i=1,...,n}$ 和 $\mathcal{B}'=\{e_{i'}\}_{i'=1,...,n}$，我们可以用 $\mathcal{B}$ 将 $\mathcal{B}'$ 线性表出：
$$
e_{i'}=A_{i'}^j e_j
$$

同样我们也有
$$
e_i=A_i^{j'}e_{j'}
$$

!!! info "注："
	这里要说明一下，我们在写 $\mathcal{B}$ 的时候，应该在基矢上打撇，即 $\{e'_{i}\}$，代表不同基下的矢量。但是由于我们在变换矩阵上要区别每一个指标来自于哪一个基的矢量，所以我们在指标上打撇以表示我们使用了不同的基，即用 $e_{i'}$ 表示 $e'_{i}$。另外 $A_{i'}^j$ 和 $A_i^{j'}$ 不是简单将指标改变，实际上这两个变换矩阵都是不同的，实际上应写成 $A_{i'}^j$ 和 ${A'}_i^{j'}$，而由于打撇的指标不同（一个在上方打撇，一个在下方打撇，这也说明了为什么我们给 $\mathcal{B}'$ 中的基向量的指标要加撇），所以我们能够分清两个矩阵，我们也就不在 $A$ 上打撇了。


这样我们就有

$$
e_i=A^{j'}_ie_{j'}=A^{j'}_iA^k_{j'}e_k
$$

于是

$$
A^{j'}_iA^k_{j'}=\delta_i^k
$$

若将上式打撇和不打撇的指标交换，我们也有

$$
A^{j}_{i'}A^{k'}_{j}=\delta_{i'}^{k'}
$$

这说明 $A^{j'}_i$ 和 $A^j_{i'}$ 互为逆矩阵（这两个矩阵是不同的）。要注意的是，$A^{j'}_i$ 和 $A^j_{i'}$ 并**不是张量**，它们的指标代表的是不同的基。这也就是为什么我们直接将上指标和下指标垂直排列，而没有像张量一样错开。

考虑 $\mathcal{B}$ 和 $\mathcal{B}'$ 的对偶基 $\{e^i\}_{i=1,...,n}$ 和 $\mathcal{B}'=\{e^{i'}\}_{i'=1,...,n}$，根据对偶基的定义

$$
\begin{align*}
e^{i'}(e_j)=e^{i'}(A^{k'}_je_{k'})=A^{k'}_j\delta^{i'}_{k'}=A^{i'}_j
\end{align*}
$$

即
$$
e^{i'}=A^{i'}_je^j
$$

同理，我们也可以得到
$$
e^i=A_{j'}^ie^{j'}
$$

!!! info "注："
	这种只在指标上打撇而不在实际对象上打撇的记号有的时候也称作 ***Schouten convention***，通过指标的打撇，我们实际上可以分清楚我们选取的是哪个基。

考虑 $(1,1)$ 张量分量在不同基下的变换

$$
\begin{align*}
{T_{i'}}^{j'}&=T(e_{i'},e^{j'})\\\
&=T(A^k_{i'}e_{k},A_l^{j'}e^{l})\\\
&=A^k_{i'}A_l^{j'}T(e_{k},e^{l})\\\
&=A^k_{i'}A_l^{j'}{T_k}^l
\end{align*}
$$

考虑更一般的 $(r,s)$ 张量

$$
\begin{align*}
{T_{i_1'\cdots i_r'}}^{j_1'\cdots j_s'} &= T(e_{i_1'},\dots,e_{i_r'},e^{j_1'},\dots,e^{j_s'}) \\
&= T\left(A^{k_1}_{i_1'}e_{k_1}, \dots, A^{k_r}_{i_r'}e_{k_r}, A_{l_1}^{j_1'}e^{l_1}, \dots, A_{l_s}^{j_s'}e^{l_s}\right) \\
&= A^{k_1}_{i_1'} \cdots A^{k_r}_{i_r'} A_{l_1}^{j_1'} \cdots A_{l_s}^{j_s'} T(e_{k_1},\dots,e_{k_r},e^{l_1},\dots,e^{l_s}) \\
&= A^{k_1}_{i_1'} \cdots A^{k_r}_{i_r'} A_{l_1}^{j_1'} \cdots A_{l_s}^{j_s'} {T_{k_1\cdots k_r}}^{l_1\cdots l_s}
\end{align*}
$$

总结起来就是

$$
\boxed{
\begin{align*}
{T_{i_1'\cdots i_r'}}^{j_1'\cdots j_s'}=A^{k_1}_{i_1'}\cdots A^{k_r}_{i_r'}A_{l_1}^{j_1'}\cdots A_{l_s}^{j_s'}{T_{k_1\cdots k_r}}^{l_1\cdots l_s}
\end{align*}
}
$$

这就是一般的张量在基变换下满足的定律，也是在物理中我们给“张量”的定义，其实这种物理的定义和我们上面多线性函数的定义是完全一致的。

最后我们引入变换矩阵（要注意不同指标代表不同矩阵！）

$$
\boxed{
A=\begin{pmatrix}
A^{1'}_{1}&A^{1'}_{2}&\cdots&A^{1'}_{n}\\
A^{2'}_{1}&A^{2'}_{2}&\cdots&A^{2'}_{n}\\
\vdots&\vdots&\ddots&\vdots\\
A^{n'}_{1}&A^{n'}_{2}&\cdots&A^{n'}_{n}
\end{pmatrix},\ A^{-1}=\begin{pmatrix}
A^{1}_{1'}&A^{1}_{2'}&\cdots&A^{1}_{n'}\\
A^{2}_{1'}&A^{2}_{2'}&\cdots&A^{2}_{n'}\\
\vdots&\vdots&\ddots&\vdots\\
A^{n}_{1'}&A^{n}_{2'}&\cdots&A^{n}_{n'}
\end{pmatrix}
}
$$

这样我们就能够清晰的看出两个变换矩阵之间的互逆关系：$A^{-1}A=AA^{-1}=I$。

<u>**实例**</u>：*矢量和对偶矢量*

有了上面张量的变换的规律，考虑矢量（即 $(0,1)$ 张量）的变换

$$
v^{i'}=A^{i'}_jv^j
$$

而对偶矢量（即 $(1,0)$ 张量）的变换

$$
f_{i'}=A_{i'}^jf^j
$$

现在我们终于看到 $v$ 的分量是用 $A^{i'}_j$ 进行变换的，而基 $\{e_i\}$ 是用 $A^j_{i'}$ 变换的，所以矢量的分量相对于基矢量的变换遵循的是相反的规则（'contra'），即逆变（contravariant）。同样的，对偶矢量的分量相对于基矢量的变化遵循的是相同的规则，即协变（convariant）。

矢量的分量和基矢量的变换规则相反，这看上去一件很有道理的事情，因为矢量 $v$ 本身并不应该随着基矢量的变换而变化（物理规律不随着坐标的变换而变化），所以 $v^i$ 和 $e_i$ 的变换规律应该是相反的。这对于对偶矢量也是成立的。

???+ note "关于 Einstein 求和规则"
	我们之前给矢量的分量标上标，而给对偶矢量的分量标下标，我们看到标上标的量和标下标的量其变换规律恰好是相反的，因此上下标的求和是一个不随着基矢量变换而变化的值。**因此 Einstein 求和不仅仅是指标的求和，也代表着一个对象或者过程是不依赖基的选择的。**例如 $v^ie_i$ 就是矢量 $v$ 本身，显然 $v$ 是独立于基存在的，$f_iv^i$ 就是 $f(v)$，这也是一个独立于基存在的量。<br>但是有没有可能出现两个重复的上标或者两个重复的下标呢？在这种情况下，我们如果要求和，就必须要明确的将求和符号写出。比如刚体运动的欧拉方程
	$$
	\tau_i=\lambda_i\dot{\omega_i}+\sum_{j,k}\epsilon_{ijk}\lambda_k\omega_j\omega_k
	$$ 这里 $\tau$ 是扭矩，$\lambda_i$ 是惯量张量的特征值（或者叫主惯量系数），$\omega$ 是角动量。我们看到，对于第一项我们就不需要对 $i$ 求和，对于第二项如果我们要对 $j,k$ 求和，就需要写出求和符号。事实上，这里出现两个重复的不求和下标，是因为我们选取了特殊的坐标系（惯量主坐标系），而这个方程就不是在任何坐标系都成立的方程。另外，也不是只要求和了就代表这个规律是和坐标无关的，我们必须还要看求和的两个量是不是随坐标的变换规律相反。

若使用上面定义的变换矩阵，我们也可以将上面矢量和对偶矢量的变换写为

$$
\begin{align*}
[v]_{\mathcal{B}'}&=A[v]_{\mathcal{B}}\\
[f]_{\mathcal{B}'}&=(A^{-1})^T[f]_{\mathcal{B}}\\
\end{align*}
$$

在不同的基下，$f(v)$ 的值不会发生改变，我们也可以用矩阵形式验证这一点：

$$
\begin{align*}
[f]_{\mathcal{B}'}^T[v]_{\mathcal{B}'}&=\left((A^{-1})^T[f]_{\mathcal{B}}\right)^TA[v]_{\mathcal{B}}\\
&=[f]_{\mathcal{B}}^T A^{-1}A[v]_{\mathcal{B}}\\
&=[f]_{\mathcal{B}}^T[v]_{\mathcal{B}}
\end{align*}
$$

!!! info "注："
	这里如果用矩阵形式写的话会有一点需要注意的地方。我们看到基矢量的变换是 $e_{i'}=A_{i'}^je_j$，若要将这个式子写成矩阵形式，要注意这里的 $i'$ 和 $j$ 不是分量指标，而是基矢量的 index，所以这本身不是一个分量形式的方程。考虑在 $\mathcal{B}$ 下，$e_j$ 就是第 $j$ 个分量为 1，其余分量为 0 的矢量，因此 $e_{i'}$ 的第 $j$ 个分量就是 $A_{i'}^j$，因而我们可以将基矢量的变换写成下面的矩阵形式<br><center>$[e_{i'}]_\mathcal{B}=A^{-1}[e_{i}]_\mathcal{B}$</center><br>而矢量分量的变换写为<br><center>$[v]_{\mathcal{B}'}=A[v]_{\mathcal{B}}$</center><br>注意到这两个式子左右两边在哪个基下写分量是有区别的！

当我们选取的基 $\mathcal{B}$ 和 $\mathcal{B}'$ 都是正交归一基时，$A$ 必须是一个正交矩阵（这样才能保证变换的过程中不破坏基矢量的正交归一性），有 $A^{-1}=A^T$，于是我们看到 $v$ 和 $f$ 的分量在基变换下满足同样的变换规律。这也是合理的，因为在正交归一基下，对于矢量 $v$，其对偶矢量 $\tilde{v}=L(v)=(v|\cdot)$ 的分量和 $v$ 是相同的，即 $v^i=v_i$（check it!）。

**<u>实例</u>**：*线性算符*

线性算符可以看作 $(1,1)$ 张量，于是我们可以在基变换下写出线性算符的矩阵元（分量）
$$
{T_{i'}}^{j'}=A^k_{i'}A^{j'}_l {T_k}^l
$$

而写为矩阵形式就是

$$
[T]_{\mathcal{B}'}=A[T]_{\mathcal{B}}A^{-1}
$$

这就是一个矩阵的***相似变换（similarity transformation）***，这和我们在线性代数中学的是完全一样的。

另外，给定 $T\in\mathcal{L}(V)$ 和 $V$ 的一组基 $\mathcal{B}$，定义 $T$ 的迹（trace）为
$$
\text{Tr}(T)\equiv\text{Tr}([T]_{\mathcal{B}})
$$
显然，迹是不随基的选取而改变的（相似变换不改变矩阵的迹）。事实上，我们已经在第一部分定义过迹，它可以看作 $M_n(\mathbb{R})$ 或者 $M_n(\mathbb{C})$ 的对偶空间中的对偶矢量，当然对偶矢量作用在矢量上这件事情是不随基的变化而改变的（这句话中我们又将 $T$ 看作一个矢量空间中的矢量）。

!!! info "注："
	实际上，在欧几里得空间，由于度规是正定的，我们可以取正交归一的基矢量。而在正交归一基下，矢量 $v$ 的对偶矢量形式上和 $v$ 完全一致（两者的分量一样），所以我们看似就不需要区分这两个矢量空间。因此，我们不用处理烦人的上下标而认为它们都是一样的，这样不会引入任何计算上的错误。但是在度规非正定的空间中（如 Minkowski 空间），我们无法选取正交归一基，上下标的引入就是必要的。

**<u>实例</u>**：*$(2,0)$ 张量*

$(2,0)$ 张量对于 Minkowski 空间和欧几里得空间是很重要的，其变换规则为
$$
g_{i'j'}=A^k_{i'}A^l_{j'}g_{kl}
$$
或者矩阵形式：$[g]_{\mathcal{B}'}=(A^{-1})^T[g]_{\mathcal{B}}A^{-1}$。

值得注意的是，如果 $\mathcal{B}$ 和 $\mathcal{B}'$ 都是正交归一基，那么 $A$ 必须是正交矩阵，此时上面对 $(2,0)$ 张量 $g$ 的变换关系和上例对 $(1,1)$ 张量 $T$ 的变换关系就是一样的，因此我们实际上无需区分 $(2,0)$ 张量和 $(1,1)$ 张量（事实上我们在过去在欧几里得空间也从未区分过）！但是在 Minkowski 4 维时空中基不是正交归一的，取 $g=\eta$，由于在**基变化过程中要保度规不变**，所以我们有

$$
\begin{align*}
[\eta]=&(A^{-1})^T[\eta]A^{-1}\\\
\text{or}\ [\eta]=&A^T[\eta]A
\end{align*}
$$

其中
$$
[\eta]=\begin{pmatrix}
1&0&0&0\\\
0&-1&0&0\\\
0&0&-1&0\\\
0&0&0&-1
\end{pmatrix}
$$
满足上式的 $A$ 就被称作 ***Lorentz 变换***，在这个变换下，矢量和对偶矢量，$(2,0)$ 张量和 $(1,1)$ 张量的变换形式就不一样了。

## 主动和被动变换（Active and Passive Transformations）

在 *An Introduction to Tensors and Group Theory for Physicists* 这本书中，作者又引入了一个张量 $U$，为了说明 $A_{i}^{j'}$ 也是这个张量的分量（我们前面一直用“矩阵元”而不是张量分量来称呼 $A_i^{j'}$）。而且在后面非常清楚地展示了主动和被动变换的区别（而在我们之前的学习之中，这一直是个模糊的领域）。这也是我喜欢这本书的地方：里面所有的 notation 都是 explicit & unambiguous 的！

考虑一个线性算符 $U$（或者 $(1,1)$ 张量），其将新基 $\mathcal{B'}$ 中的矢量映射到旧基 $\mathcal{B}$ 中的矢量，即 $U(e_{i'})=e_i$，考虑**在旧基 $\mathcal{B}$ 下**写出 $U$ 的分量

$$
\begin{align*}
{U_i}^j&=U(e_i,e^j)=e^j(Ue_i)=e^j(U(A_i^{k'}e_{k'}))\\\
&=A_i^{k'}e^j(U(e_{k'}))=A_i^{k'}e^j(e_k)\\\
&=A_i^{k'}\delta^j_k=A_i^{j'}
\end{align*}
$$

!!! info "注："
	到这里我们可以更直观的看到打撇和不打撇的指标是不改变指标的值的（在上面最后一步中 $j$ 和 $j'$ 数字的值是相同的），是否打撇只是为了方便我们看出这是哪一个基下的矢量/分量。

我们看到其实 $A_{i}^{j'}$ 是张量 $U$ 的分量！但是为什么我们不使用 ${U_i}^j$ 来表示变换矩阵呢？这仅仅是因为符号的问题，通过 $A_{i}^{j'}$ 这种打撇的符号，我们能够更好的分清从 $\mathcal{B}$ 到 $\mathcal{B'}$ 的变换和 $\mathcal{B'}$ 到 $\mathcal{B}$ 的变换。但是如果我们用 ${U_i}^j$ 来表示变换矩阵，我们可能就会分不清楚变换的方向。另外 ${U_i}^j$ 还和基的选取有关（在 $\mathcal{B}$ 和 $\mathcal{B}'$ 下的分量表示不一样），但是我们使用的 $A_i^{j'}$ 记号可以根据打撇的指标确定是 $A$ 还是 $A^{-1}$ 变换矩阵（这段有些绕，可能要多读一会才能知道在说什么）。

如果我们将 $U$ 写成矩阵，有（注意下面所有表示都是在**旧基 $\mathcal{B}$ 下**写出来的）

$$
[e_i]_\mathcal{B}=[U]_\mathcal{B}[e_{i'}]_\mathcal{B}=A[e_{i'}]_\mathcal{B}
$$

!!! info "注："
	这里我在第一次读的时候有一些混乱，但是要注意上面是矩阵乘法，我们没有写成分量形式，角标 $i$ 和 $i'$ 只是矢量的 index，如果写成分量形式应该是：
	$$
	[e_i]^j={U_k}^j[e_{i'}]^k
	$$ 式中的 $j,k$ 才是分量指标。当然我们知道，在基 $\mathcal{B}$ 下，$[e_i]^j=\delta_i^j$。

这要和上面基变换下矢量分量的变换式 $[v]_{\mathcal{B}'}=A[v]_\mathcal{B}$ 区分开来。$[e_i]_\mathcal{B}=A[e_{i'}]_\mathcal{B}$ 称作***主动变换（active transformation）***，因为这个线性变换改变了基矢量，即将 $e_{i'}$ 变成 $e_i$，注意这个式子是在**同一个基 $\mathcal{B}$ 下**写出来的。而 $[v]_{\mathcal{B}'}=A[v]_\mathcal{B}$ 称为***被动变换（passive transformation）***，因为这个变换不改变矢量 $v$ 本身，而是同时改变了基矢量和 $v$ 的分量，注意这个式子的左右两侧是**分别在基 $\mathcal{B}'$ 和基 $\mathcal{B}$ 下**写出来的。我们将主动变换和被动变换总结如下：

<table border="0" class="dataframe" style="border-collapse: separate; border-spacing: 30px 0;">
  <tr>
    <th style="text-align: left;"><b>Summary</b></th>
  </tr>
  <tr>
    <td>\([e_i]_\mathcal{B}=A[e_{i'}]_\mathcal{B}\)</td>
    <td>Active transformation</td></td>
  </tr>
  <tr>
    <td>\([v]_{\mathcal{B}'}=A[v]_\mathcal{B}\)</td>
    <td>Passive tranformation</td>
  </tr>
</table>
然而不幸的是，在主流的物理教科书中，我们都不会区分这两种变换，一般来说书上的写法是
$$
\boldsymbol{r}'=A\boldsymbol{r}
$$
这既可以被解读为主动变换，也可以被解读为被动变换。如果将其理解为主动变换，那么就是 $A$ 将一个矢量 $\boldsymbol{r}$ 变成了一个**新的矢量** $\boldsymbol{r}$，而其分量是在**同一个基 $\mathcal{B}$ 下**表示的：$[\boldsymbol{r}']_{\mathcal{B}}=A[\boldsymbol{r}]_{\mathcal{B}}$（注意在主动变换下 $[\boldsymbol{r}]_\mathcal{B}$ 和 $[\boldsymbol{r}']_{\mathcal{B'}}$ 是一样的）。如果将其理解为被动变换，那么 $A$ 就是将 $\boldsymbol{r}$ 在旧基 $\mathcal{B}$ 下的表示变成新基 $\mathcal{B'}$ 下的表示，矢量 $\boldsymbol{r}$ 本身是不发生任何变化的：$[\boldsymbol{r}]_{\mathcal{B'}}=A[\boldsymbol{r}]_{\mathcal{B}}$。

???+ note "主动变换和被动变换之间的关系"
	在学习的时候，大家如果认识到主动线性变换和基变换是两个不同变换，那么大家一定会意识到这两种变换的方向是看上去是“相反”的。例如在二维平面内考虑下面的矩阵
	$$
	A=\begin{pmatrix}
	\cos\theta&-\sin\theta\\\
	\sin\theta&\cos\theta
	\end{pmatrix}
	$$ 如果考虑主动线性变换，就有 $[r']_\mathcal{B}=A[r]_\mathcal{B}$，这显然是将 $v$ 做一个逆时针旋转 $\theta$ 的操作。但是如果考虑被动变换（基变换），有 $[e_{i'}]_\mathcal{B}=A[e_i]_\mathcal{B}$，这样会有 $[r]_{\mathcal{B'}}=A^{-1}[r]_\mathcal{B}$，看上去两个变换是相反的？其实这并没有什么矛盾，要注意在主动和被动变换下，等式左右两边的基是不一样的，而我们在上面就已经说过，矢量的分量也被称作“逆变分量”，其变换规律刚好和基矢量的变换规律是相反的！

**<u>实例</u>**：*薛定谔和海森堡绘景下的主动和被动变换*

在薛定谔表象下，可观测量作用在一个变化的态矢量上，而基矢量（basis ket）是不发生变化的，这是主动变换的视角。而在海森堡表象下，态矢量是不发生变化的，我们认为可观测量是随时间变化的。由于可观测量随时间变化，其本征矢量（形成一组正交完备基）也是随时间变化的，这就是被动变换的视角。就像上面 $\boldsymbol{r}'=A\boldsymbol{r}$ 有两种视角一样，一个可观测量的期望值

$$
\begin{align*}
\langle \hat{x}(t)\rangle&=\langle \psi|(U^\dagger\hat{x}U)|\psi\rangle\\
&=(\langle \psi|U^\dagger)\hat{x}(U|\psi\rangle)
\end{align*}
$$

其中 $U$ 是时间演化算符，也可以有两种解释的视角：时间演化算符作用在可观测量上（被动变换），或者时间演化算符作用在态矢量上（主动变换）。

## 张量积：定义和性质（The Tensor Product: Definition and Properties）

接下来我们介绍张量积，这是物理中用到的十分广泛的运算。我们之前在物理中已经接触过张量积，知道 $n$ 维空间和 $m$ 维空间做张量积后得到 $nm$ 维的空间。而这里我们将张量积这个概念定义清楚。

<u>**定义**</u>：给定两个有限维度的矢量空间 $V$ 和 $W$，定义***张量积（tensor product）***$V\otimes W$ 为所有作用在 $V^*\times W^*$ 上的 $C$ 值双线性函数的集合。并且给定 $v\in V,w\in W$，我们定义张量积 $v\otimes w$ 为 $V\otimes W$ 中的元素，且满足

$$
\boxed{
\begin{align*}
(v\otimes w)(h,g)\equiv h(v)w(g),\ \forall h\in V^*,g\in W^*
\end{align*}}
$$

值得说明的是，上面的定义中 $V\otimes W$ 是一个新的空间，$v\otimes w$ 是这个空间中的一个元素。而 $V^*\times W^*$ 是两个对偶空间 $V^*$ 和 $W^*$ 分别取出一个元素构成的有序对的集合（分清楚 $\otimes$ 和 $\times$ 的差别）。

由于我们定义 $T=v\otimes w\in V\otimes W$ 是一个双线性函数，所以
$$
T(h,g)=h_ig_jT(e^i,f^j)=h_ig_jT^{ij}
$$
其中 $T^{ij}\equiv T(e^i,e^j)$。我们也可以说明 $e_i\otimes e_j$ 是 $V\otimes W$ 的一个基矢量，考虑表达式 $T^{ij}e_i\otimes e_j$

$$
\begin{align*}
(T^{ij}e_i\otimes e_j)(e^k,f^l)&=T^{ij}e_i(e^k)f_j(f^l)\\
&=T^{ij}\delta_i^k\delta_j^l\\
&=T^{kl}
\end{align*}
$$

这说明 $T=T^{ij}e_i\otimes e_j$，由此我们得到 $V\otimes W=\text{Span}\{e_i\otimes f_j\}$，$V\otimes W$ 是一个 $mn$ 维的空间。

!!! info "注："
	这里的逻辑可能要再次申明：我们是先有张量分量的定义 $T^{kl}\equiv T(e^k,e^l)$，然后用 $T^{ij}e_i\otimes e_j$ 这个表达式也计算 $(T^{ij}e_i\otimes e_j)(e^k,f^l)$，发现算出来的结果是 $T^{kl}$，这就说明 $T^{ij}e_i\otimes e_j=T$。

除了双线性之外，张量积还有两个重要的特点，第一个是可以和对偶互换，即

$$
(V\otimes W)^*=V^*\otimes W^*
$$

第二个是具有结合律（assocative），也就是

$$
(V_1\otimes V_2)\otimes V_3=V_1\otimes (V_2\otimes V_3)
$$


我们当然可以很形式的证明这些性质，当然这些看上去很符合直觉，我们也不在这里多花时间证明。有了上面的性质，我们就可以没有歧义的写出诸如 $V_1\otimes \cdots \otimes V_n$ 这样的张量积，而 $V_1\otimes \cdots \otimes V_n$ 实际上就是定义在 $V_1^*\times\cdots V_n^*$ 上的 $C$ 值函数。

## $V$ 和 $V^*$ 的张量积（Tensor Products of $V$ and $V^*$）

有了上面的 $V\otimes W$ 的定义，我们很容易就能够写出矢量空间和其对偶空间的张量积

**<u>定义</u>**：给定矢量空间 $V$ 和对偶空间 $V^*$，定义下面形式的张量积

$$
\begin{align*}
\underbrace{V^* \otimes \cdots \otimes V^*}_{r \text{ times}}\otimes\underbrace{V \otimes \cdots \otimes V}_{s \text{ times}}
\end{align*}
$$

为作用在下面有序数对集合的多线性函数

$$
\begin{align*}
\underbrace{V \times \cdots \times V}_{r \text{ times}}\times\underbrace{V^* \times \cdots \times V^*}_{s \text{ times}}
\end{align*}
$$

这个多线性函数空间实际上就是 $V$ 上的 $(r,s)$ 张量空间 $\mathcal{T}^r_s$！对于 张量 $T\in \mathcal{T}^r_s$，在基 $\mathcal{B}^r_s=\{e^{i_1}\otimes \cdots e^{i_r}\otimes e_{j_1}\otimes\cdots \otimes e_{j_s}\}$ 下可以写出

$$
\boxed{
\begin{align*}
T={T_{i_1\cdots i_r}}^{j_1\cdots j_s}e^{i_1}\otimes \cdots e^{i_r}\otimes e_{j_1}\otimes\cdots \otimes e_{j_s}
\end{align*}}
$$

容易证明，这样的写法就是正确的（和上面两个空间的张量积证明过程一致）。**注意现在我们有两个解读分量的方式**：

1. 作为张量作用在基矢量上的值（[第一部分](#basic-definitions)中的定义）
2. 作为给定基后的展开系数（这里的定义）

这两种解读方式是完全等价的，事实上，我们之前在对偶矢量中也介绍过这两种解读方式（对偶矢量实际上可以看作 $(1,0)$ 张量）。

接下来我们要讨论一个很重要的操作：***指标收缩（contraction）***，这是一种矩阵求迹的推广，这种操作在相对论中非常常见。

**<u>定义</u>**：给定 $T\in \mathcal{T}^r_s(V)$

$$
\begin{align*}
T={T_{i_1\cdots i_r}}^{j_1\cdots j_s}e^{i_1}\otimes \cdots e^{i_r}\otimes e_{j_1}\otimes\cdots \otimes e_{j_s}
\end{align*}
$$

定义 $T$ 的收缩为一个新的 $(r,s)$ 张量，这个新的张量是将 $e^i$ 和 $e_i$ 分别作为 $T$ 的两个参数，并且对 $i$ 求和，例如我们将 $e_i$ 作为第 $r$ 个参数，将 $e^i$ 作为第 $(r+s)$ 个参数，也就是

$$
\begin{align*}
\tilde{T}(v_1,...,v_{r-1},f_1,...,f_{s-1})\equiv\sum_i T(v_1,...,v_{r-1},e_i,f_1,...,f_{s-1},e^i)
\end{align*}
$$

注意到 $\tilde{T}$ 的分量为

$$
\begin{align*}
{\tilde{T}_{i_1\cdots i_{r-1}}}^{j_1.\cdots j_{s-1}}=\sum_l {T_{i_1\cdots i_{r-1}l}}^{j_1\cdots j_{s-1}l}
\end{align*}
$$

!!! info "注："
	这里我们可以省去求和符号不写（由于 Einstein 求和约定，重复指标自动求和），但是将求和号显式地写出来以强调要进行求和。

如果对分量式而言，收缩可以针对任何一对指标进行，只要一个是协变的，另一个是逆变的（一个是上指标一个是下指标）。如果我们考虑的矢量空间有度规 $g$，我们可以先进行指标升降再进行指标收缩。考虑 $(2,0)$ 张量 $T$，我们可以进行下面的收缩 $\tilde{T}=g^{ij}T_{ij}={T_i}^i$，这可以看作这个张量的迹（或者其对应的线性算符，或者 $(1,1)$ 张量的迹）。

考虑两个线性算符 $A,B$，它们的张量积是 $A\otimes B\in \mathcal{T}_2^2$，写成分量式就是
$$
{(A\otimes B)_{ik}}^{jl}={A_i}^j{B_k}^l
$$

我们可以进行下面两种指标收缩，以生成一个 $(1,1)$ 张量

$$
\begin{align*}
{(A B)_{k}}^{j}&={A_i}^j{B_k}^i\\
{(A B)_{i}}^{l}&={A_i}^j{B_j}^l
\end{align*}
$$

注意到第一种收缩就是 $A$ 和 $B$ 的复合，而第二种收缩就是 $B$ 和 $A$ 的复合。

???+ note "上面对于指标收缩的定义依赖于基的选取吗？"
	我们在定义的指标收缩生成的张量时，我们引入了 $e_i$ 和 $e^i$，看上去我们必须要先选取一组基 $\mathcal{B}=\{e_i\}$ 才能够定义指标收缩。但是事实上指标收缩是不依赖于基的选取的，或者说，**在所有基下，指标收缩得到的新张量都是一样的**。<br>考虑两个基 $\mathcal{B}=\{e_i\}$ 和 $\mathcal{B}'=\{e_{i'}\}$，它们之间的变换关系满足
	$$
	e_i=A_i^{j'}e_{j'}
	$$ 于是我们有<br><center>
	$\begin{align*}
	&\tilde{T}(v_1,...,v_{r-1},f_1,...,f_{s-1})\\
	=&T(v_1,...,v_{r-1},e_{i},f_1,...,f_{s-1},e^{i})\\
	=&T(v_1,...,v_{r-1},A_i^{j'}e_{j'},f_1,...,f_{s-1},A^i_{k'}e^{k'})\\
	=&A_i^{j'}A^i_{k'}T(v_1,...,v_{r-1},e_{j'},f_1,...,f_{s-1},e^{k'})\\
	=&\delta^{j'}_{k'}T(v_1,...,v_{r-1},e_{j'},f_1,...,f_{s-1},e^{k'})\\
	=&T(v_1,...,v_{r-1},e_{j'},f_1,...,f_{s-1},e^{j'})\\
	\end{align*}$</center><br> 注意在上面的计算中，有 Einstein 求和约定。由此我们说明了指标收缩生成的张量不依赖于基的选择。

**<u>实例</u>**：$V^*\otimes V$

$V^*\otimes V$ 是物理中经常碰到的一种张量积，会得到 $\mathcal{T}_1^1$，即线性算符构成的矢量空间。具体来说，给定 ${T_i}^je^i\otimes e_j\in V^*\otimes V$，我们可以定义线性算符 $T$
$$
T(v)={T_i}^je^i(v)e_j=v^i{T_i}^je_j
$$
这样的定义其实在量子力学中会用到，虽然可能如果不仔细看，我们并不会发现这种关系。考虑希尔伯特空间中的态矢量 $\psi,\phi\in \mathcal{H}$，而 $\phi$ 的对偶矢量为 $L(\phi)\in\mathcal{H}^*$。考虑 $L(\phi)$ 和 $\psi$ 的张量积 $L(\phi)\otimes \psi$，在狄拉克符号下写作 $|\psi\rangle\langle\phi|$，考虑正交归一完备基 $\mathcal{B}=\{|i\rangle\}$，那么任何一个线性算符 $H=|\psi\rangle\langle\phi|$ 都可以写为
$$
H=\sum_{i,j}H_{ij}|i\rangle\langle j|
$$
这样的写法我们就熟悉多了，但这和上面 $T={T_i}^je^i\otimes e_j$ 的写法并没有本质上的区别。特别的，恒等算符写作
$$
I=\sum_i|i\rangle\langle i|
$$
这被称作基 $\{|i\rangle\}$ 下的 ***resolution of the identity***。

???+ note "量子力学中的“直积/外积”"
	在量子力学课本中，我们会将上面的张量积说成直积（direct product）或者外积（outer product），这几种说法是等价的。我们将其称作“外积”是为了和“内积”的概念区别分开来，因为两种运算都需要一个矢量和对偶矢量，但是外积生成的是一个线性算符而内积会生成一个数（严格来说，内积的运算需要两个矢量，我们使用到的是非退化厄米形式 $(w|v)=L(w)(v)$，不过如果形式的写出来内积的形式就会出现一个对偶矢量，这个对偶矢量就是我们定义的 $L(w)=(w|\cdot)$）。

## 张量积在经典力学中的运用（Applications of the Tensor Product in Classical Physics）

**<u>实例</u>**：*麦克斯韦应力张量（Maxwell Stress Tensor）*

## 张量积在量子力学中的运用（Applications of the Tensor Product in Quantum Physics）

## 对称张量（Symmetric Tensors）

## 反对称张量（Antisymmetric Tensors）

## 赝矢量（Pseudovectors）
