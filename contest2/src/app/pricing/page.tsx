import React from 'react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'SiliconPin Hosting Plans & Pricing',
  description: 'Compare our hosting plans and find the perfect solution for your website. Affordable shared hosting, VPS, dedicated servers, and cloud hosting options.',
};

interface PricingFeature {
  name: string;
  basic: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Hosting",
    price: "$9.99",
    period: "per month",
    description: "Perfect for personal projects and small websites.",
    features: [
      "1 Website",
      "10 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "24/7 Support",
      "99.9% Uptime Guarantee"
    ],
    buttonText: "Get Started"
  },
  {
    name: "Pro Hosting",
    price: "$24.99",
    period: "per month",
    description: "Ideal for small businesses and growing applications.",
    features: [
      "Unlimited Websites",
      "50 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "Priority Support",
      "99.9% Uptime Guarantee",
      "Free Domain for 1 Year",
      "Daily Backups"
    ],
    highlighted: true,
    buttonText: "Get Started"
  },
  {
    name: "Enterprise",
    price: "$69.99",
    period: "per month",
    description: "Advanced solutions for high-traffic applications.",
    features: [
      "Unlimited Websites",
      "200 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "24/7 Priority Support",
      "99.99% Uptime Guarantee",
      "Free Domain for 1 Year",
      "Daily Backups",
      "Dedicated Resources",
      "Staging Environment"
    ],
    buttonText: "Contact Sales"
  }
];

const comparisonFeatures: PricingFeature[] = [
  { name: "SSD Storage", basic: "10 GB", pro: "50 GB", enterprise: "200 GB" },
  { name: "Bandwidth", basic: "Unmetered", pro: "Unmetered", enterprise: "Unmetered" },
  { name: "Websites", basic: "1", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "CPU Resources", basic: "1 vCPU", pro: "2 vCPUs", enterprise: "4 vCPUs" },
  { name: "RAM", basic: "1 GB", pro: "2 GB", enterprise: "8 GB" },
  { name: "SSL Certificates", basic: true, pro: true, enterprise: true },
  { name: "Daily Backups", basic: false, pro: true, enterprise: true },
  { name: "Staging Environment", basic: false, pro: false, enterprise: true },
  { name: "CDN Integration", basic: false, pro: true, enterprise: true },
  { name: "Dedicated IP", basic: false, pro: false, enterprise: true },
  { name: "Priority Support", basic: false, pro: true, enterprise: true },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative w-full py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-white/90 mb-6">
              Choose the perfect hosting plan for your needs with no hidden fees or long-term contracts
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg overflow-hidden ${
                  plan.highlighted
                    ? 'border-2 border-blue-500 relative'
                    : 'border border-border'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-blue-500 text-white text-xs font-semibold py-1 text-center">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6 bg-card">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                  <button className={`w-full py-2 px-4 rounded-md font-medium ${
                    plan.highlighted
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-card border border-input text-foreground hover:bg-muted'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>

                <div className="bg-card border-t border-border p-6">
                  <h4 className="font-medium text-foreground mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Comparison */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Detailed Plan Comparison
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare our hosting plans to find the perfect fit for your projects.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="p-4 text-left text-foreground font-medium">Features</th>
                  <th className="p-4 text-center text-foreground font-medium">Basic</th>
                  <th className="p-4 text-center text-foreground font-medium bg-blue-50 dark:bg-blue-900/20">Pro</th>
                  <th className="p-4 text-center text-foreground font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-card' : 'bg-background'}>
                    <td className="p-4 border-t border-border text-foreground">{feature.name}</td>
                    <td className="p-4 border-t border-border text-center">
                      {typeof feature.basic === 'boolean' ? (
                        feature.basic ? (
                          <svg className="h-5 w-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className="text-muted-foreground">{feature.basic}</span>
                      )}
                    </td>
                    <td className="p-4 border-t border-border text-center bg-blue-50 dark:bg-blue-900/20">
                      {typeof feature.pro === 'boolean' ? (
                        feature.pro ? (
                          <svg className="h-5 w-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className="text-muted-foreground font-medium">{feature.pro}</span>
                      )}
                    </td>
                    <td className="p-4 border-t border-border text-center">
                      {typeof feature.enterprise === 'boolean' ? (
                        feature.enterprise ? (
                          <svg className="h-5 w-5 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )
                      ) : (
                        <span className="text-muted-foreground">{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our hosting services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-lg font-medium text-foreground mb-3">Can I upgrade my plan later?</h3>
              <p className="text-muted-foreground">
                Yes, you can easily upgrade your hosting plan at any time. Your account will be credited for the unused portion of your current plan.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-lg font-medium text-foreground mb-3">Do you offer a money-back guarantee?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied, you can cancel within 30 days for a full refund.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-lg font-medium text-foreground mb-3">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for annual plans. Monthly plans require a credit card or PayPal account.
              </p>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-lg font-medium text-foreground mb-3">How does your uptime guarantee work?</h3>
              <p className="text-muted-foreground">
                We guarantee 99.9% uptime for all plans. If we fail to meet this, you'll receive credits based on the amount of downtime experienced.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Choose the right hosting plan for your needs or contact our team for a personalized recommendation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-blue-700 hover:bg-white/90">
              View All Plans
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
