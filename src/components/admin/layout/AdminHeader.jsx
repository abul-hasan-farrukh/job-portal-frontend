import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "@/store/user/userAuth"
import { Menu, Search, ChevronDown, User, Settings, LogOut, ShieldCheck, Command } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AdminHeader({ onMenuClick }) {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  const firstName = user?.firstName || ""
  const lastName = user?.lastName || ""
  const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Administrator"
  const initials = `${firstName[0] || "A"}${lastName[0] || ""}`.toUpperCase()

  return (
    <header className="sticky top-0 z-40 flex h-[72px] shrink-0 items-center gap-3 border-b border-slate-200/80 bg-white/95 px-4 shadow-[0_2px_12px_rgba(15,23,42,0.03)] backdrop-blur-xl sm:px-5 lg:px-7">
      <Button type="button" variant="ghost" size="icon" aria-label="Open navigation menu" onClick={onMenuClick}
        className="h-10 w-10 shrink-0 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-950 lg:hidden">
        <Menu className="h-5 w-5" />
      </Button>

      <div className="hidden w-full max-w-[480px] flex-1 md:block">
        <div className="group relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-brand" />
          <Input type="search" placeholder="Search users, jobs, companies..." aria-label="Search users, jobs, and companies"
            className="h-10 rounded-xl border-slate-200 bg-slate-50/80 pl-10 pr-16 text-[13px] placeholder:text-slate-400 focus-visible:border-brand/40 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-brand/10" />
          <span className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 sm:flex">
            <Command className="h-3 w-3" /> K
          </span>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1.5 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_3px_rgba(16,185,129,0.12)]" />
          <span className="text-[11px] font-semibold text-emerald-700">Admin workspace</span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button type="button" variant="ghost" className="h-auto gap-2 rounded-xl border border-transparent px-2 py-1.5 text-left transition-all hover:border-slate-200 hover:bg-slate-50 sm:gap-3 sm:px-2.5">
              <Avatar className="h-9 w-9 border border-rose-100 shadow-sm">
                <AvatarFallback className="bg-gradient-to-br from-rose-500 to-red-600 text-xs font-bold text-white">{initials}</AvatarFallback>
              </Avatar>
              <div className="hidden min-w-0 md:block">
                <p className="max-w-[150px] truncate text-[13px] font-semibold leading-tight text-slate-900">{fullName}</p>
                <p className="mt-1 flex items-center gap-1 text-[10px] font-medium text-slate-500">
                  <ShieldCheck className="h-3 w-3 text-rose-500" /> Administrator
                </p>
              </div>
              <ChevronDown className="hidden h-4 w-4 text-slate-400 md:block" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" sideOffset={10} className="w-64 rounded-2xl border-slate-200 p-1.5 shadow-xl shadow-slate-900/10">
            <DropdownMenuLabel className="px-3 py-3">
              <p className="truncate text-sm font-semibold text-slate-900">{fullName}</p>
              <p className="mt-1 truncate text-xs font-normal text-slate-500">{user?.email || "Administrator account"}</p>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2 py-1 text-[10px] font-semibold text-rose-700">
                <ShieldCheck className="h-3 w-3" /> Platform administrator
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/admin/settings")} className="cursor-pointer rounded-lg px-3 py-2.5 text-sm">
              <User className="mr-2.5 h-4 w-4 text-slate-500" /> Profile & account
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/admin/settings")} className="cursor-pointer rounded-lg px-3 py-2.5 text-sm">
              <Settings className="mr-2.5 h-4 w-4 text-slate-500" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-rose-600 focus:bg-rose-50 focus:text-rose-700">
              <LogOut className="mr-2.5 h-4 w-4" /> Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
