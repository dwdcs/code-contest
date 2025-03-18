// Shared configuration settings for the application

// Image configuration to prevent hydration mismatch
export const imageConfig = {
  unoptimized: true,
  loading: 'eager',
  crossOrigin: undefined, // This helps prevent hydration mismatches
};

// Default metadata
export const siteConfig = {
  name: "SiliconPin",
  description: "Web Hosting Guides & Tutorials",
  url: "https://siliconpin.com",
  ogImage: "/images/hosting-banner.webp",
};
