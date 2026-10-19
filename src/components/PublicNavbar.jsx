import { useState } from "react";
import { Link } from "react-router-dom";
import {
    BriefcaseBusiness,
    Menu,
    X,
    ArrowUpRight,
} from "lucide-react";

export default function PublicNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navigationLinks = [
        {
            label: "About",
            href: "/#about",
            type: "anchor",
        },
        {
            label: "Contact",
            href: "/#contact",
            type: "anchor",
        },
        {
            label: "Privacy Policy",
            href: "/privacy",
            type: "route",
        },
        {
            label: "Terms",
            href: "/terms",
            type: "route",
        },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
            <div className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">

                {/* LEFT: Logo and Brand Name */}
                <Link
                    to="/"
                    aria-label="Aimbitious Home"
                    onClick={closeMenu}
                    className="group flex shrink-0 items-center gap-3"
                >
                    {/* Logo Icon */}
                    {/* <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#080D4D] text-white shadow-lg shadow-indigo-950/15 transition-transform duration-300 group-hover:scale-105">
            <BriefcaseBusiness className="h-5 w-5" />
          </div> */}

                    <img
                        src="/logo.png"
                        alt="Aimbitious Logo"
                        className="h-20 w-70 shrink-0 object-contain"
                    />

                    {/* Brand Name */}
                    {/* <div className="flex flex-col">
                        <span className="text-xl font-extrabold leading-tight tracking-tight text-[#080D4D] sm:text-2xl">
                            Aimbitious
                        </span>

                        <span className="mt-0.5 text-[9px] font-semibold tracking-[0.17em] text-slate-500 sm:text-[10px]">
                            AI POWERED JOB PORTAL
                        </span>
                    </div> */}
                </Link>

                {/* DESKTOP: Navigation Links */}
                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-7 lg:flex xl:gap-9"
                >
                    {navigationLinks.map((item) => (
                        item.type === "route" ? (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="group relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#080D4D]"
                            >
                                {item.label}

                                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#080D4D] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ) : (
                            <a
                                key={item.label}
                                href={item.href}
                                className="group relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#080D4D]"
                            >
                                {item.label}

                                <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#080D4D] transition-all duration-300 group-hover:w-full" />
                            </a>
                        )
                    ))}
                </nav>

                {/* MOBILE: Hamburger Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="public-mobile-navigation"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#080D4D] shadow-sm transition-all duration-200 hover:border-[#080D4D]/30 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#080D4D] focus-visible:ring-offset-2 lg:hidden"
                >
                    {isMenuOpen ? (
                        <X className="h-5 w-5 transition-transform duration-200" />
                    ) : (
                        <Menu className="h-5 w-5 transition-transform duration-200" />
                    )}
                </button>
            </div>

            {/* MOBILE: Dropdown Navigation */}
            <div
                id="public-mobile-navigation"
                className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen
                        ? "max-h-96 opacity-100"
                        : "pointer-events-none max-h-0 opacity-0"
                    }`}
                aria-hidden={!isMenuOpen}
            >
                <nav
                    aria-label="Mobile navigation"
                    className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6"
                >
                    <div className="flex flex-col gap-1">
                        {navigationLinks.map((item) => {
                            const linkClass =
                                "flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-indigo-50 hover:text-[#080D4D]";

                            return item.type === "route" ? (
                                <Link
                                    key={item.label}
                                    to={item.href}
                                    onClick={closeMenu}
                                    tabIndex={isMenuOpen ? 0 : -1}
                                    className={linkClass}
                                >
                                    <span>{item.label}</span>
                                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                                </Link>
                            ) : (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={closeMenu}
                                    tabIndex={isMenuOpen ? 0 : -1}
                                    className={linkClass}
                                >
                                    <span>{item.label}</span>
                                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Footer */}
                    <div className="mt-4 border-t border-slate-100 px-4 pt-4">
                        <p className="text-xs leading-relaxed text-slate-500">
                            Find opportunities. Build your future.
                            <span className="mt-1 block font-semibold text-[#080D4D]">
                                Aimbitious — AI Powered Job Portal
                            </span>
                        </p>
                    </div>
                </nav>
            </div>
        </header>
    );
}