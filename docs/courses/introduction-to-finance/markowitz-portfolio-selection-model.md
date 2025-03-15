# Markowitz Portfolio Selection Model

## Optimal CAL

Each risky portfolio can be combined with bills (risk-free assets).

The risky portfolio is constructed by combining two risky assets, which can be represented in a portfolio opportunity set.

Whatever the investor's preference is, he / she will always choose the **CAL with the greatest slope**. >> optimal CAL

Different investors will choose different points on the same CAL (different allocation bewteen risky and risk-free assets). >> **separation property**

The separation property holds when a risk-free asset is available and borrowing is possible at the risk-free rate. No borrowing? Higher borrowing rate?

## Multiple Risky Assets

Suppose there are $n$ assets.

Asset returns: $r_1,...,r_n$.

Expected returns: $E(r_1),...E(r_n)$.

Variances and covariances: covariance matrix
$$
\begin{pmatrix}
\sigma_1^2 & \sigma_{12} & \cdots & \sigma_{1n}\\
\sigma_{21}& \sigma_2^2  & \cdots & \sigma_{2n}\\
\vdots		 & \vdots			 &				& \vdots\\
\sigma_{n1}& \sigma_{n2} & \cdots & \sigma_n^2
\end{pmatrix}\nonumber
$$
This is a symmetric matrix, therefore, there is only $n(n+1)/2$ unique covariances (variances).

### Portfolio Expected Return

Portfolio expected return is the weight average of the expected returns of the underlying assets.
$$
E(r_p)=\sum_{i=1}^{n}w_iE(r_i)\nonumber
$$

### Portfolio Risk

Portfolio variance depends on variances and covariances of the returns of underlying assets, and portfolio weights.
$$
\sigma_p^2=\sum_{i=1}^{n}\sum_{j=1}^{n}w_iw_j\sigma_{ij}\nonumber
$$
Note that $\sigma_{ii}=\sigma_i^2$ and $\sigma_{ij}=\sigma_{ji}$.

## Portfolio with three risky assets

Additional assets will help us diversify the choice, so that we can obtain a portfolio with the same expected return but with lower risk.

The portfolio opportunity set for three (or more) assets is a two-dimensional **region** in $E(r)-\sigma$ space (no longer a curve).

We only focus on the **minimum variance frontier** - left boundary of the portfolio opportunity set. And the upward sloping part is the **efficient frontier**. The portfolio with the lowest attainable variance is the **global minimum variance portfolio**.

Again, if a risk-free asset is available, we will have the separation property (optimal CAL).

## Markowitz Portfolio Selection Model

*When investors can borrow freely at the risk-free rate, they will combine bills (or borrowing) with the risky portfolio on the efficient frontier which has the highest reward-to-volatility ratio (Sharpe ratio).*

*Risky component of optimal portfolio is the same for all investors.*

> When investors are prohibited from shorting assets?
>
> Restriction: $w_i\ge0$, the minimum variance frontier may differ.
>
> No risk-free asset? Borrowing rate different from lending rate? No borrowing?
