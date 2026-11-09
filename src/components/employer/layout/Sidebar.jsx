import { Link, NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { cn } from "@/lib/utils"
import { logout } from "@/store/user/userAuth"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  BrainCircuit,
  Building2,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  PlusCircle,
} from "lucide-react"

const navigation = [
  {
    title: "Overview",
    items: [
      { name: "Dashboard", href: "/employer/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    title: "Hiring",
    items: [
      { name: "All Jobs", href: "/employer/jobs", icon: Briefcase },
      { name: "Create Job", href: "/employer/jobs/create", icon: PlusCircle },
      { name: "Applications", href: "/employer/applications", icon: FileText },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "AI Screening", href: "/employer/ai-screening", icon: BrainCircuit },
    ],
  },
  {
    title: "Account",
    items: [
      { name: "Company Profile", href: "/employer/company", icon: Building2 },
      { name: "Settings", href: "/employer/settings", icon: Settings },
    ],
  },
]

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <aside
      className={cn(
        "relative z-50 flex h-screen shrink-0 flex-col overflow-visible",
        "border-r border-slate-800/80 bg-[#0b1220] text-slate-300",
        "transition-[width,transform] duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64",
        "fixed inset-y-0 left-0 lg:relative lg:z-auto",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}
    >
      {/* Brand */}
      <div
        className={cn(
          "flex h-[76px] shrink-0 items-center border-b border-white/[0.07]",
          collapsed ? "justify-center px-3" : "justify-start px-5"
        )}
      >
        <Link
          to="/employer/dashboard"
          aria-label="Aimbitious employer dashboard"
          className={cn(
            "group flex min-w-0 items-center",
            collapsed ? "justify-center" : "gap-3"
          )}
        >
          <img
            src="/logo-transparent.png"
            alt="Aimbitious"
            className={cn(
              "shrink-0 object-contain object-left transition-all duration-300",
              collapsed ? "h-9 w-9 object-center" : "h-10 w-[132px]"
            )}
          />
          {!collapsed && (
            <span className="min-w-0 border-l border-white/10 pl-3">
              <span className="block whitespace-nowrap text-[10px] font-semibold uppercase leading-4 tracking-[0.16em] text-slate-400">
                {/* Employer Dashboard */}
              </span>
            </span>
          )}
        </Link>
      </div>

      {/* Desktop collapse control */}
      <Button
        variant="ghost"
        size="icon"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[88px] z-[60] hidden h-7 w-7 rounded-full border border-slate-700 bg-[#172235] text-slate-400 shadow-lg transition-all hover:border-blue-400/50 hover:bg-blue-600 hover:text-white lg:flex"
      >
        {collapsed ? (
          <ChevronRight className="h-3.5 w-3.5" />
        ) : (
          <ChevronLeft className="h-3.5 w-3.5" />
        )}
      </Button>

      {/* Navigation */}
      <ScrollArea className="min-h-0 flex-1">
        <nav
          aria-label="Employer navigation"
          className={cn(
            "space-y-7 py-7",
            collapsed ? "px-3" : "px-4"
          )}
        >
          {navigation.map((section) => (
            <section key={section.title}>
              {!collapsed ? (
                <h2 className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  {section.title}
                </h2>
              ) : (
                <div className="mb-3 mx-2 border-t border-white/[0.08]" />
              )}

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon

                  return (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      end={item.href === "/employer/jobs"}
                      title={collapsed ? item.name : undefined}
                      onClick={() =>
                        setMobileMenuOpen && setMobileMenuOpen(false)
                      }
                      className={({ isActive }) =>
                        cn(
                          "group relative flex min-h-11 items-center rounded-xl text-[13px] font-medium",
                          "transition-all duration-200",
                          collapsed
                            ? "justify-center px-0"
                            : "gap-3 px-3.5",
                          isActive
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-950/40"
                            : "text-slate-400 hover:bg-white/[0.06] hover:text-slate-100"
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            className={cn(
                              "h-[18px] w-[18px] shrink-0 transition-transform duration-200",
                              !isActive && "group-hover:scale-110"
                            )}
                          />
                          {!collapsed && (
                            <span className="truncate">{item.name}</span>
                          )}
                          {isActive && !collapsed && (
                            <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                          )}
                        </>
                      )}
                    </NavLink>
                  )
                })}
              </div>
            </section>
          ))}
        </nav>
      </ScrollArea>

      {/* Logout */}
      <div
        className={cn(
          "shrink-0 border-t border-white/[0.07] p-4",
          collapsed && "flex justify-center px-3"
        )}
      >
        <button
          type="button"
          onClick={handleLogout}
          title={collapsed ? "Logout" : undefined}
          className={cn(
            "group flex min-h-11 items-center rounded-xl text-[13px] font-medium",
            "text-slate-400 transition-all duration-200 hover:bg-rose-500/10 hover:text-rose-300",
            collapsed ? "w-11 justify-center" : "w-full gap-3 px-3.5"
          )}
        >
          <LogOut className="h-[18px] w-[18px] shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  )
}
