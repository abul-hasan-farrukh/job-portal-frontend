import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../../validations/authSchemas";

import GoogleButton from "../../components/auth/GoogleButton";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { PasswordInput } from "../../components/ui/password-input";
import { Label } from "../../components/ui/label";

import {
  AlertCircle,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  FileCheck2,
  Loader2,
  LockKeyhole,
  Mail,
  Sparkles,
  Target,
  UserRound,
  Users,
  Zap,
} from "lucide-react";

import { registerUser } from "../../store/user/userThunk";
import { resetError } from "../../store/user/userAuth";
import { getRoleBasedRedirect } from "../../utils/roleRedirect";

// Brand colors:
// Primary: #080D4D
// Background: #F8FAFC

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    isAuthenticated,
    user,
  } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "ROLE_JOB_SEEKER",
    },
  });

  const selectedRole = watch("role");

  // Preserve role-based redirection after authentication.
  useEffect(() => {
    if (isAuthenticated && user) {
      const redirectPath = getRoleBasedRedirect(user.role);

      navigate(redirectPath, { replace: true });
    }
  }, [isAuthenticated, user, navigate]);

  // Clear authentication errors when the page unmounts.
  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  const selectRole = (role) => {
    setValue("role", role, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const benefits = [
    {
      icon: Target,
      title: "Discover opportunities",
      description:
        "Find opportunities aligned with your skills and career goals.",
    },
    {
      icon: FileCheck2,
      title: "Build better applications",
      description:
        "Create job-ready applications and present your skills confidently.",
    },
    {
      icon: Zap,
      title: "Make your next move",
      description:
        "Manage your career journey from one convenient platform.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Main Registration Layout */}
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[0.95fr_1.05fr]">

        {/* ================================================== */}
        {/* LEFT PANEL: BRANDING AND PRODUCT INTRODUCTION     */}
        {/* ================================================== */}

        <section className="relative hidden overflow-hidden bg-[#0d1472] px-10 py-10 text-white lg:flex lg:flex-col xl:px-16">

          {/* Background Decorations */}
          <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-400/20 blur-[110px]" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(99,102,241,0.18),transparent_35%)]" />

          {/* Brand */}
          <Link
            to="/"
            aria-label="Aimbitious home"
            className="relative z-10 flex w-fit items-center"
          >
            {/* <img
              src="/logo.png"
              alt="Aimbitious - AI Powered Job Portal"
              className="h-20 w-auto object-contain"
            /> */}
          </Link>

          {/* Hero Content */}
          <div className="relative z-10 my-auto max-w-xl py-12">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-blue-300" />
              Your next chapter starts here
            </div>

            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight xl:text-6xl">
              Your talent.
              <br />

              Your ambition.
              <br />

              <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-white bg-clip-text text-transparent">
                Your next big move.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-blue-100/75 xl:text-lg">
              Build your professional profile, discover relevant
              opportunities, and take the next step in your career
              with Aimbitious.
            </p>

            {/* Product Illustration */}
            <div className="relative mt-10 overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] p-5 shadow-2xl shadow-black/10 backdrop-blur-md xl:p-7">

              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-blue-200/70">
                    Your career workspace
                  </p>

                  <h2 className="mt-2 text-lg font-semibold text-white">
                    Ready for your next opportunity?
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Sparkles className="h-5 w-5 text-blue-200" />
                </div>
              </div>

              {/* Mock Dashboard Cards */}
              <div className="space-y-3">

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-400/15">
                    <UserRound className="h-6 w-6 text-blue-200" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-white">
                      Your professional profile
                    </p>

                    <p className="mt-1 text-sm text-blue-100/60">
                      Showcase your skills and experience
                    </p>
                  </div>

                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-300" />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] p-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-400/15">
                    <Target className="h-6 w-6 text-indigo-200" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-white">
                      Relevant opportunities
                    </p>

                    <p className="mt-1 text-sm text-blue-100/60">
                      Explore jobs that match your goals
                    </p>
                  </div>

                  <ArrowRight className="h-5 w-5 shrink-0 text-blue-200" />
                </div>

              </div>

              {/* Decorative Bottom Gradient */}
              <div className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl" />
            </div>

            {/* Product Benefits */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3">

              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="space-y-2">
                    <Icon className="h-5 w-5 text-blue-300" />

                    <h3 className="text-sm font-semibold text-white">
                      {benefit.title}
                    </h3>

                    <p className="text-xs leading-5 text-blue-100/60">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-blue-100/50">

            <p>
              © {new Date().getFullYear()} Aimbitious
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition-colors hover:text-white"
              >
                Terms
              </Link>
            </div>

          </div>
        </section>

        {/* ================================================== */}
        {/* RIGHT PANEL: REGISTRATION FORM                     */}
        {/* ================================================== */}

        <section className="flex min-w-0 flex-col bg-white">

          {/* Mobile Brand Header */}
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-8 lg:justify-end lg:border-0 lg:px-10 lg:py-8">

            <Link
              to="/"
              aria-label="Aimbitious home"
              className="flex items-center gap-2.5 lg:hidden"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#080D4D] text-white">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>

              <div>
                <span className="text-lg font-bold tracking-tight text-[#080D4D]">
                  Aimbitious
                </span>

                <p className="text-[9px] font-medium tracking-wider text-slate-500">
                  AI POWERED JOB PORTAL
                </p>
              </div>
            </Link>

            <p className="hidden text-sm text-slate-500 sm:block">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#080D4D] transition-colors hover:text-indigo-600"
              >
                Sign in
              </Link>
            </p>

          </div>

          {/* Form Container */}
          <div className="flex flex-1 items-center justify-center px-5 py-8 sm:px-10 sm:py-12 lg:px-12 xl:px-20">

            <div className="w-full max-w-[460px]">

              {/* Mobile Welcome Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-[#080D4D] lg:hidden">
                <Sparkles className="h-3.5 w-3.5" />
                Your next opportunity starts here
              </div>

              {/* Form Heading */}
              <div className="mb-8">

                <div className="mb-5 hidden h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-[#080D4D] lg:flex">
                  <Users className="h-6 w-6" />
                </div>

                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Create your account
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                  Join Aimbitious and take the next step in your
                  professional journey.
                </p>

              </div>

              {/* Registration Error */}
              {error && (
                <div
                  role="alert"
                  className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-red-900">
                      Registration failed
                    </p>

                    <p className="mt-1 break-words text-sm leading-5 text-red-700">
                      {error}
                    </p>
                  </div>
                </div>
              )}

              {/* Registration Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >

                {/* Full Name */}
                <div className="space-y-2">

                  <Label
                    htmlFor="fullName"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Full name
                  </Label>

                  <div className="group relative">

                    <UserRound className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#080D4D]" />

                    <Input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      {...register("fullName")}
                      disabled={isLoading}
                      aria-invalid={Boolean(errors.fullName)}
                      className={cn(
                        "h-12 rounded-xl border-slate-200 bg-slate-50/50 pl-10 transition-all placeholder:text-slate-400 focus-visible:border-[#080D4D] focus-visible:ring-[#080D4D]/15",
                        errors.fullName &&
                        "border-red-300 focus-visible:border-red-500 focus-visible:ring-red-500/15"
                      )}
                    />

                  </div>

                  {errors.fullName && (
                    <p className="flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.fullName.message}
                    </p>
                  )}

                </div>

                {/* Email */}
                <div className="space-y-2">

                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </Label>

                  <div className="group relative">

                    <Mail className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#080D4D]" />

                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      {...register("email")}
                      disabled={isLoading}
                      aria-invalid={Boolean(errors.email)}
                      className={cn(
                        "h-12 rounded-xl border-slate-200 bg-slate-50/50 pl-10 transition-all placeholder:text-slate-400 focus-visible:border-[#080D4D] focus-visible:ring-[#080D4D]/15",
                        errors.email &&
                        "border-red-300 focus-visible:border-red-500 focus-visible:ring-red-500/15"
                      )}
                    />

                  </div>

                  {errors.email && (
                    <p className="flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.email.message}
                    </p>
                  )}

                </div>

                {/* Password */}
                <div className="space-y-2">

                  <Label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Password
                  </Label>

                  <div className="group relative">

                    <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#080D4D]" />

                    <PasswordInput
                      id="password"
                      autoComplete="new-password"
                      placeholder="Create a strong password"
                      {...register("password")}
                      disabled={isLoading}
                      aria-invalid={Boolean(errors.password)}
                      className={cn(
                        "h-12 rounded-xl border-slate-200 bg-slate-50/50 pl-10 transition-all placeholder:text-slate-400 focus-visible:border-[#080D4D] focus-visible:ring-[#080D4D]/15",
                        errors.password &&
                        "border-red-300 focus-visible:border-red-500 focus-visible:ring-red-500/15"
                      )}
                    />

                  </div>

                  {errors.password && (
                    <p className="flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.password.message}
                    </p>
                  )}

                </div>

                {/* Confirm Password */}
                <div className="space-y-2">

                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Confirm password
                  </Label>

                  <div className="group relative">

                    <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#080D4D]" />

                    <PasswordInput
                      id="confirmPassword"
                      autoComplete="new-password"
                      placeholder="Re-enter your password"
                      {...register("confirmPassword")}
                      disabled={isLoading}
                      aria-invalid={Boolean(errors.confirmPassword)}
                      className={cn(
                        "h-12 rounded-xl border-slate-200 bg-slate-50/50 pl-10 transition-all placeholder:text-slate-400 focus-visible:border-[#080D4D] focus-visible:ring-[#080D4D]/15",
                        errors.confirmPassword &&
                        "border-red-300 focus-visible:border-red-500 focus-visible:ring-red-500/15"
                      )}
                    />

                  </div>

                  {errors.confirmPassword && (
                    <p className="flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.confirmPassword.message}
                    </p>
                  )}

                </div>

                {/* Role Selection */}
                <div className="space-y-3 pt-1">

                  <div className="flex items-center justify-between gap-3">
                    <Label className="text-sm font-semibold text-slate-700">
                      I want to join as
                    </Label>

                    <span className="text-xs text-slate-400">
                      Choose a role
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">

                    {/* Job Seeker */}
                    <button
                      type="button"
                      onClick={() => selectRole("ROLE_JOB_SEEKER")}
                      disabled={isLoading}
                      aria-pressed={selectedRole === "ROLE_JOB_SEEKER"}
                      className={cn(
                        "relative flex min-h-[120px] flex-col items-start rounded-xl border p-4 text-left transition-all duration-200",
                        selectedRole === "ROLE_JOB_SEEKER"
                          ? "border-[#080D4D] bg-indigo-50/70 shadow-sm ring-1 ring-[#080D4D]/10"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      )}
                    >

                      <div className="flex w-full items-start justify-between">

                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                            selectedRole === "ROLE_JOB_SEEKER"
                              ? "bg-[#080D4D] text-white"
                              : "bg-slate-100 text-slate-600"
                          )}
                        >
                          <UserRound className="h-5 w-5" />
                        </div>

                        {selectedRole === "ROLE_JOB_SEEKER" && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#080D4D] text-white">
                            <Check className="h-3 w-3" />
                          </div>
                        )}

                      </div>

                      <span
                        className={cn(
                          "mt-3 text-sm font-semibold",
                          selectedRole === "ROLE_JOB_SEEKER"
                            ? "text-[#080D4D]"
                            : "text-slate-800"
                        )}
                      >
                        Job Seeker
                      </span>

                      <span className="mt-1 text-xs text-slate-500">
                        Find your next job
                      </span>

                    </button>

                    {/* Employer */}
                    <button
                      type="button"
                      onClick={() => selectRole("ROLE_EMPLOYER")}
                      disabled={isLoading}
                      aria-pressed={selectedRole === "ROLE_EMPLOYER"}
                      className={cn(
                        "relative flex min-h-[120px] flex-col items-start rounded-xl border p-4 text-left transition-all duration-200",
                        selectedRole === "ROLE_EMPLOYER"
                          ? "border-[#080D4D] bg-indigo-50/70 shadow-sm ring-1 ring-[#080D4D]/10"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                      )}
                    >

                      <div className="flex w-full items-start justify-between">

                        <div
                          className={cn(
                            "flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
                            selectedRole === "ROLE_EMPLOYER"
                              ? "bg-[#080D4D] text-white"
                              : "bg-slate-100 text-slate-600"
                          )}
                        >
                          <BriefcaseBusiness className="h-5 w-5" />
                        </div>

                        {selectedRole === "ROLE_EMPLOYER" && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#080D4D] text-white">
                            <Check className="h-3 w-3" />
                          </div>
                        )}

                      </div>

                      <span
                        className={cn(
                          "mt-3 text-sm font-semibold",
                          selectedRole === "ROLE_EMPLOYER"
                            ? "text-[#080D4D]"
                            : "text-slate-800"
                        )}
                      >
                        Employer
                      </span>

                      <span className="mt-1 text-xs text-slate-500">
                        Hire great talent
                      </span>

                    </button>

                  </div>

                  {errors.role && (
                    <p className="flex items-center gap-1.5 text-xs text-red-600">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      {errors.role.message}
                    </p>
                  )}

                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="group h-12 w-full rounded-xl bg-[#080D4D] text-sm font-semibold text-white shadow-lg shadow-indigo-950/10 transition-all duration-200 hover:bg-[#101969] hover:shadow-xl hover:shadow-indigo-950/15 disabled:cursor-not-allowed disabled:opacity-70"
                >

                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating your account...
                    </>
                  ) : (
                    <>
                      Create your account

                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}

                </Button>

                {/* Divider */}
                <div className="relative py-1">

                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-200" />
                  </div>

                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-xs font-medium text-slate-400">
                      OR CONTINUE WITH
                    </span>
                  </div>

                </div>

                {/* Google Sign Up */}
                <GoogleButton>
                  Sign up with Google
                </GoogleButton>

                {/* Terms and Privacy */}
                <p className="text-center text-xs leading-6 text-slate-500">
                  By creating an account, you agree to our{" "}

                  <Link
                    to="/terms"
                    className="font-medium text-[#080D4D] underline decoration-slate-300 underline-offset-4 transition-colors hover:text-indigo-600"
                  >
                    Terms of Service
                  </Link>

                  {" "}and{" "}

                  <Link
                    to="/privacy"
                    className="font-medium text-[#080D4D] underline decoration-slate-300 underline-offset-4 transition-colors hover:text-indigo-600"
                  >
                    Privacy Policy
                  </Link>.

                </p>

              </form>

              {/* Mobile Sign In */}
              <p className="mt-7 text-center text-sm text-slate-500 sm:hidden">
                Already have an account?{" "}

                <Link
                  to="/login"
                  className="font-semibold text-[#080D4D] hover:text-indigo-600"
                >
                  Sign in
                </Link>
              </p>

              {/* Mobile Footer */}
              <div className="mt-8 flex items-center justify-center gap-5 border-t border-slate-100 pt-5 text-xs text-slate-400 lg:hidden">

                <span>
                  © {new Date().getFullYear()} Aimbitious
                </span>

                <Link
                  to="/privacy"
                  className="transition-colors hover:text-[#080D4D]"
                >
                  Privacy
                </Link>

                <Link
                  to="/terms"
                  className="transition-colors hover:text-[#080D4D]"
                >
                  Terms
                </Link>

              </div>

            </div>
          </div>

        </section>
      </div>
    </main>
  );
}