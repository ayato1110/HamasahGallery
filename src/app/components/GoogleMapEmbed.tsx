interface GoogleMapEmbedProps {
  title?: string;
  height?: number;
  className?: string;
}

export function GoogleMapEmbed({
  title = 'Lokasi Hamasah Gallery',
  height = 400,
  className = '',
}: GoogleMapEmbedProps) {
  return (
    <div className={`rounded-2xl overflow-hidden border border-black/10 shadow-sm ${className}`}>
      <iframe
        title={title}
        src="https://maps.google.com/maps?q=Jalan+Siswa+I+No.+109,+RT+18,+Suka+Karya,+Kota+Baru,+Kota+Jambi,+Indonesia&t=&z=17&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}