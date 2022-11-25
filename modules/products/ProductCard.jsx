import Image from 'next/image';
import React from 'react';

function ProductCard({ product }) {
  return (
    <div key={product.id} className="group relative">
      <div className="min-h-48 aspect-w-1 aspect-h-1 w-full overflow-hidden group-hover:opacity-75 lg:aspect-none lg:h-48 rounded-t shadow-md">
        <Image
          src={"https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"}
          alt={product.slug}
          height={650}
          width={650}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="rounded-b flex py-4 px-2">
        <div className='w-1/2'>
          <h3 className="text-xs text-gray-900">{product.title}</h3>
        </div>
        <div className="inline-flex space-x-1">
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
          <p className="text-xs font-medium text-red-600 line-through">
            {product.price}
          </p>
        </div>
      </div>
    </div>
    // <div key={product.id} className="group">
    //   <div
    //     onClick={() => router.push(`product/${product.slug}`)}
    //     className="h-52 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
    //   >
    //     <Image
    //       src={product.image}
    //       alt={product.slug}
    //       height={150}
    //       width={150}
    //       className="h-full w-full object-cover object-center group-hover:opacity-75"
    //     />
    //   </div>
    //   <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    //   <p className="space-x-2">
    //     <span className="text-lg font-medium text-gray-900">
    //       {product.price}
    //     </span>
    //     <span className="text-sm line-through text-gray-500">$1000</span>
    //     <span className="text-sm text-red-700">40% off</span>
    //   </p>
    //   <div className="flex justify-between items-center pt-3 pb-2">
    //     <a
    //       //   onClick={() => addToCartHandler(product)}
    //       className="px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300"
    //     >
    //       Add to Cart
    //     </a>

    //     <a
    //       href="#"
    //       title="Add to Favorites"
    //       className="text-2xl text-gray-300 hover:text-red-500 duration-300"
    //     >
    //       &hearts;
    //     </a>
    //   </div>
    // </div>
  );
}

export default ProductCard;
