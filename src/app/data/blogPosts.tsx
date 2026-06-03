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
    title: 'Ide Buket Wisuda yang Unik di Jambi',
    excerpt:
      'Wisuda bukan cuma soal toga dan foto. Buket yang kamu bawa juga bisa jadi kenangan yang diingat lama.',
    category: 'Inspirasi',
    date: '15 April 2025',
    thumbnail: blog1,
    related: ['buket-snack-vs-buket-bunga', 'kapan-waktu-terbaik-pesan-buket-custom'],
    content: (
      <div className="space-y-5">
        <p>
          Musim wisuda di Jambi biasanya ramai sekitar bulan Agustus sampai Oktober. Kampus-kampus
          seperti Unja, IAIN STS, dan beberapa universitas swasta biasanya mengadakan acara wisuda
          besar-besaran. Dan satu hal yang hampir selalu ada di setiap momen itu: buket.
        </p>
        <p>
          Tapi buket wisuda sekarang sudah jauh berbeda dari yang dulu. Dulu mungkin cukup dengan
          selusin mawar merah. Sekarang, ada banyak pilihan yang lebih kreatif dan berkesan.
        </p>

        <h2>Jenis Buket yang Populer untuk Wisuda</h2>

        <h3>1. Buket Bunga Segar</h3>
        <ImageWithFallback
          src={blog2}
          alt="Buket bunga segar untuk wisuda di Jambi"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />
        <p>
          Buket bunga segar tetap jadi pilihan klasik yang nggak pernah salah. Apalagi kalau kamu
          pilih bunga yang sesuai warna toga atau tema kampusnya. Di Hamasah Gallery, kamu bisa
          request warna dan jenis bunga yang kamu mau, termasuk kombinasi mawar, lily, dan bunga
          musiman lainnya.
        </p>

        <h3>2. Buket Snack</h3>
        <p>
          Ini yang sedang banyak diminati, terutama buat yang mau kasih hadiah lebih "bisa
          dimakan". Buket snack berisi berbagai camilan favorit yang ditata rapi jadi bentuk buket.
          Lebih awet dari bunga, dan penerimanya bisa langsung menikmatinya setelah foto-foto
          selesai.
        </p>

        <h3>3. Buket Uang</h3>
        <p>
          Kalau kamu nggak yakin mau kasih apa, buket uang adalah solusi yang praktis. Uang
          dirangkai jadi bentuk buket yang cantik, dan penerimanya bebas pakai untuk kebutuhan
          apapun. Cocok buat wisudawan yang baru mau mulai kerja atau melanjutkan studi.
        </p>

        <h3>4. Buket Lampu LED</h3>
        <ImageWithFallback
          src={blog3}
          alt="Buket lampu LED cantik untuk wisuda"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />
        <p>
          Buket lampu LED sekarang sedang naik daun. Kalau difoto di malam hari atau di tempat
          yang agak redup, hasilnya memang estetik banget. Cahaya kecil dari lampu-lampu itu bikin
          buket kelihatan hidup dan romantis.
        </p>

        <h2>Tips Memilih Buket untuk Wisuda di Jambi</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Sesuaikan dengan kepribadian si penerima.</strong> Kalau dia orangnya suka
            sesuatu yang unik dan kekinian, coba buket snack atau lampu LED. Kalau dia lebih suka
            yang elegan, buket bunga tetap pilihan terbaik.
          </li>
          <li>
            <strong>Pertimbangkan cuaca Jambi.</strong> Jambi panas. Buket bunga segar bisa cepat
            layu kalau kamu bawa dari pagi sampai sore. Kalau khawatir, pilih buket yang lebih
            awet seperti buket snack atau buket artifisial.
          </li>
          <li>
            <strong>Pesan jauh-jauh hari.</strong> Musim wisuda itu ramai banget. Pesan setidaknya
            3–5 hari sebelumnya biar kamu nggak kehabisan slot atau harus terburu-buru.
          </li>
          <li>
            <strong>Budget nggak harus besar.</strong> Di Hamasah Gallery, buket mulai dari harga
            yang terjangkau. Yang penting adalah niatnya, bukan harganya.
          </li>
        </ul>

        <h2>Kesimpulan</h2>
        <p>
          Wisuda adalah momen yang hanya datang sekali (atau mungkin dua kali kalau lanjut S2).
          Buket yang kamu pilih bisa jadi bagian dari kenangan indah di hari itu. Apapun pilihanmu,
          pastikan kamu pilih sesuai selera dan kebutuhan.
        </p>
        <p>
          Kalau bingung mau mulai dari mana, langsung saja hubungi kami. Kami senang bantu kamu
          nemuin buket yang paling pas.
        </p>
      </div>
    ),
  },
  {
    slug: 'buket-snack-vs-buket-bunga',
    title: 'Buket Snack vs Buket Bunga: Mana yang Lebih Cocok?',
    excerpt:
      'Dua pilihan populer untuk hadiah, tapi masing-masing punya keunggulan sendiri. Tergantung situasinya.',
    category: 'Tips',
    date: '22 April 2025',
    thumbnail: blog2,
    related: ['ide-buket-wisuda-jambi', 'kapan-waktu-terbaik-pesan-buket-custom'],
    content: (
      <div className="space-y-5">
        <p>
          Sekarang ini, kalau mau beli buket untuk hadiah, pilihannya udah banyak banget. Tapi
          dua yang paling sering ditanyakan ke kami adalah: buket snack atau buket bunga? Mana yang
          lebih bagus?
        </p>
        <p>Jawabannya: tergantung. Tapi supaya lebih jelas, mari kita bahas satu per satu.</p>

        <ImageWithFallback
          src={blog2}
          alt="Buket snack untuk hadiah ulang tahun"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />

        <h2>Buket Bunga</h2>
        <h3>Kelebihan</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Tampilan klasik dan elegan</li>
          <li>Cocok untuk semua acara formal dan non-formal</li>
          <li>Hasil foto biasanya lebih cantik dan natural</li>
          <li>Bisa disesuaikan warna dan jenis bunga</li>
        </ul>

        <h3>Kekurangan</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bunga segar tidak bertahan lama, terutama di cuaca Jambi yang panas</li>
          <li>Perlu dirawat agar tidak cepat layu</li>
          <li>Setelah beberapa hari biasanya sudah tidak bisa digunakan</li>
        </ul>

        <h2>Buket Snack</h2>
        <h3>Kelebihan</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Awet lebih lama, bisa dinikmati berhari-hari</li>
          <li>Lebih praktis, tidak perlu dirawat</li>
          <li>Bisa disesuaikan dengan snack favorit penerima</li>
          <li>Cocok untuk ulang tahun, wisuda, perpisahan</li>
          <li>Sering jadi bahan konten yang menarik</li>
        </ul>

        <h3>Kekurangan</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Terkesan kurang formal untuk acara-acara resmi</li>
          <li>Pilihan snack bisa terbatas tergantung stok</li>
        </ul>

        <ImageWithFallback
          src={blog1}
          alt="Buket bunga cantik dengan pita"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />

        <h2>Kapan Pilih Buket Bunga?</h2>
        <p>
          Pilih buket bunga kalau kamu mau kasih kesan yang lebih romantis atau formal. Misalnya
          untuk pasangan, untuk atasan di kantor, atau untuk acara yang memang membutuhkan kesan
          elegansi seperti pernikahan atau peringatan hari jadi.
        </p>

        <h2>Kapan Pilih Buket Snack?</h2>
        <p>
          Buket snack lebih cocok untuk situasi yang santai dan menyenangkan. Ulang tahun teman,
          wisuda adik kelas, atau perpisahan kerja. Penerimanya pasti senyum pas lihat isinya,
          apalagi kalau kamu tahu camilan favoritnya.
        </p>

        <h2>Bisa Dikombinasi?</h2>
        <p>
          Tentu bisa. Di Hamasah Gallery, kami juga bisa buat buket kombinasi — bunga plus snack
          dalam satu rangkaian. Hasilnya unik dan nggak biasa. Kalau mau coba, hubungi kami
          langsung dan ceritakan konsep yang kamu mau.
        </p>
      </div>
    ),
  },
  {
    slug: 'tips-buket-perpisahan-sekolah',
    title: 'Tips Memilih Buket untuk Acara Perpisahan Sekolah',
    excerpt:
      'Acara perpisahan sekolah hanya datang sekali. Pilih buket yang benar-benar berkesan untuk guru atau teman.',
    category: 'Tips',
    date: '30 April 2025',
    thumbnail: blog4,
    related: ['ide-buket-wisuda-jambi', 'kapan-waktu-terbaik-pesan-buket-custom'],
    content: (
      <div className="space-y-5">
        <p>
          Acara perpisahan sekolah — baik itu SMP maupun SMA — selalu punya nuansa tersendiri.
          Ada yang sedih karena mau pisah dari teman-teman, ada yang senang karena akhirnya lulus.
          Tapi satu hal yang hampir selalu ada di setiap perpisahan: buket untuk guru atau teman.
        </p>
        <p>
          Masalahnya, kadang bingung mau pilih buket yang seperti apa. Budget pas-pasan, tapi tetap
          mau kasih yang bagus. Atau beli bareng-bareng tapi nggak tahu mau yang mana.
        </p>

        <ImageWithFallback
          src={blog4}
          alt="Suasana acara perpisahan sekolah"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />

        <h2>Buket untuk Guru</h2>
        <p>
          Guru biasanya lebih suka buket yang simpel tapi bermakna. Buket bunga segar dengan warna
          yang kalem — putih, krem, atau soft pink — biasanya paling tepat. Kamu juga bisa tambahkan
          ucapan tertulis di kartu kecil yang disertakan.
        </p>
        <p>
          Kalau mau yang lebih unik, buket bunga kering atau buket artificial bisa jadi pilihan.
          Lebih awet dan bisa jadi pajangan di meja guru. Banyak guru yang justru lebih senang
          karena bisa dipajang lama.
        </p>

        <h2>Buket untuk Teman</h2>
        <p>
          Buat teman, suasananya lebih santai. Buket snack, buket uang, atau buket yang isinya
          sesuai hobi atau kesukaan si penerima akan lebih berkesan dibanding buket biasa.
        </p>
        <p>
          Kalau mau patungan bareng sekelompok teman, buket yang lebih besar dan bervariasi bisa
          jadi pilihan bagus. Budget dibagi, hasilnya tetap meriah.
        </p>

        <h3>Contoh isi buket untuk teman:</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Buket snack campur (chiki, coklat, permen)</li>
          <li>Buket dengan accessories tambahan seperti boneka kecil</li>
          <li>Buket uang dengan lipatan origami</li>
          <li>Buket bunga dengan warna cerah</li>
        </ul>

        <ImageWithFallback
          src={blog3}
          alt="Buket bunga warna-warni untuk perpisahan"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />

        <h2>Tips Budget Perpisahan</h2>
        <p>
          Perpisahan sekolah biasanya melibatkan banyak orang, dan kadang budget-nya memang
          terbatas. Beberapa tips dari kami:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Pesan ramai-ramai.</strong> Kalau satu kelas mau beli buket untuk wali kelas
            atau guru favorit, pesan bareng bisa lebih hemat. Kami bisa bantu koordinasi.
          </li>
          <li>
            <strong>Tentukan budget dulu.</strong> Beritahu kami budget yang kamu punya, kami akan
            rekomendasikan buket yang paling sesuai tanpa harus over budget.
          </li>
          <li>
            <strong>Pesan lebih awal.</strong> Jangan mendadak. Terutama kalau acara perpisahan
            jadwalnya sudah diketahui jauh-jauh hari. Pesan minimal 3 hari sebelumnya.
          </li>
        </ul>

        <h2>Penutup</h2>
        <p>
          Perpisahan itu momen yang nggak akan datang dua kali. Buket yang kamu bawa bisa jadi
          bagian dari kenangan itu — baik buat kamu sendiri maupun untuk orang yang menerimanya.
          Pilih yang tulus, bukan yang paling mahal.
        </p>
        <p>
          Kalau ada yang mau ditanyakan soal pilihan buket untuk perpisahan sekolah, langsung
          hubungi kami. Kami siap bantu dari konsultasi sampai pengiriman.
        </p>
      </div>
    ),
  },
  {
    slug: 'kapan-waktu-terbaik-pesan-buket-custom',
    title: 'Kapan Waktu Terbaik Pesan Buket Custom Supaya Hasilnya Maksimal?',
    excerpt:
      'Buket custom yang bagus biasanya bukan soal mahal, tapi soal timing. Pesan di waktu yang tepat bikin hasil lebih rapi, pilihan lebih leluasa, dan prosesnya jauh lebih tenang.',
    category: 'Panduan',
    date: '7 Mei 2025',
    thumbnail: blog5,
    related: ['ide-buket-wisuda-jambi', 'buket-snack-vs-buket-bunga'],
    content: (
      <div className="space-y-5">
        <p>
          Banyak orang baru mencari buket ketika acaranya sudah dekat. Padahal untuk buket custom,
          waktu pesan sangat berpengaruh ke hasil akhir. Semakin mepet, semakin sedikit ruang untuk
          memilih bahan, menyesuaikan detail, dan memastikan rangkaiannya benar-benar sesuai
          keinginan.
        </p>
        <p>
          Di Hamasah Gallery, kami sering menemukan dua tipe pelanggan. Yang pertama datang lebih
          awal dengan gambaran yang cukup jelas. Yang kedua datang mendadak karena acara tinggal
          hitungan jam. Keduanya tetap bisa dibantu, tetapi pengalaman dan hasilnya tentu berbeda.
        </p>

        <ImageWithFallback
          src={blog5}
          alt="Buket custom elegan untuk hadiah spesial"
          className="w-full rounded-xl object-cover"
          style={{ maxHeight: 360 }}
        />

        <h2>Kenapa Pesan Lebih Awal Itu Penting?</h2>
        <p>
          Saat kamu pesan lebih awal, pilihan bahan biasanya masih lengkap. Warna wrapping, jenis
          bunga, pita, kartu ucapan, sampai tambahan aksesoris masih bisa dipilih dengan lebih
          leluasa. Ini penting terutama kalau kamu punya tema khusus atau ingin menyesuaikan warna
          dengan acara.
        </p>
        <p>
          Selain itu, proses diskusinya juga lebih santai. Kamu punya waktu untuk revisi konsep,
          menyesuaikan ukuran, atau mengganti isi buket jika dirasa belum pas. Hasil akhirnya
          biasanya lebih matang karena dibuat tanpa tekanan waktu yang berlebihan.
        </p>

        <h2>Waktu Ideal untuk Jenis Acara yang Berbeda</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Wisuda atau perpisahan sekolah:</strong> idealnya pesan 3 sampai 5 hari lebih
            awal, apalagi saat musim acara ramai.
          </li>
          <li>
            <strong>Hadiah ulang tahun atau kejutan pribadi:</strong> 2 sampai 3 hari biasanya
            cukup jika konsepnya tidak terlalu rumit.
          </li>
          <li>
            <strong>Parcel atau pesanan dalam jumlah banyak:</strong> sebaiknya lebih awal lagi
            supaya stok dan detail tiap item bisa disiapkan dengan rapi.
          </li>
          <li>
            <strong>Pesanan mendadak:</strong> tetap bisa dicoba, tetapi konsep mungkin perlu
            disesuaikan dengan bahan yang tersedia hari itu.
          </li>
        </ul>

        <h2>Tanda-Tanda Kamu Sebaiknya Jangan Menunggu Terlalu Lama</h2>
        <p>
          Kalau kamu ingin desain yang sangat spesifik, warna tertentu, atau isi buket yang tidak
          biasa, sebaiknya jangan pesan di last minute. Semakin custom permintaanmu, semakin besar
          kebutuhan waktu produksi dan koordinasinya.
        </p>
        <p>
          Hal yang sama berlaku kalau acaranya jatuh di musim ramai seperti wisuda, akhir tahun,
          atau menjelang momen perpisahan sekolah. Slot produksi biasanya cepat penuh, jadi lebih
          aman mengunci pesanan dari awal.
        </p>

        <h2>Kesimpulan</h2>
        <p>
          Waktu terbaik untuk pesan buket custom adalah sebelum kamu merasa terburu-buru. Bukan
          harus jauh-jauh hari, tetapi cukup awal untuk memberi ruang pada detail. Itu yang paling
          sering membedakan buket yang sekadar jadi, dengan buket yang benar-benar terasa spesial.
        </p>
        <p>
          Kalau kamu sudah punya tanggal acara, langsung konsultasikan saja. Dari sana kami bisa
          bantu menyarankan waktu pesan yang paling aman sesuai jenis buket dan kebutuhanmu.
        </p>
      </div>
    ),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return blogPosts.filter((p) => slugs.includes(p.slug));
}
