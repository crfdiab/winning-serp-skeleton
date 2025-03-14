
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { updateSeoMetadata } from '@/lib/seo';

const Contact = () => {
  useEffect(() => {
    // Update SEO metadata
    updateSeoMetadata({
      title: 'Contact Us',
      description: 'Get in touch with the Winning SERP team. We\'re here to answer your questions and help with your SEO and digital marketing needs.',
      canonicalUrl: window.location.href,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        description: 'Contact Winning SERP for SEO and digital marketing services',
        mainEntity: {
          '@type': 'Organization',
          name: 'Winning SERP',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 SEO Street',
            addressLocality: 'Digital City',
            postalCode: '10001',
            addressCountry: 'US'
          },
          telephone: '+1 (555) 123-4567',
          email: 'contact@winningserp.com'
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
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-gray-600 animate-slide-up [animation-delay:100ms]">
              Get in touch with our team for any questions or inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="page-section bg-white">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-from-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions or want to learn more about our services? Our team is here to help.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-winning-700 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-medium">Our Location</h3>
                    <p className="text-gray-600">123 SEO Street, Digital City, 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-winning-700 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-winning-700 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">contact@winningserp.com</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="font-medium mb-3">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Friday: 9am - 6pm</li>
                  <li>Saturday: 10am - 2pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 animate-slide-in-from-right">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-winning-500 focus:border-winning-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-winning-500 focus:border-winning-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-winning-500 focus:border-winning-500"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-winning-500 focus:border-winning-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
