/**
 * Questions asked before a first class. Plain, short answers from the mockup.
 *
 * The last two answers are still placeholders: the brief forbids inventing
 * facts, so they render as written until Dayana confirms them.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: readonly FaqItem[] = [
  {
    question: "Czy muszę mieć doświadczenie?",
    answer:
      "Nie. W małej grupie instruktorka pokaże każde ćwiczenie i poprawi ustawienie, zanim zrobisz kolejne powtórzenie.",
  },
  {
    question: "Ile kosztują pierwsze zajęcia?",
    answer:
      "Pierwsze zajęcia grupowe są bezpłatne, również taniec dla dzieci. Oferta nie obejmuje reformera ani indywidualnych treningów dla kobiet w ciąży.",
  },
  {
    question: "Ile osób jest na zajęciach?",
    answer:
      "Najwyżej sześć, w grupach tanecznych dla dzieci najwyżej pięć. Grupa rusza, gdy zapiszą się co najmniej cztery osoby.",
  },
  {
    question: "Jak umówić się na reformer?",
    answer:
      "Termin ustalamy SMS-em lub telefonicznie. Zajęcia odbywają się indywidualnie albo w duecie.",
  },
  {
    question: "Co zabrać na zajęcia?",
    answer: "[DO UZUPEŁNIENIA: do potwierdzenia przez Dayanę, np. wygodny strój, skarpetki antypoślizgowe, woda]",
  },
  {
    question: "Jak odwołać zajęcia?",
    answer: "[DO UZUPEŁNIENIA: zasady odwoływania od Dayany, np. do ilu godzin przed zajęciami i jak dać znać]",
  },
];
