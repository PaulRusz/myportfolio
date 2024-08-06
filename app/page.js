import React from "react";
import styles from "./components/homepage.module.scss";
import ImageSlider from "./components/ImageSlider/imageslider1";
import ImageSlider2 from "./components/ImageSlider/imageslider2";
import Layout from "./layout.js";

export default function Home() {
  return (
    <Layout>
      <div className={styles.homepageContainer}>
        <div className={styles.homepageSlideShow}>
          <title>Image Slider</title>
          <meta
            name="description"
            content="Image slider example with Next.js, Tailwind CSS, and TypeScript"
          />
          <link rel="icon" href="/favicon.ico" />

          <main className="flex min-h-screen flex-col items-center justify-center py-2">
            <ImageSlider />
          </main>
        </div>

        <div className={styles.homepageTextContainer}>
          <h1>Hey, my name is Paul!</h1>
          <div className={styles.divider3}></div>
          <p className={styles.homepageText}>
            {/* <br></br>
                  I'm fascinated with solving complex problems, learning new things, and creating projects.
                  <br></br> */}
            Take a look around.
          </p>
        </div>

        <div className={styles.homepageSlideShow2}>
          <title>Image Slider</title>
          <meta
            name="description"
            content="Image slider example with Next.js, Tailwind CSS, and TypeScript"
          />
          <link rel="icon" href="/favicon.ico" />

          <main className="flex min-h-screen flex-col items-center justify-center py-2">
            <ImageSlider2 />
          </main>
        </div>
      </div>
    </Layout>
  );
}
