import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "UMKM Profile", href: "/profile" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900"
          aria-label="MANIKA homepage"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-200 via-emerald-300 to-teal-200 text-lg font-bold text-teal-800 shadow-sm">
            M
          </span>
          MANIKA
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 transition-colors duration-200 hover:bg-emerald-50 hover:text-teal-700 ${
                  isActive ? "bg-emerald-100/80 text-teal-700" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-white p-2 text-slate-600 shadow-sm transition-colors duration-200 hover:bg-emerald-50 hover:text-teal-700 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="border-t border-emerald-50 bg-white/95 px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-emerald-50 hover:text-teal-700 ${
                    isActive ? "bg-emerald-100/80 text-teal-700" : ""
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
