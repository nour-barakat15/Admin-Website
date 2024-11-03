import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['th.bing.com'],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'], 
  },

};

export default nextConfig;
