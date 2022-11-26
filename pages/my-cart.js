import { ArrowLongLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Container from '../modules/layout/Container';
import Layout from '../modules/layout/Layout';
import { Store } from '../utils/Store';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

function CartScreen() {
  const router = useRouter();
  // context get cartfrom store state
  const { state, dispatch } = useContext(Store);

  // deconstructing
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };

  const updateCartHandler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });
  };
  return (
    <>
      <Layout>
        <Container>
          <h1 className="mb-4 text-xl font-semibold">Shooping Cart</h1>
          {
            //if cart items doesnt exist
            cartItems.length === 0 ? (
              <div className="w-full">
                Your cart is empty.{' '}
                <Link href={'/'} className="flex">
                  <ArrowLongLeftIcon className="h-4 w-8" /> Go back shopping.
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-4 md:gap-5">
                <div className="overflow-hidden md:col-span-3">
                  <table className="min-w-full">
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.slug} className="border-b">
                          <td>
                            <Link
                              href={`/product/${item.slug}`}
                              className="flex items-center"
                            >
                              <Image
                                src={item.image}
                                alt={item.slug}
                                height={200}
                                width={200}
                                className="h-8 w-8 rounded"
                              />
                              {item.name}
                            </Link>
                          </td>
                          <td>
                            <select
                              value={item.quantity}
                              onChange={(e) =>
                                updateCartHandler(item, e.target.value)
                              }
                            >
                              {[...Array(item.countInstock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>{item.price}</td>
                          <td>
                            <button onClick={() => removeItemHandler(item)}>
                              <XMarkIcon className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* calculations */}
                <div className="card p-5">
                  <ul>
                    <li>
                      <div className="pb-3">
                        Subtotal (
                        {cartItems.reduce((a, c) => a + c.quantity, 0)}) :
                        {'MWK'}{' '}
                        {cartItems.reduce(
                          (a, c) => a + c.quantity * c.price,
                          0
                        )}
                      </div>
                    </li>
                    <button onClick={() => router.push('/login?shipping')}>
                      Checkout
                    </button>
                  </ul>
                </div>
              </div>
            )
          }
        </Container>
      </Layout>
    </>
  );
}

export default dynamic(() => Promise.resolve(CartScreen, { ssr: false }));
