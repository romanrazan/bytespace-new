import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

const columns = [
  {
    id: "courses",
    links: [
      { label: "Featured Courses", href: "/#courses" },
      { label: "Featured Categories", href: "/#categories" },
      { label: "Business", href: "/#categories" },
      { label: "IT", href: "/#paths" },
      { label: "Design", href: "/#paths" },
    ],
  },
  {
    id: "disciplines",
    links: [
      { label: "Development", href: "/#paths" },
      { label: "Marketing", href: "/#categories" },
      { label: "Photography", href: "/#paths" },
      { label: "Finance", href: "/#categories" },
      { label: "Sport", href: "/#categories" },
    ],
  },
  {
    id: "company",
    links: [
      { label: "Become a Creator", href: "/#creator-cta" },
      { label: "Affiliate Program", href: "/#creator-cta" },
      { label: "Contact", href: "/#footer" },
      { label: "Help", href: "/#footer" },
      { label: "About", href: "/#creators" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <SectionContainer>
        <div className="footer__main">
          <div className="footer__newsletter">
            <Logo />
            <p>Stay up to date with our latest features and releases by joining our newsletter.</p>
            <NewsletterForm />
            <small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
          </div>
          <div className="footer__links">
            {columns.map((column) => (
              <div key={column.id}>
                {column.links.map((item) => (
                  <Link href={item.href} key={item.href + item.label}>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <div>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookies">Cookies Settings</Link>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
