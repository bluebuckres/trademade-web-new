# TradeMade — Custom Algo Dev Page: Full Rewrite Brief

**File:** `custom-development` page (route: `/custom-development`)  
**Purpose:** This document is a complete content + UI/UX brief for rewriting/modifying the existing Custom Algo Dev page. Hand this to your developer (Snitirgravity or whoever is implementing).

---

## 1. Context & Goals

The current page is strong but misses key differentiators vs competitors like AlgoDelta. The rewrite should:

- Communicate TradeMade's **full technical depth** (C++, Rust, Python, Telegram bots, OpenAI/LLM integration, MCP, AWS/cloud, static IP, broker-agnostic)
- Add a **strategy type section** showing the breadth of what can be built
- Strengthen the **"Why TradeMade"** section with more specific, credible claims
- Show **multi-account + complex logic** capabilities clearly
- Improve UI/UX (see Section 7 below)

---

## 2. Hero Section — Rewrite

**Current headline:** "Your Strategy, Coded & Deployed by Experts."

**Keep the headline** — it's good. But update the subtext and trust badges.

### Updated Subtext:
```
From a rough idea on WhatsApp to a live, production-grade algorithm — 
in as little as 5 days. We build in Python, C++, and Rust. 
We integrate Telegram, OpenAI, and every major Indian broker. 
You trade. We engineer.
```

### Trust Badges (update from current):
```
✓ 500+ algos built  ·  ✓ 20+ broker APIs  ·  ✓ C++ / Python / Rust  ·  ✓ 100% confidential
```

### Code block (keep the animated terminal — just update the code snippet):
Show something more impressive — multi-broker dispatch or Telegram trigger:
```python
# TradeMade — Multi-Broker Execution Engine
async def on_signal(signal: TradingSignal):
    sentiment = await ai_news_filter(signal.symbol)  # OpenAI NLP
    if sentiment.score > THRESHOLD:
        await asyncio.gather(
            broker_zerodha.place_order(signal),
            broker_upstox.place_order(signal),
            broker_angel.place_order(signal),
        )
        await telegram_alert(f"✅ {signal.symbol} fired across 3 brokers")
```

---

## 3. New Section — "What We Can Build For You"

Add this section **after the hero**, before "How We Build Your Algorithm".

**Section Title:** What We Build

**Section Subtitle:** Every type of algo, every market, every complexity.

### Sub-sections (use card grid layout, 3 columns):

---

**Markets We Cover**
- Equity (NSE/BSE) — Intraday, Positional, Delivery
- Futures & Options (F&O) — Single leg, multi-leg, spreads
- Commodity (MCX) — Crude, Gold, Natural Gas, Metals
- Currency (NSE/BSE CDS)
- Indices — Nifty, BankNifty, FinNifty, MidcapNifty

---

