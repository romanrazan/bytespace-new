import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { SectionContainer } from "@/components/ui/SectionContainer";

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export function Footer() {
  return (
    <footer className="footer">
      <SectionContainer>
        <div className="footer__main">
          <div className="footer__newsletter">
            <Logo />
            <p>Stay up to date with our latest features and releases by joining our newsletter.</p>
            <form className="newsletter" action="#">
              <label className="sr-only" htmlFor="footer-email">Enter your email</label>
              <input id="footer-email" type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe <ArrowRight size={16} /></button>
            </form>
            <small>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</small>
          </div>
          <div className="footer__links">
            {columns.map((column, index) => (
              <div key={index}>{column.map((label) => <Link href="#" key={label}>{label}</Link>)}</div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2023 ByteSpace. All rights reserved.</span>
          <div><Link href="#">Privacy Policy</Link><Link href="#">Terms of Service</Link><Link href="#">Cookies Settings</Link></div>
        </div>
      </SectionContainer>
    </footer>
  );
}
