import {
  ArrowRight,
  Truck,
  ShieldCheck,
  Clock3,
  MessageCircle,
} from "lucide-react";
import { store, whatsappLink } from "../config";
export default function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden bg-gradient-to-br from-brand-50 via-white to-[#e7f7f0]"
    >
      <div className="container-page grid min-h-[610px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-brand-700">
            <span className="h-2 w-2 rounded-full bg-brand-500" /> Your
            neighborhood pharmacy
          </div>
          
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.13] tracking-tight text-ink sm:text-5xl xl:text-[4rem]">
            Better health begins{" "}
            <span className="text-brand-600">with better care.</span>
            <span className="text-brand-600"> Since 2007</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Genuine medicines, everyday wellness essentials, and friendly
            service — all in one trusted medical store.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsappLink(
                "Hello! I would like to order medicines for home delivery.",
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={19} /> Order for Home Delivery
            </a>
            <a href="#medicines" className="btn-outline">
              Explore Medicines <ArrowRight size={18} />
            </a>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-3 border-t border-brand-100 pt-7">
            <div className="flex flex-col gap-2 text-sm font-bold">
              <ShieldCheck className="text-brand-600" />
              Genuine products
            </div>
            <div className="flex flex-col gap-2 text-sm font-bold">
              <Truck className="text-brand-600" />
              Home delivery
            </div>
            <div className="flex flex-col gap-2 text-sm font-bold">
              <Clock3 className="text-brand-600" />
              Convenient hours
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-brand-100 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-100 p-3 shadow-2xl shadow-brand-900/10">
            <img
              className="h-[420px] w-full rounded-[2rem] object-cover sm:h-[500px]"
              src="/images/img1.jpeg"
              alt="Pharmacy shelves with health products"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:right-auto sm:w-72">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-600">
                  <ShieldCheck />
                </span>
                <div>
                  <p className="font-extrabold">Care you can trust</p>
                  <p className="text-sm text-slate-500">
                    Here for your everyday health
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
