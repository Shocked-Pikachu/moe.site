# Capital Asset Pricing Model

## Capital Asset Pricing Model (CAPM)

Key idea: separation property

When the market clears, **optimal risky portfolio must be the market portfolio**.

CAPM is not aimed for predicting return, but it can provide a estimation for **fair return** (benchmark)
$$
E(r)=\frac{E(P)-P_0}{P_0}(>,<,=)\ {\rm fair\ value}\nonumber
$$

## CAPM Assumption

Individual behavior & market structure

Investors would combine bills/ borrowing with the market portfolio $M$.

CML (capital market line) is the CAL that is constructed from the risk-free asset and the market portfolio

## Individual Securities

Intuition: When adding a new security into the existing market, how would this new security affect the market?

Variance of Market Portfolio:
$$
\sigma_m^2=\sum_i\sum_jw_iw_j\sigma_{ij}=\sum_iw_i\sigma_{im}\nonumber
$$
Here $\sigma_{im}$ is the covariance of $r_i$ with the market return $r_m$:
$$
\sigma_{im}=Cov\left(r_i,\sum_{j}w_jr_j\right)=\sum_jw_j\sigma_{ij}\nonumber
$$
Therefore, the **contribution of asset $i$ to $\sigma_m^2$ is $w_i\sigma_{im}$**

- Contribution to Variance: $\frac{w_i\sigma_{im}}{\sigma_m^2}$
- Contribution to Risk Premium: $\frac{w_i(E(r_i)-r_f)}{E(r_m)-r_f}$

The key idea is that **$i$'s contribution to risk premium = $i$'s contribution to risk variance**

Result:

$$
\begin{eqnarray*}
E(r_i)&=&r_f+\frac{\sigma_{im}}{\sigma_m^2}(E(r_m)-r_f)\nonumber\\
&=&r_f+\beta_i(E(r_m)-r_f)
\end{eqnarray*}
$$

Risk premium is proportional to $\beta_i$, which reflects the contribution of asset $i$ to market variance

Graphically, this line is called **Security Market Line**

> Can $\beta_i<0\Rightarrow E(r_i)<r_f$ ? Why would someone choose a security with returns less than the risk-free asset?
>
> It has the property of *insurance*. When the stock market decline, assets with $\beta_i<0$​ could offer some compensation. Therefore, a negative risk premium is reasonable.
>
> Note: Negative risk premium does not mean free risk, rather it serves as a kind of insurance.

Although some assets could deviate from SML, but eventually, all assets will return to SML in equilibrium. Unfortunately, the reality is opposite...

## CAPM and the Index Models

Index model is only a econometric model, and its slope parameter is
$$
\beta_i=\frac{Cov(R_i,R_m)}{Var(R_m)}\nonumber
$$
The index model beta coefficient is the same as the beta of the CAPM expected return-beta relationship.

$R_i=\alpha_i+\beta_iR_m+e_i$ v.s. $E(r_i)-r_f=\beta_i(E(r_m)-r_f)$

CAPM predicts $\alpha=0$ for all securities: positive alpha implies return without risk.
