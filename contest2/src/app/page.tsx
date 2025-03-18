import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96">
        <Image
          src="/images/hosting-banner.webp"
          alt="Tech Hosting Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              SiliconPin Hosting Guides & Tutorials
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Discover the best practices, comparisons, and optimization techniques for all your hosting needs
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/blogs/">
                <Button className="bg-atheneum-red hover:bg-atheneum-red/90 text-white px-6 py-2 min-w-40">
                  Explore Resources
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" className="text-white border-white hover:bg-white/10 px-6 py-2 min-w-40">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atheneum-dark mb-4">
              Why Choose Our Guides
            </h2>
            <p className="text-atheneum-gray max-w-2xl mx-auto">
              Our technical resources provide comprehensive information that helps developers and system administrators make informed hosting decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atheneum-dark mb-3">Expert Insights</h3>
              <p className="text-atheneum-gray">
                Our content is created by hosting experts with years of experience in the field, ensuring you get reliable information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atheneum-dark mb-3">Up-to-Date Content</h3>
              <p className="text-atheneum-gray">
                The hosting landscape changes rapidly, and our guides are regularly updated to reflect the latest technologies and best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-atheneum-dark mb-3">Unbiased Comparisons</h3>
              <p className="text-atheneum-gray">
                We provide fair evaluations of hosting solutions to help you compare features, pricing, and performance based on your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-atheneum-dark mb-4">
              Popular Hosting Guides
            </h2>
            <p className="text-atheneum-gray max-w-2xl mx-auto">
              Explore our most popular technical hosting guides and tutorials to optimize your web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/images/server-banner.webp"
                  alt="Node.js Hosting"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Node.js Hosting Guide
                </h3>
                <p className="text-white/80 mb-4">
                  Learn everything about hosting Node.js applications efficiently.
                </p>
                <Link href="/blogs/nodejs-hosting-guide">
                  <Button className="bg-atheneum-red hover:bg-atheneum-red/90 text-white text-sm">
                    Read Guide
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/images/data-center.webp"
                  alt="PHP Hosting"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  PHP Hosting Best Practices
                </h3>
                <p className="text-white/80 mb-4">
                  Optimize performance and security for your PHP applications.
                </p>
                <Link href="/blogs/php-hosting-best-practices">
                  <Button className="bg-atheneum-red hover:bg-atheneum-red/90 text-white text-sm">
                    Read Guide
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-sm">
              <div className="relative h-52">
                <Image
                  src="/images/hosting-isometric.webp"
                  alt="Hosting Comparison"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Comprehensive Hosting Comparison
                </h3>
                <p className="text-white/80 mb-4">
                  Compare the pros, cons, and pricing of different hosting solutions.
                </p>
                <Link href="/blogs/hosting-solutions-comparison">
                  <Button className="bg-atheneum-red hover:bg-atheneum-red/90 text-white text-sm">
                    Read Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/blogs/">
              <Button variant="outline" className="text-atheneum-dark border-atheneum-gray">
                View All Guides
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
