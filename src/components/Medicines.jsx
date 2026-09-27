import {
  ArrowUpRight,
  Pill,
  Leaf,
  FlaskConical,
  Flower2,
  Plus,
  HeartPulse,
  ShoppingCart,
  Syringe,
  Truck,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { whatsappLink } from "../config";
// Add, remove or rename categories here. Replace each image with your own store photo later.
export const medicineCategories = [
  {
    title: "Allopathic Medicines",
    desc: "Prescription and everyday medicines.",
    icon: Pill,
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Unani Medicines",
    desc: "Explore our Unani medicine selection.",
    icon: Leaf,
    image:
      "https://www.hamdard.in/wp-content/uploads/2026/05/Final-copy.webp",
  },
  {
    title: "Homeopathic Medicines",
    desc: "Ask about our homeopathic products.",
    icon: FlaskConical,
    image:
      "https://www.ukhomedetox.co.uk/wp-content/uploads/2024/06/Homeopathic-Remedies-for-Alcohol-Detox-Blog-Featured-Image.webp",
  },
  {
    title: "Ayurvedic Medicines",
    desc: "Traditional wellness product options.",
    icon: Flower2,
    image:
      "https://etedge-insights.com/wp-content/uploads/2023/12/shutterstock_2335558143-770x470.jpg",
  },
  {
    title: "Health & Wellness",
    desc: "Vitamins, supplements and daily essentials.",
    icon: HeartPulse,
    image:
      "https://xgentech.net/cdn/shop/articles/pexels-n-voitkevich-7852731_baf99e90-68e7-4c47-a64b-2afe034c92ed.jpg?v=1786608905",
  },
  {
    title: 'Surgical Products',
    desc: 'Surgical supplies and healthcare essentials.',
    icon: Syringe,
    image: "https://img.magnific.com/free-photo/top-view-various-medical-equipment_23-2149283898.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    title: 'Speciality Drugs',
    desc: 'Speciality medicines and selected healthcare products.',
    icon: Pill,
    image:"https://media.licdn.com/dms/image/v2/C4E12AQGibfhA_57Jww/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1587343258374?e=2147483647&v=beta&t=7P1R4nWUP4qQ554BZUKpSUfUg1nQFdD6tHViiwzEx_0"
  },
  {
    title: 'Wholesale & Retail',
    desc: 'Medicines and healthcare products available for wholesale and retail.',
    icon: ShoppingCart,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXD_aTQjaUOcLczF1QZhc_SE7ZRMTe1gta3qFt5Ed5gvYWOoWm_IheCLE&s=10"

  },
  {
    title: 'Home Delivery',
    desc: 'Convenient home delivery for your medicines.',
    icon: Truck,
    image:"https://t4.ftcdn.net/jpg/03/54/46/25/360_F_354462593_VQGMqFJsY2LAGusMDX7ljEWU0EYq5ApR.jpg"
  },    
//   {
//     title: "More Coming Soon",
//     desc: "Space for a new medicine category.",
//     icon: Plus,
//     image: null,
//   },
];
export default function Medicines() {
  return (
    <section id="medicines" className="section-space bg-[#f4faf8]">
      <div className="container-page">
        <SectionHeading
          eyebrow="What we offer"
          title="Medicines & wellness, all in one place"
          description="Browse our medicine categories. Message us to check the availability of a specific product."
          center
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {medicineCategories.map(({ title, desc, icon: Icon, image }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-[1.5rem] border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <div className="relative h-44 overflow-hidden bg-brand-100">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 border-2 border-dashed border-brand-200 text-brand-600">
                    <Plus size={36} />
                    <span className="text-sm font-bold">
                      Your next category
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon size={23} />
                  </span>
                  <a
                    aria-label={`Enquire about ${title}`}
                    href={whatsappLink(
                      `Hello! I would like to enquire about ${title}.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border border-brand-100 text-brand-600 hover:bg-brand-50"
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </div>
                <h3 className="text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-7 text-center text-xs text-slate-500">
          Medicine availability varies. Prescription medicines require a valid
          prescription. Traditional or alternative products are not substitutes
          for prescribed treatment.
        </p>
      </div>
    </section>
  );
}
