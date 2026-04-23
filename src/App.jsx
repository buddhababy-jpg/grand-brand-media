import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Megaphone, Star, Smartphone, Globe, PenTool, Zap, CheckCircle2, ExternalLink, Mail, Phone, ArrowRight } from "lucide-react";

// Grand Brand Media — edgy, fun, colorful single‑file React site
// TailwindCSS + Framer Motion assumed available in the environment
// Swap CONTACT details at the bottom: PHONE, EMAIL
// Photography uses Unsplash CDN links (royalty‑free) as placeholders

export default function GrandBrandMediaSite() {
  const slogans = useMemo(
    () => [
      "Launch louder.",
      "Look cinematic.",
      "Rank locally.",
      "Sell on autopilot.",
    ],
    []
  );
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % slogans.length), 2200);
    return () => clearInterval(id);
  }, [slogans.length]);

  const heroImg =
    "https://images.unsplash.com/photo-1496302662116-85c6d2a7f49a?q=80&w=1920&auto=format&fit=crop"; // neon city / cinematic
  const gridImgs = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520975693416-35a2b9a3e3f1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1600&auto=format&fit=crop",
  ];

  // --- Lightweight self‑tests (UI sanity checks) ---
  useEffect(() => {
    console.assert(Array.isArray(gridImgs) && gridImgs.length === 4, "Grid images should have 4 items");
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <FallbackImg src={heroImg} alt="Cinematic neon city" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-700/60 via-indigo-900/70 to-neutral-950"/>
          <div className="absolute -inset-20 blur-3xl opacity-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500 via-cyan-400 to-emerald-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur shadow">
            <Sparkles className="h-3.5 w-3.5"/> Cinematic • Edgy • Color‑driven
          </div>
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="mt-5 text-4xl sm:text-6xl font-black leading-[1.05]">
            Grand Brand Media
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-emerald-300">Make your brand impossible to ignore.</span>
          </motion.h1>
          <div className="mt-6 h-10">
            <AnimatedPill key={i} text={slogans[i]} />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="rounded-2xl bg-white text-neutral-900 font-semibold px-5 py-3 shadow hover:shadow-lg inline-flex items-center gap-2">See Plans <ArrowRight className="h-4 w-4"/></a>
            <a href="#contact" className="rounded-2xl bg-fuchsia-600/30 border border-fuchsia-300/30 px-5 py-3 font-semibold backdrop-blur hover:bg-fuchsia-600/40 inline-flex items-center gap-2">Talk to Us <Phone className="h-4 w-4"/></a>
            <span className="text-white/80 inline-flex items-center gap-2 text-sm"><Star className="h-4 w-4"/> No contracts • Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* BADGES */}
      <section className="bg-neutral-900/60 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <Badge icon={<Rocket className="h-4 w-4"/>} text="Hands‑free growth"/>
          <Badge icon={<Megaphone className="h-4 w-4"/>} text="Bold creative"/>
          <Badge icon={<Globe className="h-4 w-4"/>} text="Local SEO wins"/>
          <Badge icon={<Zap className="h-4 w-4"/>} text="Fast results"/>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Our Services – Simple. Powerful. Done For You.</h2>
          <p className="mt-3 text-neutral-300">We help small U.S. businesses stand out online with a complete, hands‑free digital presence — for just <span className="font-semibold text-white">$199/month</span>.</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={<Globe className="h-5 w-5"/>}
            title="Google Business Profile Management"
            points={[
              "Optimize your listing for top local visibility",
              "Post weekly updates & special offers",
              "Respond to reviews professionally",
              "Drive calls, visits, and new customers",
            ]}
          />
          <ServiceCard
            icon={<Smartphone className="h-5 w-5"/>}
            title="Social Media Posting (1×/week)"
            points={[
              "Custom branded posts for Facebook & Instagram",
              "Promote services, events & offers",
              "Keep your audience engaged on autopilot",
            ]}
          />
          <ServiceCard
            icon={<PenTool className="h-5 w-5"/>}
            title="QR Code + Digital Business Card"
            points={[
              "Custom QR code to Google profile or website",
              "Friction‑free sharing online & in‑person",
              "Modern, trackable touch‑points",
            ]}
          />
        </div>
      </section>

      {/* CINEMATIC GRID */}
      <section className="bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gridImgs.map((src, idx) => (
              <motion.div key={idx} initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:idx * 0.05}} className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-lg">
                <FallbackImg src={src} alt="Cinematic brand tile" className="h-full w-full object-cover hover:scale-105 transition-transform" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black">Pick Your Plan</h2>
          <p className="mt-3 text-neutral-300">No contracts. Cancel anytime. We execute — you grow.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <PriceCard
            name="Expand Your Circle"
            price="$199/mo"
            tagline="Everything you need to get noticed locally."
            features={[
              "Google Business Profile optimization",
              "Weekly posts & offer highlights",
              "Review monitoring & professional replies",
              "Custom QR code + digital business card",
            ]}
            cta="Start for $199"
            highlight
          />

          <PriceCard
            name="Website Plan"
            price="$499/mo"
            tagline="Everything in Expand Your Circle, plus your website."
            features={[
              "Everything in the $199 plan",
              "Modern, conversion‑ready website",
              "Technical SEO foundations",
              "Speed, security & on‑page setup",
            ]}
            cta="Upgrade to $499"
          />
        </div>
        <p className="mt-6 text-center text-xs text-neutral-400">Prices are month‑to‑month. Ask about annual discounts and add‑ons (ads, blogs, multi‑location). No long‑term contracts.</p>
      </section>

      {/* CTA BAND */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500"/>
        <div className="absolute -inset-40 -z-10 blur-3xl bg-[conic-gradient(at_top,_#22d3ee,_#a78bfa,_#f472b6,_#22d3ee)] opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black">Ready to look cinematic — and rank locally?</h3>
              <p className="opacity-90 mt-1">We’ll set up everything and show results you can feel each month.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="rounded-2xl bg-white text-neutral-900 font-semibold px-5 py-3 shadow hover:shadow-lg">Book a Free Consult</a>
              <a href="#pricing" className="rounded-2xl border border-white/60 text-white px-5 py-3 inline-flex items-center gap-2 hover:bg-white/10">Compare Plans <ExternalLink className="h-4 w-4"/></a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black">Let’s grow your brand.</h2>
            <p className="mt-3 text-neutral-300">Tell us about your business and goals. We’ll reply fast with a clear plan.</p>
            <ul className="mt-6 space-y-3 text-neutral-200">
              <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-fuchsia-300"/> (302) 487‑0516</li>
              <li className="flex items-center gap-2"><Mail className="h-5 w-5 text-fuchsia-300"/> support@grandbrandmedia.com</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-fuchsia-300"/> Mon–Fri • 9am–6pm</li>
            </ul>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 shadow">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Full Name" placeholder=""/>
              <Input label="Business" placeholder=""/>
              <Input label="Email" placeholder=""/>
              <Input label="Phone" placeholder=""/>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-neutral-200">What do you need?</label>
                <textarea className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 min-h-[120px]" placeholder="Local ranking, website redesign, social posts, QR, etc."/>
              </div>
            </div>
            <button className="mt-4 w-full rounded-2xl bg-fuchsia-500 text-white font-semibold px-5 py-3 hover:bg-fuchsia-600">Send</button>
            <p className="text-xs text-neutral-400 mt-3">By sending, you agree to be contacted about your project. No spam, ever.</p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ---------------- Components ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight">Grand Brand Media</div>
            <div className="text-xs text-neutral-300">Cinematic • Local SEO • Social</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-neutral-200 hover:text-white">Services</a>
          <a href="#pricing" className="text-sm font-medium text-neutral-200 hover:text-white">Pricing</a>
          <a href="#contact" className="text-sm font-medium text-neutral-200 hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-3 py-2 text-sm font-semibold shadow hover:shadow-lg">Free Consult <ArrowRight className="h-4 w-4"/></a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-600 to-cyan-400 p-[2px] shadow">
      <div className="h-full w-full rounded-[14px] bg-neutral-950 grid place-items-center">
        <svg viewBox="0 0 48 48" className="h-6 w-6">
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f472b6"/>
              <stop offset="50%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#22d3ee"/>
            </linearGradient>
          </defs>
          <path d="M16 12h12a8 8 0 010 16H22" stroke="url(#g1)" strokeWidth="4" fill="none" strokeLinecap="round"/>
          <circle cx="12" cy="24" r="2" fill="#22d3ee"/>
          <circle cx="34" cy="14" r="1.8" fill="#f472b6"/>
        </svg>
      </div>
    </div>
  );
}

