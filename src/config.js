// UPDATE YOUR STORE DETAILS HERE. All contact links and map buttons use these values.
export const store = {
  name: 'FRIENDS Medical Store',
  shortName: 'FRIENDS',
  tagline: 'Your Health, Our Priority.',
  phone: '+91 99081 46486',
  // Include country code, digits only, no + or spaces.
  whatsapp: '919381695608',
  email: 'md.zayir.hussain@gmail.com',
  address: '19-3-528/3,opp Shama palace, Jahanuma, Falaknuma, Hyderabad, Telangana',
  // Paste your real Google Maps share link OR a Google Maps place URL.
  mapsUrl: 'https://maps.app.goo.gl/RViK71jMSkGusQbx5',
  // Replace this with your exact address or latitude,longitude for the embedded map.
  mapEmbedQuery: '17.3417323,78.4660322',
  hours: [
    {days:'Monday – Saturday',time:'9:00 AM – 10:00 PM'},
    {days:'Sunday',time:'9:00 AM – 2:00 PM'}
  ]
};
export const whatsappLink = (message='Hello! I would like to enquire about home delivery.') =>
  `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`;
