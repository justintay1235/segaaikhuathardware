"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "./actions";

const inputClasses =
  "w-full border-b border-ivory-50/20 bg-transparent py-3 text-sm text-ivory-50 placeholder:text-ivory-300/40 focus:border-gold-400 focus:outline-none transition-colors";

export default function LoginForm({ from }: { from?: string }) {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(
    loginAction,
    {}
  );

  return (
    <form action={formAction} className="flex flex-col gap-6 border border-ivory-50/15 p-9">
      <input type="hidden" name="from" value={from ?? "/admin"} />

      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-ivory-300">Email</span>
        <input required type="email" name="email" placeholder="admin@example.com" className={inputClasses} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-ivory-300">Password</span>
        <input required type="password" name="password" placeholder="••••••••" className={inputClasses} />
      </label>

      {state.error && <p className="text-sm text-red-300">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[0.8rem] uppercase tracking-[0.18em] font-medium bg-gold-500 text-maroon-950 hover:bg-gold-400 transition-all duration-500 disabled:opacity-60"
      >
        {pending ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
