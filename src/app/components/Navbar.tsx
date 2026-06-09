import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/produk', label: 'Produk' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/cara-pesan', label: 'Cara Pesan' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/kontak', label: 'Kontak' },
  { href: '/blog', label: 'Blog' },
];

export function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E7E5E4]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl text-[#1C1917]"
          style={{ fontFamily: "'Style Script', cursive" }}
        >
          Hamasah Gallery
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm transition-all ${
                isActive(link.href)
                  ? 'text-[#D97706] underline underline-offset-4'
                  : 'text-[#44403C] hover:text-[#D97706]'
              }`}
            >
              {link.label}
            </Link>
          ))}

        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1C1917]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E7E5E4] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm py-1 ${
                isActive(link.href)
                  ? 'text-[#D97706] underline underline-offset-4'
                  : 'text-[#44403C] hover:text-[#D97706]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
