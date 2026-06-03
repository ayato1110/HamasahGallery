import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import {
  galeri1,
  galeri2,
  galeri3,
  galeri4,
  galeri5,
  galeri6,
  galeri7,
} from '../../assets/images';

const galleryItems = [
  { id: 1, src: galeri1, alt: 'Galeri produk Hamasah Gallery 1', className: 'row-span-1' },
  { id: 2, src: galeri2, alt: 'Galeri produk Hamasah Gallery 2', className: 'row-span-2' },
  { id: 3, src: galeri3, alt: 'Galeri produk Hamasah Gallery 3', className: 'row-span-1' },
  { id: 4, src: galeri4, alt: 'Galeri produk Hamasah Gallery 4', className: 'row-span-1' },
  { id: 5, src: galeri5, alt: 'Galeri produk Hamasah Gallery 5', className: 'row-span-1' },
  { id: 6, src: galeri6, alt: 'Galeri produk Hamasah Gallery 6', className: 'col-span-2 row-span-1' },
  { id: 7, src: galeri7, alt: 'Galeri produk Hamasah Gallery 7', className: 'row-span-1' },
];

export function Galeri() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1
          className="text-4xl text-[#1C1917] mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Galeri
        </h1>

        {/* Masonry-like grid using CSS grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl overflow-hidden bg-[#FAFAFA] border border-[#E7E5E4] group ${
                item.className?.includes('col-span-2') ? 'md:col-span-2' : ''
              } ${item.className?.includes('row-span-2') ? 'md:row-span-2' : ''}`}
            >
              <ImageWithFallback
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  item.className?.includes('row-span-2') ? 'h-[500px] md:h-full' : 'h-64'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
