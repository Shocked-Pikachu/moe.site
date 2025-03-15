# Option Strategies and Put-Call Parity

## Options

Call Option / Put Option

American Option / European Option

Option buyer (holder) pays a price (option premium) to option seller (writer)

Option is a **right** for the option buyer and an **obligation** for the option seller

Options are **in the money** if immediate exercise is profitable (the price of the underlying asset is higher than the strike price), and they are **out of the money** if not

- Why buy call options instead of just shares?
- Why write options?
- Whey do out-of-the-money options have value?

## Margin and Clearing

The writer of an option must post margin because it is possible that the writer would default

## Call Options: Payoffs and Profit

Derivatives are a zero-sum game, payoff to the writer is negative the payoff to the holder

Suppose share price is $S_T$ at expiration date $T$ and the premium is $C$

Consider a call option with strike price $X$

Payoff to the holder: $0({\rm if}\ S_T\le X),\ S_T-X({\rm if}\ S_T>X)$​

Profit to the holder: $-C({\rm if}\ S_T\le X),\ S_T-X-C({\rm if}\ S_T>X)$

## Put Options: Payoffs and Profit

Payoff to the holder: $X-S_T({\rm if}\ S_T<X),\ 0({\rm if}\ S_T\ge X)$​

Profit to the holder: $X-S_T-C({\rm if}\ S_T<X),\ -C({\rm if}\ S_T\ge X)$

## Option Strategies

### Covered Call

Buy shares and write call options

Call written is said to be "covered"

${\rm Payoff}=S_T({\rm if}\ S_T\le X),\ X({\rm if}\ S_T>X)$

${\rm Profit}={\rm Payoff}-S_0+C$, note that $S_0$ must be greater than $C$

### Protective Put

Buy shares and put options

Why $P>X-S_0$?

## Put-Call Parity

Option pricing is based on **principle of replication**, also known as **Law of One Price (LOOP)**

NO arbitrage!

The idea underlies the **Put-Call Parity Theorem**

Construct two strategies with identical payoffs in every contingency: Protective Put & Call + Bills
$$
S_0+P=C+\frac{X}{(1+r_f)^T}\nonumber
$$
If dividend is paid, $X\to X-D$

If the equation fails to hold, there exists an arbitrage opportunity

Therefore, the prices of the call and put options are related to each other, so we only need to care about the theory of call option pricing

## More Option Strategies

- Straddle: buy call and but put with the same $X$ and $T$ (Investors would earn profit if the stock price moves a lot)
- Bull spread: buy a call with $X_1$ and short a call with $X_2$ $(X_2>X_1)$
- Bear spread: sell a put with $X_1$ and buy a put with $X_2$ $(X_2>X_1)$
- Butterfly spread: buy one $C_1$, sell two $C_2$, and buy one $C_3$ $(X_1<X_2<X_3$ and $X_1+X_3=2X_2)$
