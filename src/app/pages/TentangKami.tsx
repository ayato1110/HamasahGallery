import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';
import { cerita1, cerita2, cerita3, team1, team2, team3 } from '../../assets/images';

const teamMembers = [
  {
    id: 1,
    name: 'Mey',
    role: 'Founder & Desainer',
    image: team1,
  },
  {
    id: 2,
    name: 'Rima',
    role: 'Koordinator Produksi',
    image: team2,
  },
  {
    id: 3,
    name: 'Riki',
    role: 'Tim Kreatif',
    image: team3,
  },
];

export function TentangKami() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1
          className="text-4xl text-[#1C1917] mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Tentang Kami
        </h1>

        {/* Story Section */}
        <section className="mb-16">
          <h2
            className="text-3xl text-[#1C1917] text-center mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cerita Hamasah Gallery
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Photo collage */}
            <div className="flex gap-3 md:w-1/2">
              <div className="flex flex-col gap-3 flex-1">
                <div className="rounded-3xl overflow-hidden h-32 bg-[#FAFAFA] border border-[#E7E5E4]">
                  <ImageWithFallback
                    src={cerita1}
                    alt="Produk buket Hamasah Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden h-32 bg-[#FAFAFA] border border-[#E7E5E4]">
                  <ImageWithFallback
                    src={cerita2}
                    alt="Proses pembuatan buket di Hamasah Gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-3xl overflow-hidden h-[272px] bg-[#FAFAFA] border border-[#E7E5E4]">
                  <ImageWithFallback
                    src={cerita3}
                    alt="Tim Hamasah Gallery sedang bekerja"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="md:w-1/2 text-center">
              <p className="text-lg text-[#44403C] leading-relaxed">
                Berawal dari karya selempang yang dibuat dengan penuh perhatian, Hamasah Gallery
                tumbuh menjadi pilihan hadiah kreatif untuk berbagai momen istimewa di Kota Jambi.
                Setiap buket dan kreasi kami dirancang secara personal, dikerjakan dengan rapi,
                dan dipersiapkan untuk menyampaikan perasaan yang sulit diungkapkan lewat kata-kata.
              </p>
            </div>
          </div>
        </section>

        {/* Visi & Misi + Map */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2
              className="text-3xl text-[#1C1917] text-center mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Visi
            </h2>
            <div className="bg-white border border-[#E7E5E4] rounded-2xl p-6 mb-8">
              <p className="text-[#44403C] text-center">
                Menjadi toko hadiah kreatif terpercaya di Kota Jambi yang menghadirkan produk
                berkualitas, unik, dan berkesan untuk setiap momen spesial.
              </p>
            </div>
            <h2
              className="text-3xl text-[#1C1917] text-center mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Misi
            </h2>
            <div className="bg-white border border-[#E7E5E4] rounded-2xl p-6">
              <ul className="space-y-2 text-[#44403C] text-sm">
                <li>• Menyediakan produk buket, medali, parcel, dan selempang custom berkualitas</li>
                <li>• Melayani setiap pelanggan dengan ramah dan penuh perhatian</li>
                <li>• Memberikan harga yang terjangkau tanpa mengurangi kualitas</li>
                <li>• Terus berinovasi dalam desain dan kreasi produk</li>
              </ul>
            </div>
          </div>

          <div>
            <h2
              className="text-2xl text-[#1C1917] text-center mb-4 underline decoration-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lokasi Hamasah Gallery
            </h2>
            <GoogleMapEmbed height={320} />
            <p className="text-sm text-[#A8A29E] text-center mt-3">
              Lorong Siswa, Jalan Siswa I No. 109, RT. 18, Suka Karya, Kota Baru, Kota Jambi
            </p>
            <div className="text-center mt-2">
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
        </section>

        {/* Team */}
        <section>
          <h2
            className="text-3xl text-[#1C1917] text-center mb-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Team Hamasah Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="w-40 text-center"
              >
                <div className="w-36 h-36 rounded-full overflow-hidden bg-[#FAFAFA] border border-[#E7E5E4] mx-auto mb-3">
                  <ImageWithFallback
                    src={member.image}
                    alt={`${member.name} - Tim Hamasah Gallery`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#1C1917]">{member.name}</p>
                <p className="text-sm text-[#A8A29E]">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
