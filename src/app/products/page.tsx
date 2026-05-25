import Link from 'next/link';

// TODO: Fetch from /api/products
const products = [
  {
    id: '1',
    name: 'Camiseta Colombia Street',
    slug: 'camiseta-colombia-street',
    price: 89000,
    currency: 'COP',
    image: '/images/placeholder.svg',
    category: 'camisetas',
  },
  {
    id: '2',
    name: 'Hoodie Bogotá Nights',
    slug: 'hoodie-bogota-nights',
    price: 149000,
    currency: 'COP',
    image: '/images/placeholder.svg',
    category: 'hoodies',
  },
  {
    id: '3',
    name: 'Camiseta Café de Colombia',
    slug: 'camiseta-cafe-colombia',
    price: 79000,
    currency: 'COP',
    image: '/images/placeholder.svg',
    category: 'camisetas',
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight">Nuestros Productos</h1>
      <p className="mt-2 text-gray-600">Diseños exclusivos, hechos en Colombia.</p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
          >
            <div className="aspect-square bg-gray-100 flex items-center justify-center text-4xl">
              👕
            </div>
            <div className="p-4">
              <p className="text-xs font-medium text-blue-600 uppercase">{product.category}</p>
              <h3 className="mt-1 text-lg font-semibold group-hover:text-blue-600 transition">
                {product.name}
              </h3>
              <p className="mt-2 text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
