import { Link } from "react-router-dom";
import { MessageCircle, Instagram } from "lucide-react";

export function ContactPreview() {
  return (
    <section className="bg-emerald-50/60" aria-labelledby="contact-preview-heading">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="contact-preview-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            Stay close with MANIKA
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            We love chatting about custom designs, event collaborations, or simply sharing bracelet inspo. Let us know how we can bring your story into a design.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <form
            className="space-y-4 rounded-3xl bg-white p-8 shadow-xl shadow-emerald-100"
            aria-label="Quick contact form"
          >
            <div>
              <label htmlFor="preview-name" className="block text-sm font-semibold text-slate-700">
                Name
              </label>
              <input
                id="preview-name"
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div>
              <label htmlFor="preview-email" className="block text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                id="preview-email"
                name="email"
                type="email"
                placeholder="name@email.com"
                className="mt-2 w-full rounded-2xl border border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200"
              />
            </div>
            <div>
              <label htmlFor="preview-message" className="block text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                id="preview-message"
                name="message"
                rows={4}
                placeholder="Tell us your bracelet idea"
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
          <div
            className="flex flex-col justify-center rounded-3xl border border-emerald-100 bg-white/70 p-8 shadow-xl shadow-emerald-100"
            aria-labelledby="contact-preview-links"
          >
            <h3 id="contact-preview-links" className="text-lg font-semibold text-slate-900">
              Say hello directly
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Quick question or want to see behind-the-scenes? Reach us through our favorite channels.
            </p>
            <div className="mt-6 space-y-4">
              <a
                href="https://wa.me/6288279022024"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-emerald-100 px-5 py-4 text-sm font-semibold text-teal-800 shadow-sm shadow-emerald-100 transition-colors duration-200 hover:bg-emerald-200"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp chat
              </a>
              <a
                href="https://instagram.com/manika.bracelets"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-emerald-100 px-5 py-4 text-sm font-semibold text-teal-800 shadow-sm shadow-emerald-100 transition-colors duration-200 hover:bg-emerald-200"
              >
                <Instagram className="h-5 w-5" />
                Instagram gallery
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex rounded-full border border-transparent bg-white px-6 py-3 text-sm font-semibold text-teal-700 shadow-lg shadow-emerald-100/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50"
          >
            Custom order inquiries
          </Link>
        </div>
      </div>
    </section>
  );
}
