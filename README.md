# CarePlus Medical Store — React + Tailwind CSS

Responsive, component-based, single-page medical store website built with React, Vite, Tailwind CSS and Lucide icons.

## Start

1. Install Node.js 18+.
2. Open this folder in VS Code or a terminal.
3. Run `npm install`.
4. Run `npm run dev` and open the local URL displayed.
5. Run `npm run build` to generate `dist/` for hosting (for example, Netlify).

## CUSTOMIZE FIRST

Edit **`src/config.js`** to replace the sample store name, phone number, WhatsApp number, email, address, business hours and BOTH Google Maps settings. The included map is a **placeholder search around Hyderabad, not your real store location**. For a precise map, set `mapEmbedQuery` to your full store address or exact coordinates; set `mapsUrl` to your real Google Maps share link. Test the WhatsApp and directions buttons before publishing.

## Components

- `Navbar.jsx` — sticky responsive navbar/mobile menu
- `Hero.jsx` — intro and WhatsApp delivery button
- `About.jsx` — about section
- `Medicines.jsx` — editable Allopathic, Unani, Homeopathic, Ayurvedic and wellness category cards, plus an empty slot
- `Services.jsx` — services cards
- `Gallery.jsx` — photo gallery and extra empty slot
- `DeliveryBanner.jsx` — WhatsApp delivery call-to-action
- `Location.jsx` — contact details, embedded interactive Google Map (zoom to nearby areas) and directions button
- `Footer.jsx` — links and contact
- `SectionHeading.jsx` — reusable section title

## Add your photos

Put your store photos in `public/images/` and replace the sample image URLs in `Hero.jsx`, `About.jsx`, `Medicines.jsx` and `Gallery.jsx` with paths like `/images/store-front.jpg`. Sample Unsplash images require an internet connection and are **illustrative, not photos of your store**. A placeholder file is included in the image folder.

## Add categories

Edit `medicineCategories` at the top of `src/components/Medicines.jsx`. Copy a category object, choose an icon imported from `lucide-react`, and add an image URL or a local image path. For additional gallery tiles, add objects to the `photos` array in `Gallery.jsx`.

## Important

This is a marketing/enquiry website, not a medical advice or e-commerce system. WhatsApp is an enquiry shortcut; it does not collect prescriptions or process payments automatically. Ensure prescription medicines are supplied only according to applicable laws. Check any medical claims and update your actual inventory and delivery coverage before publishing.
