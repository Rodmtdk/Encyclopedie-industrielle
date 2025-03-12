const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'upload.wikimedia.org', 'www.youtube.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [{ source: '/api/:path*', destination: 'https://external-api.com/:path*' }];
  },
};

export default nextConfig;
