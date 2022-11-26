import React, { useContext, useEffect, useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Store } from '../../utils/Store';

function Header() {
  // store data provider
  const { state } = useContext(Store);
  // get cart from state
  const { cart } = state;

  // track state for client and server side
  const [cartItemsCount, setCartItemsCount] = useState();
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, []);

  return (
    <>
      <header className="md:w-3/4 mx-auto py-4 px-3 md:space-x-3">
        <div className="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-7 gap-y-4 sm:gap-x-3 md:gap-x-12 text-emerald-800 mt-3 w-full">
          <div className="col-span-1">
            <div className="text-left inline-flex items-end">
              <ShoppingBagIcon className="h-8 w-8 sr-only" />
              <h1 className="sm:text-sm md:text-md font-medium">Store.</h1>
            </div>
          </div>
          <div className="col-span-2 md:col-span-5">
            <div className="w-full">
              <div className="md:w-4/5 mx-auto">
                <input
                  type="search"
                  className="w-full py-2 md:py-1.5 px-3 placeholder:text-gray-500 placeholder:text-sm rounded outline-none border"
                  placeholder="Store, Collection, brands etc ..."
                />
              </div>
            </div>
          </div>
          <div className="block ml-auto">
            <div className="inline-flex items-center space-x-3">
              <Link href={'/login'} className="text-sm underline">
                login
              </Link>
              <Link href={'/my-cart'} className="relative">
                <ShoppingBagIcon className="h-7 w-7 font-extrabold" />
                {cartItemsCount > 0 && (
                  <span className="inline-flex items-center absolute top-0 right-0 left-3 bottom-3 text-gray-900 text-sm font-extrabold py-1 px-3 rounded-full dark:bg-red-200 dark:text-red-900">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-3 w-full show-for-small hidden md:block">
          <nav className="inline-flex space-x-3 text-xs font-medium text-emerald-800 tracking-tight uppercase md:-ml-2">
            <Link href={'/'}>All</Link>
            <Link href={'/'}>Category 1</Link>
            <Link href={'/'}>Category 2</Link>
            <Link href={'/'}>Category 3</Link>
            <Link href={'/'}>Category 4</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
