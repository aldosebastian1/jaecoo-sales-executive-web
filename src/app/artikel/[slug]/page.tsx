import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Article } from '@/types';
import Button from '@/components/ui/Button';
import ArticleCard from '@/components/articles/ArticleCard';
import ArticleBody from '@/components/articles/ArticleBody';
import { articlesData } from '@/data/artikel';

interface ArtikelDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

import config from '@/config';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articlesData.find((a) => a.slug === resolvedParams.slug);
  
  if (!article) {
    return {
      title: 'Artikel Tidak Ditemukan',
    };
  }
  
  return {
    title: article.seo?.title || article.title,
    description: article.seo?.metaDescription || article.excerpt,
    keywords: article.seo?.keywords,
    openGraph: {
      title: `${article.seo?.title || article.title} | Jaecoo Medan`,
      description: article.seo?.metaDescription || article.excerpt,
      images: [
        {
          url: article.seo?.ogImage || article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    alternates: {
      canonical: `${config.site.url}/artikel/${article.slug}`,
    },
  };
}

const ArtikelDetail: React.FC<ArtikelDetailProps> = async ({ params }) => {
  const resolvedParams = await params;
  const articleData = articlesData.find((a) => a.slug === resolvedParams.slug);

  if (!articleData) {
    return notFound();
  }

  // Related articles (just pick 3 other articles randomly or sequentially for now)
  const relatedArticles = articlesData
    .filter((a) => a.slug !== resolvedParams.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="text-primary hover:text-primary">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/artikel" className="text-primary hover:text-primary">
              Artikel
            </Link>
            <span>/</span>
            <span className="text-gray-900 line-clamp-1">
              {articleData.title}
            </span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="pt-6 pb-8 md:pt-8 md:pb-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Title */}
          <h1 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 uppercase tracking-wider leading-tight">
            {articleData.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm">
                <span className="font-semibold text-gray-900">
                  {articleData.author?.name || 'Tim Jaecoo Medan'}
                </span>
              </span>
            </div>
            <div className="text-gray-600 text-sm">
              {new Date(articleData.date).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="text-gray-600 text-sm">
              {articleData.readingTime} menit membaca
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 md:mb-12 -mx-4 md:mx-0 md:rounded-xl overflow-hidden relative aspect-video w-full">
            <Image
              src={articleData.image}
              alt={articleData.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          {/* JSON-LD Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  '@context': 'https://schema.org',
                  '@type': 'NewsArticle',
                  headline: articleData.seo?.title || articleData.title,
                  image: [articleData.image],
                  datePublished: articleData.createdAt || articleData.date,
                  dateModified: articleData.updatedAt || articleData.date,
                  author: [{
                      '@type': 'Person',
                      name: articleData.author?.name || 'Tim Jaecoo Medan',
                  }],
                  publisher: {
                    '@type': 'Organization',
                    name: config.site.name,
                    logo: {
                      '@type': 'ImageObject',
                      url: `${config.site.url}/android-chrome-512x512.png`
                    }
                  }
                },
                {
                  '@context': 'https://schema.org',
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Beranda', item: config.site.url },
                    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${config.site.url}/artikel` },
                    { '@type': 'ListItem', position: 3, name: articleData.title, item: `${config.site.url}/artikel/${articleData.slug}` }
                  ]
                }
              ])
            }}
          />

          {/* Article Content */}
          <div className="prose prose-base md:prose-lg prose-blue max-w-none mb-12">
            <ArticleBody content={articleData.content} />
          </div>

          {/* Share Section */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12 border border-gray-200">
            <h3 className="font-montserrat font-bold text-xl md:text-2xl text-gray-900 mb-4 uppercase tracking-wider">
              Bagikan Artikel Ini
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.site.url + '/artikel/' + articleData.slug)}`} target="_blank" rel="noopener noreferrer" variant="outline" size="md" className="flex-1 w-full">
                Bagikan ke Facebook
              </Button>
              <Button href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(config.site.url + '/artikel/' + articleData.slug)}&text=${encodeURIComponent(articleData.title)}`} target="_blank" rel="noopener noreferrer" variant="outline" size="md" className="flex-1 w-full">
                Bagikan ke Twitter
              </Button>
              <Button href={`https://api.whatsapp.com/send?text=${encodeURIComponent(articleData.title + ' - ' + config.site.url + '/artikel/' + articleData.slug)}`} target="_blank" rel="noopener noreferrer" variant="outline" size="md" className="flex-1 w-full">
                Bagikan ke WhatsApp
              </Button>
            </div>
          </div>

          {/* CTA Section */}
          <section className="bg-primary-50 rounded-lg p-6 md:p-8 text-center mb-12">
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-gray-900 mb-4 uppercase tracking-wider">
              Ingin Tahu Lebih Lanjut?
            </h2>
            <p className="font-poppins text-base md:text-lg text-gray-600 mb-6">
              Hubungi tim kami untuk konsultasi gratis tentang perawatan dan
              pemeliharaan kendaraan Anda
            </p>
            <Button as={Link} href="/hubungi-kami" variant="primary" size="lg">
              Hubungi Kami Sekarang
            </Button>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-gray-900 mb-8 uppercase tracking-wider">
              Artikel Terkait
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.id} article={article} totalArticles={articlesData.length} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ArtikelDetail;
