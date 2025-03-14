
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationButton from '@/components/ui/consultation-button';
import { updateSeoMetadata } from '@/lib/seo';

const Services = () => {
  useEffect(() => {
    // Update SEO metadata
    updateSeoMetadata({
      title: 'Our Services',
      description: 'Explore our comprehensive SEO and digital marketing services designed to improve your search rankings and online visibility.',
      canonicalUrl: window.location.href,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        provider: {
          '@type': 'Organization',
          name: 'Winning SERP'
        },
        serviceType: 'SEO and Digital Marketing Services',
        areaServed: 'Global'
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
              Our Services
            </h1>
            <p className="mt-6 text-xl text-gray-600 animate-slide-up [animation-delay:100ms]">
              Comprehensive SEO and digital marketing solutions to improve your online presence
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="grid gap-12">
            {/* Each service would be detailed here */}
            {['SEO Strategy', 'Content Marketing', 'Technical SEO', 'Local SEO', 'E-commerce SEO'].map((service, index) => (
              <div 
                key={service}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-dense' : ''}`}
              >
                <div className={`space-y-6 ${index % 2 !== 0 ? 'md:col-start-2 animate-slide-in-from-right' : 'animate-slide-in-from-left'}`}>
                  <h2 className="text-3xl font-bold text-gray-900">{service}</h2>
                  <p className="text-gray-600">
                    Service description placeholder...
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-winning-700 mr-2">✓</span>
                      Benefit one
                    </li>
                    <li className="flex items-start">
                      <span className="text-winning-700 mr-2">✓</span>
                      Benefit two
                    </li>
                    <li className="flex items-start">
                      <span className="text-winning-700 mr-2">✓</span>
                      Benefit three
                    </li>
                  </ul>
                </div>
                <div 
                  className={`bg-gray-200 rounded-lg h-[300px] flex items-center justify-center text-gray-400 ${index % 2 !== 0 ? 'md:col-start-1 animate-slide-in-from-left' : 'animate-slide-in-from-right'}`}
                >
                  [Service Image Placeholder]
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section bg-winning-50">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Improve Your Search Rankings?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch with our team for a personalized consultation to discuss your SEO needs.
            </p>
            <ConsultationButton size="lg" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
