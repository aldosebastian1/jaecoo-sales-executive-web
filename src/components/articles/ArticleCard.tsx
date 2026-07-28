import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface ArticleCardProps {
  article: Article;
  index?: number;
  totalArticles?: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index = 0, totalArticles = 0 }) => {
  const baseDelay = 0.1 + (index % 3) * 0.1;
  const categoryLabel = article.category === 'PROMO' ? 'Promo' : article.category === 'REVIEW' ? 'Review' : 'EV Tech';

  return (
    <article className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 h-full group">
      <ScrollReveal delay={baseDelay} variant="fade-in">
        <div className="block relative aspect-video w-full bg-gray-200 overflow-hidden">
          <Image 
            src={article.image} 
            alt={article.title} 
            fill 
            sizes="(max-width: 768px) 100vw, 33vw" 
            className="object-cover" 
          />
        </div>
      </ScrollReveal>
      <div className="p-5 md:p-8 flex-grow flex flex-col">
        <ScrollReveal delay={baseDelay + 0.05} variant="fade-in">
          <p className="font-inter text-[10px] md:text-[9px] font-bold text-gray-600 uppercase tracking-widest mb-3">
            {new Date(article.date).toLocaleDateString('id-ID', {day:'2-digit', month:'short', year:'numeric'})} - {categoryLabel}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={baseDelay + 0.1} variant="slide-up">
          <h3 className="font-montserrat text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-primary transition-colors">
            <Link href={`/artikel/${article.slug}`} className="after:absolute after:inset-0 focus:outline-none">
              {article.title}
            </Link>
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={baseDelay + 0.25} variant="slide-up" className="mb-6">
          <p className="font-poppins text-gray-600 text-base md:text-sm leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={baseDelay + 0.2} variant="slide-up" className="mt-auto">
          <span className="font-inter text-primary text-base md:text-sm font-semibold flex items-center gap-1 group-hover:text-primary-800 transition-colors inline-flex">
            Baca Selengkapnya
            <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
        </ScrollReveal>
      </div>
    </article>
  );
};

export default ArticleCard;

