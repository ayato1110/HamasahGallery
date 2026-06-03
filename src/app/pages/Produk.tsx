import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  buketBunga1,
  buketBunga2,
  buketBunga3,
  buketBunga4,
  buketJajan1,
  buketJajan2,
  buketJajan3,
  buketJajan4,
  buketUang1,
  buketUang2,
  buketUang3,
  buketUang4,
  medali1,
  medali2,
  medali3,
  medali4,
  papanAkrilik1,
  papanAkrilik2,
  papanAkrilik3,
  papanAkrilik4,
  parcel1,
  parcel2,
  parcel3,
  parcel4,
  selempang1,
  selempang2,
  selempang3,
  selempang4,
} from '../../assets/images';

type Category = 'Semua' | 'Buket' | 'Medali' | 'Parcel' | 'Selempang' | 'Papan Akrilik';

const allProducts = [
  { id: 1, name: 'Buket Bunga 1', price: '35.000', category: 'Buket', image: buketBunga1 },
  { id: 2, name: 'Buket Bunga 2', price: '35.000', category: 'Buket', image: buketBunga2 },
  { id: 3, name: 'Buket Bunga 3', price: '35.000', category: 'Buket', image: buketBunga3 },
  { id: 4, name: 'Buket Bunga 4', price: '35.000', category: 'Buket', image: buketBunga4 },
  { id: 5, name: 'Buket Jajan 1', price: '35.000', category: 'Buket', image: buketJajan1 },
  { id: 6, name: 'Buket Jajan 2', price: '35.000', category: 'Buket', image: buketJajan2 },
  { id: 7, name: 'Buket Jajan 3', price: '35.000', category: 'Buket', image: buketJajan3 },
  { id: 8, name: 'Buket Jajan 4', price: '35.000', category: 'Buket', image: buketJajan4 },
  { id: 9, name: 'Buket Uang 1', price: '35.000', category: 'Buket', image: buketUang1 },
  { id: 10, name: 'Buket Uang 2', price: '35.000', category: 'Buket', image: buketUang2 },
  { id: 11, name: 'Buket Uang 3', price: '35.000', category: 'Buket', image: buketUang3 },
  { id: 12, name: 'Buket Uang 4', price: '35.000', category: 'Buket', image: buketUang4 },
  { id: 13, name: 'Medali 1', price: '25.000', category: 'Medali', image: medali1 },
  { id: 14, name: 'Medali 2', price: '25.000', category: 'Medali', image: medali2 },
  { id: 15, name: 'Medali 3', price: '25.000', category: 'Medali', image: medali3 },
  { id: 16, name: 'Medali 4', price: '25.000', category: 'Medali', image: medali4 },
  { id: 17, name: 'Parcel 1', price: '75.000', category: 'Parcel', image: parcel1, note: 'Dibuka saat Lebaran' },
  { id: 18, name: 'Parcel 2', price: '80.000', category: 'Parcel', image: parcel2, note: 'Dibuka saat Lebaran' },
  { id: 19, name: 'Parcel 3', price: '90.000', category: 'Parcel', image: parcel3, note: 'Dibuka saat Lebaran' },
  { id: 20, name: 'Parcel 4', price: '100.000', category: 'Parcel', image: parcel4, note: 'Dibuka saat Lebaran' },
  { id: 21, name: 'Selempang 1', price: '33.000', category: 'Selempang', image: selempang1 },
  { id: 22, name: 'Selempang 2', price: '33.000', category: 'Selempang', image: selempang2 },
  { id: 23, name: 'Selempang 3', price: '33.000', category: 'Selempang', image: selempang3 },
  { id: 24, name: 'Selempang 4', price: '33.000', category: 'Selempang', image: selempang4 },
  { id: 25, name: 'Papan Akrilik 1', price: '45.000', category: 'Papan Akrilik', image: papanAkrilik1 },
  { id: 26, name: 'Papan Akrilik 2', price: '45.000', category: 'Papan Akrilik', image: papanAkrilik2 },
  { id: 27, name: 'Papan Akrilik 3', price: '45.000', category: 'Papan Akrilik', image: papanAkrilik3 },
  { id: 28, name: 'Papan Akrilik 4', price: '45.000', category: 'Papan Akrilik', image: papanAkrilik4 },
];

const categories: Category[] = ['Semua', 'Buket', 'Medali', 'Parcel', 'Selempang', 'Papan Akrilik'];

export function Produk() {
  const [active, setActive] = useState<Category>('Semua');
  const whatsappLink = 'https://wa.me/6281234567890';

  const filtered =
    active === 'Semua' ? allProducts : allProducts.filter((p) => p.category === active);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1
          className="text-4xl text-[#1C1917] mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Produk/
        </h1>
        <p className="text-sm text-[#78716C] mb-6">
          Harga disesuaikan lewat WhatsApp agar lebih fleksibel untuk custom, isi, dan ukuran.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm transition-colors ${
                active === cat
                  ? 'bg-[#D97706] text-white hover:bg-[#B45309]'
                  : 'bg-[#FAFAFA] text-[#44403C] border border-[#E7E5E4] hover:border-[#D97706]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="group">
              <p className="text-center text-[#1C1917] mb-2">{product.name}</p>
              <div className="rounded-3xl overflow-hidden bg-[#FAFAFA] border border-[#E7E5E4] mb-2 aspect-square">
                <ImageWithFallback
                  src={product.image}
                  alt={`${product.name} - Hamasah Gallery Jambi`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col items-center gap-1 px-1 text-center">
                <span className="text-xs text-[#78716C]">Harga via WhatsApp</span>
                {'note' in product && (
                  <p className="text-[11px] text-[#78716C] leading-tight">{product.note}</p>
                )}
                <button
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-[#22C55E] text-white rounded-md p-1.5 hover:bg-[#16A34A] transition-colors shrink-0"
                  aria-label={`Pesan ${product.name}`}
                >
                  <ShoppingCart size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
