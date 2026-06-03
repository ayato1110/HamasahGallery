import { Clock, Phone, Instagram, Mail, MapPin } from 'lucide-react';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';

export function Kontak() {
  const whatsappLink = 'https://wa.me/6281234567890';
  const instagramLink = 'https://instagram.com/hamasahgallery';

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1
          className="text-4xl text-[#1C1917] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Kontak
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Contact Info */}
          <div>
            <h2
              className="text-2xl text-[#1C1917] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hubungi Kami
            </h2>

            {/* CTA Buttons */}
            <div className="flex gap-3 mb-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#22C55E] text-white py-2.5 rounded-2xl hover:bg-[#16A34A] transition-colors text-sm"
              >
                Whatsapp
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-[#E7E5E4] text-[#44403C] py-2.5 rounded-2xl hover:border-[#D97706] hover:text-[#D97706] transition-colors text-sm"
              >
                Instagram
              </a>
            </div>

            {/* Contact details */}
            <ul className="space-y-4 text-sm text-[#44403C]">
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-[#D97706]" />
                <div>
                  <p>Jam Buka : Setiap Hari, 09.00 – 17.00 WIB</p>
                  <p>Layanan Online : Setiap Hari 10.00 – 18.00 WIB</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#D97706]" />
                <span>Whatsapp : 0812 – 3456 – 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="shrink-0 text-[#D97706]" />
                <span>Instagram : @hamasahgallery</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-[#D97706]" />
                <span>Email : hamasahofficial@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#D97706]" />
                <span>
                  Lorong Siswa, Jalan Siswa I No. 109, RT. 18, Suka Karya, Kota Baru, Kota Jambi,
                  Provinsi Jambi
                </span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <p className="text-sm text-[#A8A29E] mb-2 underline">
              Lorong Siswa, Jalan Siswa I No. 109, RT. 18, Suka Karya, Kota Baru, Kota Jambi,
              Provinsi Jambi
            </p>
            <GoogleMapEmbed height={340} />
            <div className="mt-3 text-center">
              <a
                href="https://maps.google.com/?q=Jalan+Siswa+I+No.+109,+RT+18,+Suka+Karya,+Kota+Baru,+Kota+Jambi,+Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#D97706] underline hover:text-[#B45309] hover:no-underline transition-colors"
              >
                Buka di Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
