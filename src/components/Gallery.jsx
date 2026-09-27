import SectionHeading from "./SectionHeading";
// Replace image URLs with '/images/your-photo.jpg' after placing your images in public/images/.
const photos = [
  {
    src: "/images/img1.jpeg",
    label: "Our pharmacy",
    wide: true,
  },
  {
    src: "/images/img2.jpeg"
    
  },
  {
    src: "/images/img3.jpeg"
    
  },
  {
    src: "/images/img4.jpeg"
    
  },
  {
    src: "/images/img5.jpeg"
    
  },
];
export default function Gallery() {
  return (
    <section id="gallery" className="section-space bg-[#f4faf8]">
      <div className="container-page">
        <SectionHeading
          eyebrow="Photo gallery"
          title="A closer look at our store"
          description="A space for photos of your storefront, medicine shelves, products and team. Replace these sample photos with your own."
        />
        <div className="grid auto-rows-[200px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map(({ src, label, wide }, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl ${wide ? "sm:row-span-2" : ""}`}
            >
              <img
                loading="lazy"
                src={src}
                alt={label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 text-sm font-bold text-white">
                {label}
              </div>
            </div>
          ))}
          {/* <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-brand-200 bg-white p-6 text-center text-brand-700">
            <span className="text-4xl">+</span>
            <p className="mt-2 font-bold">Add your store photo here</p>
            <p className="mt-1 text-xs text-slate-500">Edit Gallery.jsx</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
