import { Link } from "react-router-dom"
import {
  UserRound,
  Sparkles,
  Search,
  Send,
  ArrowUpRight,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UserRound,
    title: "Build your profile",
    description:
      "Showcase your experience, skills, education, and career goals in one professional profile.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Discover your fit",
    description:
      "Explore relevant opportunities and use intelligent matching to identify jobs worth pursuing.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
  },
  {
    number: "03",
    icon: Send,
    title: "Apply with confidence",
    description:
      "Manage applications in one place and stay organized throughout your job search.",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
  },
]

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-indigo-700">
            <Sparkles className="h-4 w-4" />
            Your next move
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            A smarter way to
            <span className="text-indigo-600"> get hired.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            From your first profile to your next opportunity,
            everything you need is in one place.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid gap-6 md:grid-cols-3 md:gap-8">
          {/* Connecting line */}
          <div className="absolute left-[18%] right-[18%] top-12 hidden border-t-2 border-dashed border-indigo-200 md:block" />

          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5 sm:p-9"
              >
                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <span className="text-4xl font-black tracking-tight text-slate-100 transition-colors group-hover:text-indigo-100">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  <span>Step {Number(step.number)} of 3</span>

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#080D4D] p-7 text-white sm:flex-row sm:p-9">
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">
              Ready to take the next step?
            </h3>

            <p className="mt-2 text-sm text-indigo-100">
              Create your account and start exploring opportunities.
            </p>
          </div>

          <Link
            to="/register"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#080D4D] transition-colors hover:bg-indigo-50"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}