import { Link, NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { cn } from "@/lib/utils"
import { logout } from "@/store/user/userAuth"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Users, Briefcase, Settings, ChevronLeft, ChevronRight, LogOut, Building2, Layers, CreditCard, ShieldCheck } from "lucide-react"

const navigation = [
  { title: "Overview", items: [{ name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard }] },
  { title: "Management", items: [
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Jobs", href: "/admin/jobs", icon: Briefcase },
    { name: "Companies", href: "/admin/companies", icon: Building2 },
    { name: "Job Metadata", href: "/admin/job-meta", icon: Layers },
    { name: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
  ] },
  { title: "System", items: [{ name: "Settings", href: "/admin/settings", icon: Settings }] },
]

export default function AdminSidebar({ collapsed, setCollapsed, mobileMenuOpen, setMobileMenuOpen }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
    setMobileMenuOpen?.(false)
  }

  return (
    <aside className={cn(
      "relative z-50 flex h-screen shrink-0 flex-col overflow-visible border-r border-slate-800/80 bg-slate-950 text-white transition-[width,transform] duration-300 ease-in-out",
      collapsed ? "w-16" : "w-64",
      "fixed inset-y-0 left-0 lg:relative lg:inset-auto lg:z-auto",
      mobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
    )}>
      <div className="flex h-[72px] shrink-0 items-center border-b border-white/[0.07] px-4">
        <Link to="/admin/dashboard" onClick={() => setMobileMenuOpen?.(false)}
          title={collapsed ? "Aimbitious Admin Portal" : undefined}
          className={cn("flex min-w-0 items-center", collapsed ? "w-full justify-center" : "gap-3")}>
          <img src="/logo-transparent.png" alt="Aimbitious" className="h-9 w-9 shrink-0 rounded-xl object-contain" />
          {!collapsed && <div className="min-w-0">
            <p className="truncate text-[15px] font-bold tracking-tight text-white">Admin Portal</p>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400">Management Console</p>
          </div>}
        </Link>
      </div>

      <Button type="button" variant="ghost" size="icon"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-[84px] z-20 hidden h-7 w-7 rounded-full border border-slate-700 bg-slate-900 text-slate-300 shadow-lg hover:border-brand/60 hover:bg-brand hover:text-white lg:flex">
        {collapsed ? <ChevronRight className="h-3.5 w-3.5" /> : <ChevronLeft className="h-3.5 w-3.5" />}
      </Button>

      <ScrollArea className="min-h-0 flex-1">
        <nav className={cn("space-y-7 py-6", collapsed ? "px-2" : "px-3.5")}>
          {navigation.map(section => <section key={section.title}>
            {!collapsed
              ? <h2 className="mb-2.5 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">{section.title}</h2>
              : <div className="mb-3 border-t border-white/[0.08]" />}
            <div className="space-y-1">
              {section.items.map(item => {
                const Icon = item.icon
                return <NavLink key={item.name} to={item.href} end={item.href === "/admin/dashboard"}
                  title={collapsed ? item.name : undefined}
                  onClick={() => setMobileMenuOpen?.(false)}
                  className={({ isActive }) => cn(
                    "group relative flex min-h-10 items-center rounded-xl text-[13px] font-medium transition-all duration-200",
                    collapsed ? "justify-center px-0" : "gap-3 px-3",
                    isActive ? "bg-brand text-white shadow-md shadow-brand/20" : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  )}>
                  {({ isActive }) => <>
                    <Icon className={cn("h-[18px] w-[18px] shrink-0 transition-colors", isActive ? "text-white" : "text-slate-500 group-hover:text-slate-200")} />
                    {!collapsed && <span className="truncate">{item.name}</span>}
                    {!collapsed && isActive && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white/90" />}
                  </>}
                </NavLink>
              })}
            </div>
          </section>)}
        </nav>
      </ScrollArea>

      {!collapsed && <div className="mx-3 mb-3 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
          <ShieldCheck className="h-4 w-4 text-emerald-400" /> Admin workspace
        </div>
        <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">Manage platform activity and system settings.</p>
      </div>}

      <div className="shrink-0 border-t border-white/[0.08] p-3">
        <button type="button" onClick={handleLogout} title={collapsed ? "Sign out" : undefined}
          className={cn("flex min-h-10 items-center rounded-xl text-[13px] font-medium text-slate-400 transition-colors hover:bg-rose-500/10 hover:text-rose-300",
            collapsed ? "w-full justify-center px-0" : "w-full gap-3 px-3")}>
          <LogOut className="h-[18px] w-[18px] shrink-0" />
          {!collapsed && <span>Sign out</span>}
        </button>
      </div>
    </aside>
  )
}
