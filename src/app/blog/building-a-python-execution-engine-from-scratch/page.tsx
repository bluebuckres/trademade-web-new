import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import LeadCaptureForm from "@/components/blog/LeadCaptureForm";

export const metadata: Metadata = {
    title: "Building a Python Execution Engine from Scratch | TradeMade",
    description: "Most quants write strategies. Far fewer build the thing that actually runs them in production. This is what we learned building an event-driven engine from scratch.",
    keywords: ["python execution engine", "algo trading python", "quant execution architecture", "event driven execution engine", "algo trading latency"],
    openGraph: {
        title: "Building a Python Execution Engine from Scratch | TradeMade",
        description: "Most quants write strategies. Far fewer build the thing that actually runs them in production. An execution engine is the unglamorous piece between your signal and the exchange.",
        url: "https://trademade.in/blog/building-a-python-execution-engine-from-scratch",
        type: "article",
    },
    alternates: { canonical: "https://trademade.in/blog/building-a-python-execution-engine-from-scratch" },
};

export default function PythonExecutionPost() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Building a Python Execution Engine from Scratch",
        "datePublished": "2024-03-10T00:00:00+00:00",
        "author": { "@type": "Organization", "name": "TradeMade Engineering" },
        "publisher": { "@type": "Organization", "name": "TradeMade", "logo": { "@type": "ImageObject", "url": "https://trademade.in/custom_logo.png" } }
    };

    return (
        <main className="min-h-screen bg-[#f8f6f1] pt-32 pb-24 text-slate-900 selection:bg-primary/20 font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <article className="max-w-[680px] mx-auto px-6">

                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-10 font-medium text-sm">
                    <ArrowLeft weight="bold" /> Back to Research
                </Link>

                {/* Header */}
                <header className="mb-12 border-b-2 border-slate-900 pb-8">
                    <div className="flex items-center gap-2 text-[11px] font-mono font-medium tracking-widest text-primary uppercase mb-4">
                        <span>// Engineering</span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500">Mar 10, 2024</span>
                    </div>

                    <h1 className="font-satoshi text-3xl md:text-[50px] font-black text-slate-900 leading-[1.06] tracking-[-0.03em] mb-5">
                        Building a Python Execution Engine <em className="text-primary not-italic">from Scratch</em>
                    </h1>

                    <div className="text-[13px] text-slate-500 font-mono flex items-center gap-2">
                        8 min read <span className="text-slate-300">·</span> TradeMade Engineering
                    </div>
                </header>

                {/* Article Content */}
                <div className="prose prose-slate max-w-none prose-headings:font-satoshi prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-[#1a1a1a] prose-a:text-primary prose-strong:text-slate-900 prose-li:text-slate-700 text-[17px] leading-[1.78] font-light">

                    <p className="mb-6">
                        Most quants write strategies. Far fewer build the thing that actually runs them in production. An execution engine is the unglamorous piece between your signal and the exchange — and if it's badly designed, your strategy will leak money quietly until it's dead.
                    </p>
                    <p className="mb-6">
                        This is what we learned building one. We'll skip the hello-world abstractions and go straight to what actually matters in production.
                    </p>

                    <h2 className="text-[22px] leading-tight mt-12 mb-4 tracking-tight">The Architecture First. Always.</h2>
                    <p className="mb-6">
                        The single biggest mistake: building a request-response execution engine. A function that gets a signal, calls the broker API, waits for a fill, then continues. This blocks everything. One slow API response stalls your entire system during the most volatile moments — exactly when you need it to move fastest.
                    </p>
                    <p className="mb-6">
                        The correct architecture is event-driven. Every component — market data, signal generation, order management, risk checks — runs independently and communicates through an event queue. Nothing blocks anything.
                    </p>

                    {/* Architecture Flow Diagram */}
                    <div className="flex flex-col gap-0 my-9 border border-slate-300 rounded-none overflow-hidden bg-white/50 not-prose">
                        {/* Layer 1 */}
                        <div className="flex items-center p-4 border-b border-slate-300 gap-4 hover:bg-primary/5 transition-colors">
                            <span className="font-mono text-[11px] font-semibold text-primary bg-primary/10 px-2 py-1 flex-shrink-0 tracking-wide">01</span>
                            <div>
                                <div className="font-satoshi font-bold text-slate-900 text-[15px]">Market Data Handler</div>
                                <div className="text-[13px] text-slate-500 font-light">WebSocket feed → normalise → push to queue</div>
                            </div>
                        </div>
                        <div className="text-center text-primary text-lg py-1 bg-primary/5 border-b border-white">↓</div>
                        {/* Layer 2 */}
                        <div className="flex items-center p-4 border-b border-slate-300 gap-4 hover:bg-primary/5 transition-colors">
                            <span className="font-mono text-[11px] font-semibold text-primary bg-primary/10 px-2 py-1 flex-shrink-0 tracking-wide">02</span>
                            <div>
                                <div className="font-satoshi font-bold text-slate-900 text-[15px]">Signal Engine</div>
                                <div className="text-[13px] text-slate-500 font-light">Consumes ticks, emits MarketEvent on condition</div>
                            </div>
                        </div>
                        <div className="text-center text-primary text-lg py-1 bg-primary/5 border-b border-white">↓</div>
                        {/* Layer 3 */}
                        <div className="flex items-center p-4 border-b border-slate-300 gap-4 hover:bg-primary/5 transition-colors">
                            <span className="font-mono text-[11px] font-semibold text-primary bg-primary/10 px-2 py-1 flex-shrink-0 tracking-wide">03</span>
                            <div>
                                <div className="font-satoshi font-bold text-slate-900 text-[15px]">Pre-Trade Risk Guard</div>
                                <div className="text-[13px] text-slate-500 font-light">Position limits, max loss, instrument check</div>
                            </div>
                        </div>
                        <div className="text-center text-primary text-lg py-1 bg-primary/5 border-b border-white">↓</div>
                        {/* Layer 4 */}
                        <div className="flex items-center p-4 border-b border-slate-300 gap-4 hover:bg-primary/5 transition-colors">
                            <span className="font-mono text-[11px] font-semibold text-primary bg-primary/10 px-2 py-1 flex-shrink-0 tracking-wide">04</span>
                            <div>
                                <div className="font-satoshi font-bold text-slate-900 text-[15px]">Order Management System (OMS)</div>
                                <div className="text-[13px] text-slate-500 font-light">Creates OrderEvent, assigns UUID, tracks state</div>
                            </div>
                        </div>
                        <div className="text-center text-primary text-lg py-1 bg-primary/5 border-b border-white">↓</div>
                        {/* Layer 5 */}
                        <div className="flex items-center p-4 border-b border-slate-300 gap-4 hover:bg-primary/5 transition-colors">
                            <span className="font-mono text-[11px] font-semibold text-primary bg-primary/10 px-2 py-1 flex-shrink-0 tracking-wide">05</span>
                            <div>
                                <div className="font-satoshi font-bold text-slate-900 text-[15px]">Execution Handler</div>
                                <div className="text-[13px] text-slate-500 font-light">Broker API → FillEvent returned to queue</div>
                            </div>
                        </div>
                        <div className="text-center text-primary text-lg py-1 bg-primary/5 border-b border-white">↓</div>
                        {/* Layer 6 */}
                        <div className="flex items-center p-4 hover:bg-primary/5 transition-colors bg-white/50">
                            <span className="font-mono text-[11px] font-semibold text-primary bg-primary/10 px-2 py-1 flex-shrink-0 tracking-wide">06</span>
                            <div>
                                <div className="font-satoshi font-bold text-slate-900 text-[15px]">Portfolio Updater</div>
                                <div className="text-[13px] text-slate-500 font-light">Updates positions, P&L, triggers post-trade risk</div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-[22px] leading-tight mt-12 mb-4 tracking-tight">The Event Loop Core</h2>
                    <p className="mb-6">
                        Here's the skeleton in Python. Every component subscribes to event types. The loop is a single thread processing one event at a time — deceptively simple, practically powerful.
                    </p>

                    {/* Syntax Highlighted Code Block */}
                    <div className="bg-[#0d1117] rounded-none overflow-hidden my-8 not-prose">
                        <div className="flex justify-between items-center px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                            </div>
                            <span className="font-mono text-[11px] text-[#8b949e] font-medium tracking-widest uppercase">Python · execution_engine.py</span>
                        </div>
                        <div className="p-5 overflow-x-auto text-[13px] font-mono text-[#e6edf3] leading-[1.7]">
                            <pre className="!bg-transparent !m-0 !p-0" dangerouslySetInnerHTML={{
                                __html: `
<span class="text-[#ff7b72]">from</span> queue <span class="text-[#ff7b72]">import</span> Queue, Empty
<span class="text-[#ff7b72]">from</span> enum <span class="text-[#ff7b72]">import</span> Enum
<span class="text-[#ff7b72]">import</span> uuid, time

<span class="text-[#ff7b72]">class</span> <span class="text-[#d2a8ff]">EventType</span>(Enum):
    MARKET   = <span class="text-[#a5d6ff]">"MARKET"</span>
    SIGNAL   = <span class="text-[#a5d6ff]">"SIGNAL"</span>
    ORDER    = <span class="text-[#a5d6ff]">"ORDER"</span>
    FILL     = <span class="text-[#a5d6ff]">"FILL"</span>
    RISK_REJ = <span class="text-[#a5d6ff]">"RISK_REJECTED"</span>

<span class="text-[#ff7b72]">class</span> <span class="text-[#d2a8ff]">OrderEvent</span>:
    <span class="text-[#ff7b72]">def</span> <span class="text-[#d2a8ff]">__init__</span>(self, symbol, direction, qty, order_type=<span class="text-[#a5d6ff]">"MKT"</span>):
        self.id        = str(uuid.uuid4())
        self.symbol    = symbol
        self.direction = direction  <span class="text-[#8b949e] italic"># "BUY" | "SELL"</span>
        self.qty       = qty
        self.type      = order_type
        self.status    = <span class="text-[#a5d6ff]">"PENDING"</span>
        self.ts        = time.time_ns()  <span class="text-[#8b949e] italic"># nanosecond precision</span>

<span class="text-[#ff7b72]">class</span> <span class="text-[#d2a8ff]">ExecutionEngine</span>:
    <span class="text-[#ff7b72]">def</span> <span class="text-[#d2a8ff]">__init__</span>(self, broker, risk_guard):
        self.queue      = Queue()
        self.broker     = broker
        self.risk_guard = risk_guard
        self.portfolio  = {}

    <span class="text-[#ff7b72]">def</span> <span class="text-[#d2a8ff]">run</span>(self):
        <span class="text-[#ff7b72]">while</span> <span class="text-[#79c0ff]">True</span>:
            <span class="text-[#ff7b72]">try</span>:
                event = self.queue.get(timeout=<span class="text-[#79c0ff]">0.001</span>)
                self._route(event)
            <span class="text-[#ff7b72]">except</span> Empty:
                <span class="text-[#ff7b72]">continue</span>

    <span class="text-[#ff7b72]">def</span> <span class="text-[#d2a8ff]">_route</span>(self, event):
        handlers = {
            EventType.SIGNAL   : self._on_signal,
            EventType.ORDER    : self._on_order,
            EventType.FILL     : self._on_fill,
        }
        handlers.get(event.type, <span class="text-[#ff7b72]">lambda</span> e: <span class="text-[#79c0ff]">None</span>)(event)` }} />
                        </div>
                    </div>

                    <h2 className="text-[22px] leading-tight mt-12 mb-4 tracking-tight">The Risk Guard: Non-Negotiable</h2>
                    <p className="mb-6">
                        Risk checks must happen before every order, synchronously, in microseconds. Not as an afterthought. The two checks that prevent most catastrophic losses are a daily max-loss circuit breaker and a position size hard limit.
                    </p>

                    <div className="bg-[#0d1117] rounded-none overflow-hidden my-8 not-prose">
                        <div className="flex justify-between items-center px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                            </div>
                            <span className="font-mono text-[11px] text-[#8b949e] font-medium tracking-widest uppercase">Python · risk_guard.py</span>
                        </div>
                        <div className="p-5 overflow-x-auto text-[13px] font-mono text-[#e6edf3] leading-[1.7]">
                            <pre className="!bg-transparent !m-0 !p-0" dangerouslySetInnerHTML={{
                                __html: `
<span class="text-[#ff7b72]">class</span> <span class="text-[#d2a8ff]">RiskGuard</span>:
    <span class="text-[#ff7b72]">def</span> <span class="text-[#d2a8ff]">__init__</span>(self, max_position=<span class="text-[#79c0ff]">5000</span>, daily_loss_limit=<span class="text-[#79c0ff]">-25000</span>):
        self.max_position    = max_position
        self.daily_loss_lim  = daily_loss_limit
        self.daily_pnl       = <span class="text-[#79c0ff]">0.0</span>
        self.positions       = {}

    <span class="text-[#ff7b72]">def</span> <span class="text-[#d2a8ff]">approve</span>(self, order) -&gt; bool:
        <span class="text-[#8b949e] italic"># Circuit breaker: halt all trading if loss limit hit</span>
        <span class="text-[#ff7b72]">if</span> self.daily_pnl &lt;= self.daily_loss_lim:
            self._alert(<span class="text-[#ff7b72]">f</span><span class="text-[#a5d6ff]">"HALT: Daily loss {self.daily_pnl:.0f} ≤ limit"</span>)
            <span class="text-[#ff7b72]">return</span> <span class="text-[#79c0ff]">False</span>

        <span class="text-[#8b949e] italic"># Position limit check</span>
        current = self.positions.get(order.symbol, <span class="text-[#79c0ff]">0</span>)
        <span class="text-[#ff7b72]">if</span> abs(current + order.qty) &gt; self.max_position:
            <span class="text-[#ff7b72]">return</span> <span class="text-[#79c0ff]">False</span>

        <span class="text-[#ff7b72]">return</span> <span class="text-[#79c0ff]">True</span>

    <span class="text-[#ff7b72]">def</span> <span class="text-[#d2a8ff]">_alert</span>(self, msg):
        <span class="text-[#8b949e] italic"># Push to Telegram / log / SMS</span>
        <span class="text-[#79c0ff]">print</span>(<span class="text-[#ff7b72]">f</span><span class="text-[#a5d6ff]">"[RISK] {msg}"</span>)` }} />
                        </div>
                    </div>

                    <div className="bg-[#ff4b2b]/5 border-l-4 border-[#ff4b2b] p-5 my-8 not-prose">
                        <div className="font-mono text-[11px] font-semibold text-[#ff4b2b] uppercase tracking-[0.08em] mb-1.5">⚠ Common Mistake</div>
                        <p className="m-0 text-slate-900 text-[15px] leading-relaxed">
                            Never check risk only at strategy level. If you have multiple strategies running, each one thinks the others don't exist. Risk must be enforced at the engine level, against the total portfolio position — not per strategy.
                        </p>
                    </div>

                    <h2 className="text-[22px] leading-tight mt-12 mb-4 tracking-tight">Latency: Where You Actually Lose</h2>
                    <p className="mb-6">
                        Python is not C++. But for most Indian retail algo strategies targeting 5-minute to daily signals, the bottleneck isn't Python's execution speed — it's network round-trip time to the broker. Here's what matters:
                    </p>

                    <div className="overflow-x-auto my-8 not-prose">
                        <table className="w-full text-left border-collapse text-[14px]">
                            <thead>
                                <tr>
                                    <th className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase bg-slate-900 text-white p-3 border-b border-slate-900">Bottleneck</th>
                                    <th className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase bg-slate-900 text-white p-3 border-b border-slate-900">Typical Latency</th>
                                    <th className="font-mono text-[11px] font-medium tracking-[0.08em] uppercase bg-slate-900 text-white p-3 border-b border-slate-900">Fix</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr>
                                    <td className="p-3 border-b border-slate-200">Python GIL (single-threaded loop)</td>
                                    <td className="p-3 border-b border-slate-200"><span className="bg-[#d4a017] text-white text-[11px] font-mono font-semibold px-2 py-0.5 uppercase tracking-wide">~50µs</span></td>
                                    <td className="p-3 border-b border-slate-200 font-light">asyncio or multiprocessing</td>
                                </tr>
                                <tr className="bg-slate-50/50">
                                    <td className="p-3 border-b border-slate-200">REST API to broker</td>
                                    <td className="p-3 border-b border-slate-200"><span className="bg-[#ff4b2b] text-white text-[11px] font-mono font-semibold px-2 py-0.5 uppercase tracking-wide">80–200ms</span></td>
                                    <td className="p-3 border-b border-slate-200 font-light">Use WebSocket order stream if available</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-slate-200">Market data WebSocket parse</td>
                                    <td className="p-3 border-b border-slate-200"><span className="bg-[#2da44e] text-white text-[11px] font-mono font-semibold px-2 py-0.5 uppercase tracking-wide">1–3ms</span></td>
                                    <td className="p-3 border-b border-slate-200 font-light">ujson over stdlib json</td>
                                </tr>
                                <tr className="bg-slate-50/50">
                                    <td className="p-3 border-b border-slate-200">Redis for state (vs DB query)</td>
                                    <td className="p-3 border-b border-slate-200"><span className="bg-[#2da44e] text-white text-[11px] font-mono font-semibold px-2 py-0.5 uppercase tracking-wide">&lt;1ms</span></td>
                                    <td className="p-3 border-b border-slate-200 font-light">Always use Redis for hot state</td>
                                </tr>
                                <tr>
                                    <td className="p-3 border-b border-slate-200">Logging synchronously</td>
                                    <td className="p-3 border-b border-slate-200"><span className="bg-[#ff4b2b] text-white text-[11px] font-mono font-semibold px-2 py-0.5 uppercase tracking-wide">5–15ms/call</span></td>
                                    <td className="p-3 border-b border-slate-200 font-light">Async logging queue — never log inline</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <blockquote className="border-y-2 border-slate-900 py-6 my-10 text-slate-900 font-satoshi font-bold text-[21px] md:text-[21px] leading-[1.35] tracking-[-0.01em] not-prose">
                        "Synchronous logging inside your hot path will cost you more latency than Python vs. C++ ever will."
                    </blockquote>

                    <h2 className="text-[22px] leading-tight mt-12 mb-4 tracking-tight">Order State Machine: Don't Skip This</h2>
                    <p className="mb-6">
                        Every order must live inside a state machine. PENDING → SUBMITTED → PARTIALLY_FILLED → FILLED (or REJECTED or CANCELLED). If you're storing order state in a mutable dict without transitions, you will eventually process a fill for an order that was already cancelled — and your positions will be wrong from that moment on.
                    </p>
                    <p className="mb-6">
                        Use UUIDs for order IDs, not incrementing integers. Implement idempotency: if the broker sends the same fill event twice (it happens), your engine must recognise it and skip — not double-count the fill. Store every state transition with a nanosecond timestamp. When something goes wrong in live trading, this log is the only way to reconstruct exactly what happened.
                    </p>

                    <h2 className="text-[22px] leading-tight mt-12 mb-4 tracking-tight">What This Actually Costs to Build Right</h2>
                    <p className="mb-6">
                        A production-grade execution engine — event loop, OMS, risk guard, broker integration, state machine, Telegram alerts, async logging — takes 6–10 weeks to build correctly if you've done it before. It takes much longer if you haven't. And you'll rebuild large parts of it the first time something breaks in live trading that your paper trading never surfaced.
                    </p>
                    <p className="mb-6">
                        That's not a knock on building it yourself. It's just the honest accounting.
                    </p>

                </div>

                {/* Dark-themed Lead Capture Form provides a nice contrast block at the end */}
                <div className="mt-16 mb-10">
                    <LeadCaptureForm />
                </div>

                <div className="mt-10 mb-20 text-[17px] leading-[1.78] font-light text-[#1a1a1a]">
                    <p>
                        The execution engine is the least exciting part of a trading system and the most important one. Get the architecture right before you write a single line of strategy logic. The event queue, the risk guard, the order state machine — these aren't optional features you add later. They're the foundation everything else runs on.
                    </p>
                </div>

            </article>
        </main>
    )
}
