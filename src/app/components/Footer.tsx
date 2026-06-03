import { Link } from 'react-router';
import { Phone, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1C1917] text-[#FFF8E7]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <p
            className="text-3xl mb-3 text-[#FFF8E7]"
            style={{ fontFamily: "'Style Script', cursive" }}
          >
            Hamasah Gallery
          </p>
          <div className="w-16 h-0.5 bg-[#D97706] rounded mb-3" />
          <p className="text-sm leading-relaxed text-[#A8A29E]">
            Menyediakan berbagai buket, medali, parcel, dan selempang custom untuk melengkapi momen
            spesial Anda. Desain elegan, bisa request sesuai keinginan, dan dibuat dengan penuh
            detail.
          </p>
        </div>

        {/* Bantuan */}
        <div>
          <p className="text-xl mb-2 text-[#FFF8E7]">Bantuan</p>
          <div className="w-12 h-0.5 bg-[#D97706] rounded mb-3" />
          <ul className="space-y-2 text-sm">
            <Link
              to="/pertanyaan-umum"
              className="block text-[#A8A29E] hover:text-[#D97706] transition-colors"
            >
              Pertanyaan Umum
            </Link>
          </ul>
          <p className="text-xl mt-4 mb-2 text-[#FFF8E7]">Layanan</p>
          <div className="w-12 h-0.5 bg-[#D97706] rounded mb-3" />
          <ul className="space-y-2 text-sm text-[#A8A29E]">
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-[#D97706]" />
              <span>0812 - 3456 - 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={14} className="text-[#D97706]" />
              <span>@hamasahgallery</span>
            </li>
          </ul>
        </div>

        {/* Halaman */}
        <div>
          <p className="text-xl mb-2 text-[#FFF8E7]">Halaman</p>
          <div className="w-12 h-0.5 bg-[#D97706] rounded mb-3" />
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-[#A8A29E] hover:text-[#D97706] transition-colors">Beranda</Link></li>
            <li><Link to="/produk" className="text-[#A8A29E] hover:text-[#D97706] transition-colors">Produk</Link></li>
            <li><Link to="/galeri" className="text-[#A8A29E] hover:text-[#D97706] transition-colors">Galeri</Link></li>
            <li><Link to="/cara-pesan" className="text-[#A8A29E] hover:text-[#D97706] transition-colors">Cara Pesan</Link></li>
            <li><Link to="/tentang-kami" className="text-[#A8A29E] hover:text-[#D97706] transition-colors">Tentang Kami</Link></li>
            <li><Link to="/kontak" className="text-[#A8A29E] hover:text-[#D97706] transition-colors">Kontak</Link></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <p className="text-xl mb-2 text-right text-[#FFF8E7]">Ikuti Sosial Media</p>
          <div className="w-12 h-0.5 bg-[#D97706] rounded mb-3 ml-auto" />
          <div className="flex gap-4 justify-end">
            <a
              href="https://instagram.com/hamasahgallery"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8A29E] hover:text-[#D97706] transition-colors"
              aria-label="Instagram Hamasah Gallery"
            >
              <Instagram size={36} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8A29E] hover:text-[#D97706] transition-colors"
              aria-label="Facebook Hamasah Gallery"
            >
              <Facebook size={36} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#44403C] py-4">
        <p className="text-center text-xs text-[#A8A29E]">
          © {new Date().getFullYear()} Hamasah Gallery — Kota Jambi. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
