import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/app/favicon.ico" />
        <link rel="icon" type="image/png" href="/app/icon1.png" />
        <link rel="apple-touch-icon" href="/app/apple-icon.png" />
        <link rel="manifest" href="/app/manifest.json" />

        {/* PWA Meta Tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ViaNJ" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
