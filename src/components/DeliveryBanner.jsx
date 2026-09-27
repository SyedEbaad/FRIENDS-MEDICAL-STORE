import { MessageCircle, ArrowUpRight, Truck } from "lucide-react";
import { whatsappLink } from "../config";
export default function DeliveryBanner() {
  return (
    <section className="bg-brand-700 py-14 text-white">
      <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex items-start gap-5">
          <span className="hidden rounded-2xl bg-white/10 p-4 sm:block">
            <Truck size={34} />
          </span>
          <div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[.2em] text-brand-100">
              Convenient & simple
            </p>
            <h2 className="text-3xl font-extrabold">
              Need medicines delivered?
            </h2>
            <p className="mt-3 max-w-xl text-brand-50">
              Message us on WhatsApp with your requirements. We'll confirm
              availability, prescription needs and delivery options.
            </p>
          </div>
        </div>
        <a
          href={whatsappLink(
            "Hello! I would like to arrange home delivery. My location is: ",
          )}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-4 font-extrabold text-brand-700 transition hover:bg-brand-50"
        >
          <MessageCircle size={19} /> Chat on WhatsApp{" "}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
