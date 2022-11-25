import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function ProductCard({ product }) {
  const router = useRouter();
  return (
    <div key={product.id} className="group relative">
      <div onClick={() => router.push('/product-details')} className="min-h-48 w-full overflow-hidden group-hover:opacity-75 lg:aspect-none lg:h-48 rounded-t shadow-md">
        <Image
          src={
            'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
          }
          alt={product.slug}
          height={300}
          width={300}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="rounded-b inline-flex justify-between py-4 px-2">
        <div className="w-1/2">
          <h3 className="text-xs text-gray-900">{product.title}</h3>
        </div>
        <div className="inline-flex space-x-1 items-start justify-between">
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
          <p className="text-xs font-medium text-red-600 line-through">
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
