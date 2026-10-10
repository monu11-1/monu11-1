import {
  ArrowRight,
  Boxes,
  Headphones,
  Play,
  ShieldCheck,
  Users,
} from "lucide-react";
import { heroStats } from "@/data/homepage";
import { Button } from "@/components/ui/Button";

const icons = {
  "Ecosystem Products": Boxes,
  "Global Community": Users,
  "Transactions Secured": ShieldCheck,
  "Dedicated Support": Headphones,
};

export function Hero() {
  return (
    <section className="hero-atmosphere relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 map-grid opacity-40" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-10 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-14 lg:pt-14">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/15 bg-white/80 px-3 py-1 text-xs font-semibold text-brand-red shadow-sm">
            <span aria-hidden="true">♥</span>
            A Civilization of Heritage & Innovation
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-[4rem]">
            Building a Legacy
            <br />
            <span className="text-brand-red">Empowering</span> Generations
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            At Sagenex, we blend trust, technology, and vision to create impact
            that lasts. Together, we grow, we evolve, and we lead.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#ecosystem">
              Explore Ecosystem
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#legacy" variant="secondary">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Watch Overview
            </Button>
          </div>
        </div>

        <div className="animate-fade-up-delay relative flex min-h-[320px] items-center justify-center lg:min-h-[420px]">
          <div className="absolute h-64 w-64 rounded-full bg-brand-green/10 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute h-48 w-48 rounded-full border border-brand-red/10 animate-[pulse-ring_3.5s_ease-out_infinite]" />
          <div className="animate-float relative">
            <HeroEmblem />
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-3 px-4 pb-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {heroStats.map((stat) => {
          const Icon = icons[stat.label as keyof typeof icons] ?? Boxes;
          const tone =
            stat.tone === "green" ? "text-brand-green" : "text-brand-red";
          return (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-2xl border border-border/80 bg-white/90 px-4 py-4 shadow-[var(--card-shadow)]"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl bg-surface ${tone}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className={`font-display text-xl font-extrabold ${tone}`}>
                  {stat.value}
                </p>
                <p className="text-xs font-medium text-muted">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function HeroEmblem() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-full bg-gradient-to-b from-white to-transparent opacity-80" />
      <svg
        viewBox="0 0 320 340"
        className="relative h-auto w-[260px] drop-shadow-2xl sm:w-[300px] lg:w-[340px]"
        role="img"
        aria-label="Sagenex bull and bear shield emblem"
      >
        <ellipse cx="160" cy="300" rx="90" ry="18" fill="#e5e7eb" />
        <ellipse cx="160" cy="290" rx="70" ry="12" fill="#f3f4f6" />
        <ellipse
          cx="160"
          cy="280"
          rx="48"
          ry="8"
          fill="#fff"
          stroke="#d1d5db"
        />
        <path
          d="M160 28l98 36v88c0 62-40 116-98 132C102 268 62 214 62 152V64l98-36z"
          fill="#e5e7eb"
          stroke="#9ca3af"
          strokeWidth="4"
        />
        <path
          d="M160 48l78 28v72c0 50-32 94-78 108-46-14-78-58-78-108V76l78-28z"
          fill="#f9fafb"
        />
        <path
          d="M95 145c8-42 34-68 55-78 6 28 10 58 4 88-22 8-48 12-59-10z"
          fill="#00a86b"
        />
        <path
          d="M225 145c-8-42-34-68-55-78-6 28-10 58-4 88 22 8 48 12 59-10z"
          fill="#d31d3e"
        />
        <circle cx="160" cy="168" r="22" fill="#111827" />
        <path
          d="M148 168h24M160 156v24"
          stroke="#f9fafb"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M70 210c20-10 40-6 55 8M250 210c-20-10-40-6-55 8"
          stroke="#00a86b"
          strokeWidth="3"
          opacity="0.45"
        />
        <path
          d="M78 230c18-6 34-2 48 10M242 230c-18-6-34-2-48 10"
          stroke="#d31d3e"
          strokeWidth="3"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
