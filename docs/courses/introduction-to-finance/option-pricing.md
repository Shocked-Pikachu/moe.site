# Options Pricing

Will American call options ever be exercised early?

We need to prove that $\forall t,\ C_t\ge S_t-X$​

Consider two strategies: call option & leveraged equity >> Call payoff always not less than leveraged equity payoff
$$
C>S_0-\frac{X}{(1+r_f)^T}>S_0-X\nonumber
$$
Selling the American Call is more attactive than exercising it early. They are **"worth more alive than dead"** (no dividend)

However, early exercise of American puts is possible (when the stock price is very low)

## Call Pricing

We have proven that for a given $t$, $C_t\ge S_t-X$ (or exercising call options would bring less profit than selling it), so we only need to consider how to price European calls ($C^A=C^E$​)

Consider a simple case: Suppose share price is $S_0$, and can be either $S^+$ or $S^-$ at time $T$

Option payoff at time $T$ can be either $C^+$ or $C^-$

Consider leveraged equity portfolio & call (replicating portfolio)

Alternative: covered call & risk-free assets

## Hedge Ratio

Define the hedge ratio
$$
H=\frac{C^+-C^-}{S^+-S^-}\nonumber
$$
Consider the strategy: write one option, buy $H$ shares. It is easy to show that this portfolio is **perfectly hedged** (risk-free)

*Generalizing the Two-State Approach...*
$$
C_u=xuS_u+Ry,\ C_d=xdS_d+Ry
$$
$$
C_0=xS_0+y=\frac1R\left(\frac{R-d}{u-d}C_u+\frac{u-R}{u-d}C_d\right)
$$
$$
C_0=\frac1R[qC_u+(1-q)C_d]=\frac1RE^Q(C_1)\nonumber
$$
We can regard $q$ as a probability (risk-neutral probability)

## Risk Neutral Probability

$$
\begin{matrix}
& & uS_0\\
& \nearrow &\\
S_0 & & \\
& \searrow & \\
& & dS_0
\end{matrix}\quad\begin{matrix}
& & C_u\\
& \nearrow &\\
C_0 & & \\
& \searrow & \\
& & C_d
\end{matrix}\nonumber
$$

Consider the above value tree

Portfolio A: $x$ stocks + $\$y$ T-bills = Portfolio B: Call option

No arbitrage condition tells us that the two portfolio should have the same payoff as well as the same price
$$
xuS_0+yR=C_u\\
xdS_0+yR=C_d\nonumber
$$
Here $R=1+r_f$​

We can solve for $x$ and $y$, then we know $C_0=xS_0+y$
$$
\begin{aligned}
C_0&=\frac1R\left(\frac{R-d}{u-d}C_u+\frac{u-R}{u-d}C_d\right)\\
&=\frac1R(qC_u+(1-q)C_d)
\end{aligned}\nonumber
$$
Here we define the risk neutral probability $q=(R-d)/(u-d)$, note that we always have $d<R<u$ (yes?)

The underlying asset has probability of $q$ to increase in value and $(1-q)$ to decrease in value (This is NOT the real probability!)

## Finding the Call Premium

Value tree approach can be generalized to arbitrary number of states

Numerical solutions may be computed (Black-Scholes Option Valuation)
