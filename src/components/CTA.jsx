import { Link } from "react-router-dom"
import {
  ArrowRight,
  Sparkles,
  BriefcaseBusiness,
  UserRound,
} from "lucide-react"

import { Button } from "./ui/button"

export default function CTA() {
  return (
    <section className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#080D4D] via-indigo-950 to-indigo-800 px-6 py-16 text-center shadow-2xl shadow-indigo-950/10 sm:px-12 sm:py-20 lg:px-20">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-100">
            <Sparkles className="h-4 w-4" />
            Your next chapter starts here
          </span>

          <h2 className="mt-7 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
            Your future is full of possibilities.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-indigo-100/80 sm:text-lg">
            Take the next step in your career or find the people
            who can help your business grow. Start with Aimbitious.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/register">
              <Button
                size="lg"
                className="h-13 w-full rounded-xl bg-white px-7 text-base font-bold text-[#080D4D] hover:bg-indigo-50 sm:w-auto"
              >
                <UserRound className="mr-2 h-5 w-5" />

                Create Your Account

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link to="/register">
              <Button
                size="lg"
                variant="outline"
                className="h-13 w-full rounded-xl border-white/25 bg-white/5 px-7 text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <BriefcaseBusiness className="mr-2 h-5 w-5" />

                I'm Hiring
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-xs text-indigo-200/70">
            Built to bring job seekers and employers together.
          </p>
        </div>
      </div>
    </section>
  )
}