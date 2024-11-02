// next.config.ts
import type { NextConfig } from "next";
const { i18n } = require('./next-i18next.config');
const nextConfig: NextConfig = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'tr'], // Add your supported languages here
    },
    // Other config options can be added here
};

export default nextConfig;
