import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { id: 1, question: 'Apakah buket bisa custom sesuai keinginan?', answer: 'Ya, semua buket bisa disesuaikan mulai dari warna, tema, hingga isi sesuai permintaan Anda. Cukup beritahu kami konsep yang diinginkan dan kami akan bantu wujudkan.' },
  { id: 2, question: 'Berapa lama proses pembuatan buket?', answer: 'Untuk pemesanan standar biasanya membutuhkan 1–2 hari kerja. Untuk pesanan custom atau dalam jumlah banyak, kami sarankan pesan minimal 3–5 hari sebelumnya.' },
  { id: 3, question: 'Apakah bisa pesan buket mendadak?', answer: 'Tergantung ketersediaan bahan dan slot produksi. Untuk pemesanan mendadak (H-1 atau H-0), silakan hubungi kami lebih dulu untuk mengecek ketersediaan.' },
  { id: 4, question: 'Berapa harga buket di Hamasah Gallery?', answer: 'Harga tidak ditampilkan langsung di website karena menyesuaikan model, isi, dan tingkat custom. Silakan hubungi kami lewat WhatsApp untuk estimasi yang paling pas.' },
  { id: 5, question: 'Apakah bisa request tulisan di buket?', answer: 'Ya, semua buket bisa disesuaikan, termasuk penambahan kartu ucapan dengan tulisan sesuai keinginan Anda.' },
  { id: 6, question: 'Apakah bisa kirim ke luar kota?', answer: 'Bisa, pengiriman dapat dilakukan sesuai lokasi tujuan dengan biaya tambahan yang disesuaikan dengan jarak pengiriman.' },
  { id: 7, question: 'Apakah ada minimal order?', answer: 'Tidak ada minimal order. Anda bisa memesan sesuai kebutuhan, mulai dari 1 buket.' },
  { id: 8, question: 'Bagaimana cara pemesanannya?', answer: 'Cukup hubungi kami melalui WhatsApp di nomor 0812-3456-7890. Kirim detail pesanan (jenis produk, jumlah, tanggal kebutuhan, dan catatan khusus jika ada), dan kami akan bantu prosesnya.' },
];

export function PertanyaanUmum() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1
          className="text-4xl text-[#1C1917] mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pertanyaan umum
        </h1>

        <div className="max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border-b pb-4 transition-colors ${
                openId === faq.id ? 'border-[#D97706]' : 'border-[#E7E5E4]'
              }`}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full text-left flex items-start justify-between gap-4 group"
              >
                <span className="text-[#1C1917]">
                  {faq.id}. {faq.question}
                </span>
                {openId === faq.id ? (
                  <ChevronUp size={16} className="mt-0.5 shrink-0 text-[#D97706]" />
                ) : (
                  <ChevronDown size={16} className="mt-0.5 shrink-0 text-[#A8A29E]" />
                )}
              </button>
              {openId === faq.id && (
                <p className="mt-2 text-sm text-[#44403C] leading-relaxed pl-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
