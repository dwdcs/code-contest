import React from 'react';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export const metadata = {
  title: 'About SiliconPin - Our Mission and Team',
  description: 'Learn about SiliconPin\'s mission, history, and the team behind our web hosting services and technical guides.',
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About SiliconPin</h1>
            <p className="text-lg text-white/90">
              Powering the web with reliable hosting solutions since 2020
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        {/* Our Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">
                SiliconPin was founded in 2020 with a simple mission: to make reliable web hosting accessible to developers of all skill levels. What started as a small team of passionate engineers has grown into a trusted hosting provider serving thousands of customers worldwide.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey began when our founders, experienced developers themselves, recognized a gap in the market for hosting solutions that balanced performance, reliability, and technical support with affordable pricing. Too often, developers had to choose between cheap hosting with poor support or enterprise solutions that were financially out of reach.
              </p>
              <p className="text-muted-foreground">
                Today, SiliconPin offers a comprehensive range of hosting services, from shared hosting for personal projects to dedicated solutions for high-traffic applications. We remain committed to our founding principles of technical excellence, transparent pricing, and exceptional customer support.
              </p>
            </div>
            <div className="bg-muted p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Technical Excellence</h4>
                    <p className="text-sm text-muted-foreground">We continuously invest in the latest technologies and best practices to ensure optimal performance.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Reliability & Security</h4>
                    <p className="text-sm text-muted-foreground">Our infrastructure is designed for 99.9% uptime with robust security measures to protect your applications.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Developer-First Support</h4>
                    <p className="text-sm text-muted-foreground">Our support team consists of experienced developers who understand your technical challenges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-3 mt-1">
                    <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Transparent Pricing</h4>
                    <p className="text-sm text-muted-foreground">No hidden fees or confusing pricing tiers – pay only for what you need with predictable billing.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Our Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">Alex Chen</h3>
                <p className="text-sm text-muted-foreground mb-3">CEO & Co-Founder</p>
                <p className="text-sm text-muted-foreground">
                  With over 15 years of experience in cloud infrastructure, Alex leads SiliconPin's strategic vision and technology roadmap.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground mb-3">CTO & Co-Founder</p>
                <p className="text-sm text-muted-foreground">
                  Sarah's background in distributed systems and application performance optimization drives SiliconPin's technical excellence.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-card rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">Marcus Rivera</h3>
                <p className="text-sm text-muted-foreground mb-3">Head of Customer Success</p>
                <p className="text-sm text-muted-foreground">
                  Marcus ensures that every SiliconPin customer receives the support they need to succeed with their hosting solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Our Infrastructure */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Infrastructure</h2>
          <div className="bg-muted/30 p-8 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">5 Global Data Centers</h3>
                <p className="text-sm text-muted-foreground">
                  Strategically located in North America, Europe, and Asia for optimal performance worldwide.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Advanced Security</h3>
                <p className="text-sm text-muted-foreground">
                  DDoS protection, WAF, and regular security audits to keep your applications safe.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">99.9% Uptime</h3>
                <p className="text-sm text-muted-foreground">
                  Redundant systems and proactive monitoring ensure exceptional reliability.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 mb-4">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">Auto Scaling</h3>
                <p className="text-sm text-muted-foreground">
                  Infrastructure that adapts to your traffic demands for consistent performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
