const nextConfig = {
  reactStrictMode: true,
  output: "export", // Indique à Next.js d'exporter en mode statique
  distDir: "out", // Assure que Next.js exporte vers le bon dossier
  images: {
    unoptimized: true, // Désactive l'optimisation des images (sinon, erreur avec "export")
    domains: ['source.unsplash.com', 'upload.wikimedia.org', 'www.youtube.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
