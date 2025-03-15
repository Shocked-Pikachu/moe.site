# Futures

## Future Contracts

A futures contract calls for the delivery of an asset (or its cash value) at a specified (maturity) date at a specified (futures) price paid on the maturity date

Futures contract is a zero-sum game: profit to long means loss to short and vice versa

## Trading Mechanics

Chicago Mercantile Exchange acts as a clearing house and couterparty to both sides of the trade

If you are currently long, you simply instruct your broker to enter the short side of a contract to **close out** your position (There will be no physical delivery at this situation)

Most futures contracts are closed out by reversing trades (**NO actual delivery**)

Only 1-3% of contracts result in actual delivery of the underlying commodity (This can actually be seen as a speculative behavior)

## Convergence Property

The futures price and the spot price must converge at maturity
$$
{\rm Basis}_t={\rm Spot\ Price-Future\ Price}=S_t-F_t\nonumber
$$
The difference is approximately 5 percent

Why buy/sell futures?

- Hedging
- Speculation
- To foresee open price next day (futures can be traded 24/7)

## Spot-Futures Parity Theorem

Let $S_T$ denote value of index at time $T$ / Profit to short futures position is $F_0-S_T$

Buy index and short futures position >> The portfolio is risk-free
$$
F_0=S_0(1+r_f-d)^T\nonumber
$$
This is the Spot-Futures Parity Theorem, where $d$ is the **divident yield**: $d=D/S_0$

If the parity is violated, there exists an arbitrage opportunity

## FX Market and Covered Interest Arbitrage

FX market is where exchange rates are determined

- the spot foreign exchange (FX) market
- currency forward
- currency future
- currency swap

Direct quotation & Indirect quotation

**Covered interest parity** (indirect quotation)
$$
(1+i_¥)\frac{F_0}{S_0}=(1+i_\$)\nonumber
$$
If $i_\$$ goes up, $S_0$ goes down - RMB depreciates

The Impossible Trinity or "The Trilemma": 1. Free capital flow; 2. Sovereign monetary policy; 3. Fixed exchange rate
