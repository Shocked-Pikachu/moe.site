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

### **实例**：*量子力学中的线性算符*

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

### **实例**：*Levi-Civita 张量*

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

### **实例**：*转动惯量张量*

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

### **实例**：*度规张量*

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

### **实例**：*二阶非线性极化率*

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

### **实例**：*矢量和对偶矢量*

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

### **实例**：*线性算符*

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

### **实例**：*$(2,0)$ 张量*

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

### **实例**：*薛定谔和海森堡绘景下的主动和被动变换*

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

???+ note "张量和张量的张量积"
	上面我们定义了矢量空间 $V$ 和 $W$ 的张量积 $V\otimes W$，如果对于两个张量我们又如何定义张量积呢？事实上，张量本身就处于一个矢量空间中，考虑 $(2,0)$ 张量的集合，它们共同构成一个矢量空间 $\mathcal{T}^2_0$。于是我们可以定义对于矢量空间 $V$ 和张量 $T_1,T_2\in\mathcal{T}^2_0$，$T_1\otimes T_2$ 是 $\mathcal{T}^2_0\otimes \mathcal{T}^2_0$ 中的元素，且满足
	$$
	(T_1\otimes T_2)(v_1,w_1,v_2,w_2)\equiv 	T_1(v_1,w_1)T_2(v_2,w_2)
	$$ 如果将 $\mathcal{T}^2_0$ 本身看作 $V^*\otimes V^*$，我们也可以认为
	$$
	\mathcal{T}^2_0\otimes \mathcal{T}^2_0=\otimes^4V^*
	$$

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

### **实例**：$V^*\otimes V$

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

### **实例**：*麦克斯韦应力张量（Maxwell Stress Tensor）*

我们在学习电磁场的动量守恒的时候会引入一个 2 阶张量，称为麦克斯韦应力张量（如果是在 4 维时空中写就是电磁场能动量张量）
$$
T_{(2,0)}=\boldsymbol{E}\otimes \boldsymbol{E}+\boldsymbol{B}\otimes \boldsymbol{B}-\frac12(\boldsymbol{E}\cdot\boldsymbol{E}+\boldsymbol{B}\cdot\boldsymbol{B})g
$$
其中 $\boldsymbol{E}$ 和 $\boldsymbol{B}$ 是电磁场矢量的对偶矢量（当然在欧几里得空间中，矢量和对偶矢量的形式看上去是一样的）。$T(v,w)$ 给出了 $v$ 方向的动量流对垂直于 $w$ 平面的流量速率。如果写成分量形式就是
$$
T_{ij}=E_iE_j+B_iB_j-\frac12(\boldsymbol{E}\cdot\boldsymbol{E}+\boldsymbol{B}\cdot\boldsymbol{B})\delta_{ij}
$$
### **实例**：*电磁场张量（The Electromagnetic Field Tensor）*

在相对论电动力学中，我们会引入 2 阶反对称的电磁场张量，如果用分量的形式写出来就是（$A_\mu$ 是四维矢势的协变分量）
$$
F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu
$$

!!! info "如果不用分量形式将电磁场张量表达出来"
	事实上，如果要不用分量形式就将电磁场张量表达出来，我们需要用到***外导数（exterior derivative）***的概念。这个概念在学习广义相对论的时候会提到，但是由于这个需要涉及的前置知识较多，我们不在这里讨论。

而用矩阵的形式写出来是
$$
[F_{(2,0)}]=\begin{pmatrix}
0&-B_z&B_y&-E_x\\\
B_z&0&-B_x&-E_y\\\
-B_y&B_x&0&-E_z\\\
E_x&E_y&E_z&0
\end{pmatrix}
$$

洛伦兹力写为

$$
\frac{dp^\mu}{d\tau}=q{F^\mu}_\nu v^\nu
$$

如果不用分量形式写就是

$$
\frac{dp}{d\tau}=qF_{(1,1)}(v)
$$

也就是说电磁场作用在一个带电粒子上的四维力就由 $(1,1)$ 电磁场张量作用在 4-速度上的结果给出。

## 张量积在量子力学中的运用（Applications of the Tensor Product in Quantum Physics）

量子力学有一条基本假设：微观体系的状态可以完全被一个希尔伯特空间的矢量（波函数）描述。在我们处理带有空间自由度的波函数时（而不是像自旋这样的带有内部自由度的波函数），我们会将 $L^2([-a,a])$ 或者 $L^2(\mathbb{R})$ 这样的希尔伯特空间的“基”矢量取为位置算符 $\hat{x}$ 或者动量算符 $\hat{p}$ 的本征矢量。但是这些“基”是有不可数无穷多的（或者说它们是连续的），例如考虑 $L^2(\mathbb{R})$ 中的位置算符 $\hat{x}$，对于 $\psi(x)\in L^2(\mathbb{R})$ 而言
$$
\hat{x}\psi(x)=x\psi(x)
$$
如果我们考虑狄拉克函数 $\delta(x)$ 则有
$$
\hat{x}\delta(x-x_0)=x_0\delta(x-x_0)
$$

也就是说 $\delta(x-x_0)$ 是 $\hat{x}$ 的本征值为 $x_0$ 的“本征函数”，但是之前我们说过虽然 $\delta(x)$ 不属于 $L^2(\mathbb{R})$！而且因为基矢量 $\{\delta(x-x_0)_{x_0\in\mathbb{R}}\}$ 是用实数而非整数作为指标的，所以我们在展开矢量 $\psi\in L^2(\mathbb{R})$ 的时候就要**使用积分而非求和**了。

!!! info "注："
	要想较为正式地证明上面的性质，可以考虑下面的积分，其中 $f(x)\in L^2(\mathbb{R})$
	$$
	\int_{-\infty}^\infty (\hat{x}\delta(x-x_0))f(x)dx
	$$

