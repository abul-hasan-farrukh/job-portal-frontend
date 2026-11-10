import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import { Mail, ArrowUpRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const linkClass =
    "text-sm text-slate-500 transition-colors duration-200 hover:text-blue-600"

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-14">
          {/* Brand */}
          <div className="space-y-5">
            <Link
              to="/jobs"
              aria-label="Aimbitious home"
              className="inline-flex items-center rounded-xl transition-opacity hover:opacity-80"
            >
              <img
                src="/logo-transparent.png"
                alt="Aimbitious"
                className="h-10 w-auto max-w-[190px] object-contain object-left"
              />
            </Link>

            <p className="max-w-sm text-sm leading-7 text-slate-500">
              Build your career with confidence. Discover opportunities,
              explore AI-powered tools, and find roles that match your skills
              and ambitions.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="mailto:abulhasanfarrukh@gmail.com"
                aria-label="Email Abul Hasan Farrukh"
                title="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>

              <a
                href="https://www.linkedin.com/in/abul-hasan-farrukh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-[#0A66C2] hover:shadow-md"
              >
                <LinkedInLogoIcon className="h-[18px] w-[18px]" />
              </a>

              <a
                href="https://github.com/abul-hasan-farrukh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 hover:shadow-md"
              >
                <GitHubLogoIcon className="h-[18px] w-[18px]" />
              </a>
            </div>

            <a
              href="mailto:abulhasanfarrukh@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-blue-600"
            >
              abulhasanfarrukh@gmail.com
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Job seekers */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-slate-900">
              For Job Seekers
            </h3>
            <ul className="space-y-4">
              <li><Link to="/jobs" className={linkClass}>Browse Jobs</Link></li>
              <li><Link to="/applications" className={linkClass}>My Applications</Link></li>
              <li><Link to="/profile" className={linkClass}>Profile</Link></li>
              <li><Link to="/ai-tools" className={linkClass}>AI Tools</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-slate-900">
              For Employers
            </h3>
            <ul className="space-y-4">
              <li><Link to="/employer/dashboard" className={linkClass}>Post a Job</Link></li>
              <li><Link to="/employer/dashboard" className={linkClass}>Employer Dashboard</Link></li>
              <li><a href="mailto:abulhasanfarrukh@gmail.com" className={linkClass}>Pricing</a></li>
              <li><a href="mailto:abulhasanfarrukh@gmail.com" className={linkClass}>AI Screening</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200/80 pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs text-slate-400 sm:text-left">
            © {currentYear} Aimbitious. All rights reserved.
          </p>
          <p className="text-center text-xs text-slate-400 sm:text-right">
            Connecting talent with opportunity.
          </p>
        </div>
      </div>
    </footer>
  )
}
