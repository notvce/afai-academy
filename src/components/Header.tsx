import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ContactButton } from "@/components/ui/contact-button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#formacion", label: "Formación" },
    { href: "#metodologia", label: "Metodología" },
    { href: "#certificacion", label: "Certificación" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo-afai.png" 
              alt="AFAI - Academia de Formación de Alto Impacto" 
              className="h-12 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href.substring(1))}
                className="text-foreground hover:text-orange-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-primary after:transition-all after:duration-300 hover:after:w-full cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          {/* Desktop CTA Button */}
          <ContactButton variant="header">
            <Button className="hidden md:flex bg-gradient-to-r from-orange-primary to-orange-dark hover:from-orange-dark hover:to-orange-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Inscríbete
            </Button>
          </ContactButton>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex justify-center mb-4">
                  <Link to="/">
                    <img 
                      src="/logo-afai.png" 
                      alt="AFAI Academy" 
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                </div>
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href.substring(1))}
                    className="text-lg font-medium text-foreground hover:text-orange-primary transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
                <ContactButton variant="header">
                  <Button className="bg-gradient-to-r from-orange-primary to-orange-dark text-white mt-4 w-full">
                    Inscríbete
                  </Button>
                </ContactButton>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;