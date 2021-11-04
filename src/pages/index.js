import Nav from '../components/Nav/Nav'
import Header from '../components/Home/Header'
import Head from 'next/head'
import Feature from '../components/Home/Features'

export default function Home() {
  return (
    <>
      <Head>
        <title>Team</title>
      </Head>
      <Nav />
      <Header />
      <Feature />
    </>
  )
}
