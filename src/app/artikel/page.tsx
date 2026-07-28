import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ArticleCard from '@/components/articles/ArticleCard';
import ArticlesGrid from '@/components/articles/ArticlesGrid';
import { articlesData } from '@/data/artikel';

export const metadata: Metadata = {
  title: 'Berita, Review, & Promo Jaecoo Medan Terbaru 2026',
  description: 'Temukan review mendalam, berita teknologi EV, tips otomotif, & promo terbaru di dealer Jaecoo Medan. Dapatkan info terpercaya seputar mobil Jaecoo di sini.',
  alternates: {
    canonical: '/artikel',
  },
};

export default async function Artikel(props: { searchParams: Promise<{ kategori?: string }> }) {
  const searchParams = await props.searchParams;
  const currentCategory = searchParams.kategori || 'all';

  let filteredArticles = articlesData;
  if (currentCategory === 'promo') {
    filteredArticles = articlesData.filter(a => a.category === 'PROMO');
  } else if (currentCategory === 'review') {
    filteredArticles = articlesData.filter(a => a.category === 'REVIEW');
  } else if (currentCategory === 'ev-tech') {
    filteredArticles = articlesData.filter(a => a.category === 'EV_TECH');
  }

  const getLinkClass = (cat: string) => {
    return currentCategory === cat 
      ? 'text-gray-900 transition-colors' 
      : 'hover:text-gray-900 transition-colors';
  };

  return (
    <main>
        {/* Hero / Title */}
        <section className="max-w-[800px] mx-auto px-4 sm:px-6 pt-[38px] md:pt-[78px] pb-[30px] md:pb-[62px] text-center">
            <ScrollReveal delay={0.1} variant="slide-up" duration={0.8}>
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-6 uppercase tracking-wider">
                    JURNAL OTOMOTIF
                </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.25} variant="slide-up" duration={0.8}>
                <p className="font-poppins text-gray-600 text-base md:text-lg leading-relaxed">
                    Eksplorasi mendalam mengenai inovasi desain, teknik presisi, dan gaya hidup modern. Temukan perspektif baru di balik kemudi.
                </p>
            </ScrollReveal>
        </section>

        {/* Articles List Section */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 pb-12 md:pb-20">
            
            {/* Filter Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-200 pb-4 mb-10 gap-4">
                <ScrollReveal delay={0.1} variant="slide-right-short" duration={0.8}>
                    <h2 className="font-montserrat font-bold text-lg md:text-xl text-gray-900 uppercase tracking-widest">
                        DAFTAR ARTICLES
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.25} variant="slide-right-short" duration={0.8}>
                    <div className="flex flex-wrap gap-6 font-inter text-[11px] md:text-xs font-semibold text-gray-400 uppercase tracking-widest">
                        <Link href="/artikel" className={getLinkClass('all')}>SEMUA</Link>
                        <Link href="/artikel?kategori=promo" className={getLinkClass('promo')}>PROMO</Link>
                        <Link href="/artikel?kategori=review" className={getLinkClass('review')}>REVIEW</Link>
                        <Link href="/artikel?kategori=ev-tech" className={getLinkClass('ev-tech')}>EV TECH</Link>
                    </div>
                </ScrollReveal>
            </div>

            {/* Articles Grid (Client Component for dynamic Load More) */}
            <ArticlesGrid articles={filteredArticles} />
        </section>

        {/* Call to Action Banner */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 pb-24">
            <ScrollReveal delay={0.2} variant="slide-up">
                <div className="bg-primary rounded-[2rem] px-8 py-14 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:max-w-xl text-center md:text-left">
                        <ScrollReveal delay={0.3} variant="slide-up" duration={0.8}>
                            <h2 className="font-inter text-3xl md:text-4xl text-white font-medium mb-4 leading-tight tracking-wide">
                                Siap merasakan presisi sebenarnya?
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.45} variant="slide-up" duration={0.8}>
                            <p className="font-poppins text-primary-100 text-sm md:text-base leading-relaxed">
                                Jelajahi lini kendaraan terbaru kami atau jadwalkan sesi test drive eksklusif dengan konsultan spesialis kami.
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="shrink-0 mt-2 md:mt-0">
                        <ScrollReveal delay={0.6} variant="slide-up" duration={0.8}>
                            <Link href="/katalog" className="font-inter bg-white text-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-widest hover:bg-gray-50 transition-colors rounded-full shadow-sm inline-block">
                                LIHAT KATALOG
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    </main>
  );
}

