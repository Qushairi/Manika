import { MessageCircle, Instagram } from "lucide-react";

export function ContactPage() {
  return (
    <section className="bg-emerald-50/60" aria-labelledby="contact-page-heading">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
            Connect with MANIKA
          </p>
          <h1
            id="contact-page-heading"
            className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
          >
            Let&#39;s craft something memorable
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Whether you want a custom bracelet, partnership, or simply have questions, we&#39;re happy to chat. Fill out the form or reach us through social channels.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <form className="space-y-4 rounded-3xl bg-white p-8 shadow-xl shadow-emerald-100">
            <div>
              <label htmlFor="full-name" className="block text-sm font-semibold text-slate-700">
                Full name
              </label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@email.com"
                className="mt-2 w-full rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div>
              <label htmlFor="topic" className="block text-sm font-semibold text-slate-700">
                Topic
              </label>
              <input
                id="topic"
                name="topic"
                type="text"
                placeholder="Custom order, partnership, workshop..."
                className="mt-2 w-full rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us your ideas"
                className="mt-2 w-full rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-500 hover:shadow-xl"
            >
              Send message
            </button>
          </form>
          <div className="flex flex-col justify-center rounded-3xl border border-emerald-100 bg-white/70 p-8 shadow-xl shadow-emerald-100">
            <h2 className="text-lg font-semibold text-slate-900">Quick reach</h2>
            <p className="mt-3 text-sm text-slate-600">
              We typically reply within 24 hours. For urgent or real-time conversations, use the channels below.
            </p>
            <div className="mt-6 space-y-4">
              <a
                href="https://wa.me/6288279022024"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-emerald-100 px-5 py-4 text-sm font-semibold text-teal-800 shadow-sm shadow-emerald-100 transition-colors duration-200 hover:bg-emerald-200"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/handmade.manika?igsh=MWxxam1kdmY0NzkzNw=="
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-emerald-100 px-5 py-4 text-sm font-semibold text-teal-800 shadow-sm shadow-emerald-100 transition-colors duration-200 hover:bg-emerald-200"
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
