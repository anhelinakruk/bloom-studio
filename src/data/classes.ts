/**
 * Classes offered at the studio: one list for the home page cards and the
 * full descriptions on /zajecia. Plain, concrete texts from the mockup.
 *
 * The home page shows pilates on the mat, barre and reformer in one grid.
 * Reformer uses the same styling as the other classes on both pages.
 *
 * Times follow the booking app as of 9.11.2026. The Instagram schedule
 * differs and Dayana still has to confirm which one is current.
 */
import matPhoto from "../images/dayana-cwiczy.jpg";
import barrePhoto from "../images/dayana-basia-barre.jpg";
import reformerPhoto from "../images/dayana-na-reformerze.jpg";
import stretchingPhoto from "../images/basia-cwiczy-na-macie.jpg";
import eveningPhoto from "../images/reformery-przy-lampkach.jpg";
import roomPhoto from "../images/sala-z-matami.jpg";

/** A class shows either a real photo or a placeholder naming the one still missing */
/**
 * `who` is the instructor line; `format` is a short label shown as a badge,
 * for classes where the format matters more than who leads them.
 */
export type ClassItem = {
  id?: string;
  name: string;
  when?: string;
  duration?: string;
  who?: string;
  format?: string;
  text: string;
} & (
  | { photo: ImageMetadata; alt: string; position?: string }
  | { pending: string }
);

/** Offer confirmed in the Facebook post supplied by the client on 12.11.2026. */
export const pregnancyPilates = {
  id: "pilates-w-ciazy",
  name: "Pilates dla kobiet w ciąży",
  who: "Treningi indywidualne",
  text: "Indywidualne treningi pilatesu dla przyszłych mam, które chcą zadbać o ruch i dobre samopoczucie w czasie ciąży.",
  photo: roomPhoto,
  alt: "Sala Bloom Studio z matami i sprzętem do pilatesu.",
} satisfies ClassItem;

export const reformerClass = {
  id: "reformer",
  name: "Reformer",
  when: "termin ustalamy SMS-em lub telefonicznie",
  duration: "[DO UZUPEŁNIENIA]",
  format: "Indywidualnie lub w duecie",
  text: "Indywidualne zajęcia pilatesu na maszynie ze sprężynami, która jednocześnie pomaga i stawia opór. Możesz też ćwiczyć w duecie, z koleżanką, mamą czy partnerem.",
  photo: reformerPhoto,
  alt: "Instruktorka ćwiczy na reformerze, opierając dłonie na drążku.",
} satisfies ClassItem;

export const classes: readonly ClassItem[] = [
  {
    id: "pilates-na-macie",
    name: "Pilates na macie",
    when: "pon., wt., śr., czw.",
    duration: "[DO UZUPEŁNIENIA]",
    who: "Prowadzą: Dayana i Basia",
    text: "Spokojne, dokładne ćwiczenia, które wzmacniają brzuch i plecy i poprawiają postawę. Dobry początek, jeśli dawno nie ćwiczyłaś albo to Twój pierwszy raz. Maty i sprzęt są na miejscu.",
    photo: matPhoto,
    alt: "Instruktorka leży na macie i unosi jedną nogę w górę.",
  },
  {
    id: "barre",
    name: "Barre",
    when: "pon. 19:00, śr. 18:00 i 19:00",
    duration: "[DO UZUPEŁNIENIA]",
    who: "Prowadzi: Dayana",
    text: "Trening przy drążku inspirowany baletem. Dużo małych, precyzyjnych ruchów, po których nogi i pośladki czuć jeszcze następnego dnia.",
    photo: barrePhoto,
    alt: "Dwie instruktorki ćwiczą przy drążku, każda unosi jedną nogę.",
    position: "50% 40%",
  },
  reformerClass,
  pregnancyPilates,
  {
    name: "Stretching",
    when: "czw., godzina [DO UZUPEŁNIENIA]",
    who: "Prowadzi: Basia",
    text: "Rozciąganie i mobilność w spokojnym tempie. Nie musisz być rozciągnięta, żeby zacząć.",
    photo: stretchingPhoto,
    alt: "Instruktorka rozciąga się w łuku na macie, przed zieloną ścianą z logo Bloom.",
  },
  {
    name: "Trening Spokojnego Umysłu",
    when: "czw. 20:00",
    who: "Prowadzi: Basia",
    text: "Oddech, relaksacja i proste ćwiczenia przy świecach. Godzina na wyciszenie pod koniec tygodnia.",
    photo: eveningPhoto,
    alt: "Sala wieczorem, reformery w świetle girland z lampkami.",
  },
  {
    name: "High Heels",
    when: "pon. 20:00",
    who: "Prowadzi: Dayana",
    text: "Taniec w szpilkach. Dla zabawy, dla formy i dla pewności siebie.",
    pending: "Zdjęcie: zajęcia High Heels",
  },
  {
    name: "Taniec dla dzieci",
    when: "6–8 lat: wt. 17:00 (Basia), 10–13 lat: pon. 17:00 (Dayana)",
    who: "Prowadzą: Basia i Dayana",
    text: "Jazz, hip hop i disco. Kroki, układy i pierwsze występy. W grupie jest najwyżej pięcioro dzieci, a pierwsze zajęcia są za darmo. W tym czasie możesz poćwiczyć na reformerze.",
    pending: "Zdjęcie: taniec dzieci, za zgodą rodziców",
  },
];
