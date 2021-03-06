import type { NextPage } from 'next'
import Head from 'next/head'
import Aboutus from '../components/aboutus'
import ContactUs from '../components/contactus'
import Madeof from '../components/madeof'
import Masthead from '../components/masthead'
import TrustedBy from '../components/trustedby'
import Works from '../components/works'
import Footer from '../components/footer'


const Home: NextPage = () => {
  return (
<div >
    <Head>
        <title>Karlovo Inc</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <Aboutus />
      <Madeof />
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    
</div>
  )
}

export default Home
