import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, ArrowUpRight, Sparkles, Code2, Layers3, ShieldCheck,
  Database, Search, FileText, Bell, Building2, BriefcaseBusiness,
  BrainCircuit, SlidersHorizontal, Server,
} from "lucide-react";
import { DashboardIcon } from "@radix-ui/react-icons";

export default function PublicNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const openFeatures = () => {
    closeMenu();
    setIsFeaturesOpen(true);
  };

  useEffect(() => {
    if (!isFeaturesOpen) return;
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsFeaturesOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isFeaturesOpen]);

  const featureSections = [
    {
      title: "Technology Stack",
      icon: Code2,
      items: [
        "React-based frontend.",
        "Java 21 and Spring Boot backend.",
        "Maven multi-module project structure.",
        "PostgreSQL relational database.",
        "Spring Data JPA and Hibernate for persistence and ORM.",
        "Spring Security and JWT-based authentication/authorization.",
        "Spring Cloud Config Server for centralized configuration.",
        "Netflix Eureka for service discovery and registration.",
        "Spring Cloud API Gateway for routing backend requests.",
        "REST APIs for frontend/backend communication.",
        "Docker-based containerization and deployment.",
      ],
    },
    {
      title: "Microservices Architecture",
      icon: Layers3,
      items: [
        "Service Registry (Eureka) for service discovery and registration.",
        "Config Server for centralized service configuration.",
        "API Gateway as the common entry point for backend APIs.",
        "User Service for user account and authentication-related operations.",
        "Company Service for employer/company functionalities with many AI features.",
        "Job Service for job search and listing operations using Redis.",
        "Resume Service for resume-related functionalities along with built-in templates.",
        "Application Service for job application and AI Screening workflows.",
        "Preference Service for user job preferences.",
        "AI Service for all AI-related portal capabilities.",
        "Notification Service for real-time job application status notifications using Kafka.",
        "Common library/module for reusable backend components.",
      ],
    },
    {
      title: "Job Portal Capabilities",
      icon: BriefcaseBusiness,
      items: [
        "Separate job-seeker and employer-oriented workflows.",
        "User registration and login.",
        "Employer/company account and job-management workflows.",
        "Job listings and job discovery.",
        "Job application management.",
        "Resume-related features.",
        "Personalized job preferences.",
        "AI-powered functionality supported by a dedicated AI microservice.",
        "Notification functionality supported by a dedicated Notification Service.",
        "Centralized API routing through the API Gateway.",
      ],
    },
    {
      title: "Security & Deployment",
      icon: ShieldCheck,
      items: [
        "JWT-based security for protected backend operations.",
        "Centralized configuration using Spring Cloud Config.",
        "Dynamic service registration and discovery using Eureka.",
        "Independent services organized around business capabilities.",
        "Docker containerization for backend services.",
        "Backend microservices deployed on Render's free hosting tier.",
        "Service health and registration status viewable through the Eureka dashboard.",
        "Free-tier services may take time to wake up or may be temporarily unavailable.",
      ],
    },
  ];

  const highlights = [
    { icon: Search, label: "AI Job Search" },
    { icon: FileText, label: "Built-in Resume Templates" },
    { icon: Sparkles, label: "AI Applications Screening" },
    { icon: Bell, label: "Notifications using Kafka" },
    { icon: SlidersHorizontal, label: "AI Job Recommendation" },
    { icon: DashboardIcon, label: "Role Based Dashboards" },
    { icon: Database, label: "PostgreSQL & Redis" },
    { icon: Server, label: "11 Microservices" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link
            to="/"
            aria-label="Aimbitious Home"
            onClick={closeMenu}
            className="group flex shrink-0 items-center"
          >
            <img
              src="/logo-transparent.png"
              alt="Aimbitious Logo"
              className="h-16 w-auto max-w-[220px] shrink-0 object-contain sm:max-w-[260px]"
            />
          </Link>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={openFeatures}
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-[#080D4D] transition-all hover:border-indigo-300 hover:bg-indigo-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080D4D] focus-visible:ring-offset-2"
            >
              <Sparkles className="h-4 w-4" />
              Features of this project
            </button>
            <Link
              to="/login"
              className="rounded-xl px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#080D4D]"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 rounded-xl bg-[#080D4D] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/15 transition-all hover:-translate-y-0.5 hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080D4D] focus-visible:ring-offset-2"
            >
              Register <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="public-mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#080D4D] shadow-sm transition-all hover:border-[#080D4D]/30 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080D4D] focus-visible:ring-offset-2 lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="public-mobile-navigation"
          className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          <nav aria-label="Mobile navigation" className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={openFeatures}
                tabIndex={isMenuOpen ? 0 : -1}
                className="flex w-full items-center justify-between rounded-xl bg-indigo-50 px-4 py-3.5 text-left text-sm font-semibold text-[#080D4D] transition-colors hover:bg-indigo-100"
              >
                <span className="flex items-center gap-2"><Sparkles className="h-4 w-4" />Features of this project</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link to="/login" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1} className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50">Login</Link>
                <Link to="/register" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1} className="rounded-xl bg-[#080D4D] px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-800">Register</Link>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Project features popup */}
      {isFeaturesOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsFeaturesOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-features-title"
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl"
          >
            <div className="relative shrink-0 overflow-hidden bg-[#080D4D] px-6 py-7 text-white sm:px-9">
              <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-indigo-100">
                    PROJECT OVERVIEW
                  </span>
                  <h2 id="project-features-title" className="text-2xl font-extrabold tracking-tight sm:text-3xl">Features of Aimbitious</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-indigo-100 sm:text-base">
                    An AI-powered job portal built with a distributed Spring Boot microservices architecture.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsFeaturesOpen(false)}
                  aria-label="Close project features"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {highlights.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-xs font-medium text-white sm:text-sm">
                    <Icon className="h-4 w-4 shrink-0 text-cyan-300" />{label}
                  </div>
                ))}
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-9 sm:py-8">
              <div className="grid gap-7 md:grid-cols-2">
                {featureSections.map(({ title, icon: Icon, items }) => (
                  <article key={title} className="min-w-0">
                    <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-[#080D4D] sm:text-lg">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700"><Icon className="h-5 w-5" /></span>
                      {title}
                    </h3>
                    <ul className="space-y-2.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                <p className="font-bold">Backend Hosting Note :</p>
                <p className="mt-1">
                  The backend services are hosted on a free server. A service may take a little time to wake up, or a feature may be temporarily unavailable if its required microservice is down.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-9">
              <p className="text-xs text-slate-500">Aimbitious — AI-Powered Job Portal</p>
              <button type="button" onClick={() => setIsFeaturesOpen(false)} className="rounded-xl bg-[#080D4D] px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080D4D] focus-visible:ring-offset-2">
                Close
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
