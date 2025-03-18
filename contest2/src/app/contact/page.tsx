'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Note: metadata must be exported from a server component, not a client component
// For client components, use <Head> component or move metadata to a separate file
const pageMetadata = {
  title: 'Contact Us | SiliconPin',
  description: 'Get in touch with the SiliconPin team for hosting solutions, technical support, or any questions you may have.',
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h1>

          <div className="bg-card rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Contact Information */}
              <div className="bg-atheneum-red p-8 text-white md:col-span-2">
                <h2 className="text-xl font-semibold mb-6">Get In Touch</h2>
                <p className="mb-8">
                  Have a question about our hosting solutions or technical guides? We're here to help!
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm mt-1">123 Hosting Street, San Francisco, CA 94103</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm mt-1">support@siliconpin.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="font-medium mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 md:col-span-3">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className="text-muted-foreground mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-atheneum-red text-white hover:bg-atheneum-red/90">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-atheneum-red/50 bg-background"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-atheneum-red/50 bg-background"
                            required
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-atheneum-red/50 bg-background"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="billing">Billing Question</option>
                          <option value="partnership">Partnership Opportunity</option>
                        </select>
                      </div>

                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-atheneum-red/50 bg-background"
                          required
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-atheneum-red text-white hover:bg-atheneum-red/90 py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* FAQ and Resources Section */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
              <p className="text-muted-foreground">Check out these additional resources</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-atheneum-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">FAQ</h3>
                <p className="text-muted-foreground mb-4">Find answers to commonly asked questions about our services.</p>
                <Link href="/faq">
                  <Button variant="outline" className="w-full border-atheneum-red text-atheneum-red hover:bg-atheneum-red/10">
                    View FAQ
                  </Button>
                </Link>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-atheneum-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground mb-4">Explore our technical documentation and tutorials.</p>
                <Link href="/blogs">
                  <Button variant="outline" className="w-full border-atheneum-red text-atheneum-red hover:bg-atheneum-red/10">
                    Browse Guides
                  </Button>
                </Link>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-atheneum-red mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground mb-4">Join our community forum for discussions and peer support.</p>
                <Button variant="outline" className="w-full border-atheneum-red text-atheneum-red hover:bg-atheneum-red/10">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
