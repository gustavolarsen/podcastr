import Head from 'next/head';
import { Header } from '../components/header/Header.component';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Podcastr</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </Head>
    </div>
  );
}
