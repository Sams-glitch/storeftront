import Head from 'next/head';
import Image from 'next/image';
import Banner from '../modules/banners/Banner';
import Layout from '../modules/layout/Layout';
import ProductCard from '../modules/products/ProductCard';
import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  return (
    <Layout>
      <Banner />
      {/* categories */}
      {/* <div className="w-full border-b py-4 -ml-4 overflow-hidden">
        <h1 className="text-xl font-extrabold">Shop by Category</h1>
        <div className="flex flex-row overflow-auto">
          <div className="flex flex-col items-center">
            <Image
              src={
                'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
              }
              alt={'category'}
              height={100}
              width={200}
              className="rounded-full h-28 w-28"
            />
            <h4 className="text-lg font-semibold">Category</h4>
          </div>
        </div>
      </div> */}

      {/* products
      <div className="py-3">
        <h3 className="text-lg font-bold">Deals worth your attention.</h3>

        {/* <div className="grid grid-flow-row-dense gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.slug}
              // addToCartHandler={addToCartHandler}
            />
          ))}
        </div> 
      </div> */}

      <div className="w-full mx-auto py-8 sm:py-12">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-5 gap-x-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.slice(0, 8).map((product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  // Pass data to the page via props
  return { props: { products } };
}
