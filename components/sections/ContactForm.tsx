"use client";

import { useState, useRef } from "react";
import { submitInquiry } from "@/actions/submit-inquiry";
import { Input, Select, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const PROJECT_TYPES = [
  { label: "Corporate Office", value: "Corporate Office" },
  { label: "Hospitality / Hotel", value: "Hospitality / Hotel" },
  { label: "Restaurant / Lounge", value: "Restaurant / Lounge" },
  { label: "Residential", value: "Residential" },
  { label: "Furniture Only", value: "Furniture Only" },
  { label: "Other", value: "Other" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitInquiry(formData);

    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error);
    }
  }

  /* ── Success state ───────────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div className="bg-charcoal p-10 md:p-12">
        <div className="w-8 h-px bg-gold mb-8" aria-hidden="true" />
        <h3 className="font-heading font-semibold text-warm-white text-2xl mb-4">
          Inquiry received.
        </h3>
        <p className="font-body text-stone leading-relaxed mb-8">
          Thank you for reaching out. We&apos;ll review your project details and get
          back to you within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-[11px] tracking-[0.15em] uppercase font-body font-medium text-grey hover:text-gold transition-colors"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  /* ── Form ────────────────────────────────────────────────────────────── */
  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      {/* Honeypot — hidden from real users, bots fill it in */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label htmlFor="_honey">Leave this field blank</label>
        <input
          type="text"
          id="_honey"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            autoComplete="name"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            autoComplete="email"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Phone"
            name="phone"
            type="tel"
            placeholder="+234 800 000 0000"
            autoComplete="tel"
          />
          <Select
            label="Project Type"
            name="projectType"
            options={PROJECT_TYPES}
          />
        </div>

        <Textarea
          label="Message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your space, timeline, and what you're looking to achieve."
        />
      </div>

      {/* Error message */}
      {status === "error" && errorMsg && (
        <p
          role="alert"
          className="mt-4 text-sm font-body text-red-600 border border-red-200 bg-red-50 px-4 py-3"
        >
          {errorMsg}
        </p>
      )}

      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          className={status === "submitting" ? "opacity-70 cursor-not-allowed" : ""}
        >
          {status === "submitting" ? "Sending…" : "Send Inquiry"}
        </Button>
        <p className="text-[11px] font-body text-grey">
          * Required fields
        </p>
      </div>
    </form>
  );
}
