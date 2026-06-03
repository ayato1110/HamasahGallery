import { ArrowRight, CreditCard, MessageCircle, Package, Truck } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Langkah 1',
    subtitle: 'Pilih Produk',
    description: 'Browsing koleksi produk kami di halaman Produk atau galeri. Pilih yang paling sesuai dengan kebutuhanmu.',
    icon: Package,
  },
  {
    number: '2',
    title: 'Langkah 2',
    subtitle: 'Hubungi via WhatsApp',
    description: 'Setelah yakin dengan pilihan, hubungi kami lewat WhatsApp. Sebutkan produk, jumlah, dan kebutuhanmu.',
    icon: MessageCircle,
  },
  {
    number: '3',
    title: 'Langkah 3',
    subtitle: 'Konfirmasi & Bayar',
    description: 'Kami akan konfirmasi pesananmu. Setelah cocok, lakukan pembayaran sesuai total yang disepakati.',
    icon: CreditCard,
  },
  {
    number: '4',
    title: 'Langkah 4',
    subtitle: 'Terima Pesanan',
    description: 'Pesanan akan disiapkan dan bisa diambil langsung atau dikirim sesuai kesepakatan. Siap untuk momen spesialmu!',
    icon: Truck,
  },
];

export function CaraPesan() {
  const whatsappLink = 'https://wa.me/6281234567890';

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1
          className="text-4xl text-[#1C1917] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Cara Pesan di Hamasah Gallery
        </h1>
        <p className="text-[#A8A29E] mb-12">
          Ikuti langkah mudah berikut untuk melakukan pemesanan produk sesuai kebutuhan Anda
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                {/* Arrow connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-4 z-10">
                    <ArrowRight size={20} className="text-[#D97706]" />
                  </div>
                )}
                <div className="text-center mb-3">
                  <span
                    className="text-2xl text-[#1C1917]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden bg-[#FAFAFA] border border-[#E7E5E4] h-36 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                    <Icon size={34} strokeWidth={1.75} />
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-[#1C1917] mb-1">{step.subtitle}</p>
                  <p className="text-sm text-[#44403C]">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#1C1917] rounded-2xl p-8 text-center">
          <h2
            className="text-2xl text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Siap untuk memesan?
          </h2>
          <p className="text-[#A8A29E] mb-6 max-w-md mx-auto">
            Hubungi kami sekarang melalui WhatsApp. Kami siap membantu dari konsultasi hingga
            pengiriman.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-3 rounded-full transition-colors"
          >
            <MessageCircle size={18} />
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