function AnimatedPill({ text }) {
  return (
    <motion.div initial={{opacity:0, y:12}} animate={{opacity:1, y:0}} transition={{type:"spring", stiffness:110, damping:14}} className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-2 text-sm font-semibold">
      <Sparkles className="h-4 w-4 text-fuchsia-300"/> {text}
    </motion.div>
  );
}

function Badge({ icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-neutral-900 rounded-xl border border-white/10 px-3 py-2 shadow-sm">
      {icon}
      <span className="font-medium text-sm text-neutral-200">{text}</span>
    </div>
  );
}

function ServiceCard({ icon, title, points }) {
  return (
    <div className="rounded-2xl border border-white/10 p-5 shadow-sm bg-neutral-900/50">
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-white grid place-items-center shadow-sm">{icon}</div>
        <div>
          <div className="font-semibold text-white">{title}</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            {points.map((p, idx) => (
              <li key={idx} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-fuchsia-300 mt-0.5"/> <span>{p}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PriceCard({ name, price, tagline, features, cta, highlight=false }) {
  return (
    <div className={`rounded-3xl p-6 border ${highlight ? "bg-gradient-to-b from-fuchsia-900/30 to-cyan-900/20 border-white/20" : "bg-neutral-900/60 border-white/10"} shadow-xl`}>
      <div className="flex items-center justify-between">
        <div className="text-xl font-extrabold">{name}</div>
        {highlight && (
          <span className="text-xs rounded-full bg-white/15 px-2 py-1 uppercase tracking-wide">Most Popular</span>
        )}
      </div>
      <div className="mt-2 text-3xl font-black">{price}</div>
      <p className="mt-1 text-neutral-300">{tagline}</p>
      <ul className="mt-5 space-y-2 text-sm text-neutral-200">
        {features.map((f, idx) => (
          <li key={idx} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-300 mt-0.5"/> <span>{f}</span></li>
        ))}
      </ul>
      <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 font-semibold ${highlight ? "bg-white text-neutral-900 hover:shadow-lg" : "bg-fuchsia-500 hover:bg-fuchsia-600 text-white"}`}>{cta}</a>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium text-neutral-200">{label}</label>
      <input {...props} className="mt-1 w-full rounded-xl border border-white/10 bg-neutral-900/70 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
    </div>
  );
}

// Image with automatic fallback in case a CDN blocks hotlinking
function FallbackImg({ src, alt, className }) {
  const [current, setCurrent] = useState(src);
  const [triedBackup, setTriedBackup] = useState(false);
  return (
    <img
      src={current}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => {
        if (!triedBackup) {
          setTriedBackup(true);
          setCurrent(`https://picsum.photos/seed/${Math.random().toString(36).slice(2)}/1600/1200`);
        }
      }}
    />
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <div className="text-white font-semibold">Grand Brand Media</div>
          </div>
          <p className="mt-3 text-sm text-neutral-300">Cinematic creative, serious local results.</p>
        </div>
        <div>
          <div className="text-white font-semibold">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>Google Business Profile</li>
            <li>Social Media Posts</li>
            <li>QR & Digital Cards</li>
            <li>Websites & Technical SEO</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-neutral-300">
            <li>(302) 487‑0516</li>
            <li>support@grandbrandmedia.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-neutral-400 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Grand Brand Media. All rights reserved.</div>
          <div className="flex items-center gap-1 opacity-80"><Sparkles className="h-3.5 w-3.5"/> Built to convert</div>
        </div>
      </div>
    </footer>
  );
}
