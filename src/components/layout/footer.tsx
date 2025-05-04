import Link from "next/link";
import { HeartHandshake, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram, Youtube } from "lucide-react"; // Assuming WhatsApp isn't in lucide

// Inline SVG for WhatsApp Icon
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    <path d="M19.1 17.9a9.9 9.9 0 0 1-14.2-14.2"></path>
  </svg>
);


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-primary font-semibold text-lg" aria-label="One Love Centre Home">
              <HeartHandshake className="h-7 w-7" />
              <span>One Love Centre</span>
            </Link>
            <p className="text-sm">
              Empowering children with autism and neurodevelopmental disabilities in Kabale District, Uganda through education, therapy, and community support.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/impact" className="hover:text-primary transition-colors">Our Impact</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
              <li><Link href="/get-involved" className="hover:text-primary transition-colors">Get Involved</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase text-foreground">Contact Us</h4>
            <address className="not-italic space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Kabale District, Uganda</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                {/* Replace with actual phone */}
                <a href="tel:+256XXXXXXXXX" className="hover:text-primary transition-colors">+256 XXX XXXXXX</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                 {/* Replace with actual email */}
                <a href="mailto:info@onelovecentre.org" className="hover:text-primary transition-colors">info@onelovecentre.org</a>
              </div>
               <div className="flex items-center gap-2">
                 <WhatsAppIcon />
                 {/* Replace with actual WhatsApp link/number */}
                 <a href="https://wa.me/256XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Chat on WhatsApp</a>
              </div>
            </address>
            <div className="flex space-x-4 pt-2">
              {/* Replace # with actual social links */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-xs">
          <p>&copy; {currentYear} One Love Autism Children’s Centre Kabale. All rights reserved.</p>
           {/* Optional: Add link to privacy policy/terms */}
           {/* <p className="mt-1">
             <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
           </p> */}
        </div>
      </div>
    </footer>
  );
}
