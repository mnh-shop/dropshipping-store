import { NextResponse } from 'next/server';

// TODO: Replace with real product data from Gelato/Printify API
const SAMPLE_PRODUCTS = [
  {
    id: '1',
    name: 'Camiseta Colombia Street',
    slug: 'camiseta-colombia-street',
    price: 89000,
    currency: 'COP',
    image: '/images/placeholder.svg',
    category: 'camisetas',
    description: 'Camiseta de algodón premium con diseño exclusivo de street art colombiano.',
  },
  {
    id: '2',
    name: 'Hoodie Bogotá Nights',
    slug: 'hoodie-bogota-nights',
    price: 149000,
    currency: 'COP',
    image: '/images/placeholder.svg',
    category: 'hoodies',
    description: 'Hoodie cómodo y cálido con diseño inspirado en la noche bogotana.',
  },
  {
    id: '3',
    name: 'Camiseta Café de Colombia',
    slug: 'camiseta-cafe-colombia',
    price: 79000,
    currency: 'COP',
    image: '/images/placeholder.svg',
    category: 'camisetas',
    description: 'Celebra la cultura cafetera con esta camiseta de edición limitada.',
  },
];

export async function GET() {
  return NextResponse.json({ products: SAMPLE_PRODUCTS });
}
