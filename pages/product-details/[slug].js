import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Layout from '../../modules/layout/Layout';

export default function ProductDetails() {
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
            <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
              <div
                x-show="image === 1"
                class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
              >
                <span class="text-5xl">1</span>
              </div>
            </div>
          </div>
          {/* left */}
          <div className="md:flex-1 px-3">
            <h3 className="mb-2 leading-tight tracking-tight text-xl md:text-2xl font-bold text-gray-700">
              Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
            </h3>
            <p className="text-sm font-medium">
              Category{' '}
              <Link href={'/'} className="text-emerald-600">
                Category name
              </Link>
            </p>

            {/* pricelist */}
            <div class="flex items-center space-x-4 my-4">
              <div>
                <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span class="text-emerald-400 mr-1 mt-1">$</span>
                  <span class="font-bold text-emerald-600 text-3xl">25</span>
                </div>
              </div>
              <div class="flex-1">
                <p class="text-green-500 text-xl font-semibold">Save 12%</p>
                <p class="text-gray-400 text-sm">20 items in stock</p>
              </div>
            </div>
            {/* end pricelist */}
            <p class="text-gray-500">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
                exercitationem porro saepe ea harum corrupti vero id laudantium
                enim, libero blanditiis expedita cupiditate a est.
              </p>

              {/*  */}
              <div class="flex py-4 space-x-4">
                <div class="relative">
                  <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <button
                  type="button"
                  class="h-14 px-6 py-2 font-semibold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white"
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