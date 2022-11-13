import type { NextPage } from 'next'
import Head from 'next/head'

import HeaderApp from '../components/HeaderApp'

import Footer from '../components/Footer'


const Play: NextPage = () => {

  return (
    
    <div >
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400&family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <HeaderApp/>

      <Footer/>
    </div>
  )
}

export default Play
