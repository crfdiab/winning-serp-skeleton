
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { updateSeoMetadata } from '@/lib/seo';

const Blog = () => {
  useEffect(() => {
    // Update SEO metadata
    updateSeoMetadata({
      title: 'SEO Blog',
      description: 'Stay updated with the latest SEO trends, tips, and insights from our expert team at Winning SERP.',
      canonicalUrl: window.location.href,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Winning SERP Blog',
        description: 'Latest SEO trends, tips, and insights'
      }
    });

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-gray-50">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 animate-fade-in">
              SEO Insights Blog
            </h1>
            <p className="mt-6 text-xl text-gray-600 animate-slide-up [animation-delay:100ms]">
              Expert tips, guides, and the latest trends in search engine optimization
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-[300px] md:h-[400px] flex items-center justify-center text-gray-400 animate-slide-in-from-left">
              [Featured Post Image]
            </div>
            <div className="space-y-4 animate-slide-in-from-right">
              <div className="flex items-center space-x-2 text-sm">
                <span className="bg-winning-100 text-winning-800 rounded-full px-3 py-1 font-medium">Featured</span>
                <span className="text-gray-500">May 15, 2023</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Article Title</h2>
              <p className="text-gray-600">
                Article excerpt placeholder...
              </p>
              <Link to="#" className="inline-flex text-winning-700 font-medium hover:text-winning-800">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="page-section bg-gray-50">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article cards would go here */}
            {[1, 2, 3, 4, 5, 6].map((article, index) => (
              <article 
                key={article} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-400">
                  [Article Image]
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm mb-3">
                    <span className="bg-gray-100 text-gray-800 rounded-full px-2 py-0.5">Category</span>
                    <span className="text-gray-500">Date</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Article {article} Title</h3>
                  <p className="text-gray-600 mb-4">
                    Article excerpt placeholder...
                  </p>
                  <Link to="#" className="text-winning-700 font-medium hover:text-winning-800">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination placeholder */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <div className="w-10 h-10 flex items-center justify-center rounded border bg-winning-700 text-white">1</div>
              <div className="w-10 h-10 flex items-center justify-center rounded border hover:bg-gray-100">2</div>
              <div className="w-10 h-10 flex items-center justify-center rounded border hover:bg-gray-100">3</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