这看上去是一个非常不严谨的推广，但实际上我们是可以通过一些精细的调整让上面的一些在数学上是严谨的，但我们这里不去过多讨论（毕竟是学物理的）。因此，在这个奇怪的基下我们只要：1. 忽略 $\delta(x)\notin L^2(\mathbb{R})$ 的事实；2. 忽略 $\{\delta(x-x_0)_{x_0\in\mathbb{R}}\}$ 的指标是连续的这件事情带来的不适；3. 将希尔伯特空间中的任意函数按照基函数的积分（而不是求和）展开
$$
\psi(x)=\int_{-\infty}^\infty dx'\psi(x')\delta(x-x')
$$
我们就可以正常的进行所有的运算了。注意上面的式子即可以看作 $\psi$ 的展开式，也可以看作狄拉克函数的定义式。在狄拉克记号中，我们还会将上式写为
$$
|\psi\rangle=\int_{-\infty}^\infty dx'\psi(x')|x'\rangle
$$
从这个式子我们就可以更加清晰的看出，$\psi(x)$ 实际上是 $|\psi\rangle$ 在基 $|x\rangle$ 下的展开系数了（注意这里我们将 $x$ 看作一个数字而非自变量）。另外，如果我们**重新定义基矢量的内积规则**为（这有时也被称为广义的归一条件）
$$
\langle x|x'\rangle\equiv\delta(x-x')
$$
那么我们就有
$$
\psi(x)=\langle x|\psi\rangle
$$
这给出了 $\psi(x)$ 的另一种理解方式：$|\psi\rangle$ 作用在基对偶矢量 $\langle x|$ 给出的结果。这其实和我们在上面对于张量分量的两种理解是一致的（作为张量的展开系数，或者作为张量作用在基向量后得到的值）。

### **实例**：*动量表象（The Momentum Representation）*

在量子力学中，动量算符写为 $\hat{p}=-i\frac{d}{dx}$，其对应的本征矢量为 $\{e^{ipx}\}_{p\in\mathbb{R}}$，当然这一组本征矢量也能够构成 $L^2(\mathbb{R})$ 的一组基。实际上，和上面的操作一样，我们可以用积分代替求和对矢量 $\psi$ 进行展开
$$
\psi(x)=\frac{1}{2\pi}\int_{-\infty}^\infty dp\ \phi(p)e^{ipx}
$$
这里 $\phi(p)$ 是 $\psi$ 在基 $\{e^{ipx}\}_{p\in\mathbb{R}}$ 下的展开系数，同时也被称作 $\psi$ 的***傅里叶变换（Fourier transform）***。事实上我们也可以用 $\phi(p)$ 表示波函数而不是 $\psi(x)$，这样位置算符和动量算符作用在 $\phi(p)$ 上就是

$$
\begin{align*}
\hat{p}\phi(p)&=p\phi(p)\\
\hat{x}\phi(p)&=i\frac{d\phi}{dp}
\end{align*}
$$

这样用 $\phi(p)$ 而不是 $\psi(x)$ 表示波函数的方式就是***动量表象（momentum representation）***。

