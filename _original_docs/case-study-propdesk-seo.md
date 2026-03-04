# How a Prop Trading Desk Scaled to 50+ Accounts Without Adding Headcount

**The operational reality of running a prop desk in India — and the infrastructure that made consistent multi-account execution actually possible.**

---

Scaling a prop trading desk sounds like a growth problem. More accounts, more capital, more profit.

In practice it's mostly an operations problem. More accounts means more execution points, more broker relationships, more things that can go wrong at 9:15am on a volatile morning — and more people whose capital you're responsible for when they do.

Sandeep runs a prop desk in Mumbai. When he was managing 12 accounts, the operation was manageable. Uncomfortable, but manageable. By the time he crossed 30, it had become a second full-time job — one that paid in stress rather than salary.

---

## What Running 30+ Accounts Manually Actually Looks Like

Sandeep's desk ran three core strategies across accounts of varying sizes. Different traders, different brokers, different capital bases, same underlying logic.

On paper: straightforward.

In practice, every morning:

- Check which accounts had margin issues overnight
- Verify broker connections hadn't dropped (they dropped. Regularly.)
- Place the opening signal across accounts before the first candle closed
- Reconcile which accounts executed correctly and which missed
- Handle the calls from traders whose accounts showed different fills

**The execution gap was the core problem.** By the time a signal was manually replicated across 30+ accounts, the first accounts in had clean fills. The last accounts in were getting whatever was left at a price that had moved 8–15 ticks.

Same strategy. Different P&L per account. Every single day.

That inconsistency wasn't just an operational nuisance — it was a trust problem. When traders in the same desk with the same strategy see different returns, the assumption isn't "execution lag." The assumption is favouritism. Sandeep was spending more time managing those conversations than managing the strategies.

---

## The Headcount Temptation

The obvious solution was to hire. Another execution person, maybe two, to handle account management in parallel.

Sandeep almost did it. He interviewed three candidates.

Then he did the math: ₹40,000–₹60,000/month per person, plus the training time, plus the human error they'd introduce, plus the fact that even two people placing orders manually would still have sequential execution — which meant the gap problem wouldn't disappear. It would just be distributed across more hands.

**Hiring more people to do a manual job faster isn't a solution. It's a more expensive version of the same problem.**

> *"At some point I realized I wasn't running a prop desk. I was running a manual order placement operation that happened to have a strategy attached to it."*

---

## What the Infrastructure Actually Needed to Do

Before evaluating anything, Sandeep listed what the operation actually required:

- **Same-second execution** across all accounts when a signal fires — not sequential, parallel
- **Per-account position sizing** based on each account's capital base and risk parameters
- **Multi-broker support** — his desk ran across Zerodha, Upstox, Angel One, and Fyers. Standardizing brokers wasn't an option.
- **Real-time monitoring** — knowing immediately if an account missed an execution, not discovering it in an EOD reconciliation
- **No single point of failure** — if one broker's API went down, other accounts should continue unaffected

Most solutions he evaluated cleared two or three of these. TradeMade cleared all five.

---

## 💡 Running a prop desk or managing multiple trader accounts?

**Manual execution at scale isn't a discipline problem — it's an infrastructure problem. Here's what same-second multi-account execution looks like.**

[**Book a prop desk demo with TradeMade →**](#)

---

## The Migration

Sandeep migrated the desk over four weeks — one strategy at a time, running parallel execution between the old manual system and TradeMade to verify results matched before fully switching over.

The migration itself was the validation. Running both systems side-by-side made the execution gap visible in real numbers for the first time. The manual accounts were averaging 6–11 tick slippage on entries versus the TradeMade-executed accounts. On a 50-lot position, that difference per trade was material.

---

## Six Months After Full Migration

| Metric | Before | After |
|---|---|---|
| Accounts managed | 30 | 54 |
| Execution staff needed | 2 people | 0 additional |
| Average execution gap across accounts | 6–11 ticks | Under 1 tick |
| EOD reconciliation time | 90 minutes | 15 minutes |
| "Why is my P&L different" conversations | Daily | Rare |

The desk scaled from 30 to 54 accounts without adding a single execution headcount. The two people who had been doing manual order placement moved to strategy research — which is what Sandeep had originally hired them to do.

---

## What Prop Desks Get Wrong About Scaling

Most desks hit the same ceiling at different account counts — somewhere between 15 and 40, depending on how many strategies they run and how many brokers they support.

The ceiling isn't capital. It isn't strategy quality. It's always operations.

The desks that scale past it aren't the ones with better traders. They're the ones that stopped treating execution as a human job.

**A few honest realities:**

1. **Consistent execution IS the product** — if your traders see different P&L for the same strategy, your edge doesn't matter. The trust problem kills the desk first.

2. **Broker diversity is non-negotiable at scale** — forcing all accounts onto one broker creates operational fragility and limits who can participate.

3. **Per-account risk parameters need to be systematic** — applying uniform lot sizes across different capital bases is how you blow up a small account during a volatile session.

4. **Monitoring needs to be real-time, not EOD** — discovering a missed execution at 5pm is discovering it 7 hours too late.

---

*TradeMade's multi-account deployment infrastructure supports prop desks managing 50+ accounts across multiple brokers with same-second execution, per-account position sizing, and real-time monitoring.*

[**Talk to us about your prop desk setup →**](#)

---

*Already running a desk and hitting the scaling ceiling? [Let's have an honest conversation about what's blocking you](#).*
