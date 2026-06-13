export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "what we do" },
  { href: "/#contact", label: "Contact" },
];
