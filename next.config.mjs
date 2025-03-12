const nextConfig = {
  reactStrictMode: true,
  output: "export", // Indique à Next.js d'exporter en mode statique
  images: {
    domains: ['source.unsplash.com', 'upload.wikimedia.org', 'www.youtube.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
