import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title
            ? title + 'Find, Order, and learn about us'
            : 'Find, Order, and learn about us'}
        </title>
        <meta name="description" content="Created by Joy kamlomo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex flex-col min-h-screen justify-between overflow-hidden">
        <div className="w-full shadow-md fixed z-20 top-0 left-0 bg-white">
          <Header />
        </div>

        <main className="container py-32 mx-auto md:mx-0 min-w-full">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
