# 张量（Tensors）

## 记号汇总

<table border="0" class="dataframe" style="border-collapse: separate; border-spacing: 30px 0;">
  <tr>
    <th style="text-align: left;"><b>符号</b></th>
    <th style="text-align: left;"><b>含义</b></th>
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
\begin{eqnarray*}
&T&(v_1+cw,v_2,...,v_r,f_1,...,f_s)\\
=&T&(v_1,v_2,...,v_r,f_1,...,f_s)+cT(w,v_2,...,v_r,f_1,...,f_s)
\end{eqnarray*}
$$

这个性质也被称作***多重线性（multilinearity）***。按照这样的定义，对偶矢量可以被看作 $(1,0)$ 张量，矢量可以被看作 $(0,1)$ 张量。特别的，我们规定标量是 $(0,0)$ 张量。如果我们将 $V$ 上的 $(r,s)$ 张量记做 $\mathcal{T}_s^r(V)$ 或者 $\mathcal{T}^r_s$，那么所有 $(r,s)$ 张量共同构成一个新的矢量空间（check it!）。

考虑选取 $V$ 的一组基 $\{e_i\}_{i=1,...,n}$，对应的对偶基为 $\{e^i\}_{i=1,...,n}$，并将 $v_p$ 的第 $i$ 个分量记做 $v_p^i$，将 $f_q$ 的第 $j$ 个分量记做 $f_{qj}$，那么根据张量的多重线性，我们有

$$
\begin{eqnarray*}
T(v_1,...,v_r,f_1,...,f_s)&=&v_1^{i_1}...v_r^{i_r}f_{1j_1}...f_{sj_s}T(e_{i1},...,e_{i_r},e^{j_1},...,e^{j_s})\\
&\equiv&v_1^{i_1}...v_r^{i_r}f_{1j_1}...f_{sj_s}{T_{i_1\cdots i_r}}^{j_1\cdots j_s}
\end{eqnarray*}
$$

其中

$$
\boxed{
\begin{eqnarray*}
{T_{i_1\cdots i_r}}^{j_1\cdots j_s}\equiv T(e_{i_1},...,e_{i_r},e^{j_1},...,e^{j_s})
\end{eqnarray*}}
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

<u>**实例**</u>：量子力学中的线性算符

事实上，我们可以将我们可以将线性算符看作 $(1,1)$ 张量：
$$
	A(v,f)\equiv f(Av)
$$
考虑量子力学的线性算符。给定希尔伯特空间中的一个算符 $H$，并且取一组正交归一基 $\{e_i\}$（在狄拉克记号中我们写作 $\{|i\rangle\}$），我们常常会将 $H(e_i)$ 写作 $H|i\rangle$，将 将 $\tilde{e}_j(e_i)=(e_j|e_i)$ 写作 $\langle j|i\rangle$，将 $(e_j|He_i)$ 写作 $\langle j|H|i\rangle$。因此根据上面的定义，我们得到

$$
\begin{eqnarray*}
{H_i}^j&=&H(e_i,e^j)\\
&=&e^j(He_i)\\
&=&\langle j|H|i\rangle
\end{eqnarray*}
$$

这些分量就是***矩阵元（matrix element）***，我们也可以将 ${H_i}^j$ 编排为矩阵形式。

**<u>实例</u>**：*Levi-Civita 张量*

考虑 $\mathbb{R}^3$ 中的 ***Levi-Civita 张量***：
$$
\epsilon(u,v,w)\equiv(u\times v)\cdot w
$$
从它的定义中我们看出，$\epsilon$ 就类似于计算平行六面体体积的算符。考虑 Levi-Civita 张量的分量，若取 $\mathbb{R}^3$ 的一组标准基 $\{e_1,e_2,e_3\}$，则我们有

$$
\begin{eqnarray*}
\epsilon_{ijk}&=&\epsilon(e_i,e_j,e_k)\\
&=&(e_i\times e_j)\cdot e_k\\
&=&\bar{\epsilon}_{ijk}
\end{eqnarray*}
$$

其中 $\bar{\epsilon}_{ijk}$ 是 Levi-Civita 符号，也就是 $\epsilon$ 张量的分量 $\epsilon_{ijk}$（注意符号的区别），定义为

$$
\begin{eqnarray*}
\bar{\epsilon}_{ijk}=\begin{cases}
+1&\text{if}\ \{ijk\}=\{1,2,3\},\{2,3,1\},\text{or}\ \{3,1,2\}\\
-1&\text{if}\ \{ijk\}=\{3,2,1\},\{1,3,2\},\text{or}\ \{2,1,3\}\\
0&\text{otherwise}
\end{cases}
\end{eqnarray*}
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
\begin{eqnarray*}
K&=&\frac12[\omega]^T[\mathcal{I}][\omega]\\
[L]&=&[\mathcal{I}][\omega]
\end{eqnarray*}
$$

注意由于我们是在三维欧几里得空间使用正交归一基，所以指标的上升和下降不会对张量的矩阵形式产生影响（度规是单位矩阵），因此在这里 $(2,0)$ 张量和 $(1,1)$ 张量的矩阵是一样的。

