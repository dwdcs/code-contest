export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  slug: string;
  content?: string;
}

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'Getting Started with Node.js Hosting: A Complete Guide',
    excerpt: 'Learn everything you need to know about Node.js hosting options, from shared hosting to dedicated servers, and how to choose the right solution for your project.',
    imageUrl: 'https://ext.siliconpin.com/3371402275/3589923925.webp',
    date: '13 Mar',
    author: 'admin',
    slug: 'nodejs-hosting-guide',
  },
  {
    id: '2',
    title: 'PHP Hosting: Best Practices for Performance and Security',
    excerpt: 'Discover essential best practices for PHP hosting that will help you optimize performance and strengthen security for your PHP applications.',
    imageUrl: 'https://ext.siliconpin.com/3203903473/3202459554.webp',
    date: '27 Feb',
    author: 'admin',
    slug: 'php-hosting-best-practices',
  },
  {
    id: '3',
    title: 'Python Hosting Solutions: From Flask to Django',
    excerpt: 'Explore various Python hosting solutions that support popular frameworks like Flask and Django, with insights on deployment strategies and optimization techniques.',
    imageUrl: 'https://ext.siliconpin.com/1693198909/1735359000.webp',
    date: '22 Feb',
    author: 'admin',
    slug: 'python-hosting-solutions',
  },
  {
    id: '4',
    title: 'Comprehensive Comparison of Web Hosting Solutions in 2024',
    excerpt: 'Explore the pros, cons, pricing, and performance of different hosting options including shared hosting, VPS, dedicated servers, cloud hosting, and serverless platforms.',
    imageUrl: 'https://ext.siliconpin.com/3591304532/2736819303.webp',
    date: '17 Mar',
    author: 'admin',
    slug: 'hosting-solutions-comparison',
  },
  {
    id: '5',
    title: 'Cloud vs. Traditional Hosting: What Developers Need to Know',
    excerpt: 'Compare cloud hosting services with traditional hosting options to determine which solution best fits your development needs and project requirements.',
    imageUrl: 'https://ext.siliconpin.com/1663539790/3997721086.webp',
    date: '13 Feb',
    author: 'admin',
    slug: 'cloud-vs-traditional-hosting',
  },
  {
    id: '6',
    title: 'Containerization: Docker Hosting for Modern Applications',
    excerpt: 'Learn how Docker containerization can revolutionize your application hosting, providing consistency across development and production environments.',
    imageUrl: 'https://ext.siliconpin.com/3762540643/2263795981.webp',
    date: '8 Feb',
    author: 'admin',
    slug: 'docker-containerization-hosting',
  },
  {
    id: '7',
    title: 'Serverless Hosting: Benefits and Limitations for Developers',
    excerpt: 'Understand the advantages and potential drawbacks of serverless hosting architectures like AWS Lambda, Azure Functions, and Google Cloud Functions.',
    imageUrl: 'https://ext.siliconpin.com/1184521898/232034796.webp',
    date: '15 Nov 2023',
    author: 'admin',
    slug: 'serverless-hosting-benefits',
  },
  {
    id: '8',
    title: 'Database Hosting: MySQL, PostgreSQL, and MongoDB Solutions',
    excerpt: 'Compare hosting options for various database systems including MySQL, PostgreSQL, and MongoDB, with insights on performance optimization and scaling strategies.',
    imageUrl: 'https://ext.siliconpin.com/2518684834/2866759347.webp',
    date: '10 Nov 2023',
    author: 'admin',
    slug: 'database-hosting-solutions',
  },
  {
    id: '9',
    title: 'WordPress Hosting Optimization: Speed and Performance Guide',
    excerpt: 'Master the techniques to optimize your WordPress hosting for maximum speed and performance, from caching strategies to content delivery networks.',
    imageUrl: 'https://ext.siliconpin.com/1651117054/2223402494.webp',
    date: '6 Nov 2023',
    author: 'admin',
    slug: 'wordpress-hosting-optimization',
  },
  {
    id: '10',
    title: 'Content Delivery Networks (CDNs): Boosting Your Site Performance',
    excerpt: 'Learn how CDNs can drastically improve your website loading times, reduce server load, and provide a better user experience for visitors across the globe.',
    imageUrl: 'https://ext.siliconpin.com/3819274630/3871056382.webp',
    date: '23 Mar 2024',
    author: 'Sarah Johnson',
    slug: 'cdn-performance-guide',
  },
  {
    id: '11',
    title: 'Managed vs. Unmanaged Hosting: Making the Right Choice',
    excerpt: 'Understand the key differences between managed and unmanaged hosting solutions to determine which option aligns best with your technical expertise and business needs.',
    imageUrl: 'https://ext.siliconpin.com/2593176403/1956843215.webp',
    date: '20 Mar 2024',
    author: 'Michael Chen',
    slug: 'managed-vs-unmanaged-hosting',
  },
];
