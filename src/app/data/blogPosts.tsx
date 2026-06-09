import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { blog1, blog2, blog3, blog4, blog5 } from '../../assets/images';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  thumbnail: string;
  content: React.ReactNode;
  related: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ide-buket-wisuda-jambi',
    title: 'Ide Buket Wisuda yang Berkesan untuk Hari Kelulusan',
    excerpt:
      'Buket yang tepat bukan hanya cantik saat difoto, tetapi juga terasa dekat dengan orang yang menerimanya.',
    category: 'Inspirasi',
    date: '15 April 2026',
    thumbnail: blog1,
    related: ['buket-snack-vs-buket-bunga', 'kapan-waktu-terbaik-pesan-buket-custom'],
    content: (
      <div className="space-y-5">
        <p>
          Hari wisuda selalu dipenuhi cerita. Ada rasa lega setelah menyelesaikan masa kuliah, ada
          keluarga yang datang dari jauh, dan ada sahabat yang ingin ikut merayakan. Di tengah
          suasana itu, buket menjadi cara sederhana untuk berkata, kamu sudah berjuang dengan baik.
        </p>
        <p>
          Pilihan buket kini jauh lebih beragam. Supaya hadiahmu terasa personal, pilihlah bukan
          hanya dari tampilannya, tetapi juga dari kebiasaan dan selera penerimanya.
        </p>

        <h2>Empat Pilihan yang Layak Dipertimbangkan</h2>
        <h3>1. Buket bunga segar untuk kesan anggun</h3>
        <ImageWithFallback
          src={blog2}
          alt="Buket bunga segar untuk wisuda di Jambi"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />
        <p>
          Bunga segar selalu punya pesona yang sulit digantikan. Padukan warna bunga dengan toga,
          busana, atau warna favorit wisudawan agar hasil fotonya terlihat serasi. Mawar memberi
          kesan hangat, sedangkan rangkaian bernuansa putih dan krem terasa lebih tenang dan elegan.
        </p>

        <h3>2. Buket snack untuk teman yang suka ngemil</h3>
        <p>
          Buket snack terasa akrab, menyenangkan, dan bisa langsung dinikmati setelah acara.
          Isinya dapat disesuaikan dengan camilan favorit penerima. Pilihan ini cocok untuk sahabat,
          adik, atau siapa pun yang lebih menyukai hadiah praktis.
        </p>

        <h3>3. Buket uang yang cantik sekaligus berguna</h3>
        <p>
          Memasuki masa setelah kuliah, ada banyak kebutuhan baru yang harus disiapkan. Buket uang
          memberi penerima kebebasan untuk menggunakannya sesuai kebutuhan, tanpa mengurangi kesan
          istimewa saat hadiah diberikan.
        </p>

        <h3>4. Buket lampu untuk kejutan yang berbeda</h3>
        <ImageWithFallback
          src={blog3}
          alt="Buket lampu untuk hadiah wisuda"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />
        <p>
          Buket dengan lampu kecil tampil menonjol saat acara sore atau malam hari. Cahayanya
          memberi sentuhan manis pada foto dan membuat rangkaian terasa lebih meriah.
        </p>

        <h2>Agar Tidak Salah Pilih</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Kenali penerimanya.</strong> Hadiah sederhana yang sesuai selera akan terasa lebih tulus.</li>
          <li><strong>Perhatikan cuaca.</strong> Jika buket akan dibawa seharian, pilih bahan yang tidak mudah layu.</li>
          <li><strong>Pesan lebih awal.</strong> Beri waktu tiga sampai lima hari, terutama saat musim wisuda.</li>
          <li><strong>Tentukan anggaran.</strong> Buket berkesan tidak harus mahal, tetapi harus dipilih dengan perhatian.</li>
        </ul>

        <h2>Hadiah Kecil untuk Pencapaian Besar</h2>
        <p>
          Buket mungkin hanya dipegang beberapa jam, tetapi perasaan saat menerimanya bisa tinggal
          jauh lebih lama. Pilih rangkaian yang paling mampu mewakili ucapan selamatmu. Jika masih
          ragu, ceritakan tentang penerimanya kepada kami dan Hamasah Gallery akan membantu
          menemukan pilihan yang pas.
        </p>
      </div>
    ),
  },
  {
    slug: 'buket-snack-vs-buket-bunga',
    title: 'Buket Snack atau Buket Bunga, Mana yang Paling Tepat?',
    excerpt:
      'Keduanya sama menarik. Kuncinya ada pada suasana acara dan hal kecil yang disukai penerima.',
    category: 'Tips',
    date: '22 April 2026',
    thumbnail: blog2,
    related: ['ide-buket-wisuda-jambi', 'kapan-waktu-terbaik-pesan-buket-custom'],
    content: (
      <div className="space-y-5">
        <p>
          Saat memilih hadiah, pertanyaan yang sering muncul adalah buket snack atau buket bunga.
          Tidak ada pilihan yang mutlak lebih baik. Buket terbaik adalah yang terasa tepat ketika
          diberikan kepada orang yang tepat.
        </p>
        <ImageWithFallback
          src={blog2}
          alt="Buket snack untuk hadiah"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />

        <h2>Pilih Buket Bunga untuk Kesan yang Lebih Dalam</h2>
        <p>
          Buket bunga cocok ketika kamu ingin menyampaikan rasa bangga, terima kasih, atau kasih
          sayang dengan cara yang anggun. Rangkaian ini pas untuk wisuda, hari jadi, pernikahan,
          maupun hadiah bagi guru dan orang tua.
        </p>
        <p>
          Bunga segar memang perlu dirawat dan tidak bertahan selamanya. Namun, aroma dan
          keindahannya saat diberikan sering menjadi bagian paling berkesan dari sebuah perayaan.
        </p>

        <h2>Pilih Buket Snack untuk Suasana yang Akrab</h2>
        <p>
          Buket snack membawa suasana yang santai dan ceria. Isinya dapat dipilih berdasarkan
          camilan favorit penerima, sehingga hadiah terasa lebih dekat dan tidak asal pilih.
          Rangkaian ini juga mudah dibawa dan dapat dinikmati bersama setelah acara.
        </p>
        <p>
          Pilihan ini sangat cocok untuk ulang tahun teman, kelulusan, atau perpisahan kerja.
          Untuk acara yang sangat resmi, pertimbangkan desain dengan warna dan susunan yang lebih
          tenang agar tetap terlihat pantas.
        </p>

        <ImageWithFallback
          src={blog1}
          alt="Buket bunga dengan pita"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />

        <h2>Masih Sulit Memilih?</h2>
        <p>
          Coba ingat hal yang paling disukai penerima. Jika ia senang menyimpan bunga atau menyukai
          tampilan yang anggun, pilih buket bunga. Jika ia suka ngemil dan menikmati hadiah yang
          praktis, buket snack akan membuatnya tersenyum.
        </p>
        <p>
          Keduanya juga bisa dipadukan dalam satu rangkaian. Beberapa tangkai bunga dapat memberi
          kesan cantik, sementara snack favorit membuat hadiah terasa lebih personal. Sampaikan
          acara, warna pilihan, dan anggaranmu kepada Hamasah Gallery agar rangkaiannya tetap
          seimbang.
        </p>
      </div>
    ),
  },
  {
    slug: 'tips-buket-perpisahan-sekolah',
    title: 'Memilih Buket untuk Perpisahan Sekolah yang Penuh Makna',
    excerpt:
      'Untuk guru atau sahabat, buket yang dipilih dengan perhatian akan selalu terasa lebih berharga.',
    category: 'Tips',
    date: '30 April 2026',
    thumbnail: blog4,
    related: ['ide-buket-wisuda-jambi', 'kapan-waktu-terbaik-pesan-buket-custom'],
    content: (
      <div className="space-y-5">
        <p>
          Perpisahan sekolah mempertemukan banyak perasaan dalam satu hari. Ada bahagia karena
          berhasil menyelesaikan satu tahap, tetapi ada juga haru karena rutinitas bersama segera
          berubah. Buket dapat menjadi ucapan terima kasih yang sederhana untuk orang yang sudah
          menemani perjalanan itu.
        </p>
        <ImageWithFallback
          src={blog4}
          alt="Suasana acara perpisahan sekolah"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />

        <h2>Untuk Guru yang Telah Membimbing</h2>
        <p>
          Pilih rangkaian yang rapi dengan warna lembut seperti putih, krem, atau merah muda.
          Bunga segar memberi kesan hangat, sedangkan bunga kering atau artifisial dapat disimpan
          lebih lama sebagai pajangan. Tambahkan kartu berisi ucapan pribadi dari murid. Beberapa
          kalimat yang jujur sering kali lebih berarti daripada rangkaian yang besar.
        </p>

        <h2>Untuk Sahabat yang Akan Melangkah ke Arah Baru</h2>
        <p>
          Hadiah untuk teman boleh terasa lebih ceria. Pilih buket snack favoritnya, buket uang,
          atau rangkaian dengan warna yang menggambarkan kepribadiannya. Tambahan foto kecil atau
          catatan tentang kenangan bersama juga bisa membuat hadiah terasa sangat personal.
        </p>
        <ImageWithFallback
          src={blog3}
          alt="Buket warna-warni untuk perpisahan"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />

        <h2>Mengatur Anggaran Bersama Teman Sekelas</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Sepakati anggaran sejak awal.</strong> Dengan batas yang jelas, pilihan buket akan lebih mudah ditentukan.</li>
          <li><strong>Utamakan satu detail personal.</strong> Kartu ucapan atau warna favorit penerima memberi makna tanpa menambah banyak biaya.</li>
          <li><strong>Pesan setidaknya tiga hari sebelumnya.</strong> Waktu yang cukup membuat hasil rangkaian lebih rapi dan pilihan bahan lebih luas.</li>
        </ul>

        <h2>Yang Diingat Adalah Perhatiannya</h2>
        <p>
          Buket perpisahan tidak perlu menjadi yang paling besar di ruangan. Selama dipilih dengan
          tulus dan disertai ucapan yang jujur, hadiah itu akan punya tempat dalam kenangan
          penerimanya. Hamasah Gallery siap membantu menyesuaikan rangkaian dengan penerima, acara,
          dan anggaran yang sudah disepakati.
        </p>
      </div>
    ),
  },
  {
    slug: 'kapan-waktu-terbaik-pesan-buket-custom',
    title: 'Kapan Sebaiknya Memesan Buket Custom?',
    excerpt:
      'Waktu yang cukup memberi ruang untuk memilih bahan, menyempurnakan detail, dan mendapatkan hasil terbaik.',
    category: 'Panduan',
    date: '7 Mei 2026',
    thumbnail: blog5,
    related: ['ide-buket-wisuda-jambi', 'buket-snack-vs-buket-bunga'],
    content: (
      <div className="space-y-5">
        <p>
          Buket custom dibuat untuk membawa cerita tertentu. Bisa berupa warna kesukaan sahabat,
          camilan favorit pasangan, atau rangkaian yang senada dengan acara. Karena setiap
          detailnya dipilih khusus, proses pembuatannya membutuhkan waktu yang cukup.
        </p>
        <p>
          Memesan lebih awal bukan berarti harus berbulan-bulan sebelumnya. Kamu hanya perlu
          memberi perangkai ruang untuk mencari bahan, berdiskusi, dan menyelesaikan rangkaian
          dengan teliti.
        </p>
        <ImageWithFallback
          src={blog5}
          alt="Buket custom untuk hadiah spesial"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />

        <h2>Waktu yang Ideal untuk Setiap Acara</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Wisuda dan perpisahan sekolah:</strong> pesan tiga sampai lima hari sebelumnya karena permintaan biasanya meningkat pada waktu yang sama.</li>
          <li><strong>Ulang tahun dan kejutan pribadi:</strong> dua sampai tiga hari cukup untuk desain sederhana dengan bahan yang tersedia.</li>
          <li><strong>Parcel dan pesanan dalam jumlah banyak:</strong> hubungi kami lebih awal agar isi, kemasan, dan jadwal pengiriman dapat disiapkan dengan rapi.</li>
          <li><strong>Pesanan pada hari yang sama:</strong> tetap dapat ditanyakan, tetapi desain perlu menyesuaikan stok yang tersedia.</li>
        </ul>

        <h2>Kapan Harus Memesan Lebih Awal?</h2>
        <p>
          Jangan menunggu terlalu dekat dengan hari acara jika kamu menginginkan warna tertentu,
          isi yang tidak umum, atau jumlah pesanan yang banyak. Hal yang sama berlaku pada musim
          wisuda, akhir tahun, dan masa perpisahan sekolah ketika jadwal produksi lebih cepat penuh.
        </p>
        <p>
          Dengan waktu yang cukup, diskusi juga terasa lebih nyaman. Kamu dapat menyesuaikan
          ukuran, mengganti isi, dan memastikan kartu ucapan ditulis dengan benar sebelum buket
          diserahkan.
        </p>

        <h2>Mulai dari Tanggal Acara</h2>
        <p>
          Jika tanggal acara sudah ditentukan, saat itulah waktu terbaik untuk mulai berkonsultasi.
          Ceritakan siapa penerimanya, suasana yang ingin dibawa, dan anggaran yang tersedia.
          Hamasah Gallery akan membantu menyusun pilihan yang masuk akal serta memberi rekomendasi
          waktu pemesanan yang paling aman.
        </p>
      </div>
    ),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return blogPosts.filter((post) => slugs.includes(post.slug));
}
