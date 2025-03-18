import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Manually define the blog data for this page
const blogData = {
  id: '2',
  title: 'PHP Hosting: Best Practices for Performance and Security',
  excerpt: 'Discover essential best practices for PHP hosting that will help you optimize performance and strengthen security for your PHP applications.',
  imageUrl: 'https://ext.siliconpin.com/3203903473/3202459554.webp',
  date: '27 Feb',
  author: 'admin',
  slug: 'php-hosting-best-practices',
};

export const metadata = {
  title: `${blogData.title} | SiliconPin`,
  description: blogData.excerpt,
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-48 md:h-64">
        <Image
          src="/images/banner.webp"
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{blogData.title}</h1>
            <div className="flex items-center justify-center text-sm text-white/90 space-x-1">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>&gt;</span>
              <Link href="/blogs/" className="hover:text-white">Blogs</Link>
              <span>&gt;</span>
              <span className="text-white/70">Current Post</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="relative w-full aspect-video mb-6">
                <Image
                  src={blogData.imageUrl}
                  alt={blogData.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Image
                    src="/images/logo.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                  <span className="text-sm text-atheneum-gray">{blogData.date}</span>
                </div>

                <div className="flex items-center gap-1">
                  <Image
                    src="/images/logo.png"
                    alt="Author"
                    width={20}
                    height={20}
                    className="h-5 w-5 rounded-full"
                  />
                  <span className="text-sm text-atheneum-gray">{blogData.author}</span>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-atheneum-dark mb-4">{blogData.title}</h1>

              <div className="prose max-w-none text-atheneum-gray">
                <p className="mb-4">{blogData.excerpt}</p>

                <h2 className="text-xl font-semibold text-atheneum-dark mt-6 mb-3">Choosing the Right PHP Hosting</h2>
                <p className="mb-4">
                  PHP remains one of the most popular server-side scripting languages, powering millions of websites
                  including major platforms like WordPress, Drupal, and Magento. When selecting PHP hosting, consider
                  these critical factors:
                </p>
                <ul className="list-disc pl-6 mb-4 text-atheneum-gray">
                  <li className="mb-2">
                    <strong>PHP Version Support:</strong> Choose a host that offers recent PHP versions (7.4+, 8.0+).
                    Newer versions provide significant performance improvements and security enhancements.
                  </li>
                  <li className="mb-2">
                    <strong>Extension Support:</strong> Ensure your host supports the PHP extensions your application requires,
                    such as ImageMagick, GD, Intl, and various database drivers.
                  </li>
                  <li className="mb-2">
                    <strong>Resource Allocation:</strong> Look for hosts that offer adequate memory limits, execution time,
                    and processing power for your application's needs.
                  </li>
                  <li className="mb-2">
                    <strong>Configuration Flexibility:</strong> The ability to customize PHP settings through php.ini or
                    .htaccess files is crucial for optimizing performance.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold text-atheneum-dark mt-6 mb-3">Performance Optimization</h2>
                <p className="mb-4">
                  Once you've selected a suitable PHP host, implement these performance optimization techniques:
                </p>

                <h3 className="text-lg font-medium text-atheneum-dark mt-5 mb-2">1. PHP Caching</h3>
                <p className="mb-4">
                  Implement an opcode cache like OPcache (built into PHP 5.5+) to store precompiled script bytecode in memory,
                  dramatically reducing execution time and server load. Configure OPcache with these optimal settings:
                </p>
                <pre className="bg-gray-100 p-3 rounded overflow-x-auto mb-4 text-sm">
                  opcache.memory_consumption=128<br/>
                  opcache.interned_strings_buffer=8<br/>
                  opcache.max_accelerated_files=4000<br/>
                  opcache.revalidate_freq=60<br/>
                  opcache.fast_shutdown=1<br/>
                  opcache.enable_cli=1
                </pre>

                <h3 className="text-lg font-medium text-atheneum-dark mt-5 mb-2">2. Content Delivery Network (CDN)</h3>
                <p className="mb-4">
                  Utilize a CDN to distribute static assets (images, CSS, JavaScript) across global edge servers,
                  reducing latency and improving load times for visitors worldwide.
                </p>

                <h3 className="text-lg font-medium text-atheneum-dark mt-5 mb-2">3. Database Optimization</h3>
                <p className="mb-4">
                  Optimize your database interactions with these strategies:
                </p>
                <ul className="list-disc pl-6 mb-4 text-atheneum-gray">
                  <li className="mb-2">Index frequently queried columns</li>
                  <li className="mb-2">Use database caching mechanisms</li>
                  <li className="mb-2">Implement query optimization techniques</li>
                  <li className="mb-2">Consider database connection pooling</li>
                </ul>

                <h2 className="text-xl font-semibold text-atheneum-dark mt-6 mb-3">Security Best Practices</h2>
                <p className="mb-4">
                  PHP applications are common targets for attackers. Implement these security measures:
                </p>

                <h3 className="text-lg font-medium text-atheneum-dark mt-5 mb-2">1. Keep PHP Updated</h3>
                <p className="mb-4">
                  Regularly update to the latest stable PHP version to protect against known vulnerabilities.
                  PHP versions below 7.4 are no longer receiving security updates and should be avoided in production.
                </p>

                <h3 className="text-lg font-medium text-atheneum-dark mt-5 mb-2">2. Secure PHP Configuration</h3>
                <p className="mb-4">
                  Modify these php.ini settings to enhance security:
                </p>
                <pre className="bg-gray-100 p-3 rounded overflow-x-auto mb-4 text-sm">
                  display_errors = Off<br/>
                  log_errors = On<br/>
                  error_log = /path/to/error.log<br/>
                  expose_php = Off<br/>
                  allow_url_fopen = Off<br/>
                  allow_url_include = Off<br/>
                  session.cookie_httponly = 1<br/>
                  session.cookie_secure = 1<br/>
                  session.use_strict_mode = 1
                </pre>

                <h3 className="text-lg font-medium text-atheneum-dark mt-5 mb-2">3. Implement HTTPS</h3>
                <p className="mb-4">
                  Use SSL/TLS certificates to encrypt data transmission. Many hosts now offer free SSL certificates
                  through Let's Encrypt, making HTTPS implementation straightforward.
                </p>

                <h3 className="text-lg font-medium text-atheneum-dark mt-5 mb-2">4. Web Application Firewall (WAF)</h3>
                <p className="mb-4">
                  Deploy a WAF to filter malicious traffic before it reaches your PHP application.
                  Solutions like Cloudflare, Sucuri, or ModSecurity can provide protection against common attacks
                  like SQL injection, XSS, and CSRF.
                </p>

                <h2 className="text-xl font-semibold text-atheneum-dark mt-6 mb-3">Monitoring and Maintenance</h2>
                <p className="mb-4">
                  Regular monitoring and maintenance are essential for optimal PHP hosting:
                </p>
                <ul className="list-disc pl-6 mb-4 text-atheneum-gray">
                  <li className="mb-2">
                    <strong>Error Logging:</strong> Implement comprehensive error logging and regularly review logs
                    to identify and fix issues.
                  </li>
                  <li className="mb-2">
                    <strong>Performance Monitoring:</strong> Use tools like New Relic, Blackfire, or simple server
                    monitoring to track application performance and identify bottlenecks.
                  </li>
                  <li className="mb-2">
                    <strong>Regular Backups:</strong> Schedule automated backups of both files and databases.
                    Test backup restoration procedures periodically.
                  </li>
                  <li className="mb-2">
                    <strong>Security Scanning:</strong> Regularly scan your application for vulnerabilities using
                    tools like OWASP ZAP or Acunetix.
                  </li>
                </ul>

                <p className="mb-4">
                  By implementing these best practices for PHP hosting, you can create a robust, secure, and high-performing
                  environment for your PHP applications. Remember that optimization is an ongoing process that requires
                  regular attention and updates as your application evolves.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/blogs/">
                <Button className="bg-atheneum-red hover:bg-atheneum-red/90 text-white rounded-sm">
                  Back to Blogs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
