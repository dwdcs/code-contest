import Image from 'next/image';
import { BlogCard } from '@/components/blog/BlogCard';
import { blogs } from '@/lib/data/blogs';

export const metadata = {
  title: 'SiliconPin - Web Hosting Guides & Tutorials',
  description: 'Explore our collection of technical hosting guides and tutorials on Node.js, PHP, Python, and other web hosting technologies.',
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-48 md:h-64">
        <Image
          src="/images/banner.webp"
          alt="Blogs Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">SiliconPin Blog</h1>
            <div className="flex items-center justify-center text-sm text-white/90 space-x-1">
              <span>Home</span>
              <span>&gt;</span>
              <span>Blogs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-atheneum-dark text-center">
              Latest Web Hosting Guides & Tutorials
            </h2>
            <p className="text-atheneum-gray text-center mt-2 max-w-2xl mx-auto">
              Explore our comprehensive guides on various hosting technologies to optimize your web applications for performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                imageUrl={blog.imageUrl}
                date={blog.date}
                author={blog.author}
                slug={blog.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
