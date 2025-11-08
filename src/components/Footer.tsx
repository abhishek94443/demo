import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About KOTA MINDS</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100">About Us</a></li>
              <li><a href="#" className="hover:opacity-100">Our Vision</a></li>
              <li><a href="#" className="hover:opacity-100">Faculty</a></li>
              <li><a href="#" className="hover:opacity-100">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#courses" className="hover:opacity-100">All Courses</a></li>
              <li><a href="#centers" className="hover:opacity-100">Our Centers</a></li>
              <li><a href="#" className="hover:opacity-100">Admissions</a></li>
              <li><a href="#" className="hover:opacity-100">Fee Structure</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:opacity-100">Study Material</a></li>
              <li><a href="#" className="hover:opacity-100">Mock Tests</a></li>
              <li><a href="#" className="hover:opacity-100">Previous Year Papers</a></li>
              <li><a href="#" className="hover:opacity-100">Current Affairs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm opacity-80">Call Now: 1234-567-891<strong>Call Now:</strong> 1800-102-2727
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>© 2025 Kota Minds. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:opacity-100">Terms & Conditions</a>
            <a href="#" className="hover:opacity-100">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;