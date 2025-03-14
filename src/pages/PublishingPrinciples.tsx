
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { updateSeoMetadata } from '@/lib/seo';

const PublishingPrinciples = () => {
  useEffect(() => {
    // Update SEO metadata
    updateSeoMetadata({
      title: 'Publishing Principles',
      description: 'Learn about our content publishing principles and standards at Winning SERP.',
      canonicalUrl: window.location.href
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
              Publishing Principles
            </h1>
            <p className="mt-6 text-xl text-gray-600 animate-slide-up [animation-delay:100ms]">
              Our standards and guidelines for content creation and publication
            </p>
          </div>
        </div>
      </section>

      {/* Publishing Principles Content */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="animate-slide-up">
              <h2>Our Content Mission</h2>
              <p>Content mission statement placeholder...</p>
              
              <h2>Editorial Standards</h2>
              <p>Editorial standards description placeholder...</p>
              
              <h2>Accuracy and Fact-Checking</h2>
              <p>Accuracy policy placeholder...</p>
              
              <h2>Transparency and Disclosures</h2>
              <p>Transparency policy placeholder...</p>
              
              <h2>Expert Contributors</h2>
              <p>Expert contributors guidelines placeholder...</p>
              
              <h2>Content Updates</h2>
              <p>Content update policy placeholder...</p>
              
              <h2>Corrections Policy</h2>
              <p>Corrections policy placeholder...</p>
              
              <h2>Advertising and Sponsored Content</h2>
              <p>Advertising policy placeholder...</p>
              
              <h2>Feedback and Content Suggestions</h2>
              <p>Feedback policy placeholder...</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PublishingPrinciples;
