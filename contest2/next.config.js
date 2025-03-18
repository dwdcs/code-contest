/** @type {import('next').NextConfig} */
const nextConfig = {
  // Change to serverless output
  output: 'standalone',
  distDir: 'build',
  images: {
    unoptimized: true,
    domains: ['localhost', '0.0.0.0'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.siliconpin.com',
        pathname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  trailingSlash: true,
  experimental: {
    // These experimental features help with hydration issues
    optimizeCss: true,
    optimizeServerReact: true,
  },
  // Prevent crossorigin issues
  serverExternalPackages: ['next-themes', 'react-dom'],
  reactStrictMode: false, // Temporarily disable strict mode to avoid double-mounting in development
  compiler: {
    // Remove console.logs and suppress hydration warnings in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
}

export default nextConfig;
