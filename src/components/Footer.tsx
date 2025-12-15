import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-100 bg-emerald-50/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-sm text-slate-700"
          aria-label="MANIKA homepage"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-200 via-emerald-300 to-teal-200 text-lg font-bold text-teal-800 shadow-sm">
            M
          </span>
          <div>
            <p className="text-base font-semibold text-slate-900">MANIKA</p>
            <p className="text-xs text-slate-600">Warm handmade bracelets by students</p>
          </div>
        </Link>
        <div className="flex items-center gap-5 text-slate-600">
          <a
            href="https://wa.me/6288279022024"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-md shadow-emerald-100 transition-colors duration-200 hover:bg-emerald-100"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/handmade.manika?igsh=MWxxam1kdmY0NzkzNw=="
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-md shadow-emerald-100 transition-colors duration-200 hover:bg-emerald-100"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
          <a
            href="https://www.facebook.com/share/1MDG5sVCUz/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-md shadow-emerald-100 transition-colors duration-200 hover:bg-emerald-100"
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </a>
        </div>
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} MANIKA. Crafted with heart in every bead.
        </p>
      </div>
    </footer>
  );
}
