
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationButton from '@/components/ui/consultation-button';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { updateSeoMetadata } from '@/lib/seo';

const Index = () => {
  useEffect(() => {
    // Update SEO metadata
    updateSeoMetadata({
      title: 'SEO & Digital Marketing Experts',
      description: 'Boost your online visibility with our expert SEO services at Winning SERP. We help businesses rank higher in search results and drive more traffic.',
      canonicalUrl: window.location.href,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Winning SERP',
        url: window.location.origin,
        logo: `${window.location.origin}/logo.png`,
        description: 'SEO and digital marketing services to help businesses improve their online visibility.'
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 animate-fade-in">
              Improve Your Search Rankings with Winning SERP
            </h1>
            <p className="mt-6 text-xl text-gray-600 animate-slide-up [animation-delay:100ms]">
              Expert SEO strategies that drive traffic, improve conversions, and grow your business online.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-slide-up [animation-delay:200ms]">
              <ConsultationButton size="lg" />
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-from-left">
              <h2 className="text-3xl font-bold text-gray-900">About Winning SERP</h2>
              <p className="text-gray-600">
                At Winning SERP, we're dedicated to helping businesses achieve better search engine rankings through data-driven strategies and industry expertise.
              </p>
              <p className="text-gray-600">
                Our team of SEO specialists combines technical knowledge with creative content marketing to deliver results that matter for your bottom line.
              </p>
              <div className="pt-4">
                <Link to="/about-us" className="group inline-flex items-center text-winning-700 font-medium">
                  Read our story 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-[300px] md:h-[400px] flex items-center justify-center text-gray-400 animate-slide-in-from-right">
              [About Image Placeholder]
            </div>
          </div>
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="page-section bg-gray-50">
        <div className="page-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading">
              Comprehensive SEO solutions tailored to your business goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Service cards would go here */}
            {['SEO Strategy', 'Content Marketing', 'Technical SEO'].map((service, index) => (
              <div 
                key={service} 
                className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-gray-600 mb-4">Service description placeholder text.</p>
                <Link to="/services" className="text-winning-700 font-medium hover:text-winning-800">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
