import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Manually define the blog data for this page
const blogData = {
  id: '1',
  title: 'Getting Started with Node.js Hosting: A Complete Guide',
  excerpt: 'Learn everything you need to know about Node.js hosting options, from shared hosting to dedicated servers, and how to choose the right solution for your project.',
  imageUrl: 'https://ext.siliconpin.com/3371402275/3589923925.webp',
  date: '13 Mar',
  author: 'admin',
  slug: 'nodejs-hosting-guide',
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

                <h2 className="text-xl font-semibold text-atheneum-dark mt-6 mb-3">Understanding Node.js Hosting Requirements</h2>
                <p className="mb-4">
                  Node.js is a powerful JavaScript runtime that allows developers to build server-side applications
                  with JavaScript. However, unlike traditional PHP hosting, Node.js requires special hosting
                  environments that can run and manage Node.js processes. When looking for Node.js hosting,
                  you need to consider factors like Node.js version support, process management, and scalability options.
                </p>

                <h2 className="text-xl font-semibold text-atheneum-dark mt-6 mb-3">Types of Node.js Hosting</h2>
                <p className="mb-4">
                  There are several types of hosting options available for Node.js applications:
                </p>
                <ul className="list-disc pl-6 mb-4 text-atheneum-gray">
                  <li className="mb-2">
                    <strong>Shared Hosting:</strong> The most affordable option, but often comes with limitations
                    for Node.js applications. Many shared hosts now offer Node.js support, but you may face
                    restrictions on resources and process management.
                  </li>
                  <li className="mb-2">
                    <strong>VPS (Virtual Private Server):</strong> Provides more control and dedicated resources.
                    You'll need to configure the server environment yourself, but you gain flexibility and better performance.
                  </li>
                  <li className="mb-2">
                    <strong>Dedicated Servers:</strong> Offers maximum control and resources, but at a higher cost.
                    Ideal for large-scale Node.js applications with high traffic.
                  </li>
                  <li className="mb-2">
                    <strong>PaaS (Platform as a Service):</strong> Services like Heroku, Vercel, and Netlify that
                    simplify Node.js deployment with built-in CI/CD pipelines and scaling options.
                  </li>
                  <li className="mb-2">
                    <strong>Containerized Solutions:</strong> Using Docker and Kubernetes to deploy Node.js applications
                    in containers for better resource utilization and easier scalability.
                  </li>
                </ul>

                <h2 className="text-xl font-semibold text-atheneum-dark mt-6 mb-3">Key Features to Look for in Node.js Hosting</h2>
                <p className="mb-4">
                  When choosing a Node.js hosting provider, consider these essential features:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-atheneum-gray">
                  <li className="mb-2">
                    <strong>Node.js Version Support:</strong> Ensure the host supports the Node.js version your application requires.
                  </li>
                  <li className="mb-2">
                    <strong>Process Managers:</strong> Look for built-in support for PM2, Forever, or similar tools that keep your Node.js application running.
                  </li>
                  <li className="mb-2">
                    <strong>SSH Access:</strong> Direct server access is crucial for troubleshooting and custom configurations.
                  </li>
                  <li className="mb-2">
                    <strong>Scalability Options:</strong> As your application grows, you'll need the ability to scale resources.
                  </li>
                  <li className="mb-2">
                    <strong>SSL Support:</strong> Secure connections are essential for modern web applications.
                  </li>
                  <li className="mb-2">
                    <strong>CI/CD Integration:</strong> Automated deployment pipelines can streamline your workflow.
                  </li>
                </ol>

                <h2 className="text-xl font-semibold text-atheneum-dark mt-6 mb-3">Popular Node.js Hosting Providers</h2>
                <p className="mb-4">
                  Here are some of the most popular hosting providers for Node.js applications:
                </p>
                <ul className="list-disc pl-6 mb-4 text-atheneum-gray">
                  <li className="mb-2"><strong>Vercel:</strong> Excellent for Next.js applications with serverless functions support.</li>
                  <li className="mb-2"><strong>Heroku:</strong> Pioneer in PaaS with excellent Node.js support and easy scaling.</li>
                  <li className="mb-2"><strong>DigitalOcean:</strong> Affordable VPS options with specialized Node.js droplets.</li>
                  <li className="mb-2"><strong>AWS:</strong> Comprehensive cloud services with Elastic Beanstalk for Node.js.</li>
                  <li className="mb-2"><strong>Google Cloud Platform:</strong> App Engine and Cloud Run provide excellent Node.js support.</li>
                  <li className="mb-2"><strong>Microsoft Azure:</strong> App Service offers specialized Node.js hosting.</li>
                </ul>

                <p className="mb-4">
                  Choosing the right hosting solution for your Node.js application is crucial for ensuring optimal
                  performance, reliability, and scalability. Consider your application's specific requirements, budget,
                  and your team's technical expertise when making this important decision.
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
