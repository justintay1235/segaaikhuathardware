"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { submitContact, type ContactState } from "@/app/(site)/contact/actions";

const inputClasses =
  "w-full border-b border-maroon-900/20 bg-transparent py-3 text-sm text-maroon-950 placeholder:text-maroon-900/40 focus:border-maroon-800 focus:outline-none transition-colors";

const initialState: ContactState = { success: false };

const EXTRA_INTERESTS = ["Custom Engineering", "Maintenance & Support"];

export default function ContactForm({ productOptions = [] }: { productOptions?: string[] }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const searchParams = useSearchParams();
  const requestedInterest = searchParams.get("interest") ?? "";

  const interestOptions = Array.from(new Set([...productOptions, ...EXTRA_INTERESTS]));
  const hasMatch = interestOptions.includes(requestedInterest);

  return (
    <div className="relative border border-maroon-900/10 bg-ivory-50 p-9 sm:p-12">
      <AnimatePresence mode="wait">
        {state.success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center gap-4 py-16"
          >
            <CheckCircle2 className="text-maroon-700" size={40} strokeWidth={1.4} />
            <h3 className="font-display text-2xl text-maroon-950">
              Message received.
            </h3>
            <p className="text-sm text-maroon-900/60 max-w-sm">
              Thank you for reaching out — an engineer from our team will
              respond within one business day.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            action={formAction}
            className="flex flex-col gap-8"
          >
            {requestedInterest && (
              <p className="text-xs uppercase tracking-[0.15em] text-maroon-500">
                Asking about: <span className="text-maroon-800">{requestedInterest}</span>
              </p>
            )}

            <div className="grid sm:grid-cols-2 gap-8">
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">
                  Full Name
                </span>
                <input required name="name" type="text" placeholder="Jane Doe" className={inputClasses} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  className={inputClasses}
                />
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">
                  Phone
                </span>
                <input name="phone" type="tel" placeholder="+234 800 000 0000" className={inputClasses} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">
                  Interest
                </span>
                <select
                  name="interest"
                  required
                  defaultValue={hasMatch ? requestedInterest : ""}
                  className={inputClasses}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {interestOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                className={`${inputClasses} resize-none`}
              />
            </label>

            {state.error && <p className="text-sm text-red-600">{state.error}</p>}

            <button
              type="submit"
              disabled={pending}
              className="group inline-flex items-center justify-center gap-2.5 self-start px-8 py-3.5 text-[0.8rem] uppercase tracking-[0.18em] font-medium bg-maroon-800 text-ivory-50 hover:bg-maroon-950 transition-all duration-500 disabled:opacity-60"
            >
              <span>{pending ? "Sending..." : "Send Message"}</span>
              {!pending && (
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  &rarr;
                </span>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
