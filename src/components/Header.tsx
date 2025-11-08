import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <header className="w-full bg-background sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="hidden md:flex gap-4">
            <span>Digital</span>
            <span>Distance Learning</span>
            <span>
          </span>
            <span>
          </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm" className="font-semibold">
              Pay Due Fee
            </Button>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">1234-567-891</span>
            </div>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/90 hidden md:inline-flex">
              Select City
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/90 hidden md:inline-flex">
              Log In
            </Button>
            <Button variant="outline" size="sm" className="bg-background text-foreground hidden md:inline-flex">
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <div className="text-2xl font-bold text-primary flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">S</span>
                </div>
                <span>KOTA MINDS</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-6">
                <a href="#centers" className="text-sm font-medium hover:text-primary transition-colors">
                  CENTERS
                </a>
                <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">
                  COURSES
                </a>
                <a href="#results" className="text-sm font-medium hover:text-primary transition-colors">
                  RESULTS
                </a>
                <a href="#scholarship" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
                  SCHOLARSHIP
                  <span className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded">NEW</span>
                </a>
                <a href="#hub" className="text-sm font-medium hover:text-primary transition-colors">
                  STUDENT'S HUB
                </a>
                <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
                  BLOG
                </a>
              </nav>
            </div>

            {/* Search and Mobile Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 border rounded-md px-3 py-1.5">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by Course Name" className="border-0 p-0 h-auto focus-visible:ring-0 w-48" />
              </div>

              <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && <nav className="lg:hidden mt-4 pb-4 border-t pt-4 space-y-3">
              <a href="#centers" className="block text-sm font-medium hover:text-primary">
                CENTERS
              </a>
              <a href="#courses" className="block text-sm font-medium hover:text-primary">
                COURSES
              </a>
              <a href="#results" className="block text-sm font-medium hover:text-primary">
                RESULTS
              </a>
              <a href="#scholarship" className="block text-sm font-medium hover:text-primary">
                SCHOLARSHIP
              </a>
              <a href="#hub" className="block text-sm font-medium hover:text-primary">
                STUDENT'S HUB
              </a>
              <a href="#blog" className="block text-sm font-medium hover:text-primary">
                BLOG
              </a>
              <div className="flex items-center gap-2 border rounded-md px-3 py-2 md:hidden">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by Course Name" className="border-0 p-0 h-auto focus-visible:ring-0" />
              </div>
            </nav>}
        </div>
      </div>
    </header>;
};
export default Header;