<u>**实例**</u>：*度规张量*

欧几里得空间 $\mathbb{R}^n$ 和 Minkowski 4 维时空 $\mathbb{R}^4$ 度规是一个对称的 $(2,0)$ 张量：$g_{ij}= g(e_i,e_j)\equiv (e_i|e_j)$，我们也可以定义反度规（inverse metric）$g^{ij}$，这是一个 $(0,2)$ 张量。另外对于 $V$ 上的度规，我们有
$$
{g_i}^j={\delta_i}^j
$$
这是因为

$$
\begin{eqnarray*}
{g_i}^j&=&g(e_i,e^j)\equiv g(e_i,\tilde{e^j})\\
&=&g(e_i,g^{jk}e_k)=g^{jk}g_{ik}={\delta_i}^j
\end{eqnarray*}
$$


???+ note "为什么我们不考虑 $\mathbb{C}^n$ 的度规？"
	如果在 $\mathbb{C}^n$ 上定义度规，那么 $g(w,v)=(w|v)$ 就不是双线性的，$g$ 对于 $w$ 是共轭线性的，这不满足张量的定义！

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
	这里要说明一下，我们在写 $\mathcal{B}$ 的时候，应该在两个指标上打撇，即 $\{e'_{i'}\}$，代表基矢量变化，并且指标也发生变化。但是为了简洁，我们只在指标上打撇以表示我们使用了不同的基和不同的指标，即用 $e_{i'}$ 表示 $e'_{i'}$。另外 $A_{i'}^j$ 和 $A_i^{j'}$ 不是简单将指标改变，实际上这两个变换矩阵都是不同的，实际上应写成 $A_{i'}^j$ 和 ${A'}_i^{j'}$，而由于打撇的指标不同（一个在上方打撇，一个在下方打撇，这也说明了为什么我们给 $\mathcal{B}'$ 中的基向量的指标要加撇），所以我们能够分清两个矩阵，我们也就不在 $A$ 上打撇了。


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
\begin{eqnarray*}
e^{i'}(e_j)=e^{i'}(A^{k'}_je_{k'})=A^{k'}_j\delta^{i'}_{k'}=A^{i'}_j
\end{eqnarray*}
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
\begin{eqnarray*}
{T_{i'}}^{j'}&=&T(e_{i'},e^{j'})\\
&=&T(A^k_{i'}e_{k},A_l^{j'}e^{l})\\
&=&A^k_{i'}A_l^{j'}T(e_{k},e^{l})\\
&=&A^k_{i'}A_l^{j'}{T_k}^l
\end{eqnarray*}
$$

考虑更一般的 $(r,s)$ 张量

$$
\begin{eqnarray*}
{T_{i_1',...,i_r'}}^{j_1',...,j_s'}&=&T(e_{i_1'},...,e_{i_r'},e^{j_1'},...,e^{j_s'})\\
&=&T(A^{k_1}_{i_1'}e_{k_1},...,A^{k_r}_{i_r'}e_{k_r},A_{l_1}^{j_1'}e^{l_1},...,A_{l_s}^{j_s'}e^{l_s})\\
&=&A^{k_1}_{i_1'}\cdots A^{k_r}_{i_r'}A_{l_1}^{j_1'}\cdots A_{l_s}^{j_s'}T(e_{k_1},...,e_{k_r},e^{l_1},...,e^{l_s})\\
&=&A^{k_1}_{i_1'}\cdots A^{k_r}_{i_r'}A_{l_1}^{j_1'}\cdots A_{l_s}^{j_s'}{T_{k_1,...,k_r}}^{l_1,...,l_s}
\end{eqnarray*}
$$

总结起来就是

$$
\boxed{
\begin{eqnarray*}
{T_{i_1',...,i_r'}}^{j_1',...,j_s'}=A^{k_1}_{i_1'}\cdots A^{k_r}_{i_r'}A_{l_1}^{j_1'}\cdots A_{l_s}^{j_s'}{T_{k_1,...,k_r}}^{l_1,...,l_s}
\end{eqnarray*}
}
$$

这就是一般的张量在基变换下满足的定律，也是在物理中我们给“张量”的定义，其实这种物理的定义和我们上面多线性函数的定义是完全一致的。

最后我们引入变换矩阵（要注意不同指标代表不同矩阵！）/

$$
\boxed{
\begin{eqnarray*}
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
\end{eqnarray*}
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

**<u>实例</u>**：*线性算符*

**<u>实例</u>**：*$(2,0)$ 张量*

## 主动和被动变换（Active and Passive Transformations）

## 张量积：定义和性质（The Tensor Product: Definition and Properties）

## $V$ 和 $V^*$ 的张量积（Tensor Products of $V$ and $V^*$）

## 张量积在量子力学中的运用（Applications of the Tensor Product in Quantum Physics）

## 对称张量（Symmetric Tensors）

## 反对称张量（Antisymmetric Tensors）

## 赝矢量（Pseudovectors）
