import '@/styles/globals.css'
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
      <Layout>
          <Navbar/>
          <Component {...pageProps} />
          <Analytics />
          <Footer />
      </Layout>
  )
}
