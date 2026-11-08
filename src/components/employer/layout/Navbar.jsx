import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "@/store/user/userAuth"
import {
  Menu,
  Search,
  ChevronDown,
  Building2,
  Settings,
  LogOut,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar({ onMenuClick }) {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  const getInitials = (fullName) => {
    if (!fullName) return "E"

    const parts = fullName.trim().split(/\s+/)

    if (parts.length === 1) return parts[0][0].toUpperCase()

    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
  }

  const initials = getInitials(user?.fullName)

  return (
    <header className="sticky top-0 z-40 flex h-[72px] shrink-0 items-center gap-3 border-b border-slate-200/80 bg-white/90 px-3 shadow-[0_2px_12px_rgba(15,23,42,0.03)] backdrop-blur-xl sm:px-5 lg:px-7">
      {/* Mobile menu */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Open navigation menu"
        className="h-10 w-10 shrink-0 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 lg:hidden"
        onClick={onMenuClick}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Search */}
      <div className="hidden w-full max-w-[440px] md:block">
        <div className="group relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-[17px] w-[17px] -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600" />
          <Input
            type="search"
            placeholder="Search jobs, candidates, applications..."
            aria-label="Search jobs, candidates, and applications"
            className="h-10 rounded-xl border-slate-200 bg-slate-50/80 pl-10 pr-4 text-[13px] text-slate-700 shadow-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus-visible:border-blue-300 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-blue-500/10"
          />
          <span className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-400 lg:inline-flex">
            Search
          </span>
        </div>
      </div>

      {/* Right side: account menu */}
      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-3 py-1.5 sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-semibold tracking-wide text-blue-700">
            EMPLOYER WORKSPACE
          </span>
        </div>

        <div className="hidden h-8 w-px bg-slate-200 sm:block" />

        {/* Profile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="group h-auto gap-2 rounded-xl px-2 py-1.5 transition-all hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-500/20 sm:gap-3 sm:px-2.5"
            >
              <Avatar className="h-9 w-9 border border-white shadow-sm ring-1 ring-slate-200">
                {user?.profileImage && (
                  <AvatarImage
                    src={user.profileImage}
                    alt={user?.fullName || "Employer"}
                  />
                )}
                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div className="hidden min-w-0 text-left sm:block">
                <p className="max-w-[150px] truncate text-[13px] font-semibold leading-5 text-slate-800">
                  {user?.fullName || "Employer"}
                </p>
                <p className="text-[11px] leading-4 text-slate-500">
                  Employer account
                </p>
              </div>

              <ChevronDown className="hidden h-4 w-4 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180 sm:block" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={10}
            className="w-[260px] rounded-2xl border-slate-200 p-2 shadow-xl shadow-slate-900/10"
          >
            <DropdownMenuLabel className="px-3 py-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border border-slate-100">
                  {user?.profileImage && (
                    <AvatarImage
                      src={user.profileImage}
                      alt={user?.fullName || "Employer"}
                    />
                  )}
                  <AvatarFallback className="bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white">
                    {initials}
                  </AvatarFallback>
                </Avatar>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {user?.fullName || "Employer"}
                  </p>
                  <p className="mt-0.5 truncate text-xs font-normal text-slate-500">
                    {user?.email || "Employer account"}
                  </p>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator className="my-1" />

            <DropdownMenuItem
              onClick={() => navigate("/employer/company")}
              className="cursor-pointer gap-2.5 rounded-xl px-3 py-2.5 text-[13px] text-slate-600 focus:bg-blue-50 focus:text-blue-700"
            >
              <Building2 className="h-4 w-4" />
              Company Profile
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => navigate("/employer/settings")}
              className="cursor-pointer gap-2.5 rounded-xl px-3 py-2.5 text-[13px] text-slate-600 focus:bg-blue-50 focus:text-blue-700"
            >
              <Settings className="h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator className="my-1" />

            <DropdownMenuItem
              onClick={handleLogout}
              className="cursor-pointer gap-2.5 rounded-xl px-3 py-2.5 text-[13px] text-rose-600 focus:bg-rose-50 focus:text-rose-700"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
