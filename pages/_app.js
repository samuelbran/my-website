import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Head>
        <title>Samuel Bran - Front End Developer</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,400;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
