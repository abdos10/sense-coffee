export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/#collections", label: "Collection" },
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "Services" },
  { href: "/#contact", label: "Contact" },
];
