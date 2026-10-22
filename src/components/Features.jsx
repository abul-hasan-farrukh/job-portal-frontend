import {
  FileText,
  Target,
  Zap,
  ChartNoAxesCombined,
  UsersRound,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Smart Resume Building",
    description:
      "Organize your experience and present your skills in a clear, professional resume.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Target,
    title: "Relevant Job Discovery",
    description:
      "Explore opportunities that align with your skills, interests, and career direction.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Zap,
    title: "Simplified Applications",
    description:
      "Make your job search more organized with a streamlined application experience.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Application Tracking",
    description:
      "Keep track of your applications and follow their progress from your dashboard.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: UsersRound,
    title: "Recruitment Management",
    description:
      "Help employers organize job listings and manage incoming candidate applications.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    icon: ShieldCheck,
    title: "A Focused Experience",
    description:
      "Bring job discovery, candidate profiles, and recruitment workflows into one platform.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
]

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">

          {/* Heading */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-indigo-700">
              <Sparkles className="h-4 w-4" />
              Built for your next move
            </span>

            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Everything you need.
              <br />

              <span className="text-indigo-600">
                All in one place.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:justify-self-end">
            A thoughtfully designed career platform that brings
            job seekers and employers together through simpler
            workflows and useful tools.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8 ${
                  index === 1
                    ? "border-indigo-200 bg-gradient-to-br from-indigo-50/80 to-white"
                    : "border-slate-200 bg-white hover:border-indigo-200"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-600" />
                </div>

                <h3 className="mt-7 text-lg font-bold text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>

                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-indigo-50/60 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}