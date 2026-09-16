import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { LinkButton } from '../ui';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/success-stories', label: 'Results' },
  { to: '/pricing', label: 'Pricing' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Manage body scroll lock and focus when menu opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Move focus to first focusable element in menu
      const timer = setTimeout(() => {
        const firstLink = menuRef.current?.querySelector('a, button');
        if (firstLink instanceof HTMLElement) firstLink.focus();
      }, 100);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = '';
      // Return focus to menu button
      menuButtonRef.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
    // Trap focus within menu
    if (e.key === 'Tab' && isOpen && menuRef.current) {
      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" aria-label="NovaFit Performance - Home">
            <Dumbbell className="w-7 h-7 text-primary-600 transition-transform group-hover:scale-105" aria-hidden="true" />
            <span className="text-xl font-bold text-neutral-900 tracking-tight">
              Nova<span className="text-primary-600">Fit</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === link.to ? 'text-primary-600' : 'text-neutral-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <LinkButton to="/contact" size="sm">
              Book Consultation
            </LinkButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto"
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-8 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-6 px-4">
              <LinkButton to="/contact" className="w-full">
                Book Consultation
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
