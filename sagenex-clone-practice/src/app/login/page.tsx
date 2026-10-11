import Link from "next/link";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";
import { LoginForm } from "@/components/home/LoginForm";

export default function LoginPage() {
  return (
    <main className="grid min-h-[calc(100vh-40px)] flex-1 lg:grid-cols-2">
      <section className="flex flex-col justify-between bg-brand-red px-8 py-12 text-white">
        <BrandMark
          showWordmark
          className="[&_span]:text-white [&_svg]:brightness-110"
        />
        <div>
          <h1 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            A Civilization of Heritage & Innovation
          </h1>
          <p className="mt-4 text-sm text-white/85">
            KYC Compliant · AI-Powered · Structured Returns
          </p>
          <p className="mt-6 max-w-md text-sm text-white/75">
            This is a practice login layout only. No authentication, accounts,
            or APIs are wired.
          </p>
        </div>
        <p className="text-xs uppercase tracking-wider text-white/70">
          Demo / Practice clone
        </p>
      </section>

      <section className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md rounded-3xl border border-border p-8 shadow-[var(--card-shadow)]">
          <div className="flex justify-center">
            <BrandMark showWordmark={false} size="lg" />
          </div>
          <h2 className="mt-6 text-center font-display text-2xl font-extrabold">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-muted">
            Enter your email to continue. (UI only — nothing is submitted.)
          </p>
          <LoginForm />
          <p className="mt-4 text-center text-xs text-muted">
            By continuing, you accept that this is a fictional teaching form.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/dashboard" variant="secondary" className="w-full">
              Enter member dashboard (demo)
            </Button>
            <Button href="/admin" variant="ghost" className="w-full">
              Enter admin console (demo)
            </Button>
            <p className="text-center text-sm text-muted">
              No account?{" "}
              <Link href="/" className="font-semibold text-brand-red">
                Back home
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
