import Head from 'next/head'

import '../styles/global.scss'

import { Header } from '../components/header/Header.component'
import { Player } from '../components/player/Player.component'

import styles from '../styles/app.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Podcastr</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </Head>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
