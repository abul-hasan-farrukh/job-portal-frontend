import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../../validations/authSchemas";

import AuthLayout from "../../components/auth/AuthLayout";
import GoogleButton from "../../components/auth/GoogleButton";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { PasswordInput } from "../../components/ui/password-input";
import { Label } from "../../components/ui/label";

import {
  AlertCircle,
  ArrowRight,
  Loader2,
  Lock,
  Mail,
} from "lucide-react";

import { resetError } from "../../store/user/userAuth";
import { loginUser } from "../../store/user/userThunk";
import { getRoleBasedRedirect } from "../../utils/roleRedirect";
import { googleLogin } from "../../store/user/userThunk";

export default function Login() {
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
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

 const handleGoogleSuccess = (idToken) => {
  dispatch(googleLogin({ idToken }));
};

  // Redirect users who are already authenticated.
  useEffect(() => {
    if (isAuthenticated && user) {
      const redirectPath = getRoleBasedRedirect(user.role);

      navigate(redirectPath, { replace: true });
    }
  }, [isAuthenticated, user, navigate]);

  // Clear authentication errors when leaving the page.
  useEffect(() => {
    return () => {
      dispatch(resetError());
    };
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <AuthLayout
      title="Welcome back"
      description="Sign in to continue your job search journey."
      footerText="Don't have an account?"
      footerLink="/register"
      footerLinkText="Create account"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
      >
        {/* Authentication error */}
        {error && (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 animate-in slide-in-from-top-2"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-red-900">
                Authentication failed
              </p>

              <p className="mt-1 break-words text-sm leading-relaxed text-red-700">
                {error}
              </p>
            </div>
          </div>
        )}

        {/* Email field */}
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-semibold text-slate-700"
          >
            Email address
          </Label>

          <div className="group relative">
            <Mail
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#080D4D]"
            />

            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              {...register("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "email-error" : undefined
              }
              disabled={isLoading}
              className={cn(
                "h-12 rounded-xl border-slate-200 bg-white pl-11 text-sm shadow-sm transition-all placeholder:text-slate-400 focus-visible:ring-2",
                errors.email
                  ? "border-red-300 focus-visible:ring-red-200"
                  : "focus-visible:border-[#080D4D] focus-visible:ring-[#080D4D]/15"
              )}
            />
          </div>

          {errors.email && (
            <p
              id="email-error"
              className="flex items-center gap-1.5 text-xs font-medium text-red-600"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-3">
            <Label
              htmlFor="password"
              className="text-sm font-semibold text-slate-700"
            >
              Password
            </Label>

            <Link
              to="/forgot-password"
              className="text-xs font-semibold text-[#080D4D] transition-colors hover:text-indigo-700 hover:underline underline-offset-4"
            >
              Forgot password?
            </Link>
          </div>

          <div className="group relative">
            <Lock
              aria-hidden="true"
              className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#080D4D]"
            />

            <PasswordInput
              id="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              {...register("password")}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={
                errors.password ? "password-error" : undefined
              }
              disabled={isLoading}
              className={cn(
                "h-12 rounded-xl border-slate-200 bg-white pl-11 text-sm shadow-sm transition-all placeholder:text-slate-400 focus-visible:ring-2",
                errors.password
                  ? "border-red-300 focus-visible:ring-red-200"
                  : "focus-visible:border-[#080D4D] focus-visible:ring-[#080D4D]/15"
              )}
            />
          </div>

          {errors.password && (
            <p
              id="password-error"
              className="flex items-center gap-1.5 text-xs font-medium text-red-600"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Sign-in button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="group relative h-12 w-full overflow-hidden rounded-xl bg-[#080D4D] text-sm font-semibold text-white shadow-lg shadow-[#080D4D]/15 transition-all duration-300 hover:bg-[#101968] hover:shadow-xl hover:shadow-[#080D4D]/20 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative flex items-center justify-center">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                Sign in to your account
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </>
            )}
          </span>
        </Button>

        {/* Divider */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-xs font-medium text-slate-400">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        {/* Google sign-in */}
        <GoogleButton
  onSuccess={handleGoogleSuccess}
  disabled={isLoading}
/>

        {/* Terms and privacy */}
        <p className="px-1 pt-2 text-center text-xs leading-6 text-slate-500">
          By signing in, you agree to our{" "}
          <Link
            to="/terms"
            className="font-medium text-[#080D4D] underline decoration-slate-300 underline-offset-4 transition-colors hover:decoration-[#080D4D]"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="font-medium text-[#080D4D] underline decoration-slate-300 underline-offset-4 transition-colors hover:decoration-[#080D4D]"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </AuthLayout>
  );
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}