import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkClass =
    "text-sm text-slate-500 transition-colors duration-200 hover:text-blue-600";

  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-24 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-5">
            <Link
              to="/jobs"
              className="group inline-flex items-center gap-3"
              aria-label="JobPortal home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/20 transition-transform duration-200 group-hover:-translate-y-0.5">
                <BriefcaseBusiness className="h-5 w-5" />
              </span>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                JobPortal<span className="text-blue-600">.</span>
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Find your next opportunity with AI-powered recommendations,
              smarter job discovery, and tools designed to move your career
              forward.
            </p>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/abul-hasan-farrukh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                title="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-[#0A66C2] hover:shadow-md"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/abul-hasan-farrukh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                title="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 hover:shadow-md"
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </a>
              <span className="ml-2 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                Connect with me
              </span>
            </div>
          </div>

          {/* Job seeker links */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-slate-900">
              For Job Seekers
            </h3>
            <ul className="space-y-3.5">
              <li><Link to="/jobs" className={linkClass}>Browse Jobs</Link></li>
              <li><Link to="/applications" className={linkClass}>My Applications</Link></li>
              <li><Link to="/profile" className={linkClass}>Profile</Link></li>
              <li><Link to="/ai-tools" className={linkClass}>AI Tools</Link></li>
            </ul>
          </div>

          {/* Employer links */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 text-sm font-semibold tracking-wide text-slate-900">
              For Employers
            </h3>
            <ul className="space-y-3.5">
              <li><Link to="/employer/dashboard" className={linkClass}>Post a Job</Link></li>
              <li><Link to="/employer/dashboard" className={linkClass}>Employer Dashboard</Link></li>
              <li><a href="#" className={linkClass}>Pricing</a></li>
              <li><a href="#" className={linkClass}>AI Screening</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-400">
            © {currentYear} JobPortal. All rights reserved.
          </p>
          <Link
            to="/jobs"
            className="group inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-blue-600"
          >
            Explore opportunities
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
