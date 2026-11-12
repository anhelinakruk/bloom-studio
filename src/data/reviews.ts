/**
 * Google reviews shown on the home page, all five stars.
 *
 * Copied word for word from the studio's Google profile, typos included.
 * Only emoji are left out (❤️ 🌿 ✨ ☺️): the brief bans emoji on the site.
 * Text emoticons like ":)" stay. Authors are shown as first name and
 * initial; each still has to agree to that (see CLAUDE.md).
 */
export interface Review {
  author: string;
  text: string;
}

export const reviews: readonly Review[] = [
  {
    author: "Katarzyna P.",
    text: "Pierwszy raz na pilatesie, więc nie do końca wiedziałam czego się spodziewać. Okazało się, że zajęcia prowadzone są w bardzo kameralnej atmosferze z bardzo miłą prowadzącą Dayną, która pomaga i tłumaczy dokładnie, aby prawidłowo wykonywać wszystkie ćwiczenia. Polecam dla ciała i ducha.",
  },
  {
    author: "Magdalena S.",
    text: "Bardzo polecam zajęcia Barre, dają mocny wycisk, ale w każdym tygodniu jest coś innego, więc nie da się nudzić - Dayana zawsze zaskoczy :)",
  },
  {
    author: "Agnieszka S.",
    text: "Serdecznie polecam studio Dayany w Szewcach ;) Instruktorka mega zaangażowana, zajęcia bardzo ciekawie prowadzone, fajny wysiłek dający duże rezultaty ;) miło się zmęczyć i mieć jeszcze z tego duża radość!",
  },
  {
    author: "Ola G.",
    text: "To wyjątkowe miejsce prowadzone przez osobę z ogromną pasją i zaangażowaniem! Studio jest kameralne, dzięki czemu panuje tu ciepła, przyjazna atmosfera i można naprawdę skupić się na sobie. Zajęcia są zawsze doskonale przygotowane widać, że właścicielka wkłada całe serce w to, co robi. Każdy detal ma znaczenie, a profesjonalne podejście i wiedza sprawiają, że chce się wracać. Idealne miejsce dla osób, które szukają jakości, spokoju i inspiracji do ruchu!",
  },
  {
    author: "Kasandra S.",
    text: "Polecam zajęcia z Dayaną z całego serca. Pełne zaangażowanie i świetna atmosfera na zajęciach",
  },
  {
    author: "Marta R.",
    text: "Polecam z całego serca :) zajęcia pełne zaangażowania i pasji plus fantastyczna atmosfera :)",
  },
];
