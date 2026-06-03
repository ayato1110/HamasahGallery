import { useParams, Link } from 'react-router';
import { ArrowLeft, MessageCircle, ArrowRight } from 'lucide-react';
import { getBlogPost, getRelatedPosts } from '../data/blogPosts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug ?? '');
  const whatsappLink = 'https://wa.me/6281234567890';

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1
          className="text-3xl text-[#1C1917] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Artikel tidak ditemukan
        </h1>
        <Link to="/blog" className="text-[#D97706] underline hover:text-[#B45309]">
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.related);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#A8A29E] hover:text-[#D97706] mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Kembali ke Blog
        </Link>

        {/* Category + Date */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs bg-[#FEF3C7] text-[#92400E] px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs text-[#A8A29E]">{post.date}</span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl text-[#1C1917] mb-6 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {post.title}
        </h1>

        {/* Thumbnail */}
        <div className="rounded-2xl overflow-hidden bg-[#FAFAFA] border border-[#E7E5E4] aspect-video mb-8">
          <ImageWithFallback
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article content */}
        <div className="prose max-w-none leading-relaxed
          [&_h2]:text-2xl [&_h2]:text-[#1C1917] [&_h2]:mt-8 [&_h2]:mb-4
          [&_h3]:text-xl [&_h3]:text-[#1C1917] [&_h3]:mt-6 [&_h3]:mb-3
          [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-[#44403C]
          [&_ul]:mb-4 [&_ul]:space-y-1
          [&_li]:text-[#44403C]
          [&_strong]:text-[#1C1917] [&_strong]:font-semibold
          [&_img]:rounded-xl [&_img]:my-4
          [&_a]:text-[#D97706] [&_a:hover]:text-[#B45309]">
          {post.content}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 bg-[#FAFAFA] border border-[#E7E5E4] rounded-2xl p-8 text-center">
          <h2
            className="text-2xl text-[#1C1917] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tertarik pesan buket?
          </h2>
          <p className="text-sm text-[#44403C] mb-6 max-w-sm mx-auto">
            Hubungi kami langsung melalui WhatsApp. Kami siap bantu dari konsultasi, pilih desain,
            sampai pengiriman ke lokasimu.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-3 rounded-full transition-colors"
          >
            <MessageCircle size={18} />
            Chat via WhatsApp
          </a>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-14">
            <h2
              className="text-2xl text-[#1C1917] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Artikel Terkait
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group block"
                >
                  <div className="rounded-xl overflow-hidden bg-[#FAFAFA] border border-[#E7E5E4] aspect-video mb-3">
                    <ImageWithFallback
                      src={related.thumbnail}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-[#FEF3C7] text-[#92400E] px-2 py-0.5 rounded-full">
                      {related.category}
                    </span>
                    <span className="text-xs text-[#A8A29E]">{related.date}</span>
                  </div>
                  <h3 className="text-sm text-[#1C1917] group-hover:underline leading-snug mb-1">
                    {related.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-[#D97706]">
                    Baca <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
