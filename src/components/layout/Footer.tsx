
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-roboto text-2xl font-bold text-gradient">
              NexGen Assets
            </Link>
            <p className="mt-4 text-sm text-foreground/80">
              Pioneering the future of digital asset management with security, transparency, and innovation.
            </p>
          </div>
          
          <div>
            <h3 className="font-roboto font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/investment-solutions" className="text-sm text-foreground/80 hover:text-foreground">Investment Products</Link></li>
              <li><Link to="/research" className="text-sm text-foreground/80 hover:text-foreground">Research & Insights</Link></li>
              <li><Link to="/resources" className="text-sm text-foreground/80 hover:text-foreground">Educational Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-roboto font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/company" className="text-sm text-foreground/80 hover:text-foreground">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-foreground/80 hover:text-foreground">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-foreground/80 hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-roboto font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-sm text-foreground/80 hover:text-foreground">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-sm text-foreground/80 hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/security" className="text-sm text-foreground/80 hover:text-foreground">Security</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-center text-foreground/60">
            © {new Date().getFullYear()} NexGen Assets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
