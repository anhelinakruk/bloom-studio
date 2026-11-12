/**
 * Main navigation, shared by the header and the footer.
 *
 * Every entry has its own page; "O nas" groups three of them in a dropdown.
 */
interface NavLink {
  href: string;
  label: string;
}

interface NavGroup {
  label: string;
  children: readonly NavLink[];
}

/** As shown in the desktop header, with "O nas" as a dropdown */
export const navMenu: readonly (NavLink | NavGroup)[] = [
  { href: "/zajecia", label: "Zajęcia i cennik" },
  {
    label: "O nas",
    children: [
      { href: "/o-studiu", label: "O studiu" },
      { href: "/instruktorki", label: "Instruktorki" },
      { href: "/fundacja", label: "Fundacja i klub" },
    ],
  },
  { href: "/aktualnosci", label: "Aktualności" },
  { href: "/kontakt", label: "Kontakt" },
];

/** The same pages as one flat list, for the phone menu and the footer */
export const navLinks: readonly NavLink[] = navMenu.flatMap((item) =>
  "children" in item ? item.children : [item],
);
