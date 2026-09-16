import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Mail, Phone } from 'lucide-react';

const footerLinks = {
  programs: [
    { to: '/programs/strength-foundation', label: 'Strength Foundation' },
    { to: '/programs/performance-accelerator', label: 'Performance Accelerator' },
    { to: '/programs/lean-transformation', label: 'Lean Transformation' },
  ],
  company: [
    { to: '/about', label: 'About' },
    { to: '/success-stories', label: 'Success Stories' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300" role="contentinfo">
      <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="w-6 h-6 text-primary-500" />
              <span className="text-lg font-bold text-white tracking-tight">
                Nova<span className="text-primary-500">Fit</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-xs">
              Professional fitness coaching for adults seeking measurable, sustainable results.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:hello@novafit.com" aria-label="Email us" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+15551234567" aria-label="Call us" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>hello@novafit.com</li>
              <li>(555) 123-4567</li>
              <li className="pt-2">
                <Link to="/contact" className="text-primary-500 hover:text-primary-400 font-medium transition-colors">
                  Book a free consultation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} NovaFit Performance. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Results vary. Individual outcomes depend on effort, consistency, and adherence to the program.
          </p>
        </div>
      </div>
    </footer>
  );
}
