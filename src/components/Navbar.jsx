import { useState } from "react";
import { Menu, X, ArrowUpRight, HeartPulse } from "lucide-react";
import { store, whatsappLink } from "../config";
const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Medicines", "#medicines"],
  ["Services", "#services"],
  ["Gallery", "#gallery"],
  ["Location", "#location"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/95 backdrop-blur">
      <nav className="container-page flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-600 text-white">
            <HeartPulse size={25} />
          </span>
          <span className="text-xl font-extrabold tracking-tight text-ink">
            {store.shortName}
            <span className="block text-[10px] font-bold uppercase tracking-[.18em] text-brand-600">
              Medical Store
            </span>
          </span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-bold text-slate-600 transition hover:text-brand-600"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="btn-primary hidden !px-5 !py-3 text-sm lg:inline-flex"
        >
          Order on WhatsApp <ArrowUpRight size={16} />
        </a>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-brand-100 bg-white px-6 pb-6 lg:hidden">
          {links.map(([label, href]) => (
            <a
              onClick={() => setOpen(false)}
              key={href}
              href={href}
              className="block border-b border-slate-100 py-3 font-semibold"
            >
              {label}
            </a>
          ))}
          <a
            className="btn-primary mt-5 w-full"
            target="_blank"
            rel="noreferrer"
            href={whatsappLink()}
          >
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
