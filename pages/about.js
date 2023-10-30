import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import About from "./components/About";

export default function About() {
  const [credit, setCredit] = useState(0);


  // Saved preferences
  useEffect(() => {
    if (typeof window !== "undefined") {
      //localStorage.removeItem("region");
      //localStorage.removeItem("onboarding");

      if (localStorage.getItem("credit") != null) {
        setCredit(parseInt(localStorage.getItem("credit")));
      }
      setCheck(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Venetus - Recycle your plastic better with Artificial Intelligence
        </title>
        <meta
          name="title"
          content="Venetus - Recycle your plastic better with Artificial Intelligence"
        />
        <meta
          name="description"
          content="Venetus is an Artificial Intelligence powered app that helps you recycle your plastic effectively. It tells you what, how and where to recycle from a picture."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://venetus.vercel.app/" />
        <meta
          property="og:title"
          content="Venetus - Recycle your plastic better with Artificial Intelligence"
        />
        <meta
          property="og:description"
          content="Venetus is an Artificial Intelligence powered app that helps you recycle your plastic effectively. It tells you what, how and where to recycle from a picture."
        />
        <meta
          property="og:image"
          content="https://Venetus.vercel.app/meta.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://venetus.vercel.app/" />
        <meta
          property="twitter:title"
          content="Venetus - Recycle your plastic better with Artificial Intelligence"
        />
        <meta
          property="twitter:description"
          content="Venetus is an Artificial Intelligence powered app that helps you recycle your plastic effectively. It tells you what, how and where to recycle from a picture."
        />
        <meta
          property="twitter:image"
          content="https://venetus.vercel.app/meta.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Manrope:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover, minimal-ui"
        />
      </Head>

      <main className={styles.main}>
        <About
          credit={credit}
          setcredit={setRegion}
          check={check}
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
