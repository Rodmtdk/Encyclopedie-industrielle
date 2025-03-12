export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <title>Encyclopédie Industrielle</title>
        <meta name="description" content="Une encyclopédie interactive sur l’usinage et l'automatisation industrielle." />
      </head>
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
