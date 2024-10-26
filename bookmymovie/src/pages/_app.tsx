import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar/navbar";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Head>
        <title>BookMyMovie</title>
        <meta name="description" content="Site for Booking tickets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_bg1.png" />
      </Head>
      <main>
        <Navbar/>
      </main>
  <Component {...pageProps} />
  </>
);
}
