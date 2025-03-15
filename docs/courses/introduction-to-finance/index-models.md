# Index Models

## Excess Returns

The excess return: the difference between an asset's return and the risk-free rate, $R_i=r_i-r_f$.

Consider a market index $M$ with excess return $R_m=r_m-r_f$​.

> We often use [the Standard & Poor's 500 Index (S&P 500 Index)](https://www.investopedia.com/terms/s/sp500.asp) as the market index.

Hypothesis: movements in $R_i$ and $R_m$ are correlated.

## Index Model

$$
R_i=\alpha_i+\beta_iR_m+e_i\nonumber
$$

$\beta$ is called exposure, which reflects teh sensitivity to factors that affect all securities.

$e_i$ is a random variable reflecting firm-specific risk.

### Assumptions on $e_i$

- Zero expectation: $E(e_i)=0$
- Zero covariance with $R_m$: $cov(e_i,R_m)=0$
- Zero covariance with $e_j$: $cov(e_i,e_j)=0$
- Homoscedasticity: $\sigma^2(e_i)={\rm const}$

### Estimating the Model

The parameters $\alpha_i$ and $\beta_i$ can be estimated by **linear regression** with $R_i$ as the dependent (explained) variable and $R_m$​ as the independent (explanatory) variable.

Linear regression model is always the best model if we have no information on the real relationship.

Residuals: $\hat{e_i}=R_i-(\hat{\alpha_i}+\hat{\beta_i}R_m)$

Predicted value: $\hat{R_i}=\hat{\alpha_i}+\hat{\beta_i}R_m$

### Estimating Firm-specific Risk

Mean value:
$$
m=\frac{1}{T}\sum_{t=1}^{T}\hat{e_i}=0\nonumber
$$
An unbiased estimator of the variance $\sigma^2(e_i)$:
$$
s^2(e_i)=\frac{1}{T-2}\sum_{t=1}^{T}\hat{e_i}^2=\frac{SSR}{T-2}\nonumber
$$
Degrees of freedom of $\hat{e_i}$: $T-2$

## Variance Decomposition

We can decompose the risk of $R_i$​ into two components: systematic and idiosyncratic
$$
\sigma^2_i=\beta_i^2\sigma_m^2+\sigma^2(e_i)\nonumber
$$
Here, we used $R_i=\alpha_i+\beta_iR_m+e_i$ and $cov(e_i,R_m)=0$.

## Diversification

We assume the above model holds (other factors? other models?).

Consider an equally weighted portfolio $P$
$$
R_p=\alpha_p+\beta_pR_m+e_p\nonumber
$$
where $\alpha_p$, $\beta_p$, and $e_p$ are the mean value of $\alpha_i$, $\beta_i$, and $e_i$

Then the variance $\sigma^2(e_p)$​ becomes
$$
\sigma^2(e_p)=\frac{1}{n^2}\sum_{i=1}^n\sigma^2(e_i)=\frac1n\overline{\sigma^2}\to0(n\to\infty)\nonumber
$$
As $n\to\infty$, $e_p$ has zero mean and (approximately) zero variance >> we can consider $e_p$ as zero.

Firm-specific risk is **diversifiable** while systematic risk is not.
