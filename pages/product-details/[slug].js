import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Layout from '../../modules/layout/Layout';
import data from '../../utils/data';
import { Store } from '../../utils/Store';

export default function ProductDetails() {
  // store data provider
  const { state, dispatch } = useContext(Store);

  // get product by id/slug
  const { query, router } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  // cart handler
  const addToCartHandler = () => {
    // check if item already exists in cart else
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    // check stock quantity before adding to cart
    if (product.countInstock < quantity) {
      alert('Sorry. Item is outof stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
  if (!product) {
    return (
      <Layout>
        <div className="w-full md:w-3/4 mx-auto">
          <div className="">
            <h1>Product not found</h1>
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="w-full md:w-3/4 mx-auto">
        <Link
          href={'/'}
          className="inline-flex items-center py-4 w-full text-gray-600 hover:text-emerald-700"
        >
          <ArrowLongLeftIcon className="h-5 w-10" />
          <p>Back to products</p>
        </Link>
        <div className="flex flex-col md:flex-row">
          {/* right */}
          <div className="md:flex-1">
            <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
              <div
                x-show="image === 1"
                className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
              >
                <span className="text-5xl">1</span>
              </div>
            </div>
          </div>
          {/* left */}
          <div className="md:flex-1 px-3">
            <h3 className="mb-2 leading-tight tracking-tight text-xl md:text-2xl font-bold text-gray-700">
              {product.name}
            </h3>
            <p className="text-sm font-medium">
              Category{' '}
              <a href={'/'} className="text-emerald-600">
                {product.category}
              </a>
            </p>

            {/* pricelist */}
            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-emerald-400 mr-1 mt-1">MWK</span>
                  <span className="font-bold text-emerald-600 text-3xl">
                    {product.price}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-green-500 text-xl font-semibold">
                  <span className="line-through">MWK {product.price}</span> Save
                  12%
                </p>
                <p className="text-gray-400 text-sm">
                  {product.countInstock
                    ? `${product.countInstock} items in stock`
                    : 'item is unavailable'}
                </p>
              </div>
            </div>
            {/* end pricelist */}
            <p className="text-gray-500">{product.description}</p>

            {/*  */}
            <div className="flex py-4 space-x-4">
              <div className="relative">
                <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                  Qty
                </div>
                <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <button
                onClick={addToCartHandler}
                className="px-6 py-2 font-semibold rounded bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                Add to Cart
              </button>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
