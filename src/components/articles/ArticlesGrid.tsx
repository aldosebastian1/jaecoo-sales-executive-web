'use client';

import React, { useState } from 'react';
import { Article } from '@/types';
import ArticleCard from '@/components/articles/ArticleCard';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface ArticlesGridProps {
  articles: Article[];
}

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleArticles = articles.slice(0, visibleCount);

  return (
    <>
      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {visibleArticles.map((article, index) => (
          <ArticleCard 
            key={article.id} 
            article={article} 
            index={index} 
          />
        ))}
      </div>

      {/* Empty State */}
      {articles.length === 0 && (
        <div className="text-center py-12">
          <p className="font-poppins text-gray-500 text-lg">Belum ada artikel di kategori ini.</p>
        </div>
      )}

      {/* Load More Button */}
      {articles.length > visibleCount && (
        <ScrollReveal delay={0.2} variant="fade-in">
          <div className="flex justify-center">
            <button 
              type="button" 
              onClick={handleLoadMore}
              className="font-inter border border-primary text-primary px-8 py-3.5 text-sm font-semibold uppercase tracking-widest hover:bg-primary-50 transition-colors rounded-full"
            >
              LIHAT LEBIH BANYAK
            </button>
          </div>
        </ScrollReveal>
      )}
    </>
  );
}

