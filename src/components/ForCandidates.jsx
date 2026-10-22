import { Link } from "react-router-dom"
import {
  CheckCircle2,
  FileText,
  Sparkles,
  ArrowRight,
  Download,
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react"

import { Button } from "./ui/button"

const benefits = [
  "Create a professional resume and highlight your skills",
  "Discover opportunities relevant to your career goals",
  "Keep applications organized in one place",
  "Present your experience clearly to potential employers",
]

export default function ForCandidates() {
  return (
    <section className="overflow-hidden bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* LEFT: RESUME PREVIEW */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-indigo-950/5 sm:p-6">

            {/* Preview header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  <FileText className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Resume Preview
                  </h3>

                  <p className="text-xs text-slate-500">
                    Your professional profile
                  </p>
                </div>
              </div>

              <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                Preview
              </span>
            </div>

            {/* Resume content */}
            <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/70 p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white">
                  <UserRound className="h-7 w-7" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Your Name
                  </h4>

                  <p className="text-sm text-slate-500">
                    Your Professional Title
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Add your contact information
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Professional Summary
                </h5>

                <div className="mt-3 space-y-2">
                  <div className="h-2 w-full rounded-full bg-slate-200" />
                  <div className="h-2 w-[92%] rounded-full bg-slate-200" />
                  <div className="h-2 w-[75%] rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <BriefcaseBusiness className="h-4 w-4 text-indigo-600" />
                    Experience
                  </div>

                  <div className="mt-3 h-2 w-full rounded-full bg-slate-200" />
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-slate-200" />
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <GraduationCap className="h-4 w-4 text-indigo-600" />
                    Education
                  </div>

                  <div className="mt-3 h-2 w-full rounded-full bg-slate-200" />
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-700">
                  Core Skills
                </h5>

                <div className="mt-3 flex flex-wrap gap-2">
                  {["Java", "React", "SQL", "Communication"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-indigo-100 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-indigo-50 p-4">
              <Sparkles className="h-5 w-5 shrink-0 text-indigo-600" />

              <div>
                <p className="text-sm font-semibold text-indigo-950">
                  Make your experience stand out
                </p>

                <p className="mt-1 text-xs text-indigo-700">
                  Add your details to build your own profile.
                </p>
              </div>

              <Download className="ml-auto h-5 w-5 shrink-0 text-indigo-500" />
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
            <UserRound className="h-4 w-4" />
            For Job Seekers
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Your talent deserves
            <span className="text-indigo-600"> the right opportunity.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Take control of your career with tools that help you
            present your skills, explore opportunities, and stay
            organized throughout your job search.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

                <span className="text-sm leading-6 text-slate-700 sm:text-base">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <Link to="/register">
              <Button
                size="lg"
                className="h-12 rounded-xl bg-[#080D4D] px-6 font-semibold hover:bg-indigo-800"
              >
                Build Your Profile

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Start by creating your account and exploring the platform.
          </p>
        </div>
      </div>
    </section>
  )
}