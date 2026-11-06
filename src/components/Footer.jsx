import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Heart, X, Server, ExternalLink } from "lucide-react";

const platformLinks = [
  { label: "Find Jobs", href: "/register" },
  { label: "For Employers", href: "/register" },
  { label: "Create Account", href: "/register" },
];

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const microservices = [
  ["Config Server", "https://aimbitious-config-server.onrender.com/actuator/health"],
  ["API Gateway", "https://aimbitious-job-portal-api-gateway.onrender.com/actuator/health"],
  ["Notification Service", "https://aimbitious-job-portal-notification.onrender.com/actuator/health"],
  ["AI Service", "https://aimbitious-job-portal-ai-service.onrender.com/actuator/health"],
  ["Preference Service", "https://aimbitious-job-portal-preference-service.onrender.com/actuator/health"],
  ["Company Service", "https://aimbitious-job-portal-company-service.onrender.com/actuator/health"],
  ["Resume Service", "https://aimbitious-job-portal-resume-service.onrender.com/actuator/health"],
  ["Application Service", "https://aimbitious-job-portal-application-service.onrender.com/actuator/health"],
  ["User Service", "https://aimbitious-user-service.onrender.com/actuator/health"],
  ["Job Service", "https://aimbitious-job-portal-job-service.onrender.com/actuator/health"],
];

function FooterLink({ href, children }) {
  const className = "inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white";
  if (href.startsWith("/#")) return <a href={href} className={className}>{children}</a>;
  return <Link to={href} className={className}>{children}</Link>;
}

export default function Footer() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    if (!isServicesOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsServicesOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isServicesOpen]);

  return (
    <>
      <footer className="border-t border-white/10 bg-[#0b1768] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <Link to="/" aria-label="Aimbitious home" className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="Aimbitious - AI Powered Job Portal"
                  className="h-15 w-auto max-w-[220px] object-contain transition-opacity duration-200 hover:opacity-90"
                />
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Bringing job seekers and employers together through a modern, organized career platform.
              </p>
              <a
                href="mailto:contact@example.com"
                className="mt-5 inline-flex items-center gap-2 text-sm text-indigo-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" /> Contact our team
              </a>
            </div>

            {/* Platform */}
            <div>
              <h3 className="font-bold text-white">Platform</h3>
              <div className="mt-5 flex flex-col items-start gap-4">
                {platformLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-white">Company</h3>
              <div className="mt-5 flex flex-col items-start gap-4">
                {companyLinks.map((link) => (
                  <FooterLink key={link.label} href={link.href}>{link.label}</FooterLink>
                ))}
              </div>
            </div>

            {/* Services button replaces Legal heading */}
            <div>
              <button
                type="button"
                onClick={() => setIsServicesOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/30 bg-white/10 px-4 py-2.5 text-left text-sm font-bold text-white transition-all hover:border-indigo-200/60 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1768]"
              >
                <Server className="h-4 w-4 text-cyan-300" />
                Activate Services
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <p className="mt-3 max-w-[230px] text-xs leading-5 text-slate-400">
                Open the service health links to wake up the backend services.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Aimbitious. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              Built with <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" /> by Abul Hasan Farrukh.
            </p>
            <a href="#top" className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-white">
              Back to top <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>

      {isServicesOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsServicesOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="services-modal-title"
            className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 bg-[#080D4D] px-6 py-5 text-white sm:px-7">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                  <Server className="h-4 w-4" /> Backend services
                </span>
                <h2 id="services-modal-title" className="mt-2 text-xl font-extrabold sm:text-2xl">
                  Activate Aimbitious Microservices
                </h2>
                <p className="mt-1 text-sm text-indigo-100">
                  Open each health endpoint in a new tab to activate the corresponding service.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsServicesOpen(false)}
                aria-label="Close services popup"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-6 py-5 sm:px-7">
              <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-900 sm:text-sm">
                <strong>Notice:</strong> Please activate all the services together. Each may take up to 5 minutes to wake up.
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {microservices.map(([name, url], index) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-[#080D4D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-xs font-bold text-indigo-700 group-hover:bg-white">
                        {index + 1}
                      </span>
                      <span className="truncate">{name}</span>
                    </span>
                    <ExternalLink className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-indigo-600" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4 sm:px-7">
              <p className="text-xs text-slate-500">Each link opens in a separate browser tab.</p>
              <button
                type="button"
                onClick={() => setIsServicesOpen(false)}
                className="rounded-xl bg-[#080D4D] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080D4D] focus-visible:ring-offset-2"
              >
                Done
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
