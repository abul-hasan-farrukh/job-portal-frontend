import {
  UsersRound,
  BriefcaseBusiness,
  FileCheck2,
  Sparkles,
} from "lucide-react"

const capabilities = [
  {
    icon: UsersRound,
    title: "Role-based access",
    description:
      "Dedicated experiences for job seekers and employers.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: BriefcaseBusiness,
    title: "Job management",
    description:
      "Create and manage job opportunities in one place.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: FileCheck2,
    title: "Application workflows",
    description:
      "Organize applications and follow their progress.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Sparkles,
    title: "AI-focused experience",
    description:
      "A career platform designed around smarter discovery.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#080D4D] py-20 sm:py-24">
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-indigo-200">
            <Sparkles className="h-4 w-4" />
            One connected platform
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Designed around the
            <span className="text-indigo-300"> entire hiring journey.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-indigo-100/75 sm:text-lg">
            Bring career discovery, candidate profiles, and
            recruitment workflows together in one experience.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.1]"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-indigo-100/70">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}