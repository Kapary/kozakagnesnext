import Head from "next/head";
//import styles from "../styles/Home.module.css";
import { Hero } from "../components/Hero";
import { WeCare } from "../components/WeCare";

import "../styles/less/main.less";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap&subset=latin-ext"
          rel="stylesheet"
        />
      </Head>
      <Hero />
      <WeCare />
    </>
  );
}
