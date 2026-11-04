import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileCheck2,
  Sparkles,
  Target,
  UserRound,
  Zap,
  CheckCircle2,
} from "lucide-react";

const FEATURES = [
  {
    icon: Target,
    title: "Discover opportunities",
    description: "Find opportunities aligned with your skills and career goals.",
  },
  {
    icon: FileCheck2,
    title: "Build better applications",
    description: "Create job-ready applications and present your skills confidently.",
  },
  {
    icon: Zap,
    title: "Make your next move",
    description: "Manage your career journey from one convenient platform.",
  },
];

export default function AuthLayout({
  title,
  description,
  children,
  footerText,
  footerLink,
  footerLinkText,
}) {
  const isRegister = footerLink === "/login";

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-[47%_53%]">

      {/* LEFT BRAND PANEL */}
      <section className="relative hidden min-h-screen flex-col overflow-hidden bg-[#0d1472] px-10 py-10 text-white lg:flex xl:px-14">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />

        {/* Logo */}
        <Link
          to="/"
          aria-label="Aimbitious home"
          className="relative z-10 inline-flex w-fit items-center"
        >
          {/* <img
            src="/logo.png"
            alt="Aimbitious - AI Powered Job Portal"
            className="h-20 w-auto object-contain"
          /> */}
        </Link>

        {/* Main promotional content */}
        <div className="relative z-10 my-auto max-w-2xl py-12">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-blue-100">
            <Sparkles className="h-4 w-4" />
            {isRegister
              ? "Your next chapter starts here"
              : "Your career, powered by AI"}
          </div>

          <h2 className="text-4xl font-bold leading-[1.2] tracking-tight xl:text-6xl">
            {isRegister ? (
              <>
                Your talent.
                <br />
                Your ambition.
                <br />
                <span className="text-blue-300">
                  Your next big move.
                </span>
              </>
            ) : (
              <>
                Find the opportunity.
                <br />
                <span className="text-blue-300">
                  Build your future.
                </span>
              </>
            )}
          </h2>

          <p className="mt-6 max-w-lg text-base leading-7 text-blue-100/90">
            {isRegister
              ? "Build your professional profile, discover relevant opportunities, and take the next step in your career with Aimbitious."
              : "Discover relevant opportunities, showcase your skills, and take the next step in your professional journey with Aimbitious."}
          </p>

          {/* Career dashboard preview */}
          <div className="mt-8 max-w-lg rounded-2xl border border-white/15 bg-white/[0.06] p-5 shadow-xl backdrop-blur-sm">

            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200/70">
                  Your career workspace
                </p>

                <h3 className="mt-2 text-base font-semibold text-white">
                  Ready for your next opportunity?
                </h3>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Sparkles className="h-5 w-5 text-blue-200" />
              </div>
            </div>

            {/* Professional profile */}
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] p-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <UserRound className="h-5 w-5 text-blue-200" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">
                  Your professional profile
                </p>
                <p className="mt-1 text-xs text-blue-100/60">
                  Showcase your skills and experience
                </p>
              </div>

              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
            </div>

            {/* Relevant opportunities */}
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] p-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Target className="h-5 w-5 text-blue-200" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">
                  Relevant opportunities
                </p>
                <p className="mt-1 text-xs text-blue-100/60">
                  Explore jobs that match your goals
                </p>
              </div>

              <ArrowRight className="h-4 w-4 shrink-0 text-blue-200" />
            </div>
          </div>

          {/* Feature columns */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {FEATURES.map(({ icon: Icon, title, description: text }) => (
              <div key={title}>
                <Icon className="h-5 w-5 text-blue-300" />

                <h4 className="mt-3 text-xs font-bold leading-5 text-white">
                  {title}
                </h4>

                <p className="mt-2 text-[11px] leading-5 text-blue-100/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom footer */}
        <footer className="relative z-10 flex items-center justify-between gap-4 border-t border-white/15 pt-5 text-xs text-blue-100/60">
          <span>© {new Date().getFullYear()} Aimbitious</span>

          <div className="flex items-center gap-5">
            <Link
              to="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </footer>
      </section>

      {/* RIGHT FORM PANEL */}
      <section className="relative flex min-h-screen flex-col bg-white">

        {/* Top navigation */}
        <header className="flex items-center justify-between px-5 py-5 sm:px-10 lg:justify-end lg:px-12">
          {/* Mobile logo */}
          <Link
            to="/"
            aria-label="Aimbitious home"
            className="inline-flex items-center lg:hidden"
          >
            <img
              src="/aimbitious-logo.png"
              alt="Aimbitious"
              className="h-10 w-auto max-w-[180px] object-contain"
            />
          </Link>

          <p className="text-xs text-slate-600 sm:text-sm">
            {isRegister
              ? "Already have an account?"
              : "Don't have an account?"}{" "}

            <Link
              to={isRegister ? "/login" : "/register"}
              className="font-bold text-[#080D4D] transition-colors hover:text-indigo-700"
            >
              {isRegister ? "Sign in" : "Create account"}
            </Link>
          </p>
        </header>

        {/* Form area */}
        <div className="flex flex-1 items-center justify-center px-5 py-8 sm:px-10 lg:px-12 xl:px-16">

          <div className="w-full max-w-[430px]">

            {/* Mobile-only introductory section */}
            <div className="mb-7 lg:hidden">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-[#080D4D]">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                {title}
              </h1>

              {description && (
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              )}
            </div>

            {/* Desktop form heading */}
            <div className="mb-7 hidden lg:block">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#080D4D]/70">
                Welcome to Aimbitious
              </p>

              <h1 className="text-3 xl font-bold leading-tight tracking-tight text-slate-950 xl:text-4xl">
                {isRegister
                  ? "Create your account"
                  : "Your next opportunity awaits."}
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {isRegister
                  ? "Join Aimbitious and take the next step in your professional journey."
                  : "Access your account and continue building your career."}
              </p>
            </div>

            {/* Form content — intentionally no outer Card */}
            <div className="w-full">
              {children}
            </div>

            {/* Mobile trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] text-slate-500 lg:hidden">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Secure access
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                AI-powered
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                Career tools
              </span>
            </div>

            {/* Copyright */}
            <p className="mt-8 text-center text-[10px] text-slate-400 lg:hidden">
              © {new Date().getFullYear()} Aimbitious. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}