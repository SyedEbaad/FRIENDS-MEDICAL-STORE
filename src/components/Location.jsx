import { MapPin, Navigation, Phone, Mail, Clock3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { store } from "../config";
export default function Location() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(store.mapEmbedQuery)}&output=embed`;
  return (
    <section id="location" className="section-space bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Visit us"
          title="We're right around the corner"
          description="Find our medical store, check nearby streets on the map, or start turn-by-turn navigation."
        />
        <div className="grid overflow-hidden rounded-[2rem] border border-brand-100 shadow-xl shadow-brand-900/5 lg:grid-cols-[.85fr_1.15fr]">
          <div className="p-7 sm:p-10">
            <h3 className="text-2xl font-extrabold">Come say hello</h3>
            <p className="mt-2 text-sm text-slate-500">
              We're happy to help with your pharmacy needs.
            </p>
            <div className="mt-9 space-y-7">
              <div className="flex gap-4">
                <MapPin className="shrink-0 text-brand-600" />
                <div>
                  <p className="font-bold">Store address</p>
                  <p className="mt-1 text-sm text-slate-500">{store.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="shrink-0 text-brand-600" />
                <div>
                  <p className="font-bold">Call us</p>
                  <a
                    className="mt-1 block text-sm text-slate-500 hover:text-brand-600"
                    href={`tel:${store.phone.replace(/\s/g, "")}`}
                  >
                    {store.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="shrink-0 text-brand-600" />
                <div>
                  <p className="font-bold">Email</p>
                  <a
                    className="mt-1 block break-all text-sm text-slate-500 hover:text-brand-600"
                    href={`mailto:${store.email}`}
                  >
                    {store.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock3 className="shrink-0 text-brand-600" />
                <div>
                  <p className="font-bold">Opening hours</p>
                  {store.hours.map((h) => (
                    <p key={h.days} className="mt-1 text-sm text-slate-500">
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <a
              className="btn-primary mt-9"
              href={store.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Navigation size={18} /> Get Directions
            </a>
          </div>
          <div className="relative min-h-[390px] bg-brand-50">
            <iframe
              title="Store location and nearby streets map"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3 text-center text-xs font-semibold text-slate-600 shadow-lg backdrop-blur">
              Interactive map · Zoom out to explore nearby areas ·{" "}
              <a
                className="font-extrabold text-brand-700 underline"
                href={store.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open full map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
