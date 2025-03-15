# Bond Prices and Yields

## Yield

For a zero-coupon bond (ZCB) maturing in $t$ years with a price of $P$, the yield $y$ of the bond solves the following equation:
$$
P=\frac{100}{(1+y)^t}\nonumber
$$
Bonds are often quoted at a **spread** = yield - $r_f$

## Value of a Coupon Bond

Assume the timing is at issuance or on a coupon date

- When $y=c$​, the bond trades at **par**
- When $y<c$, the bond trades at a **premium**
- When $y>c$, the bond trades at a **discount**

## Bond Pricing between Coupon Dates

You should pay the all-in (or dirty) price = quoted (or clean) price + interest accrued

Accrued interest: $AI=C\times N_t/D$

All-in price can be obtained by calculating the present value of the bond at the trading date. Clean price equals all-in price minus accrued interest.

## Dollar Duration

The dollar duration measures the dollar change in a bond's value to a change in the market interest rate (yield).

Also call money duration of DV01.
$$
\Delta P=-DV01\times\Delta y\nonumber
$$
However, this relation only holds approximately because the relation between price and yield is non-linear.

The price of a bond is a **convex** function of its yield.

## Corporate Bonds

- Callable bonds: Can be repurchased before the maturity date. The issuer (corporation) have more rights >> higher yield as a compensation.
- Puttable bonds: Give the hondholder (investor) an option to retire or extend the bond's life.
- Floating-rate bonds: Have adjustable coupon rate.
- Convertible bonds: Can be exchanged for shares of the firm's common stock. Reducing pressure on issuers' cash repayments and avoiding insolvency (debt-to-equity conversion).

## International bonds

- Foreign Bonds: Issued by a borrower from another country denominated in the curreny of which the bond is sold.
- Eurobond: Denominated in one currency but sold in other national markets.
