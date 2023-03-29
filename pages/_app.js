import '@/styles/globals.css'
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
      <Layout>
          <Navbar/>
          <Component {...pageProps} />
          <Footer />
      </Layout>
  )
}
