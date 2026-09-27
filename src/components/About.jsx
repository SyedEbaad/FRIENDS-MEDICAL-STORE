import { HeartHandshake, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
export default function About() {
  return (
    <section id="about" className="section-space bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            className="h-[410px] w-full rounded-[2rem] object-cover"
            src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1100&q=85"
            alt="Pharmacist arranging medicines"
          />
          <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-brand-600 p-5 text-white shadow-xl sm:right-[-18px]">
            <HeartHandshake size={30} />
            <div>
              <p className="text-lg font-extrabold">Here to help</p>
              <p className="text-xs text-brand-50">
                Personal, friendly service
              </p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="About our store"
            title="A little more care, every single day."
            description="We are committed to providing genuine medicines and reliable healthcare products while putting our customers’ well-being first."
          />
          <div className="space-y-4">
            {[
              "A broad range of medicine systems and wellness essentials",
              "Friendly assistance with your pharmacy needs",
              "Convenient home-delivery enquiries on WhatsApp",
            ].map((t) => (
              <div className="flex items-start gap-3" key={t}>
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-brand-600"
                  size={21}
                />
                <p className="text-slate-600">{t}</p>
              </div>
            ))}
          </div>
          <a className="btn-outline mt-8" href="#location">
            Find our store
          </a>
        </div>
      </div>
    </section>
  );
}
