'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Note: metadata must be exported from a server component, not a client component
// For client components, use <Head> component or move metadata to a separate file
const pageMetadata = {
  title: 'Frequently Asked Questions | SiliconPin',
  description: 'Find answers to common questions about SiliconPin hosting services, billing, technical support, and more.',
};

interface FaqCategory {
  name: string;
  id: string;
  faqs: Faq[];
}

interface Faq {
  question: string;
  answer: React.ReactNode;
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFaqs, setOpenFaqs] = useState<{ [key: string]: boolean }>({});

  const toggleFaq = (id: string) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories: FaqCategory[] = [
    {
      name: 'General Questions',
      id: 'general',
      faqs: [
        {
          question: 'What is SiliconPin?',
          answer: (
            <p>
              SiliconPin is a web hosting provider offering a range of hosting solutions including shared hosting,
              virtual private servers (VPS), dedicated servers, and cloud hosting. We specialize in providing reliable,
              high-performance hosting with excellent customer support.
            </p>
          )
        },
        {
          question: 'How do I choose the right hosting plan?',
          answer: (
            <div>
              <p className="mb-3">
                Choosing the right hosting plan depends on several factors:
              </p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li>Website traffic: Higher traffic needs more resources</li>
                <li>Type of website: E-commerce sites need more resources than blogs</li>
                <li>Technical needs: Specific software or configuration requirements</li>
                <li>Budget: Balance cost with performance needs</li>
                <li>Growth expectations: Plan for future expansion</li>
              </ul>
              <p>
                Our <Link href="/pricing" className="text-blue-600 dark:text-blue-400 hover:underline">pricing page</Link> has
                detailed comparisons, or you can <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact our team</Link> for
                personalized recommendations.
              </p>
            </div>
          )
        },
        {
          question: 'Do you offer a money-back guarantee?',
          answer: (
            <p>
              Yes, all SiliconPin hosting plans come with a 30-day money-back guarantee. If you're not
              satisfied with our services within the first 30 days, you can request a full refund of your
              hosting fees. Domain registration fees are non-refundable.
            </p>
          )
        },
        {
          question: 'How reliable is your hosting service?',
          answer: (
            <p>
              SiliconPin offers 99.9% uptime for all hosting plans, backed by our Service Level Agreement
              (SLA). Our infrastructure includes redundant systems, regular backups, and 24/7 monitoring
              to ensure maximum reliability. In the rare event that we fail to meet our uptime guarantee,
              we provide credits based on the amount of downtime experienced.
            </p>
          )
        },
      ]
    },
    {
      name: 'Technical Support',
      id: 'support',
      faqs: [
        {
          question: 'How can I contact technical support?',
          answer: (
            <p>
              Technical support is available 24/7 through multiple channels:
              <br /><br />
              • Live Chat: Available on our website<br />
              • Support Tickets: Submit through your client portal<br />
              • Email: support@siliconpin.com<br />
              • Phone: +1 (555) 123-4567 (Available 9AM-9PM ET)
            </p>
          )
        },
        {
          question: 'Do you offer managed services?',
          answer: (
            <p>
              Yes, we offer managed services for all our hosting plans. Our managed services include
              server setup, security updates, performance optimization, and regular backups. For VPS
              and dedicated servers, we also offer custom management packages tailored to your specific needs.
            </p>
          )
        },
        {
          question: 'Can I upgrade my hosting plan later?',
          answer: (
            <p>
              Yes, you can easily upgrade your hosting plan as your needs grow. The upgrade process is
              seamless with minimal to no downtime. When you upgrade, we'll credit your account for any
              unused portion of your current plan. Upgrades can be requested through your client portal
              or by contacting our support team.
            </p>
          )
        },
        {
          question: 'What control panel do you offer?',
          answer: (
            <p>
              Our shared hosting plans include cPanel, which provides an intuitive interface for managing
              your website, emails, and databases. For VPS and dedicated servers, you can choose between
              cPanel, Plesk, or DirectAdmin. We also support custom control panel setups for advanced users.
            </p>
          )
        },
      ]
    },
    {
      name: 'Domains & DNS',
      id: 'domains',
      faqs: [
        {
          question: 'Do you offer domain registration?',
          answer: (
            <p>
              Yes, we offer domain registration services for a wide range of domain extensions (.com, .net,
              .org, etc.). You can register a new domain during the hosting signup process or transfer
              an existing domain to us. All hosting plans include a free domain for the first year.
            </p>
          )
        },
        {
          question: 'How do I transfer my domain to SiliconPin?',
          answer: (
            <div>
              <p className="mb-3">To transfer your domain to SiliconPin:</p>
              <ol className="list-decimal pl-6 mb-3 space-y-1">
                <li>Unlock the domain at your current registrar</li>
                <li>Request an authorization code (EPP code) from your current registrar</li>
                <li>Initiate the transfer process in your SiliconPin account</li>
                <li>Provide the authorization code when prompted</li>
                <li>Confirm the transfer request sent to your email</li>
              </ol>
              <p>
                The transfer process typically takes 5-7 days to complete. Our support team can assist
                you throughout the process if needed.
              </p>
            </div>
          )
        },
        {
          question: 'Can I use my existing domain with your hosting?',
          answer: (
            <p>
              Yes, you can use your existing domain with our hosting services without transferring it.
              You'll need to update your domain's nameservers to point to our servers. We provide detailed
              instructions for this process, and our support team is available to assist you if needed.
            </p>
          )
        },
        {
          question: 'How do I manage DNS records?',
          answer: (
            <p>
              You can manage DNS records through your SiliconPin control panel. This includes A records,
              CNAME records, MX records, TXT records, and more. Our DNS management tool provides an
              intuitive interface that makes it easy to add, edit, or delete DNS records. Changes to DNS
              records typically propagate within 24-48 hours.
            </p>
          )
        },
      ]
    },
    {
      name: 'Billing & Account',
      id: 'billing',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: (
            <p>
              We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal,
              and bank transfers for annual plans. Monthly plans require a credit card or PayPal account.
              For enterprise clients, we also offer invoice-based payments with net-30 terms.
            </p>
          )
        },
        {
          question: 'What is your billing cycle?',
          answer: (
            <p>
              We offer flexible billing cycles including monthly, quarterly, annual, and biennial options.
              Annual and biennial plans include significant discounts compared to monthly billing. All
              accounts are set to auto-renew by default, but you can disable this feature in your account settings.
            </p>
          )
        },
        {
          question: 'How can I cancel my account?',
          answer: (
            <p>
              You can cancel your account at any time through your client portal or by contacting our
              support team. If you cancel within the first 30 days, you're eligible for a full refund
              under our money-back guarantee. For cancellations after this period, you'll continue to
              have access to your services until the end of your current billing cycle.
            </p>
          )
        },
        {
          question: 'Are there any hidden fees?',
          answer: (
            <p>
              No, we believe in transparent pricing. The price you see is the price you pay. We don't
              charge setup fees, and all of our plans include our standard feature set. Optional add-ons
              and services are clearly priced and only charged if you explicitly add them to your account.
            </p>
          )
        },
      ]
    },
    {
      name: 'Security & Compliance',
      id: 'security',
      faqs: [
        {
          question: 'How do you handle backups?',
          answer: (
            <p>
              We perform daily automated backups of all hosting accounts. These backups are stored
              securely in a separate location from your primary data. Backups are retained for 30 days,
              and you can restore from a backup at any time through your control panel. For additional
              peace of mind, we recommend maintaining your own backups as well.
            </p>
          )
        },
        {
          question: 'What security measures do you have in place?',
          answer: (
            <div>
              <p className="mb-3">
                We implement multiple layers of security to protect your data and ensure reliable service:
              </p>
              <ul className="list-disc pl-6 mb-3 space-y-1">
                <li>DDoS protection to mitigate attacks</li>
                <li>Web Application Firewall (WAF) to block common threats</li>
                <li>Regular security patches and updates</li>
                <li>Server-level firewalls and intrusion detection</li>
                <li>SSL certificates for secure connections</li>
                <li>Regular security audits and vulnerability scanning</li>
              </ul>
              <p>
                Our security team monitors our infrastructure 24/7 to respond quickly to any potential threats.
              </p>
            </div>
          )
        },
        {
          question: 'Do you offer SSL certificates?',
          answer: (
            <p>
              Yes, all hosting plans include free Let's Encrypt SSL certificates that can be activated
              with one click through your control panel. For enhanced security needs, we also offer
              premium SSL certificates including Domain Validation (DV), Organization Validation (OV),
              and Extended Validation (EV) certificates at additional cost.
            </p>
          )
        },
        {
          question: 'Are you GDPR compliant?',
          answer: (
            <p>
              Yes, SiliconPin is fully compliant with the General Data Protection Regulation (GDPR).
              We have implemented the necessary technical and organizational measures to ensure that
              data processing is performed in accordance with GDPR requirements. Our privacy policy
              outlines how we collect, process, and protect personal data.
            </p>
          )
        },
      ]
    },
  ];

  // Get current category
  const currentCategory = faqCategories.find(cat => cat.id === activeCategory) || faqCategories[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative w-full py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90">
              Find answers to common questions about our hosting services.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg border border-border shadow-sm sticky top-6">
              <h2 className="text-lg font-bold text-foreground mb-4">Categories</h2>
              <nav className="space-y-1">
                {faqCategories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 bg-muted/30 rounded-md">
                <h3 className="text-sm font-medium text-foreground mb-2">Need more help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Can't find the answer you're looking for? Contact our support team.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-lg border border-border shadow-sm">
              <div className="p-6 border-b border-border">
                <h2 className="text-2xl font-bold text-foreground">{currentCategory.name}</h2>
                <p className="text-muted-foreground mt-2">
                  Find answers to common questions about {currentCategory.name.toLowerCase()}.
                </p>
              </div>

              <div>
                {currentCategory.faqs.map((faq, index) => {
                  const faqId = `${currentCategory.id}-${index}`;
                  const isOpen = openFaqs[faqId] || false;

                  return (
                    <div
                      key={faqId}
                      className={`border-b border-border ${isOpen ? 'bg-muted/20' : ''}`}
                    >
                      <button
                        onClick={() => toggleFaq(faqId)}
                        className="flex items-center justify-between w-full text-left p-6 focus:outline-none"
                      >
                        <h3 className="text-lg font-medium text-foreground pr-8">{faq.question}</h3>
                        <svg
                          className={`h-5 w-5 text-foreground transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="p-6 pt-0 text-muted-foreground prose prose-sm dark:prose-invert max-w-none">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Search + Contact Section */}
            <div className="mt-8 bg-muted/30 rounded-lg p-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-foreground mb-4">Can't find what you're looking for?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our support team is available 24/7 to assist you with any questions or issues you may have.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white min-w-[160px]">
                      Contact Support
                    </Button>
                  </Link>
                  <Link href="/blogs">
                    <Button variant="outline" className="min-w-[160px]">
                      Browse Articles
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
