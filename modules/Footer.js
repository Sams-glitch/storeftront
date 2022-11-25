import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t w-full">
      <div className="w-full md:w-3/4 mx-auto py-8 md:space-x-3">
        {/* footer */}
        <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-5 gap-y-5 gap-x-6 w-full sm:px-6 md:px-0">
          <div className="col-span-2 md:col-span-1 inline-flex items-start">
            <span>
              <ShoppingBagIcon className="h-10 w-10" />
              <h2 className="text-xl">Store</h2>
            </span>
            <span className="invisible"></span>
          </div>
          <div>
            <ul className="flex flex-col items-start space-y-3">
              <li>About us</li>
              <li>Terms of use</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Privancy policy</li>
            </ul>
          </div>
        </div>
        <div className="md:mt-8 sm:px-6 md:px-0 border-t">
          <h1 className="py-6">2022 Store, All rights reserved</h1>
        </div>
      </div>
    </footer>
  );
}