接下来我们考虑如何从坐标表象变换到动量表象，即将基从 $\{\delta(x-x_0)_{x_0\in\mathbb{R}}\}$ 变换到 $\{e^{ipx}\}_{p\in\mathbb{R}}$。因为基矢量的指标是连续的，所以我们没有办法用一个 $A^{i'}_j$ 矩阵来表示基变换，相应的，我们使用一个函数 $A(x_0,p)$ 来进行变换。考虑将下面基变换的式子推广到无穷维

$$
\begin{align*}
e^{i'}(e_j)=e^{i'}(A^{k'}_je_{k'})=A^{k'}_j\delta^{i'}_{k'}=A^{i'}_j
\end{align*}
$$

我们知道 $A(x_0,p)$ 由 $\delta(x-x_0)$ 和 $e^{ipx}$ 的内积给出，即：

$$
\langle x_0|p\rangle=\int_{-\infty}^\infty dx\delta(x-x_0)e^{ipx}=e^{ipx_0}
$$

这样就给出了基函数变换函数 $A(x_0,p)$。

!!! info "注："
	有的时候我们会看到教材上写
	$$
	|p\rangle=\int_{-\infty}^\infty dx'|x'\rangle\langle x'|p\rangle
	$$ 这其实就是 $e_{i'}=A_{i'}^je_j$ 从求和被写成积分形式的样子：如果用求和的形式写上面的式子就会变成 $|p\rangle=\sum_{x'}A(x',p)|x'\rangle$。

接下来考虑希尔伯特空间的直积。假设我们有一个由两个希尔伯特空间直积得到的更大的空间 $\mathcal{H}_1\otimes \mathcal{H}_2$，我们能否构建一个作用在 $\mathcal{H}_1\otimes \mathcal{H}_2$ 上的线性算符呢？事实上，给定作用在 $\mathcal{H}_i$ 上的线性算符 $A_i$，我们可以定义一个新的作用在 $\mathcal{H}_1\otimes \mathcal{H}_2$ 上的 线性算符 $A_1\otimes A_2$

$$
(A_1\otimes A_2)(v\otimes w)\equiv (A_1v)\otimes (A_2w)
$$

在大多数情况下，$A_1$ 或者 $A_2$ 都是恒等算符，也就是说，我们构建的新的线性算符是 $A_1\otimes I$ 或者 $I\otimes A_2$。这常常被简写为 $A_1$ 和 $A_2$，即使它们都是作用在 $\mathcal{H}_1\otimes \mathcal{H}_2$ 上的。值得注意的是，$\mathcal{H}_1\otimes \mathcal{H}_2$ 上的内积运算 $(\cdot|\cdot)_\otimes$ 就是两个 $\mathcal{H}_i$ 上的内积的乘积，即

$$
(v_1\otimes v_2|w_1\otimes w_2)\equiv (v_1|w_1)_1\cdot (v_2|w_2)_2
$$

最后还有一个话题是关于***矢量算符（vector operators）***的。

**<u>定义</u>**：矢量算符是在总角动量算符 $J_i$ 的伴随作用下像三维矢量一样变换的算符集合。也就是说算符集 $\{B_i\}_{i=1,2,3}$（也会写成“矢量”形式 $\boldsymbol{B}$）满足

$$
\text{ad}_{J_i}(B_j)=[J_i,B_j]=i\sum_{k=1}^3\bar{\epsilon}_{ijk}B_k
$$

我们可以验证坐标算符 $\hat{\boldsymbol{r}}=\{\hat{x},\hat{y},\hat{z}\}$，动量算符 $\hat{\boldsymbol{p}}=\{\hat{p_x},\hat{p_y},\hat{p_z}\}$ 和角动量算符 $\hat{\boldsymbol{L}}=\{\hat{L_x},\hat{L_y},\hat{L_z}\}$ 都是矢量算符。

接下来我们再考虑一些例子，我们会将下面这句话作为公理：

<center><b>Adding degrees of freedom is implemented by taking tensor products of the corresponding Hilbert spaces.</b></center>

### **实例**：*从一维粒子到三维粒子*

三维空间中的希尔伯特空间可以表示为 $L^2(\mathbb{R})\otimes L^2(\mathbb{R})\otimes L^2(\mathbb{R})=L^2(\mathbb{R}^3)$，对于其中的态矢量，可以按本征态展开为

$$
\begin{align*}
|\psi\rangle=\int_{-\infty}^\infty\int_{-\infty}^\infty\int_{-\infty}^\infty dxdydz\ \psi(x,y,z)|x\rangle\otimes|y\rangle\otimes|z\rangle
\end{align*}
$$

如果我们将 $\psi(x,y,z)$ 写为 $\psi(\boldsymbol{r})$，将 $|x\rangle\otimes|y\rangle\otimes|z\rangle$ 写为 $|\boldsymbol{r}\rangle$，那么上面式子还可以写为

$$
\begin{align*}
|\psi\rangle=\int_{-\infty}^\infty d^3\boldsymbol{r}\ \psi(\boldsymbol{r})|\boldsymbol{r}\rangle
\end{align*}
$$

### **实例**：*两粒子系统*

考虑三维空间中的两个粒子，量子力学告诉我们一个系统的希尔伯特空间由其各个粒子的希尔伯特空间直积得到，因此两个粒子的希尔伯特空间为 $L^2(\mathbb{R}^3)\otimes L^2(\mathbb{R}^3)$，空间的基写为 $\{|\boldsymbol{r_1}\rangle\otimes|\boldsymbol{r_2}\rangle\}$，我们也经常将中间的 $\otimes$ 省略而直接写成 $|\boldsymbol{r_1}\rangle|\boldsymbol{r_2}\rangle$ 或者 $|\boldsymbol{r_1},\boldsymbol{r_2}\rangle$。这样希尔伯特空间中的态可以按本征态展开为

$$
\begin{align*}
|\psi\rangle=\int_{-\infty}^\infty d^3\boldsymbol{r}_1\int_{-\infty}^\infty d^3\boldsymbol{r}_2\ \psi(\boldsymbol{r}_1,\boldsymbol{r}_2)|\boldsymbol{r_1},\boldsymbol{r_2}\rangle
\end{align*}
$$

我们可以将 $\psi(\boldsymbol{r}_1,\boldsymbol{r}_2)$ 看作同时在 $\boldsymbol{r}_1$ 处找到 1 粒子，在 $\boldsymbol{r}_2$ 处找到 2 粒子的概率。

### **实例**：*轨道角动量和自旋角动量*

考虑一个三维的、带自旋 $s$ 的自旋粒子，自旋空间是 $\mathbb{C}^{2s+1}$(1)，我们可以取自旋空间的基为 $\{|m\rangle\}_{-s\leq m\leq s}$，这些基是 $z$ 方向自旋算符 $S_z$ 的本征态，本征值为 $m$。那么这样同时考虑空间的希尔伯特空间和自旋的希尔伯特空间，总的空间就是 $L^2(\mathbb{R}^3)\otimes \mathbb{C}^{2s+1}$，将基写为 $\{|\boldsymbol{r},m\rangle\}$，这样希尔伯特空间中的态可以按本征态展开为
{ .annotate }

1. 注意这里的复矢量空间对应的数域是复数，详细可以参考第一章对于[复矢量空间](./vector-spaces.md/#complex-space)的讨论

$$
\begin{align*}
|\psi\rangle=\sum_{m=-s}^s\int_{-\infty}^\infty d^3\boldsymbol{r}\ \psi_m(\boldsymbol{r})|\boldsymbol{r},m\rangle
\end{align*}
$$

其中 $\psi_m(\boldsymbol{r})$ 可以解读为在 $\boldsymbol{r}$ 处找到 $z$ 方向自旋角动量为 $m$ 的粒子的概率。有时我们也会将上面的态矢量写成列向量的形式(1)
{ .annotate }

1. 我们在 Dirac 方程中就会碰到这样的写成列向量的波函数

$$
\begin{pmatrix}
\psi_s\\
\psi_{s-1}\\
\vdots\\
\psi_{-s+1}\\
\psi_{-s}
\end{pmatrix}
$$

### **实例**：*量子纠缠*

考虑两个希尔伯特空间 $\mathcal{H}_1$ 和 $\mathcal{H}_2$ 以及它们的张量积 $\mathcal{H}_1\otimes \mathcal{H}_2$。$\mathcal{H}_1\otimes \mathcal{H}_2$ 中只有部分矢量可以被写成 $\psi\otimes\phi$ 的形式，这些矢量被称作***可分离态（separable/product states）***。而其他 $\mathcal{H}_1\otimes \mathcal{H}_2$ 中的矢量只能够写成 $\sum_i\psi_i\otimes\phi_i$ 这样的线性组合的形式，这些矢量就被称为***纠缠的（entangled）***，因为 $\mathcal{H}_1$ 中的测量会影响到 $\mathcal{H}_2$ 中自由度的测量。

最简单的例子是两个自旋数为二分之一的粒子 $s_1=s_2=1/2$ ，将 $\mathbb{C}^2$ 的基写为 $\{|+\rangle,|-\rangle\}$，考虑下面的态
$$
|+\rangle|-\rangle-|-\rangle|+\rangle\
$$
如果观测者看到第一个粒子的自旋向上，那么测量到的第二个粒子的自旋就一定向下，反之亦然。这就是说，对于第一个粒子的测量会影响对第二个粒子的测量，即系统是纠缠的。但是对于可分离态 $\psi\otimes \phi$ 就不会有这样的纠缠：对于第一个粒子的测量不会影响第二个粒子的态 $\phi$。

## 对称张量（Symmetric Tensors）

给定一个矢量空间 $V$，我们对 $\mathcal{T}^r_0(V)$ 和 $\mathcal{T}_r^0(V)$ 中的一些子空间比较感兴趣：分别是对称张量和反对称张量。

**<u>定义</u>**：一个 $(r,0)$ 的**对称**张量指的是不因为其作用的矢量发生交换而改变的张量，即

$$
\begin{align*}
T(v_1,...,v_i,...,v_j,...,v_r)=T(v_1,...,v_j,...,v_i,...,v_r),\ \forall i,j
\end{align*}
$$

对称的 $(0,r)$ 张量可以类似的进行定义。$\mathcal{T}^r_0(V)$ 和 $\mathcal{T}_r^0(V)$ 中的对称张量构成的子空间分别记做 $S^r(V^*)$ 和 $S^r(V)$。如果写成分量形式，则任意指标的更换都不会改变分量的值。尤其对于 $(2,0)$ 对称张量，我们有 $T_{ij}=T_{ji}$，也就是说对任何基 $\mathcal{B}$ 而言 $[T]_\mathcal{B}$ 都是一个对称矩阵。

!!! info "注："
	上面我们的讨论只针对 $(r,0)$ 和 $(0,r)$ 张量，一个 $(1,1)$ 张量，即线性算符是没有“对称”一说的。我们平常可能会碰到“线性算符是对称”的说法，这个意思是：在某些特殊的基下，线性算符的矩阵是对称的，但是在其他基下，矩阵就可能不是对称的了。

### **实例**：$S^2(\mathbb{R}^{2*})$

考虑集合 $\{e^1\otimes e^1,e^2\otimes e^2,e^1\otimes e^2+e^2\otimes e^1\}\subset S^2(\mathbb{R}^{2*})$，其中 $\{e^i\}_{i=1,2}$ 是标准对偶基，这就是一组 $S^2(\mathbb{R}^{2*})$ 的基。任意对称张量都可以写成这些基的线性组合

$$
\begin{align*}
T=T_{11}e^1\otimes e^1+T_{22}e^2\otimes e^2+T_{12}(e^1\otimes e^2+e^2\otimes e^1)
\end{align*}
$$

???+ note "度规张量"
	度规张量是一个对称张量，因为在 $\mathbb{R}^n$ 上定义的度规有 $g(w,v)=(w|v)=(v|w)=g(v,w)$（注意我们之前说过我们只在 $\mathbb{R}^n$ 中定义度规张量）。特别的，对于 $\mathbb{R}^2$ 上的欧几里得度规可以在标准坐标基下写为
	$$
	g=e^1\otimes e^1+e^2\otimes e^2
	$$ 因为 $g_{11}=g_{22}=1$，$g_{12}=g_{21}=0$。注意如果我们取的不是标准正交基，度规张量的形式就不会这么简单，但是不论我们如果取基，$g$ 都一定是一个对称张量。

## 反对称张量（Antisymmetric Tensors）

**<u>定义</u>**：一个 $(r,0)$ 的**反对称**张量指的是因为其作用的矢量发生交换而**改变符号**的张量，即

$$
\begin{align*}
T(v_1,...,v_i,...,v_j,...,v_r)=-T(v_1,...,v_j,...,v_i,...,v_r),\ \forall i,j
\end{align*}
$$

类似的，我们可以定义 $(0,r)$ 的反对称张量。我们将 $(r,0)$ 和 $(0,r)$ 的反对称张量组成的集合分别记做 $\Lambda^r V^*$ 和 $\Lambda^r V$（对于 $r=1$ 的情况，我们定义 $\Lambda^1V^*=V^*$ 和 $\Lambda^1V=V$）。

我们可以证明，反对称张量满足下面三条性质：

1. 对于任何 $i\neq j$，如果 $v_i=v_j$，则 $T(v_1,...,v_r)=0$
2. 如果 $\{v_1,...,v_r\}$ 是线性相关的，那么 $T(v_1,...,v_r)=0$
3. 如果 $\dim V=n$，则对于任何 $r>n$，$\Lambda^rV^*$ 和 $\Lambda^r V$ 中只有零张量

在反对称张量上的一个很重要的运算是***楔积（wedge product）***，其定义如下。

**<u>定义</u>**：给定 $f,g\in V^*$，定义 $f$ 和 $g$ 的楔积（记为 $f\wedge g$）为

$$
\boxed{
f\wedge g\equiv f\otimes g-g\otimes f}
$$

!!! info "注："
	有的书本上会将上面定义写为
	$$
	f\wedge g\equiv\frac12( f\otimes g-g\otimes f)
	$$ 这只是在前面加入一个系数而已，对我们后面的讨论没有本质上的影响。

注意到在这个定义下，我们有 $f\wedge g=-g\wedge f$ 和 $f\wedge f=0$。若在分量下写下上面的式子，就有

$$
\begin{align*}
f\wedge g=f_ig_j(e^i\otimes e^j-e^j\otimes e^i)=f_ig_je^i\wedge e^j
\end{align*}
$$

因此 $\{e^i\wedge e^j\}_{i<j}$ 张成了所有对偶矢量楔积的空间。我们还可以定义 $r$ 个对偶矢量的楔积：$f_1\wedge \cdots \wedge f_r$ 是所有形如 $f_{i_1}\otimes \cdots \otimes f_{i_r}$ 张量积的和，不过在求和的时候要加上正负号，由 $i_1\cdots i_r$ 是偶排列还是奇排列决定，即

$$
\begin{align*}
f_1\wedge \cdots \wedge f_r=\sum_{i_1,...,i_r}\epsilon_{i_1\cdots i_r}f_1\otimes \cdots \otimes f_r
\end{align*}
$$

其中

$$
\begin{align*}
\epsilon_{i_1\cdots i_r}=\begin{cases}
+1,& \text{if even permutation}\\
-1,&\text{if odd permutation}\\
0,&\text{otherwise}
\end{cases}
\end{align*}
$$

例如考虑 $r=3$ 的情况，我们有

$$
\begin{align*}
f_1\wedge f_2 \wedge f_3=& f_1\otimes f_2 \otimes f_3+f_2\otimes f_3 \otimes f_1+f_3\otimes f_1 \otimes f_2\\
&-f_3\otimes f_2 \otimes f_1-f_2\otimes f_1 \otimes f_3-f_1\otimes f_3 \otimes f_2
\end{align*}
$$

当然上面的定义对于矢量空间 $V$ 也是成立的。

???+ note "张量之间的楔积"
	上面我们只定义了对偶矢量之间的楔积，但是很多时候我们会遇到张量之间的楔积，这不能够直接套用上面的定义。其实楔积的目的就是要构造一个反对称的张量，如果对于 $T=T_{ij}e^i\otimes e^j$ 和 $U=U_{ij}e^i\otimes e^j$，要想把 $T\wedge U$ 构造成一个反对称张量，只能将所有的张量积符号改成楔积符号，即
	$$
	T\wedge U=T_{ij}U_{kl}e^i\wedge e^j\wedge e^k\wedge e^l
	$$ 注意这样的定义是不依赖于基的选取的，虽然我们这里看上去随意地选取了一组基，但是实际上如果我们将 $T$ 写为形如 $\sum_i f_i\otimes g_i$ 这样的形式，那么 $T$ 和 $U$ 之间的楔积也是将所有的 $\otimes$ 改为 $\wedge$。有的地方会将楔积定义为只有反对称张量之间才能够进行的运算，道理也是一样的，关键在于**通过楔积运算可以让非对称张量变为反对称的**。

### **实例**：*$\mathbb{R}^3$ 上的反对称张量*

有了上面的讨论，我们可以在 $\mathbb{R}^3$ 上的写出 $r$ 阶的反对称张量的基

$$
\begin{align*}
\Lambda^1\mathbb{R}^{3*}=&\mathbb{R}^{3*}\text{ has basis }\{e^1,e^2,e^3\}\\
\Lambda^2 & \mathbb{R}^{3*}\text{ has basis }\{e^1\wedge e^2,e^2\wedge e^3,e^1\wedge e^3\}\\
\Lambda^3 & \mathbb{R}^{3*}\text{ has basis }\{e^1\wedge e^2\wedge e^3\}
\end{align*}
$$

### **实例**：*全同粒子（Identical particles）*

考虑在势阱中的 $n$ 个无相互作用的氢原子，如果这些粒子是可以被区分的，那么系统的总希尔伯特空间 $\mathcal{H}_\text{tot}$ 就是单粒子希尔伯特空间 $\mathcal{H}$ 的 $n$ 次张量积。但是根据量子力学的***全同粒子假设（symmetrization postulate）***，这样直接将各个粒子的希尔伯特空间直积起来是有问题的！考虑 $\mathcal{H}_\text{tot}$ 中的一个态 $|\psi\rangle\otimes |\phi\rangle\in\mathcal{H}_\text{tot}=\mathcal{H}\otimes \mathcal{H}$，但是我们可以区分这个态和 $|\phi\rangle\otimes |\psi\rangle$ 这个态，这说明 $\mathcal{H}\otimes \mathcal{H}$ 这个总希尔伯特空间是有 redundancy 的。

为了解决这个问题，我们要引入一个作用在 $\mathcal{H}_\text{tot}$ 上的线性“排列算符”（permutation operator）$P$，定义为
$$
P(|\psi\rangle\otimes |\phi\rangle)\equiv|\phi\rangle\otimes|\psi\rangle
$$
我们要求一个物理的态 $v\in\mathcal{H}_\text{tot}$ 满足 $Pv$ 和 $v$ 代表同一种态。换句话说，一个物理的态 $v$ 应该是 $P$ 的本征态！又注意到 $P^2=I$，所以对于 $P$ 的本征矢量有 $Pv=\pm v$。也就是说对于一个无相互作用的二粒子系统，我们会将态写为

$$
\begin{align*}
\frac12(|\psi\rangle\otimes|\phi\rangle+|\phi\rangle\otimes|\psi\rangle)&\in S^2(\mathcal{H})\\
\frac12(|\psi\rangle\otimes|\phi\rangle-|\phi\rangle\otimes|\psi\rangle)&\in \Lambda^2\mathcal{H}
\end{align*}
$$

对于***玻色子（bosons）***，只有 $S^2(\mathcal{H})$ 中的态是被准许的；而对于***费米子（fermions）***，只有 $\Lambda^2\mathcal{H}$ 中的态是被准许的。也正是因为这点，对于两个费米子，它们不能够处在同一个态，因为 $|\psi\rangle|\psi\rangle\notin\Lambda^2\mathcal{H}$，这也被称作***泡利不相容原理（Pauli Exclusion Principle）*** 。

### **实例**：*Levi-Civita 张量*

考虑带标准内积的 $\mathbb{R}^n$ 空间，在**正交归一基** $\{e_i\}_{i=1,...,n}$ 下考虑张量

$$
\boxed{
\epsilon\equiv e^1\wedge\cdots\wedge e^n
}\in\Lambda^n\mathbb{R}^{n*}
$$

这就是 Levi-Civita 张量的定义，我们可以很容易证明其分量

$$
\begin{align*}
\epsilon_{i_1\cdots i_n}=\begin{cases}
0,&\text{if }\{i_1,...,i_n\}\text{ contains a repeated index}\\
-1,&\text{if }\{i_1,...,i_n\}\text{ is an odd rearrangement of }\{i_1,...,i_n\}\\
+1,&\text{if }\{i_1,...,i_n\}\text{ is an even rearrangement of }\{i_1,...,i_n\}
\end{cases}
\end{align*}
$$

这就是我们之前引入的三维中 Levi-Civita 符号的推广。

!!! info "注："
	上面的定义中，**正交归一基**是非常重要的，如果 $\{e_{i'}\}$ 不是正交归一基，那么 $\epsilon$ 就不可以写成 $e^{1'}\wedge\cdots \wedge e^{n'}$ 的形式（具体为什么在[下面](#levi-civita)会说明）。

### **实例**：*行列式*

在线性代数课程中，或许我们第二章就接触到了行列式，并且学习了各种各样的计算行列式的方法。而在这里，我们会用另一种角度看行列式。

将 $n\times n$ 的矩阵 $A$ 看作 $n$ 个 $\mathbb{R}^n$ 中列向量的排列，即
$$
A=\begin{pmatrix}
A_1&A_2&\cdots &A_n
\end{pmatrix}
$$
其中 $A_i$ 的第 $j$ 个分量写为 $A_{ji}$。这样我们将行列式写为
$$
\boxed{
|A|\equiv \epsilon(A_1,...,A_n)
}
$$
或者分量形式
$$
\boxed{
|A|=\sum_{i_1,...,i_n}\epsilon_{i_1\cdots i_n}A_{i_11}\cdots A_{i_nn}
}
$$
这样我们就**通过 Levi-Civita 张量定义了行列式**（注意在线性代数中分量形式才是我们更加熟悉的定义）。从这个定义我们立刻就知道行列式的一些性质，如在交换矩阵的两列后要变号，以及行的加法下的不变性等等，这些都不过来源于 $\epsilon$ 的多重线性和反对称性。

由于我们可以将 Levi-Civita 张量看作各个矢量围成的“有向体积”，因此从上面的行列式定义中我们也不难猜测，行列式应该也是某种“有向体积”。实际上行列式正是将正交基 $\{e_i\}$ 通过矩阵 $A$ 进行线性变换后得到的新基 $\{Ae_i\}$ 围成的有向体积，这也是我们在线性代数中熟悉的部分。

### **实例**：*Levi-Civita 张量的定向*

考虑一个基变换 $\{e_{i'}=A^j_{i'}e_j\}$，在这个基下写出 Levi-Civita 张量

$$
\begin{align*}
\epsilon'&=e^{1'}\wedge\cdots\wedge e^{n'}\\
&=A^{1'}_{i_i}\cdots A^{n'}_{i_n}e^{i_1}\wedge\cdots\wedge e^{i_n}\\
&=A^{1'}_{i_i}\cdots A^{n'}_{i_n}\bar{\epsilon}^{i_1\cdots i_n}e^{1}\wedge\cdots\wedge e^{n}\\
&=|A|\epsilon
\end{align*}
$$

上面的第三个等号我们用到了这样的事实：如果 $e^{i_1}\wedge\cdots\wedge e^{i_n}$ 不为零，我们一定可以将其重新排成 $e^1\wedge\cdots\wedge e^{n}$（因为 $\Lambda^n\mathbb{R}^{n*}$ 只有一个线性无关的基），并且符号的改变可以用 Levi-Civita 符号来表示。由于我们考虑的 $\{e_{i'}\}$ 和 $\{e_i\}$ 都是正交归一基，所以 $A$ 一定是一个正交矩阵，那么
$$
1=|I|=|AA^T|=|A||A^T|=|A|^2
$$
这说明 $|A|=\pm 1$。也就是说如果 $|A|=1$，那么 $\epsilon'=\epsilon$，这样的变换被称作***旋转（rotation）***，而由旋转变换联系起来的两组基被称作有***相同的定向（same orientation）***。反之，如果 $|A|=-1$，那么 $\epsilon'=-\epsilon$，两组基被称作有***相反的定向（opposite orientation）***。

接着我们定义一个 ***orientation*** 是矢量空间中有相同定向的基的集合，我们可以说明 $\mathbb{R}^3$ 有两个 orientation，分别被陈作右手基和左手基。那么我们可以说 $\epsilon$ 和正交基的选择无关，但是**和度规以及基的定向**有关。

???+ note annotate "<a id="levi-civita"></a>Levi-Civita 张量的分量和 Levi-Civita 符号的区别"
	我们之前一直没有对 Levi-Civita 张量的分量 $\epsilon_{i_1\cdots i_n}$ 和 Levi-Civita 符号 $\bar{\epsilon}_{i_1\cdots i_n}$ 做出分别，我们认为它们两者是相等的。貌似看来引入一个新的“Levi-Civita 符号”是多余的，但实际上，它们只有在特定情况下是相等的，而在其他空间中这两者是不相等的！<br>在上面我们已经证明在基变换下 $\epsilon'=|A|\epsilon$，并且说明如果我们在定义 $\epsilon$ 的时候采取的是**正交归一基**，并且做的是正交变换，那么 $\epsilon$ 的定义和正交基的选取就无关了。但是在弯曲空间中，我们有时想用非正交基来表达 Levi-Civita 张量，这样就不可以直接用上面的定义式来定义 $\epsilon$，否则在基变换下 $\epsilon$ 就是和基选取有关的了（这显然就不是一个张量了）。
	要解决这个问题，我们就要考虑度规 $g$。度规的行列式 $|g|$ 在坐标变换下也不是不变的（有的书上会将其称作**张量密度**）。这是因为(1)<br><center>$\begin{align*}
	|g'|&=\bar{\epsilon}^{\mu_1'\cdots\mu_n'}g_{\mu_1'1'}\cdots g_{\mu_n'n'}\\
	&=\bar{\epsilon}^{\mu_1'\cdots\mu_n'}(A_{\mu_1'}^{\sigma_1}A_{1'}^{\lambda_1}g_{\sigma_1\lambda_1})\cdots (A_{\mu_n'}^{\sigma_n}A_{n'}^{\lambda_n} g_{\sigma_n\lambda_n})\\
	&=\bar{\epsilon}^{\mu_1'\cdots\mu_n'}(A_{\mu_1'}^{\sigma_1}\cdots A_{\mu_n'}^{\sigma_n}) (A_{1'}^{\lambda_n}\cdots A_{n'}^{\lambda_n} )g_{\sigma_1\lambda_1}\cdots g_{\sigma_n\lambda_n}\\
	&=|A^{-1}|\bar{\epsilon}^{\sigma_1\cdots\sigma_n} (A_{1'}^{\lambda_n}\cdots A_{n'}^{\lambda_n} )g_{\sigma_1\lambda_1}\cdots g_{\sigma_n\lambda_n}\\
	&=|A^{-1}||g|\bar{\epsilon}^{\lambda_1\cdots \lambda_n}(A_{1'}^{\lambda_n}\cdots A_{n'}^{\lambda_n} )\\
	&=|A|^{-2}|g|\end{align*}$</center><br>因此如果我们定义<br><center>$\epsilon=\sqrt{|g|}e^1\wedge \cdots\wedge e^n$</center><br> 其中 $\{e_i\}$ 依然是一个正交归一基，这样 Levi-Civita 张量的分量就写为
	$$
	\epsilon_{i_1\cdots i_n}=\sqrt{|g|}\bar{\epsilon}_{i_1\cdots i_n}
	$$ 我们发现 Levi-Civita 张量的分量和 Levi-Civita 符号是不一样的！其中差了一个 $\sqrt{|g|}$。

1. Levi-Civita 符号的上下标不影响取值，上下标的区别只是为了形式上满足 Einstein 求和规则的形式

## 赝矢量（Pseudovectors）

**注**：*这一章节我们考虑的都是__正交归一基__，下面的讨论不适用于非正交归一基。*

***赝矢量（pseudovector/axial vector）***是 $\mathbb{R}^3$ 上的张量，其分量在旋转变换下如同矢量一样，但是在 inversion 变换下符号不变（这点和矢量不同）。在物理中常见的赝矢量有角速度矢量 $\boldsymbol{\omega}$，磁感应强度 $\boldsymbol{B}$，角动量 $\boldsymbol{L}$ 等。事实上，赝矢量就是 $\Lambda^2\mathbb{R}^3$ 中的元素，也被称作 ***bivector***。

为了看出这种联系，考虑两个矢量 $r,p\in\mathbb{R}^3$ 的楔积

$$
\begin{align*}
r\wedge p&=(r^1e_1+r^2e_2+r^3e_3)\wedge(p^1e_1+p^2e_2+p^3e_3)\\
&=(r^1p^2-r^2p^1)e_1\wedge e_2+(r^3p^1-r^1p^3)e_3\wedge e_1+(r^2p^3-r^3p^2)e_2\wedge e_3
\end{align*}
$$

这看起来就是叉乘运算 $r\times p$！当然我们要考虑下面的对应关系

$$
\begin{align*}
e_1\wedge e_2&\longrightarrow e_3\\
e_3\wedge e_1&\longrightarrow e_2\\
e_2\wedge e_3&\longrightarrow e_1\\
\end{align*}
$$

如果用矩阵的形式表达出来，就是

$$
\boxed{
\begin{align*}
\begin{pmatrix}
0&-z&y\\
z&0&-x\\
-y&x&0
\end{pmatrix}\longrightarrow
\begin{pmatrix}
x\\
y\\
z
\end{pmatrix}
\end{align*}}
$$

!!! info "注："
	上面矩阵的指标我们参考[上一章的约定](./vector-spaces.md/#matrix-indices)，即靠左的指标是列指标，靠右的指标是行指标。例如 $e_1\otimes e_2$ 对应第 2 行第 1 列为 1，其余矩阵元为 0 的矩阵。

上面的对应关系可以用下面的一对一映射表示出来（要注意到在三维空间中 $\mathbb{R}^3$ 和 $\Lambda^2\mathbb{R}^3$ 的维数是相同的）
$$
J:\Lambda^2\mathbb{R}^3\to \mathbb{R}^3
$$
这个映射定义如下：对于 $\alpha\in\Lambda^2\mathbb{R}^3$，用分量形式写出为

$$
\begin{align*}
\alpha&=\frac12\alpha^{ij}e_i\wedge e_j
\\&=\alpha^{23}e_2\wedge e_3+\alpha^{31}e_3\wedge e_1+\alpha^{12}e_1\wedge e_2
\end{align*}
$$

映射 $J$ 将 $\alpha$ 映射到一个矢量上，其分量为
$$
\boxed{
(J(\alpha))^i\equiv \frac12{\epsilon^i}_{jk}\alpha^{jk}
}
$$
在上面这个定义中，注意有 $\alpha^{jk}=-\alpha^{kj}$（$\alpha$ 是一个反对称张量）。

有了这个映射我们就可以将 $r\times p$ 写成 $J(r\wedge p)$！因此

<center><b>Cross products are essentially just bivectors.</b></center>

!!! info "注："
	有了上面的讨论，我们其实就可以发现：叉乘是一个很特殊的运算，在 $\mathbb{R}^4$ 中就不能够像 $\mathbb{R}^3$ 一样良好的定义叉乘，因为 $\Lambda^2\mathbb{R}^4$ 和 $\mathbb{R}^4$ 的维度不想等，因此不能够定义上面的一对一映射 $J$。因此正是因为我们生活在三维空间中，才有叉乘运算，以及用叉乘运算描述的物理规律（这还是一件非常神奇的事情的！）。

接下来我们要说明的是，按照上面的定义，我们如何得到赝矢量的性质（即，其分量在旋转变换下如同矢量一样，但是在反演变换下符号不变）。用矩阵形式写出来就是

$$
\begin{align*}
[\alpha]_{\mathcal{B}'}&=A[\alpha]_\mathcal{B}A^T\\
[J(\alpha)]_{\mathcal{B}'}&=A[J(\alpha)]_\mathcal{B}
\end{align*}
$$

让我们考虑一个**实例**：让 $A$ 是绕 $z$ 轴旋转 $\theta$ 的操作

$$
A=\begin{pmatrix}
\cos\theta&-\sin\theta&0\\\
\sin\theta&\cos\theta&0\\\
0&0&1
\end{pmatrix}
$$
那么我们可以验证下面的运算，其中 $\alpha^i\equiv (J(\alpha))^i$（记住我们使用的矩阵指标和常规的 somehow 是相反的）

$$
\begin{align*}
[\alpha]_{\mathcal{B}'}&=A[\alpha]_\mathcal{B}A^T\\
&=\begin{pmatrix}
\cos\theta&-\sin\theta&0\\
\sin\theta&\cos\theta&0\\
0&0&1
\end{pmatrix}\begin{pmatrix}
0&-\alpha^3&\alpha^2\\
\alpha^3&0&-\alpha^1\\
-\alpha^2&\alpha^1&0
\end{pmatrix}\begin{pmatrix}
\cos\theta&\sin\theta&0\\
-\sin\theta&\cos\theta&0\\
0&0&1
\end{pmatrix}\\
&=\begin{pmatrix}
0&-\alpha^3&\alpha^2\cos\theta+\alpha^1\sin\theta\\
\alpha^3&0&\alpha^2\sin\theta-\alpha^1\cos\theta\\
-\alpha^2\cos\theta-\alpha^1\sin\theta&-\alpha^2\sin\theta+\alpha^1\cos\theta&0
\end{pmatrix}\\
&\overset{J}{\to}\begin{pmatrix}
-\alpha^2\sin\theta+\alpha^1\cos\theta\\
\alpha^2\cos\theta+\alpha^1\sin\theta\\
\alpha^3
\end{pmatrix}
\end{align*}
$$

这说明 $J(\alpha)$ 的分量 $\alpha^i$ 的变换规律恰好和一般矢量的变换规律是一致的！或者说如果我们将 $\alpha\in\Lambda^2\mathbb{R}^3$ 先进行旋转变换在被 $J$ 进行作用，得到的结果和先被 $J$ 进行作用，再进行旋转是一样的。再换句话说

<center><b>The map \(J\) commutes with rotations, and that is waht it means for both bivectors and vectors to behave "the same" under rotations.</b></center>

为了证明这个命题，我们要证明

$$
\begin{align*}
\alpha^{i'}=A^{i'}_j\alpha^j=\frac12{\epsilon^{i'}}_{k'l'}\alpha^{k'l'}=\frac12{\epsilon^{i'}}_{k'l'}A_m^{k'}A^{l'}_n\alpha^{mn}
\end{align*}
$$

其中 $A$ 是一个旋转变换。在第二个等号左边，$J$ 先作用在 $\alpha$ 上再进行旋转变换，而第二个等号右边，$\alpha$ 先进行了旋转变换再被 $J$ 作用，下面开始证明：

$$
\begin{align*}
\frac12{\epsilon^{i'}}_{k'l'}A_m^{k'}A^{l'}_n\alpha^{mn}&=\frac12\sum_q{\epsilon}_{p'k'l'}\delta^{i'p'}A_m^{k'}A^{l'}_n\alpha^{mn}\\
&=\frac12\sum_q{\epsilon}_{p'k'l'}A^{i'}_qA^{p'}_qA_m^{k'}A^{l'}_n\alpha^{mn}\\
&=\frac12\sum_q{\epsilon}_{qmn}|A|A^{i'}_q\alpha^{mn}\\
&=\frac12{\epsilon^q}_{mn}|A|A^{i'}_q\alpha^{mn}\\
&=|A|A^{i'}_q\alpha^{q}
\end{align*}
$$

其中第二个等式我们用到的其实是 $AA^T=1$ 的分量形式，第三个等式我们用到的是一个容易被验证的等式（实际上就是行列式交换两列改变符号）

$$
{\epsilon}_{p'k'l'}A^{p'}_qA_m^{k'}A^{l'}_n=|A|\epsilon_{qmn}
$$

因此我们发现，对于旋转 $|A|=1$，那么 $J(\alpha)$ 在坐标变换下就如同一个矢量变换。但是对于反演 $|A|=|-I|=-1$，那么 $J(\alpha)$ 在坐标变换下不会改变符号。

现在我们已经知道类似于角动量这种两个矢量叉乘得到的“矢量”实际上是赝矢量，其在旋转下和正常矢量一致，但是在反演变换中不改变符号。但是对于类似于角速度这样的赝矢量，其看上去不是两个矢量叉乘的结果，那么它是如何变成赝矢量的呢？

### **实例**：*角速度矢量*

我们最早对于角速度的定义是
$$
\boldsymbol{v}=\boldsymbol{\omega}\times\boldsymbol{r}
$$
由于 $\boldsymbol{v}$ 和 $\boldsymbol{r}$ 都是矢量，考虑一个反演变换，我们发现只有当 $\boldsymbol{\omega}$ 的符号不发生改变的时候 $\boldsymbol{v}$ 和 $\boldsymbol{r}$ 才满足矢量变换规则，因此我们认为 $\boldsymbol{\omega}$ 是一个赝矢量。这里我们换一种方式来导出这个结论。

考虑 $\mathbb{R}^3$ 中的两个正交归一基 $K$ 和 $K'$，其中 $K$ 是含时的本体坐标系的基，$K'$ 是不含时地面坐标基 (1)。两个坐标系之间的变换用矩阵 $A$ 表示，于是对于刚体上的一个点的位矢
{ .annotate }

1. 注意这里不带撇的符号是本体坐标系，带撇的符号是地面坐标系。

$$
[\boldsymbol{r}]_{K'}=A[\boldsymbol{r}]_K
$$
而地面坐标系中的速度

$$
\begin{align*}
[\boldsymbol{v}]_{K'}&=\frac{d}{dt}[\boldsymbol{r}]_{K'}\\
&=\frac{d}{dt}A[\boldsymbol{r}]_{K}\\
&=\frac{dA}{dt}[\boldsymbol{r}]_{K}\quad\text{ since }[\boldsymbol{r}]_K\text{ is constant}\\
&=\frac{dA}{dt}A^{-1}[\boldsymbol{r}]_{K'}
\end{align*}
$$

对于正交变换，$A^{-1}=A^T$，因此我们可以证明 $\frac{dA}{dt}A^{-1}$ 是一个反对称矩阵：

$$
\begin{align*}
0&=\frac{d}{dt}(I)\\
&=\frac{d}{dt}(AA^T)\\
&=\frac{dA}{dt}A^T+A\frac{dA^T}{dt}\\
&=\frac{dA}{dt}A^T+\left(\frac{dA}{dt}A^T\right)\\
\end{align*}
$$

我们可以定义角动量 bivector $\tilde{\boldsymbol{\omega}}$ 为
$$
[\tilde{\boldsymbol{\omega}}]_{K'}=\frac{dA}{dt}A^{-1}
$$
而角动量矢量 $\tilde{\boldsymbol{\omega}}$ 就是
$$
\boldsymbol{\omega}\equiv J(\tilde{\boldsymbol{\omega}})
$$

由于 $\frac{dA}{dt}A^{-1}$ 是一个反对称矩阵，所以可以将其写为

$$
\begin{align*}
\frac{dA}{dt}A^{-1}=\begin{pmatrix}
0&-\omega^{3'}&\omega^{2'}\\
\omega^{3'}&0&-\omega^{1'}\\
-\omega^{2'}&\omega^{1'}&0
\end{pmatrix}
\end{align*}
$$

这样我们就可以验证

$$
\frac{dA}{dt}A^{-1}[\boldsymbol{r}]_{K'}=[\boldsymbol{\omega}\times\boldsymbol{r}]_{K'}
$$

或者

$$
[\boldsymbol{v}]_{K'}=[\boldsymbol{\omega}\times\boldsymbol{r}]_{K'}
$$

这说明角速度赝矢量就是和反对称矩阵 $\frac{dA}{dt}A^{-1}$ 相关的矢量 $J(\frac{dA}{dt}A^{-1})$。
