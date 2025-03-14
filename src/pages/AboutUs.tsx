
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { updateSeoMetadata } from '@/lib/seo';

const AboutUs = () => {
  useEffect(() => {
    // Update SEO metadata
    updateSeoMetadata({
      title: 'About Us',
      description: 'Learn about the Winning SERP team, our mission, values, and approach to SEO and digital marketing.',
      canonicalUrl: window.location.href,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        mainEntity: {
          '@type': 'Organization',
          name: 'Winning SERP',
          description: 'SEO and digital marketing agency focused on helping businesses improve their online visibility.',
          foundingDate: '2020',
          founders: {
            '@type': 'Person',
            name: 'SEO Expert Name'
          }
        }
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
              About Winning SERP
            </h1>
            <p className="mt-6 text-xl text-gray-600 animate-slide-up [animation-delay:100ms]">
              Get to know our story, our mission, and the team behind our success
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-from-left">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4">
                {/* Our story content would go here */}
                <p className="text-gray-600">
                  Story content placeholder...
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-[300px] md:h-[400px] flex items-center justify-center text-gray-400 animate-slide-in-from-right">
              [Story Image Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="page-section bg-gray-50">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto animate-slide-up">
            <h2 className="section-heading">Our Mission</h2>
            <p className="text-gray-600">
              Mission statement placeholder...
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">Meet Our Team</h2>
            <p className="section-subheading">
              The experts behind our successful SEO strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Team member cards would go here */}
            {[1, 2, 3].map((member, index) => (
              <div 
                key={member} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-200 rounded-full h-40 w-40 mx-auto mb-4 flex items-center justify-center text-gray-400">
                  [Photo]
                </div>
                <h3 className="text-xl font-semibold">Team Member {member}</h3>
                <p className="text-winning-700">Position</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
