/**
 * News for /aktualnosci. The item marked `upcoming` is the next event: it
 * leads the news page and shows on the home page as "Najbliższe wydarzenie",
 * so its date and price live only here.
 *
 * Texts are written from the studio's Instagram posts in the site's plain
 * style, not copied from the graphics.
 */
import duetPhoto from "../images/reformery-przy-lampkach.jpg";
import candlePhoto from "../images/sala-z-matami.jpg";
import { pregnancyPilates } from "./classes";

/** Split up so the page can show the day large, like a calendar page */
export interface EventDate {
  day: string;
  month: string;
  weekday: string;
  time: string;
  price?: string;
}

export interface NewsItem {
  title: string;
  /** Short note on news that isn't an event, e.g. "Nowość" */
  tag?: string;
  /** Set for events */
  date?: EventDate;
  text: string;
  photo: ImageMetadata;
  alt: string;
  position?: string;
  action:
    | { label: string; kind: "phone" | "sms" }
    | { label: string; kind: "link"; href: string };
  /** The next event: leads /aktualnosci and shows on the home page */
  upcoming?: boolean;
}

export const news: readonly NewsItem[] = [
  {
    title: pregnancyPilates.name,
    tag: "Nowość",
    text: "Wprowadzamy indywidualne treningi pilatesu dla kobiet w ciąży. To propozycja dla przyszłych mam, które chcą zadbać o ruch i dobre samopoczucie.",
    photo: pregnancyPilates.photo,
    alt: pregnancyPilates.alt,
    action: { label: "O zajęciach", kind: "link", href: `/zajecia#${pregnancyPilates.id}` },
  },
  {
    title: "Pilates i relaksacja przy świecach",
    date: { day: "27", month: "listopada", weekday: "piątek", time: "19:00–20:30", price: "100 zł" },
    text: "Wieczór otwarty dla wszystkich, także dla osób, które jeszcze u nas nie ćwiczyły. Miejsc jest niewiele.",
    photo: candlePhoto,
    alt: "Sala wieczorem: maty z kołami do pilatesu, ciepłe światło i świeca przy oknie.",
    position: "50% 65%",
    action: { label: "Zapisz się", kind: "phone" },
    upcoming: true,
  },
  {
    title: "Zajęcia na reformerze w duecie",
    tag: "Nowość",
    text: "Na reformerze możesz teraz ćwiczyć we dwoje, z koleżanką, mamą albo partnerem. Mamy dwa reformery, więc ćwiczycie obok siebie.",
    photo: duetPhoto,
    alt: "Dwa reformery obok siebie w sali oświetlonej girlandami lampek.",
    position: "50% 45%",
    action: { label: "O zajęciach", kind: "link", href: "/zajecia#reformer" },
  },
];

/**
 * Events that already happened, newest first: a plain list under the news.
 * When the upcoming event is over, move it here (and unmark `upcoming`).
 */
export interface PastEvent {
  title: string;
  day: string;
  month: string;
  detail: string;
  text: string;
}

export const pastEvents: readonly PastEvent[] = [
  {
    title: "Pilates & Barre Camp",
    day: "18–20",
    month: "września 2026",
    detail: "piątek–niedziela · Pałac Jugowice, z widokiem na zamek Grodno",
    text: "Trzy dni ruchu i odpoczynku: codzienny pilates, barre, stretching i mobility, relaksacja, sauna i wieczorne ognisko. Uczestniczki nocowały w pokojach dwuosobowych, a śniadania, lunche i kolacje były na miejscu.",
  },
  {
    title: "Pilates i malowanie przy winie",
    day: "31",
    month: "lipca 2026",
    detail: "piątek, 16:00–19:00 · w ogrodzie studia",
    text: "Godzina pilatesu na świeżym powietrzu, a potem malowanie własnego obrazu przy kieliszku wina i przekąskach. Bez doświadczenia z pilatesem ani z malowaniem.",
  },
];
