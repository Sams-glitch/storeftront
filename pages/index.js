import Head from 'next/head'
import Image from 'next/image'
import Banner from '../modules/banners/Banner'
import Layout from '../modules/layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Banner />
    </Layout>
  )
}
