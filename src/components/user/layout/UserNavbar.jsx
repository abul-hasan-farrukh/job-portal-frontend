import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Search,
  MapPin,
  Sparkles,
  Target,
  UserRound,
  FileText,
  Bookmark,
  ScrollText,
  Settings,
  LogOut,
  ChevronDown,
  BriefcaseBusiness,
  X,
  Menu,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/store/user/userAuth";

const getInitials = (name = "") =>
  name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "U";

export default function UserNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { savedJobs = [] } = useSelector((state) => state.savedJob || {});

  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const userName = user?.fullName || "User";
  const profileImage = user?.profileImage;

  useEffect(() => {
    setImageFailed(false);
  }, [profileImage]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSearchOpen(false);
  }, [location.pathname]);

  const handleSearch = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("q", searchQuery.trim());
    if (searchLocation.trim()) params.set("location", searchLocation.trim());

    navigate(`/jobs${params.toString() ? `?${params.toString()}` : ""}`);
    setMobileSearchOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  const navLinkClass = (path) =>
    `inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive(path)
        ? "bg-brand/10 text-brand"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
    }`;

  const UserAvatar = ({ size = "h-10 w-10" }) => (
    <div
      className={`${size} relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-brand text-sm font-semibold text-white shadow-sm`}
    >
      {profileImage && !imageFailed ? (
        <img
          src={profileImage}
          alt={`${userName}'s profile`}
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span aria-label={`${userName} initials`}>{getInitials(userName)}</span>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm shadow-slate-900/[0.03] backdrop-blur-xl">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          {/* Brand */}
          <Link
            to="/jobs"
            aria-label="Aimbitious home"
            className="flex shrink-0 items-center"
          >
            <img
              src="/logo.png"
              alt="Aimbitious"
              className="h-9 w-auto max-w-[170px] object-contain sm:h-10"
            />
          </Link>

          {/* Desktop job search */}
          <form
            onSubmit={handleSearch}
            className="mx-4 hidden min-w-0 max-w-[620px] flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 p-1.5 shadow-inner shadow-slate-900/[0.02] transition focus-within:border-brand/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-brand/10 md:flex"
          >
            <label className="flex min-w-0 flex-[1.25] items-center gap-2 px-2.5">
              <Search className="h-[18px] w-[18px] shrink-0 text-slate-400" />
              <Input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Job title, skill or keyword"
                aria-label="Job title, skill or keyword"
                className="h-9 min-w-0 border-0 bg-transparent px-0 text-sm shadow-none placeholder:text-slate-400 focus-visible:ring-0"
              />
            </label>

            <span className="h-7 w-px bg-slate-200" aria-hidden="true" />

            <label className="flex min-w-0 flex-1 items-center gap-2 px-2.5">
              <MapPin className="h-[18px] w-[18px] shrink-0 text-slate-400" />
              <Input
                value={searchLocation}
                onChange={(event) => setSearchLocation(event.target.value)}
                placeholder="City or remote"
                aria-label="Job location"
                className="h-9 min-w-0 border-0 bg-transparent px-0 text-sm shadow-none placeholder:text-slate-400 focus-visible:ring-0"
              />
            </label>

            <Button
              type="submit"
              className="h-10 shrink-0 rounded-lg bg-brand px-5 font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Search
            </Button>
          </form>

          {/* Desktop navigation */}
          <nav className="hidden shrink-0 items-center gap-1 lg:flex" aria-label="Main navigation">
            <Link to="/ai-tools" className={navLinkClass("/ai-tools")}>
              <Sparkles className="h-4 w-4" />
              AI Tools
            </Link>
            <Link to="/ai-match" className={navLinkClass("/ai-match")}>
              <Target className="h-4 w-4" />
              AI Match
            </Link>
          </nav>

          {/* User menu */}
          <div className="flex shrink-0 items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-600 hover:bg-slate-100 md:hidden"
              aria-label="Toggle job search"
              onClick={() => setMobileSearchOpen((open) => !open)}
            >
              {mobileSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-auto gap-2 rounded-full p-1.5 pl-2 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-brand/40"
                  aria-label="Open account menu"
                >
                  <UserAvatar size="h-9 w-9" />
                  <span className="hidden max-w-[120px] truncate text-sm font-semibold text-slate-700 xl:block">
                    {userName}
                  </span>
                  <ChevronDown className="hidden h-4 w-4 text-slate-400 xl:block" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="mt-2 w-64 rounded-xl border-slate-200 p-2 shadow-xl">
                <DropdownMenuLabel className="px-2 py-3">
                  <div className="flex items-center gap-3">
                    <UserAvatar size="h-11 w-11" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900">{userName}</p>
                      <p className="truncate text-xs font-normal text-slate-500">
                        {user?.email || ""}
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem onSelect={() => navigate("/profile")} className="cursor-pointer rounded-lg py-2.5">
                  <UserRound className="mr-2 h-4 w-4 text-slate-500" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/applications")} className="cursor-pointer rounded-lg py-2.5">
                  <FileText className="mr-2 h-4 w-4 text-slate-500" />
                  My Applications
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/saved-jobs")} className="cursor-pointer rounded-lg py-2.5">
                  <Bookmark className="mr-2 h-4 w-4 text-slate-500" />
                  Saved Jobs
                  {savedJobs.length > 0 && (
                    <span className="ml-auto inline-flex min-w-5 items-center justify-center rounded-full bg-brand px-1.5 py-0.5 text-[10px] font-bold text-white">
                      {savedJobs.length}
                    </span>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/resumes")} className="cursor-pointer rounded-lg py-2.5">
                  <ScrollText className="mr-2 h-4 w-4 text-slate-500" />
                  My Resumes
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/settings")} className="cursor-pointer rounded-lg py-2.5">
                  <Settings className="mr-2 h-4 w-4 text-slate-500" />
                  Settings
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={handleLogout}
                  className="cursor-pointer rounded-lg py-2.5 text-red-600 focus:bg-red-50 focus:text-red-700"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-600 hover:bg-slate-100 lg:hidden"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile search panel */}
        {mobileSearchOpen && (
          <form onSubmit={handleSearch} className="space-y-2 border-t border-slate-100 py-4 md:hidden">
            <label className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 focus-within:border-brand/50 focus-within:ring-4 focus-within:ring-brand/10">
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <Input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Job title, skill or keyword"
                aria-label="Job title, skill or keyword"
                className="h-full border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
              />
            </label>
            <label className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 focus-within:border-brand/50 focus-within:ring-4 focus-within:ring-brand/10">
              <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
              <Input
                value={searchLocation}
                onChange={(event) => setSearchLocation(event.target.value)}
                placeholder="City or remote"
                aria-label="Job location"
                className="h-full border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
              />
            </label>
            <Button type="submit" className="h-11 w-full rounded-xl bg-brand font-semibold text-white">
              <Search className="mr-2 h-4 w-4" />
              Search jobs
            </Button>
          </form>
        )}

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <nav className="grid gap-1 border-t border-slate-100 py-3 lg:hidden" aria-label="Mobile navigation">
            <Link to="/ai-tools" className={navLinkClass("/ai-tools")}>
              <Sparkles className="h-4 w-4" />
              AI Tools
            </Link>
            <Link to="/ai-match" className={navLinkClass("/ai-match")}>
              <Target className="h-4 w-4" />
              AI Match
            </Link>
            <Link to="/jobs" className={navLinkClass("/jobs")}>
              <BriefcaseBusiness className="h-4 w-4" />
              Browse opportunities
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
