
export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" }, 
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" } 
];



export const footerNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" }
];