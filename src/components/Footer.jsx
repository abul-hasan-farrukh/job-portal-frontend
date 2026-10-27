import { Link } from "react-router-dom"
import {
  BriefcaseBusiness,
  ArrowUpRight,
  Mail,
  Heart,
} from "lucide-react"

const platformLinks = [
  { label: "Find Jobs", href: "/register" },
  { label: "For Employers", href: "/register" },
  { label: "Create Account", href: "/register" },
]

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
]

function FooterLink({ href, children }) {
  const className =
    "inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-white"

  if (href.startsWith("/#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1768] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

        {/* Main footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            {/* Brand Logo */}
<Link
  to="/"
  aria-label="Aimbitious home"
  className="inline-flex items-center"
>
  <img
    src="/logo.png"
    alt="Aimbitious - AI Powered Job Portal"
    className="h-15 w-auto max-w-[220px] object-contain transition-opacity duration-200 hover:opacity-90"
  />
</Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Bringing job seekers and employers together through
              a modern, organized career platform.
            </p>

            <a
              href="mailto:contact@example.com"
              className="mt-5 inline-flex items-center gap-2 text-sm text-indigo-300 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              Contact our team
            </a>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-bold text-white">Platform</h3>

            <div className="mt-5 flex flex-col items-start gap-4">
              {platformLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white">Company</h3>

            <div className="mt-5 flex flex-col items-start gap-4">
              {companyLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white">Legal</h3>

            <div className="mt-5 flex flex-col items-start gap-4">
              {legalLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
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

          <a
            href="#top"
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-400 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}