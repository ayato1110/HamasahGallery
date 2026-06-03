import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, MessageCircle } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/produk', label: 'Produk' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/cara-pesan', label: 'Cara Pesan' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/kontak', label: 'Kontak' },
  { href: '/blog', label: 'Blog' },
];

const whatsappLink = 'https://wa.me/6281234567890';

export function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="bg-white border-b border-[#E7E5E4]">
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

          {/* WA CTA button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] hover:scale-105 text-white text-sm px-4 py-2 rounded-full transition-all"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            Pesan via WA
          </a>
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
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white text-sm px-4 py-2 rounded-full w-fit transition-colors"
          >
            <MessageCircle size={16} strokeWidth={1.5} />
            Pesan via WA
          </a>
        </div>
      )}
    </nav>
  );
}
