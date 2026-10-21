import { Link } from "react-router-dom"
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  MapPin,
  BriefcaseBusiness,
  Star,
  Search,
  Zap,
  FileCheck2,
} from "lucide-react"

import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">

            {/* Recruiter Demo Credentials Ticker */}
      <div className="relative z-20 overflow-hidden border-y border-indigo-100 bg-indigo-50/80 py-3">
        <div className="flex items-center">
          <div className="z-10 shrink-0 bg-indigo-50 px-4 text-xs font-bold uppercase tracking-wider text-[#080D4D] sm:px-6">
            For Recruiter:
          </div>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="animate-credentials-ticker flex w-max items-center whitespace-nowrap text-sm text-slate-700">
              {[1, 2].map((item) => (
                <div key={item} className="flex shrink-0 items-center">
                  <span className="mx-5">
                    <strong className="text-[#080D4D]">Employer:</strong>{" "}
                    hasan@gmail.com / 12345678
                  </span>

                  <span className="text-indigo-300">•</span>

                  <span className="mx-5">
                    <strong className="text-[#080D4D]">Job Seeker:</strong>{" "}
                    suresh@gmail.com / Suresh123
                  </span>

                  <span className="text-indigo-300">•</span>

                  <span className="mx-5">
                    <strong className="text-[#080D4D]">Admin:</strong>{" "}
                    aimbitious@gmail.com / adminpassword
                  </span>

                  <span className="mx-5 text-indigo-300">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Backend Status Ticker */}
      <div className="relative z-20 overflow-hidden border-b border-amber-200 bg-amber-50 py-3">
        <div className="flex items-center">
          <div className="z-10 shrink-0 bg-amber-50 px-4 text-xs font-bold uppercase tracking-wider text-amber-800 sm:px-6">
            Notice:
          </div>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="animate-credentials-ticker flex w-max items-center whitespace-nowrap text-sm text-amber-900">
              {[1, 2].map((item) => (
                <div key={item} className="flex shrink-0 items-center">
                  <span className="mx-5">
                    <strong>Backend Status:</strong>{" "}
                    Due to some issues in my Oracle Cloud Account, backend is
                    not working. I am trying to fix it.
                  </span>

                  <span className="mx-5 text-amber-500">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-100/60 blur-3xl" />
        <div className="absolute -left-40 top-72 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#080D4D 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10 lg:py-28">

        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />

            <span>Meet your AI-powered career companion</span>

            <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-bold">
              AI
            </span>
          </div>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            Your next big
            <br />

            career move
            <br />

            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              starts here.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Discover opportunities that fit your skills, build a
            standout resume, and connect with employers.
            Your next chapter starts with the right opportunity.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/register">
              <Button
                size="lg"
                className="h-13 w-full rounded-xl bg-[#080D4D] px-7 text-base font-semibold shadow-lg shadow-indigo-950/15 transition-all hover:-translate-y-0.5 hover:bg-indigo-800 sm:w-auto"
              >
                Find Your Next Job

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link to="/register">
              <Button
                size="lg"
                variant="outline"
                className="h-13 w-full rounded-xl border-slate-200 bg-white px-7 text-base font-semibold transition-all hover:border-indigo-200 hover:bg-indigo-50 sm:w-auto"
              >
                <BriefcaseBusiness className="mr-2 h-5 w-5" />

                Hire Top Talent
              </Button>
            </Link>
          </div>

          {/* TRUST INDICATORS */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Easy registration
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              Personalized opportunities
            </span>
          </div>

          {/* QUICK SEARCH CHIPS */}
          <div className="mt-9">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Popular career paths
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Software Developer",
                "Data Analyst",
                "UI/UX Designer",
                "Product Manager",
              ].map((role) => (
                <span
                  key={role}
                  className="rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-indigo-200 hover:text-indigo-700"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          {/* Main image */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-gradient-to-br from-indigo-100 via-slate-100 to-blue-100 p-3 shadow-2xl shadow-indigo-950/10 sm:p-4">
            <div className="relative aspect-[4/4.25] overflow-hidden rounded-[1.5rem] bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
                alt="Professionals collaborating in a modern workplace"
                className="h-full w-full object-cover"
                fetchPriority="high"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D4D]/80 via-transparent to-[#080D4D]/10" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" />
                  Smarter career discovery
                </span>

                <h2 className="mt-4 max-w-sm text-2xl font-bold leading-tight sm:text-3xl">
                  Find work that moves you forward.
                </h2>

                <p className="mt-2 text-sm text-white/80">
                  Your skills. Your goals. Your next opportunity.
                </p>
              </div>
            </div>
          </div>

          {/* FLOATING AI MATCH CARD */}
          <div className="absolute -left-3 top-12 w-56 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-900/10 sm:-left-10 sm:w-64">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Sparkles className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-500">
                  AI compatibility
                </p>

                <p className="text-sm font-bold text-slate-900">
                  Strong skill match
                </p>
              </div>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Illustrative matching score
            </p>
          </div>

          {/* FLOATING APPLICATION CARD */}
          <div className="absolute -bottom-7 -right-2 w-56 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-900/10 sm:-right-8 sm:w-64">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FileCheck2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900">
                  Application ready
                </p>

                <p className="text-xs text-slate-500">
                  Resume profile
                </p>
              </div>

              <CheckCircle2 className="ml-auto h-5 w-5 text-emerald-500" />
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
              <Zap className="h-3.5 w-3.5 text-amber-500" />

              Prepare your next application
            </div>
          </div>

          {/* DECORATIVE STAR */}
          <div className="absolute -right-2 top-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-amber-400 shadow-lg sm:-right-5 sm:h-14 sm:w-14">
            <Star className="h-6 w-6 fill-amber-400" />
          </div>
        </div>
      </div>

      {/* BOTTOM CATEGORY STRIP */}
      <div className="border-t border-slate-100 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-5 py-6 text-sm text-slate-500 sm:px-8 lg:justify-between lg:px-10">
          <span className="font-medium text-slate-400">
            EXPLORE OPPORTUNITIES IN
          </span>

          <span className="flex items-center gap-2">
            <Search className="h-4 w-4 text-indigo-500" />
            Technology
          </span>

          <span className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-indigo-500" />
            Data & Analytics
          </span>

          <span className="flex items-center gap-2">
            <BriefcaseBusiness className="h-4 w-4 text-indigo-500" />
            Business
          </span>

          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-indigo-500" />
            Remote & Hybrid
          </span>
        </div>
      </div>
      {/* Ticker Animation */}
<style>{`
  @keyframes credentials-ticker {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .animate-credentials-ticker {
    animation: credentials-ticker 35s linear infinite;
  }

  .animate-credentials-ticker:hover {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-credentials-ticker {
      animation: none;
    }
  }
`}</style>
    </section>
  )
}