**Strategy Types We Develop**  
_(adapted from AlgoDelta's list — not copied verbatim, reorganized by market context)_

**Options-Focused:**
- Options Spread Strategies (Iron Condor, Iron Fly, Straddle, Strangle)
- Options Volatility Strategies (VIX-triggered, IV Rank based)
- Delta-Neutral & Gamma Scalping

**Price & Trend Based:**
- Price Action Strategies (Support/Resistance, Candlestick patterns)
- Trend Following (EMA crossovers, Supertrend, Donchian)
- Swing Trading Strategies (multi-day hold with trailing SL)
- Day Trading Strategies (intraday momentum, opening range breakout)
- Mean Reversion Strategies (Bollinger Bands, RSI extremes, Z-score)

**Quantitative & Research-Backed:**
- Quantitative Strategies (factor models, statistical arbitrage)
- Pair Trading / Spread Trading (correlated instruments)
- Fundamental-Driven Strategies (earnings, FII/DII data triggers)
- Position Trading Strategies (weekly/monthly timeframe)

**Advanced / Institutional:**
- High-Frequency & Low-Latency (C++/Rust execution engines)
- Basket Orders & Portfolio-level Automation
- Multi-leg, Multi-instrument Complex Logic
- AI/NLP News Sentiment Triggers (OpenAI integration)

---

**Tech Stack We Use**  
_(this is your differentiator — show it off)_

| Layer | Technologies |
|---|---|
| Core Logic | Python, C++, Rust |
| Broker APIs | Zerodha Kite, Angel SmartAPI, Upstox, 5Paisa, AliceBlue, Fyers, Kotak, IIFL, Jainam, Shoonya, Flattrade, Zebu, SAS Online, Groww, Motilal, and more |
| Signal Inputs | TradingView Webhooks, AmiBroker AFL, Pine Script, Custom REST APIs |
| Messaging & Alerts | Telegram Bot API, WhatsApp API, Email |
| AI/LLM Integration | OpenAI GPT, Custom NLP models, MCP (Model Context Protocol) |
| Infrastructure | AWS, GCP, Azure, Dedicated VPS, Static IP |
| Monitoring | Grafana dashboards, custom log pipelines |
| Version Control | GitHub / private repos |

---

## 4. "How We Build" Section — Keep Structure, Minor Updates

Keep the 6-step process. Update Step 3 copy:

**Step 03 — Build & Code (updated copy):**
```
Our quant team codes your strategy in Python, C++, or Rust depending on 
latency requirements. We implement Telegram bots, webhook listeners, 
OpenAI news filters, and multi-broker dispatch exactly as scoped. 
No shortcuts, no templates — every algo is built from scratch.
```

---

## 5. Pricing Section — Keep Structure, Add Clarity

Current pricing is good. Add one line under each tier:

**Starter** — add: `"Simple rule-based strategies. Single broker. No AI/LLM."`

**Pro** — add: `"Multi-leg options, SEBI RA tools, multi-account, Telegram bots included."`

**Enterprise** — add: `"C++/Rust engines, AI news triggers, white-label, static IP, custom SLA."`

Also add a small note below the pricing table:
```
⚡ Need a Telegram signal bot or Excel/Google Sheets → Broker automation? 
That's covered too — ask us in your quote request.
```

---

## 6. "Why TradeMade" Section — Rewrite with Stronger Claims

Replace the 6 current cards with these updated versions:

### Card 1: Confidentiality You Can Count On *(keep)*
No changes needed — this is already strong.

### Card 2: Broker-Agnostic by Design *(replace "6+ Broker Integrations Ready")*
```
Title: Broker-Agnostic by Design
Body: We're not locked into any broker's ecosystem. We integrate with 20+ 
Indian brokers via their official APIs. Switching brokers? Your algo moves 
with you — no rebuild required. New broker? We add it.
```

### Card 3: Cloud, VPS & Static IP *(update "Cloud & VPS Ready")*
```
Title: Cloud, VPS & Static IP Ready
Body: Algos deployed to AWS, GCP, or our managed VPS (Pro+). Static IP 
available for brokers requiring it for API whitelisting. 99.9% uptime, 
auto-restart on crash, daily logs. Your algo never sleeps.
```

### Card 4: AI & Automation Native *(replace "AI News-Ready Architecture")*
```
Title: AI, Telegram & Automation Native
Body: We build Telegram bots, OpenAI/LLM news sentiment layers, MCP-powered 
decision engines, and Excel/Google Sheets signal pipelines — all as 
first-class features, not afterthoughts. If it can be automated, we automate it.
```

### Card 5: Real Testing, Not Demos *(keep, it's good)*
No changes.

### Card 6: Multi-Account & Complex Logic *(replace "Fast Turnaround, Human Support")*
```
Title: Multi-Account, Complex Logic
Body: Managing 5 accounts or 500? Our execution engine handles position 
sizing per account, risk caps, group-level P&L monitoring, and simultaneous 
order dispatch. Prop desks and SEBI RAs rely on us for exactly this.
```

> Move the "Fast Turnaround, Human Support" point into the FAQ or footer trust bar instead — don't lose it entirely.

---

## 7. UI/UX Recommendations (Based on Screenshots)

### Issues Observed:

**A. Hero Section Has Dead Space**
The hero currently has a large empty dark area below the CTA buttons before the code mockup. This wastes above-the-fold real estate on mobile especially.
- **Fix:** Reduce `padding-bottom` on hero section. Bring the code block closer to the headline, or make it visually overlap/float alongside the text on desktop.

**B. Code Mockup is Barely Visible**
The code block on the right side in the hero is small and hard to read.
- **Fix:** Increase its size, add a subtle glow/shadow effect (green or blue matching the accent color), and animate the typing or highlight the key line to draw attention.

**C. Pricing Cards Lack Visual Hierarchy**
"Pro" card is highlighted (correct), but the distinction between Starter/Enterprise and Pro could be stronger.
- **Fix:** Add a "Most Popular" badge chip on Pro card. Make the Pro card slightly taller or add a glowing border animation.

**D. "Why TradeMade" Cards are Too Small**
The icon cards with titles and body text look cramped. The icons are small and generic.
- **Fix:** Use larger icons (48–64px), add subtle card hover animations (lift + border glow), and ensure body text is at least 14px.

**E. Missing Visual Trust Signal Near Hero**
AlgoDelta prominently shows "25+ brokers" right in the hero. TradeMade shows logos in a scrolling strip on the homepage but not on this page.
- **Fix:** Add a small broker logo strip (5–6 logos: Zerodha, Upstox, Angel, Fyers, AliceBlue) below the hero CTA buttons with label: "Live integrations with 20+ brokers."

**F. FAQ Section Feels Disconnected**
The accordion FAQ section appears isolated at the bottom.
- **Fix:** Add a subtle background color change (slightly lighter dark shade) to the FAQ section to visually separate it. Add 2 new FAQ items (see Section 8).

**G. No Phone/WhatsApp Number Visible**
- **Fix:** Add a WhatsApp button in the sticky header or at least in the contact CTA at bottom. Indian clients want to call/WhatsApp before committing.

**H. Mobile Responsiveness — Likely Issue**
On mobile, the 3-column card grids (pricing, why TradeMade) likely stack awkwardly.
- **Fix:** Use 1-col on mobile, 2-col on tablet, 3-col on desktop. Verify all cards stack with consistent padding.

---

## 8. FAQ — Add These 2 New Questions

```
Q: Can you build in C++ or Rust for low-latency requirements?
A: Yes. For HFT or latency-sensitive strategies, we build execution engines 
in C++ or Rust. Python is used for strategy logic and signal processing 
where microsecond performance isn't critical. We recommend the right 
language based on your actual execution requirements.

Q: Can you integrate Telegram signal bots or OpenAI-powered automation?
A: Absolutely. We build Telegram bots that receive signals and fire orders 
across multiple broker accounts in real time. We also integrate OpenAI/LLM 
models for news sentiment analysis, earnings call processing, and event-driven 
triggers. These are standard features in our Pro and Enterprise tiers.
```

---

## 9. New Section — "Also Ask Us About" (optional, at bottom before footer)

A simple horizontal strip with 4 pills/chips linking to related offerings:

```
📊 Backtesting Engine  →  /backtesting
🤖 AI Multi-Broker     →  /multi-broker-beta
💬 Telegram Bot Dev    →  (anchor to services or contact)
📈 Strategy Automation →  /services
```

---

## 10. SEO Notes

Update the page `<title>` and meta description:

```
Title: Custom Algo Trading Development | Python, C++, Rust | TradeMade
Meta: Professional algo trading software development for Indian markets. 
We build in Python, C++, and Rust. Telegram bots, AI/LLM integration, 
multi-broker, multi-account. 20+ broker APIs. 500+ algos delivered. 
SEBI RA compatible.
```

Add these as H2/H3 headings (for SEO) somewhere natural on the page:
- "Custom Algo Trading Software Development in India"
- "Options Strategy Automation for NSE/BSE/MCX"
- "Multi-Account Algo Trading for SEBI Registered Advisors"

---

## 11. Summary of Changes — Quick Reference for Developer

| Area | Action |
|---|---|
| Hero subtext | Update to mention C++/Rust/Telegram/OpenAI |
| Hero badges | Add C++/Python/Rust badge |
| Hero code snippet | Update to show multi-broker async dispatch |
| New section | Add "What We Build" — markets, strategy types, tech stack |
| Step 03 copy | Update to mention C++, Rust, Telegram, OpenAI |
| Pricing subtitles | Add one-liner under each tier |
| Pricing note | Add Telegram/Excel automation mention |
| Why TradeMade cards | Replace 2 cards; update 2 cards (see Section 6) |
| FAQ | Add 2 new Q&As (C++/Rust, Telegram/OpenAI) |
| New bottom strip | "Also Ask Us About" links |
| SEO meta | Update title + description |
| UI: Hero spacing | Reduce dead space, enlarge code mockup |
| UI: Pricing cards | Add "Most Popular" badge, stronger Pro highlight |
| UI: Cards | Larger icons, hover animations |
| UI: Broker logos | Add strip below hero CTAs |
| UI: FAQ section | Add background contrast |
| UI: Contact | Add WhatsApp number visibility |

---

*Brief prepared for TradeMade.in — Custom Development Page (/custom-development)*  
*Reference competitor: algodelta.com/service — do NOT copy verbatim, all content above is original*