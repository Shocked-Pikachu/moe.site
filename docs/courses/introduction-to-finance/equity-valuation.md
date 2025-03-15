# Equity Valuation

## Equity Returns

Stocks don't promise any stream of payments - Both dividends and capital gains are uncertain

Expected return from buying shares:
$$
E(r)=\frac{E(D_1)+E(P_1)-P_0}{P_0}\nonumber
$$

It is important to forecast a reasonable value of $P_0$

## Market Capitalization Rate & Fundamental Value

The **market capitalization** rate $k$ of a security is the expected return which is commensurate with its risk $\beta$​.
$$
k=r_f+\beta(E(r_m)-r_f)\nonumber
$$
also called the **required rate of return**

The **fundamental value** (or **intrinsic value**) of a security is the price at which its expected return equals its market capitalization rate.

If we know $k,E(P_1),E(D_1)$, we can estimate the fundamental value $V_0$ (If $P_0<V_0$, the security is underpriced).

## The Dividend Discount Model

Key assumption: prices equal fundamental values in future

$$
V_0=\frac{D_1}{1+k}+\frac{D_2}{(1+k)^2}+\frac{D_3}{(1+k)^3}+\cdots\nonumber
$$
which equals the cash flow that the shareholder will get from long-term stock ownership.

## The Constant Growth DDM

Suppose dividend grows at a constant annual rate $g$ ($g<k$)
$$
D_n=D_{n-1}(1+g)=D_1(1+g)^{n-1}\nonumber
$$
We can derive that
$$
V_0=\frac{D_1}{k-g}\nonumber
$$

## Multistage DDM

Key idea: divident stream has several components

## Price-Earnings Ratios

Let $E_1$ denote expected earnings-per-share and $b$ denote retention ratio (or plowback ratio)

Expected dividends: $D_1=(1-b)E_1$

ROE: return on equity (how well the company utilizes its equity to generate profits). Earnings per period are equal to ROE times equity.

The dividend growth rate is proportional to both ROE and retention ratio: $g=ROE\times b$​

The price-earning ratio is
$$
\frac{P_0}{E_1}=\frac{1-b}{k-g}\nonumber
$$
