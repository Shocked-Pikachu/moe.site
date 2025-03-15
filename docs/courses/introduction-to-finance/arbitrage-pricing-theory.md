# Arbitrage Pricing Theory

## The Concept of Arbitrage

Arbitrage: a zero investment portfolio that yields a sure profit

Asset prices must satisfy a **"no arbitrage condition"**

## APT: Basic Ideas

Arbitrage plays key role in pricing of derivatives.

Two key ideas:

- Firm-specific risk can be effectively eliminated through diversification
- Asset prices should be such that arbitrage opportunities do not exist

## Returns: Individual Securities & Portfolio

Define $F=r_m-E(r_m)$, where $r_m$ is the market return ($F$ describes the change in market index).

Then according to the index model, $r_i=E(r_i)+\beta_iF+e_i$

For a portfolio (well-diversified), $r_p=E(r_p)+\beta_pF$

So there is a linear relationship between $r_p$ and $F$

## Expected Returns and Betas

For 2 **well-diversified** portfolios $P$ and $Q$, if they have equal betas then their expected returns should also be equal (Otherwise there exists a arbitrage opportunity).

Different betas? The APT states that for all well-diversified portfolios, the risk premium is proportional to beta
$$
\frac{E(r_P)-r_f}{\beta_P}=\frac{E(r_Q)-r_f}{\beta_Q}\nonumber
$$
A brief proof: If $P$ and $Q$ have different betas, we can combine $P$ with a risk-free asset to construct a new portfolio $S$ that has the same beta as $Q$​. Then based on the previous discussion, we know $S$ and $Q$ should have the same expected returns.

## APT and CAPM

APT applies to well diversified portfolios and not necessarily to individual stocks.

APT does not require restrictive CAPM assumptions, and is based on **arbitrage** rather than **equilibrium**.
