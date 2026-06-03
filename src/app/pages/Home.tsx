import { Link } from "react-router";
import { ArrowRight, ShoppingCart, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GoogleMapEmbed } from "../components/GoogleMapEmbed";
import {
  buketBunga1,
  buketBunga2,
  buketJajan1,
  buketUang1,
  heroBeranda,
  medali1,
  papanAkrilik1,
  parcel1,
  selempang1,
} from "../../assets/images";

const products = [
  {
    id: 1,
    name: "Buket Bunga",
    price: "35.000",
    image: buketBunga1,
  },
  {
    id: 2,
    name: "Buket Jajan",
    price: "35.000",
    image: buketJajan1,
  },
  {
    id: 3,
    name: "Buket Uang",
    price: "35.000",
    image: buketUang1,
  },
  {
    id: 4,
    name: "Medali",
    price: "25.000",
    image: medali1,
  },
  {
    id: 5,
    name: "Parcel Lebaran",
    price: "75.000",
    image: parcel1,
  },
  {
    id: 6,
    name: "Selempang",
    price: "33.000",
    image: selempang1,
  },
  {
    id: 7,
    name: "Papan Akrilik",
    price: "45.000",
    image: papanAkrilik1,
  },
  {
    id: 8,
    name: "Buket Bunga 2",
    price: "35.000",
    image: buketBunga2,
  },
];

export function Home() {
  const whatsappLink = "https://wa.me/6281234567890";

  return (
    <div className="bg-white">
      {/* ── Hero Section ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="flex flex-wrap gap-3 mb-5">
            <span className="inline-flex items-center bg-[#FEF3C7] text-[#92400E] text-xs px-3 py-1.5 rounded-full font-medium">
              ⚡ Accept Urgent Order
            </span>
            <span className="inline-flex items-center bg-[#FCE7F3] text-[#9D174D] text-xs px-3 py-1.5 rounded-full font-medium">
              ✦ Custom Sesuai Request
            </span>
            <span className="inline-flex items-center bg-[#E0F2FE] text-[#075985] text-xs px-3 py-1.5 rounded-full font-medium">
              ✓ Kerapian Terjamin
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl text-[#1C1917] mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cari Hadiah, Ingat Hamasah
          </h1>
          <p className="text-lg text-[#44403C] mb-8 leading-relaxed max-w-md">
            Hamasah Gallery menyediakan buket, medali, parcel, dan selempang
            custom dengan desain elegan dan bisa disesuaikan dengan keinginan
            Anda.
          </p>
          <Link
            to="/produk"
            className="inline-flex items-center gap-3 bg-[#D97706] hover:bg-[#B45309] text-white px-7 py-3 rounded-full transition-colors"
          >
            <span>Lihat Produk Kami!</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Arch hero image */}
        <div className="flex-1 flex justify-center">
          <div
            className="w-72 md:w-80 overflow-hidden"
            style={{ borderRadius: "200px 200px 40px 40px" }}
          >
            <ImageWithFallback
              src={heroBeranda}
              alt="Buket cantik dari Hamasah Gallery"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Urgent & Sameday Order Section ── */}
      <section className="max-w-7xl mx-auto px-6 pb-6">
        <div
          className="bg-white rounded-xl shadow-sm border-l-4 border-[#EA580C] py-12 px-8"
          style={{
            borderRight: "1px solid #F0F0F0",
            borderTop: "1px solid #F0F0F0",
            borderBottom: "1px solid #F0F0F0",
          }}
        >
          {/* Badge */}
          <span className="inline-flex items-center bg-[#FEF3C7] text-[#92400E] text-xs px-3 py-1 rounded-full mb-5">
            Accept Urgent Order
          </span>

          {/* Headline */}
          <h2
            className="text-3xl text-[#1C1917] mb-4 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Butuh Buket Hari Ini Juga?
          </h2>

          {/* Body */}
          <p className="text-base text-[#44403C] leading-relaxed max-w-2xl mb-6">
            Order pagi sebelum jam 10.00, selesai siang hari ini. Hamasah
            Gallery siap melayani kebutuhan mendadak wisuda, perpisahan, atau
            kado spontan Anda di Kota Jambi.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-3 rounded-full text-sm transition-colors"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              Chat WhatsApp Sekarang →
            </a>
            <a
              href="/kontak"
              className="text-sm text-[#78716C] underline underline-offset-2 hover:text-[#44403C] transition-colors"
            >
              Lihat Jam Operasional
            </a>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3">
            {[
              "Order Pagi → Selesai Siang",
              "Kota Jambi & Sekitar",
              "Konfirmasi via WhatsApp",
            ].map((pill) => (
              <span
                key={pill}
                className="text-sm text-[#44403C] bg-[#FAFAFA] border border-[#E7E5E4] px-4 py-2 rounded-full"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── USP Strip ── */}
      <div className="bg-[#FAFAFA] py-8 px-6 border-y border-[#E7E5E4] mt-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 text-center">
          {[
            "Buket Custom",
            "Medali Penghargaan",
            "Parcel Spesial",
            "Selempang Custom",
            "Papan Akrilik",
          ].map((item) => (
            <span key={item} className="text-[#44403C] px-4 text-sm">
              ✦ {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Products Section ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2
          className="text-4xl text-[#1C1917] text-center mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Produk Hamasah Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="rounded-3xl overflow-hidden bg-[#FAFAFA] border border-[#E7E5E4] mb-3 aspect-square">
                <ImageWithFallback
                  src={product.image}
                  alt={`${product.name} - Hamasah Gallery Jambi`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center text-[#1C1917] mb-2">{product.name}</p>
              <div className="flex flex-col items-center gap-2 px-1">
                <span className="text-xs text-[#78716C]">Harga via WhatsApp</span>
                <button
                  onClick={() => window.open(whatsappLink, "_blank")}
                  className="bg-[#22C55E] text-white rounded-md p-1.5 hover:bg-[#16A34A] transition-colors"
                  aria-label={`Pesan ${product.name}`}
                >
                  <ShoppingCart size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/produk"
            className="inline-flex items-center gap-2 border border-[#E7E5E4] text-[#44403C] px-6 py-2.5 rounded-full hover:border-[#D97706] hover:text-[#D97706] transition-colors"
          >
            Lihat Semua Produk <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl border border-[#E7E5E4] p-6 shadow-sm">
          <h2
            className="text-2xl text-[#1C1917] text-center mb-1 underline decoration-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lokasi Hamasah Gallery
          </h2>
          <p className="text-center text-sm text-[#A8A29E] mb-4">
            Lorong Siswa, Jalan Siswa I No. 109, RT. 18, Suka Karya, Kota Baru,
            Kota Jambi
          </p>
          <GoogleMapEmbed height={380} />
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com/?q=Jalan+Siswa+I+No.+109,+RT+18,+Suka+Karya,+Kota+Baru,+Kota+Jambi,+Indonesia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#D97706] underline hover:text-[#B45309] hover:no-underline transition-colors"
            >
              Buka di Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
