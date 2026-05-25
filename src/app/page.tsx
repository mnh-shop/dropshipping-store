import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Estilos &uacute;nicos, hechos en Colombia
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Camisetas, hoodies y m&aacute;s con dise&ntilde;os exclusivos. 
              Producci&oacute;n local, env&iacute;o r&aacute;pido a todo el pa&iacute;s.
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/products"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow hover:bg-blue-50 transition"
              >
                Ver Productos
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Conoce M&aacute;s
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
                🎨
              </div>
              <h3 className="mt-4 text-lg font-semibold">Dise&ntilde;os Exclusivos</h3>
              <p className="mt-2 text-sm text-gray-600">
                Cada pieza es &uacute;nica. Dise&ntilde;os originales que no encontrar&aacute;s en otro lugar.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
                🚀
              </div>
              <h3 className="mt-4 text-lg font-semibold">Env&iacute;o R&aacute;pido</h3>
              <p className="mt-2 text-sm text-gray-600">
                Producci&oacute;n local en Colombia. Entrega en 3-7 d&iacute;as h&aacute;biles.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xl">
                💚
              </div>
              <h3 className="mt-4 text-lg font-semibold">Sostenible</h3>
              <p className="mt-2 text-sm text-gray-600">
                Print-on-demand: solo producimos lo que vendemos. Cero desperdicio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            &iquest;Listo para encontrar tu estilo?
          </h2>
          <p className="mt-4 text-gray-600">
            Explora nuestra colecci&oacute;n y encuentra el producto perfecto para ti.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
          >
            Explorar Colecci&oacute;n
          </Link>
        </div>
      </section>
    </div>
  );
}
