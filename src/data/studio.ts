/**
 * Studio details — the single source of truth.
 *
 * In the mockup the phone number was pasted 8 times, the booking link 6 times
 * and the address 3 times. Here a change is one line.
 *
 * `null` marks a fact Dayana still has to confirm. The brief forbids inventing
 * them, so components render a visible placeholder instead.
 */

const PHONE = "535 223 228";
const PHONE_E164 = `+48${PHONE.replaceAll(" ", "")}`;
const EMAIL = "bloom.studio.bydayana@gmail.com";

export const studio = {
  name: "Bloom Studio by Dayana",

  phone: PHONE,
  phoneHref: `tel:${PHONE_E164}`,
  smsHref: `sms:${PHONE_E164}`,
  email: EMAIL,
  emailHref: `mailto:${EMAIL}`,

  /** The studio's Google Maps profile (stable cid link), where all reviews are */
  googleProfileUrl: "https://www.google.com/maps?cid=12910891992771233045",

  instagram: {
    handle: "@bloom_studio_bydayana",
    url: "https://www.instagram.com/bloom_studio_bydayana/",
  },

  facebook: {
    url: "https://www.facebook.com/profile.php?id=61584205869298&locale=pl_PL",
  },

  address: {
    street: "ul. Nowa 22",
    town: "Szewce",
    postcode: "55-114",
    municipality: "gmina Wisznia Mała",
    directions: "Wejdź do pierwszego budynku, sala jest na pierwszym piętrze.",
    parking: "przed budynkiem",
    mapsHref:
      "https://www.google.com/maps/dir/?api=1&destination=51.2216053%2C16.9904737",
    /*
      OpenStreetMap rather than a Google embed: it sets no cookies, so it
      needs no consent banner. Marker matches the Google Maps location
      supplied by the client on 12.11.2026.
    */
    mapEmbedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=16.9844737%2C51.2186053%2C16.9964737%2C51.2246053&layer=mapnik&marker=51.2216053%2C16.9904737",
  },

  /*
    Keeps the draft out of Google while it still shows [DO UZUPEŁNIENIA]
    placeholders. Switch to true at launch, on the final domain.
  */
  allowSearchEngines: false,

  /** Separate Lovable app that holds the timetable and sign-up forms */
  bookingUrl: "https://bloomstudiobydayana.lovable.app/",

  /*
    Web3Forms access key for the question form on /kontakt. Created at
    web3forms.com for the studio's e-mail, which is where questions arrive.
    The key is meant to be public. Until it's set, the form can't be sent.
  */
  contactFormKey: null,

  /*
    Where the newsletter form on the home page sends sign-ups: the action URL
    from the MailerLite embedded form (with double opt-in switched on).
    Until it's set, the form can't be sent.
  */
  newsletterFormUrl: null,

  foundation: {
    name: "Fundacja Bloom Studio by Dayana",
    // Non-breaking hyphen and spaces keep "50‑249" and "ul. Ludwika" from splitting across lines
    address: "ul.\u00a0Ludwika Rydygiera 44/1B, 50\u2011249\u00a0Wrocław",
    krs: "0001238676",
    regon: "544620945",
    nip: null,
    registered: "27 kwietnia 2026",
  },
} as const;
