import Link from 'next/link';
import Image from 'next/image';
import SkeletonLoader from './SkeletonLoader';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface ProductGridProps {
  products: Product[];
  loading: boolean;
}

export default function ProductGrid({ products, loading }: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <SkeletonLoader key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow dark:border-gray-700">
            <div className="relative h-48 mb-4">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold truncate">{product.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {product.category}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}