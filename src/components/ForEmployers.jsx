import { Link } from "react-router-dom"
import {
  CheckCircle2,
  BriefcaseBusiness,
  UsersRound,
  ArrowRight,
  Plus,
  MapPin,
  Clock3,
  Search,
  SlidersHorizontal,
} from "lucide-react"

import { Button } from "./ui/button"

const benefits = [
  "Publish job openings and organize recruitment",
  "Review incoming candidate applications",
  "Manage job listings from your employer dashboard",
  "Keep hiring workflows in one place",
]

const candidates = [
  {
    name: "Alex Morgan",
    role: "Frontend Developer",
    skills: ["React", "JavaScript"],
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Jamie Wilson",
    role: "Backend Developer",
    skills: ["Java", "Spring Boot"],
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Taylor Brooks",
    role: "UI/UX Designer",
    skills: ["Figma", "Prototyping"],
    color: "bg-emerald-100 text-emerald-700",
  },
]

export default function ForEmployers() {
  return (
    <section id="employers" className="overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* LEFT: EMPLOYER DASHBOARD */}
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-indigo-950/5">

            {/* Dashboard header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-7">
              <div>
                <h3 className="font-bold text-slate-900">
                  Hiring workspace
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Candidate management preview
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
            </div>

            {/* Dashboard controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-5 sm:px-7">
              <div className="relative min-w-0 flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <div className="rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-xs text-slate-400">
                  Search candidates...
                </div>
              </div>

              <button
                type="button"
                aria-label="Filter candidate preview"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>

            {/* Dashboard section */}
            <div className="px-5 pb-5 sm:px-7">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900">
                  Candidate profiles
                </h4>

                <span className="text-xs text-slate-500">
                  Example profiles
                </span>
              </div>

              <div className="space-y-3">
                {candidates.map((candidate, index) => (
                  <div
                    key={candidate.name}
                    className="rounded-2xl border border-slate-100 bg-white p-4 transition-colors hover:border-indigo-200 hover:bg-indigo-50/20"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${candidate.color}`}
                      >
                        {candidate.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-sm font-bold text-slate-900">
                            {candidate.name}
                          </p>

                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                            Sample {index + 1}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-500">
                          {candidate.role}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {candidate.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md bg-indigo-50 px-2 py-1 text-[10px] font-medium text-indigo-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom dashboard callout */}
              <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl bg-[#080D4D] p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <UsersRound className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Organize your hiring
                    </p>

                    <p className="mt-1 text-xs text-indigo-200">
                      Manage applications in one place
                    </p>
                  </div>
                </div>

                <Plus className="h-5 w-5 shrink-0 text-indigo-200" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700">
            <UsersRound className="h-4 w-4" />
            For Employers
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Better hiring begins
            <span className="text-indigo-600"> with better workflows.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Bring job postings, candidate applications, and recruitment
            activities together in an organized workspace built
            for employers.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600" />

                <span className="text-sm leading-6 text-slate-700 sm:text-base">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/register">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-[#080D4D] px-6 font-semibold hover:bg-indigo-800"
              >
                Start Hiring

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <Clock3 className="h-4 w-4" />
            Designed to make recruitment workflows easier to manage.
          </p>
        </div>
      </div>
    </section>
  )
}