
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { updateSeoMetadata } from '@/lib/seo';

const Templates = () => {
  useEffect(() => {
    // Update SEO metadata
    updateSeoMetadata({
      title: 'SEO Templates',
      description: 'Access our collection of professional SEO templates to streamline your optimization process and improve your results.',
      canonicalUrl: window.location.href,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'SEO Templates',
        description: 'Collection of professional SEO templates and resources'
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
              SEO Templates
            </h1>
            <p className="mt-6 text-xl text-gray-600 animate-slide-up [animation-delay:100ms]">
              Professional templates to streamline your SEO workflow
            </p>
          </div>
        </div>
      </section>

      {/* Templates Categories */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="grid md:grid-cols-3 gap-8">
            {['Content Audits', 'Keyword Research', 'SEO Reports'].map((category, index) => (
              <div 
                key={category} 
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-400">
                  [Category Image]
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{category}</h3>
                  <p className="text-gray-600 mb-4">
                    Category description placeholder...
                  </p>
                  <Button variant="outline" className="w-full">
                    View Templates
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="page-section bg-gray-50">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">Featured Templates</h2>
            <p className="section-subheading">
              Our most popular and effective SEO templates
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Template cards would go here */}
            {[1, 2, 3, 4, 5, 6].map((template, index) => (
              <div 
                key={template} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Template {template}</h3>
                  <p className="text-gray-600 mb-4">
                    Template description placeholder...
                  </p>
                  <Button variant="outline" size="sm">
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Templates;
