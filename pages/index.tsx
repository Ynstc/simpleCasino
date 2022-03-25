import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Title} from '../styles/Home.styles'
import front from '../assets/front.jpeg'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Casino</title>
        <meta name="description" content="Casino play your favourite game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Welcome to casino</Title>
      <Image
      src={front}
      alt="Picture of the author"
      width={611}
      height={372}
    />
    </div>
  )
}

export default Home
