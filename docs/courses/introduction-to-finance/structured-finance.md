# Structured Finance

## Structured Finance

Structured finance involves two economic functions:

- **Pooling** cash flows from economic assets (e.g. loans, mortgages)
- Issuance of prioritized claims (**tranches**) on the collateral pool

Due to the prioritization of tranches, many of the manufactured tranches are safer than the average asset in the collateral pool

Housing markets are prominent in the history of securitization

## Prioritization of Tranches

After the collateral pool is set, the claims against the pool are prioritized into tranches that are rated by their defaults risk

- **Attachment**: level of losses where the tranche begins losing principal
- **Detachment**: level at which tranche experiences total loss of principal

## Simple Illustrantion of CDO

Consider two bonds, each with face value of \$1 and default probability of 10%

Junior tranche & Senior tranche: the probability of default for each of the two tranches depends on how defaults are correlated

The probability of joint default:
$$
p_{DD}=p_D^2+c\times p_D\times(1-p_D)\nonumber
$$
**Pairwise default correlation parameter** $c$ describes to what extent two defaults are correlated

As the correlation in defaults increases, risk shifts to the senior tranche (until two tranches have the same risk)

Insight: If the two assets are independent, the senior tranche has a low risk. But if the two assets are highly correlated, the two tranches both have high risks

## Simple Illustration of CDO-Squared

The junior tranches default at a 19% rate (which is high), but if we **combine the junior tranches into another CDO**, then the senior tranche of the second-round CDO defaults with probability 3.6% (which is much lower) - CDO-squared (CDO^2^)

Note that the same issue with correlation applies yet again
