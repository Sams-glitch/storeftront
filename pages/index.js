import Layout from '../modules/layout/Layout';
import ProductCard from '../modules/products/ProductCard';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout>
      <div className="w-full md:w-3/4 mx-auto md:space-x-3">
        <div className="w-full mx-auto py-8 px-4 sm:py-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Items worth your attention
          </h2>

          <div className="mt-3 grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-5 gap-x-6">
            {data.products.slice(0, 3).map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}

            <div className="col-span-2 md:col-span-2">
              {data.products.slice(0, 1).map((product) => (
                <ProductCard product={product} key={product.slug} />
              ))}
            </div>

            {data.products.slice(0, 2).map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}

            <div className="col-span-2 md:col-span-2">
              {data.products.slice(0, 1).map((product) => (
                <ProductCard product={product} key={product.slug} />
              ))}
            </div>

            {data.products.slice(0, 3).map((product) => (
              <ProductCard product={product} key={product.slug} />
            ))}

            <div className="col-span-2 md:col-span-3">
              {data.products.slice(0, 1).map((product) => (
                <ProductCard product={product} key={product.slug} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// // This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data.products from external API
//   const res = await fetch('https://fakestoreapi.com/products');
//   const products = await res.json();

//   // Pass data.products to the page via props
//   return { props: { products } };
// }
