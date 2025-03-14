
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { updateSeoMetadata } from '@/lib/seo';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Update SEO metadata
    updateSeoMetadata({
      title: 'Privacy Policy',
      description: 'Read our privacy policy to understand how we collect, use, and protect your personal information at Winning SERP.',
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
              Privacy Policy
            </h1>
            <p className="mt-6 text-gray-600 animate-slide-up [animation-delay:100ms]">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="animate-slide-up">
              <h2>Introduction</h2>
              <p>Privacy policy introduction placeholder...</p>
              
              <h2>Information We Collect</h2>
              <p>Information collection policy placeholder...</p>
              
              <h2>How We Use Your Information</h2>
              <p>Information usage policy placeholder...</p>
              
              <h2>Cookies and Tracking Technologies</h2>
              <p>Cookies policy placeholder...</p>
              
              <h2>Third-Party Services</h2>
              <p>Third-party services policy placeholder...</p>
              
              <h2>Data Security</h2>
              <p>Data security policy placeholder...</p>
              
              <h2>Your Rights</h2>
              <p>User rights policy placeholder...</p>
              
              <h2>Changes to This Policy</h2>
              <p>Policy changes notification placeholder...</p>
              
              <h2>Contact Us</h2>
              <p>Contact information placeholder...</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
