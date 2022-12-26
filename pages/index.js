import Head from 'next/head'
import Footer from '../components/Footer'
import CustomNavbar from '../components/Navbar/navbar'
import CustomSearch from '../components/Search'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>YT APP</title>
      </Head>
      <header>
        <CustomNavbar />
      </header>
      <main className={styles.main}>
        <CustomSearch />
      </main>
      <Footer />
    </>
  )
}
