import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import StatsCard from "@/components/employer/dashboard/StatsCard"
import RecentApplicationsTable from "@/components/employer/dashboard/RecentApplicationsTable"
import ActiveJobsList from "@/components/employer/dashboard/ActiveJobsList"
import {
  Briefcase,
  FileText,
  Users,
  UserCheck,
  PlusCircle,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  Lightbulb,
  CircleAlert,
  CheckCircle2,
} from "lucide-react"
import { Link } from "react-router-dom"
import { fetchMyJobs } from "@/store/job/jobThunk"
import { fetchCompanyApplications } from "@/store/application/applicationThunk"

export default function Dashboard() {
  const dispatch = useDispatch()

  const { myJobs = [], isLoading: jobsLoading } = useSelector(
    (state) => state.job
  )
  const { applications = [], isLoading: appsLoading } = useSelector(
    (state) => state.application
  )
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(fetchMyJobs())
    dispatch(fetchCompanyApplications({ filters: {} }))
  }, [dispatch])

  const totalJobs = myJobs.length
  const activeJobs = myJobs.filter((job) => job.status === "OPEN").length
  const totalApps = applications.length
  const shortlisted = applications.filter(
    (application) =>
      application.status === "SHORTLISTED" ||
      application.status === "INTERVIEW_SCHEDULED"
  ).length

  const stats = [
    {
      title: "Total Jobs Posted",
      value: jobsLoading ? "…" : totalJobs.toString(),
      icon: Briefcase,
      loading: jobsLoading,
    },
    {
      title: "Active Jobs",
      value: jobsLoading ? "…" : activeJobs.toString(),
      icon: TrendingUp,
      loading: jobsLoading,
    },
    {
      title: "Applications Received",
      value: appsLoading ? "…" : totalApps.toString(),
      icon: FileText,
      loading: appsLoading,
    },
    {
      title: "Shortlisted / Interview",
      value: appsLoading ? "…" : shortlisted.toString(),
      icon: UserCheck,
      loading: appsLoading,
    },
  ]

  const firstName = user?.fullName?.trim()?.split(/\s+/)[0] || "there"

  const insights = [
    {
      icon: Sparkles,
      tone: "blue",
      title: "15 candidates auto-shortlisted today",
      description:
        "Based on AI analysis, these candidates match 90%+ of your job requirements for Senior React Developer position.",
    },
    {
      icon: CheckCircle2,
      tone: "emerald",
      title: "3 high-potential candidates need review",
      description:
        "These candidates have exceptional skills but limited experience. Worth considering for junior roles.",
    },
    {
      icon: Lightbulb,
      tone: "amber",
      title: "Suggestion: Update job description",
      description:
        "Your DevOps Engineer posting has low application rate. Consider adjusting salary range or requirements.",
    },
  ]

  const insightStyles = {
    blue: {
      icon: "bg-blue-100 text-blue-700",
      marker: "bg-blue-500",
    },
    emerald: {
      icon: "bg-emerald-100 text-emerald-700",
      marker: "bg-emerald-500",
    },
    amber: {
      icon: "bg-amber-100 text-amber-700",
      marker: "bg-amber-500",
    },
  }

  const quickActions = [
    {
      title: "Post a New Job",
      description: "Create and publish a new job listing",
      href: "/employer/jobs/create",
      icon: PlusCircle,
      tone: "blue",
    },
    {
      title: "Review Applications",
      description: "24 new applications waiting for review",
      href: "/employer/applications",
      icon: FileText,
      tone: "emerald",
    },
    {
      title: "Browse Candidates",
      description: "Search through candidate database",
      href: "/employer/candidates",
      icon: Users,
      tone: "violet",
    },
  ]

  const actionStyles = {
    blue: "bg-blue-50 text-blue-700 group-hover:bg-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100",
    violet: "bg-violet-50 text-violet-700 group-hover:bg-violet-100",
  }

  return (
    <main className="min-h-full bg-slate-50/70 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px] space-y-7">
        {/* Page heading */}
        <section className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-700">
                Employer workspace
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Dashboard
            </h1>
            <p className="mt-1.5 text-sm text-slate-500 sm:text-[15px]">
              Welcome back, {firstName}. Here's an overview of your hiring
              activity.
            </p>
          </div>

          <Link to="/employer/jobs/create" className="shrink-0">
            <Button
              size="lg"
              className="h-11 w-full rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/25 sm:w-auto"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Job
              <ArrowUpRight className="ml-2 h-4 w-4 opacity-80" />
            </Button>
          </Link>
        </section>

        {/* Statistics */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="min-w-0 rounded-2xl transition-transform duration-200 hover:-translate-y-0.5"
            >
              <StatsCard {...stat} />
            </div>
          ))}
        </section>

        {/* AI insights */}
        <Card className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500" />
          <CardHeader className="flex flex-col gap-3 space-y-0 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-base font-bold text-slate-900 sm:text-lg">
                  AI Screening Insights
                </CardTitle>
                <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                  Helpful signals to support your hiring decisions
                </p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              AI insights
            </span>
          </CardHeader>

          <CardContent className="pt-1">
            <div className="grid grid-cols-1 gap-3 xl:grid-cols-3">
              {insights.map((insight) => {
                const Icon = insight.icon
                const styles = insightStyles[insight.tone]

                return (
                  <div
                    key={insight.title}
                    className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors hover:border-slate-200 hover:bg-white"
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="mb-1 flex items-start gap-2">
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${styles.marker}`}
                        />
                        <p className="text-sm font-semibold leading-5 text-slate-800">
                          {insight.title}
                        </p>
                      </div>
                      <p className="pl-3.5 text-xs leading-5 text-slate-500">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2 text-xs text-slate-500">
                <CircleAlert className="h-4 w-4 shrink-0 text-slate-400" />
                AI recommendations are intended to assist your review process.
              </p>
              <Link to="/employer/ai-screening">
                <Button
                  variant="outline"
                  className="h-9 w-full rounded-lg border-slate-200 text-xs font-semibold text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:w-auto"
                >
                  View AI Dashboard
                  <ArrowUpRight className="ml-2 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent applications */}
        <section className="space-y-3">
          <RecentApplicationsTable />
        </section>

        {/* Active jobs and quick actions */}
        <section className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
          <div className="min-w-0">
            <ActiveJobsList />
          </div>

          <Card className="h-fit overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            <CardHeader className="border-b border-slate-100 px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base font-bold text-slate-900">
                    Quick Actions
                  </CardTitle>
                  <p className="mt-1 text-xs text-slate-500">
                    Shortcuts to common hiring tasks
                  </p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  <TrendingUp className="h-4 w-4" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-2.5 p-4">
              {quickActions.map((action) => {
                const Icon = action.icon

                return (
                  <Link
                    key={action.title}
                    to={action.href}
                    className="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-slate-50 hover:shadow-sm"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${actionStyles[action.tone]}`}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-blue-700">
                        {action.title}
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-slate-500">
                        {action.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                  </Link>
                )
              })}
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
