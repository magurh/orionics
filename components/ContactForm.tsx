"use client";

import { useMemo, useState } from "react";

type FormState = {
  email: string;
  title: string;
  topic: string;
  message: string;
};

const initial: FormState = { email: "", title: "", topic: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    const emailOk = /.+@.+\..+/.test(form.email.trim());
    return (
      emailOk &&
      form.title.trim().length >= 2 &&
      form.topic.trim().length >= 2 &&
      form.message.trim().length >= 10
    );
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setSubmitted(false);
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
    setForm(initial);
  }

  return (
    <div className="glass rounded-3xl p-6 md:p-8">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="text-base text-muted">E-mail</label>
          <input
            className="input mt-2"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="name@company.com"
            inputMode="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-base text-muted">Title</label>
            <input
              className="input mt-2"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Short subject"
              required
            />
          </div>
          <div>
            <label className="text-base text-muted">Topic</label>
            <input
              className="input mt-2"
              value={form.topic}
              onChange={(e) => update("topic", e.target.value)}
              placeholder="e.g., Research, Analytics, Development"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-base text-muted">Message</label>
          <textarea
            className="textarea mt-2"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us a bit about your context, goals, constraints, and timelines…"
            required
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            type="submit"
            className={"btn-primary " + (!isValid ? "opacity-60 cursor-not-allowed" : "")}
            disabled={!isValid}
          >
            Send
          </button>
          <div className="text-xs text-muted">
            By submitting, you consent to us contacting you about your enquiry.
          </div>
        </div>

        {submitted ? (
          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm">
            <span className="font-medium">Thank you for reaching out to us.</span>{" "}
            We have received your email and will be in touch shortly!
          </div>
        ) : null}
      </form>
    </div>
  );
}
