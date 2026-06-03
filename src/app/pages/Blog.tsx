import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Blog() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1
          className="text-4xl text-[#1C1917] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Blog
        </h1>
        <p className="text-[#A8A29E] mb-10">
          Tips, inspirasi, dan panduan seputar buket dan hadiah dari Hamasah Gallery.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="rounded-2xl overflow-hidden bg-[#FAFAFA] border border-[#E7E5E4] aspect-video mb-4">
                <ImageWithFallback
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs bg-[#FEF3C7] text-[#92400E] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-[#A8A29E]">{post.date}</span>
                </div>
                <h2 className="text-lg text-[#1C1917] mb-2 group-hover:underline">
                  {post.title}
                </h2>
                <p className="text-sm text-[#44403C] leading-relaxed mb-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm text-[#D97706] underline hover:text-[#B45309] group-hover:no-underline transition-colors">
                  Baca Selengkapnya <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
