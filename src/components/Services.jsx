import {
  ClipboardPlus,
  ShoppingBag,
  HeartPulse,
  HandHeart,
  Truck,
  MessagesSquare,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
const services = [
  [
    "Prescription Medicines",
    "Enquire about prescription medicines and availability.",
    ClipboardPlus,
  ],
  [
    "Over-the-Counter",
    "Everyday pharmacy essentials for common needs.",
    ShoppingBag,
  ],
  [
    "Health & Wellness",
    "Personal wellness and healthcare products.",
    HeartPulse,
  ],
  ["Personal Care", "Products for everyday personal care.", HandHeart],
  [
    "Medicine Delivery",
    "Ask about convenient home delivery in your area.",
    Truck,
  ],
  [
    "Friendly Assistance",
    "Get help finding products and pharmacy information.",
    MessagesSquare,
  ],
];
export default function Services() {
  return (
    <section id="services" className="section-space bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our services"
          title="Care that fits your everyday life"
          description="From medicines to daily essentials, we're here to make your pharmacy visits easier."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, desc, Icon]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 p-7 transition hover:border-brand-200 hover:bg-brand-50/40"
            >
              <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon size={27} />
              </span>
              <h3 className="text-lg font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
