
// next.config.mjs (Configuration avancée optimisée pour une encyclopédie industrielle complète)
const nextConfig = {
  reactStrictMode: true,
    optimizeCss: true,
  },
  images: {
    domains: ['source.unsplash.com', 'upload.wikimedia.org', 'upload.wikimedia.org', 'www.youtube.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [{ source: '/api/:path*', destination: 'https://external-api.com/:path*' }];
  },
};
export default nextConfig;
