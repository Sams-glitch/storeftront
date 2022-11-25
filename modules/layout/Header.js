import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

function Header() {
  return (
    <>
      <header className="md:w-3/4 mx-auto py-4 px-3 md:space-x-3 sticky">
        <div className="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-7 sm:gap-x-3 md:gap-x-12 text-emerald-700 mt-3 w-full">
          <div className="col-span-1">
            <div className="text-left inline-flex items-center">
              <ShoppingBagIcon className="h-8 w-8" />
              <h1 className="sm:text-sm md:text-md font-title">Store.</h1>
            </div>
          </div>
          <div className="col-span-2 md:col-span-5">
            <div className="w-full">
              <div className="md:w-4/5 mx-auto">
                <input
                  type="search"
                  className="w-full py-1 px-3 placeholder:text-gray-500 placeholder:text-sm rounded outline-none border"
                  placeholder="Store, Collection, brands etc ..."
                />
              </div>
            </div>
          </div>
          <div className="block ml-auto">
            <div className="inline-flex items-center space-x-3">
              <h3 className="text-sm underline">Account</h3>
              <ShoppingBagIcon className="h-6 w-6 text-md font-extrabold" />
            </div>
          </div>
        </div>

        <div className="mt-3 w-full">
          <nav className="inline-flex space-x-3 text-sm font-medium text-emerald-700 tracking-tight md:-ml-2">
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
