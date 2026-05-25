import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO">
      <body className="bg-white text-gray-900 antialiased">
        <header className="border-b border-gray-200">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="text-xl font-bold tracking-tight">
                MNH <span className="text-blue-600">Shop</span>
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Productos
                </Link>
                <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Nosotros
                </Link>
                <Link href="/cart" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Carrito
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} MNH Shop. Producci&oacute;n local en Colombia.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
