"use client";

import styles from "./about.module.css";
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const images = ["/Monaco.png", "/wedding.png"];
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  });

  return (
    // Code for 'fade in' transition
    <motion.div
      className="page1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.aboutMeContainer}>
        <h1 className={styles.h1}>A Bit About Me: </h1>

        {currentImage && (
          <img src={currentImage} alt="Random Image" className={styles.image} />
        )}

        <div className={styles.divider}></div>

        <div className={styles.narrativeContainer}>
          <p>Born in New Jersey but have call Delaware home.</p>
          <div className={styles.divider3}></div>
          <p>Born in New Jersey but have call Delaware home.</p>
          <div className={styles.divider3}></div>
          <p>
            My collegiate journey took me to Newark, Delaware, and Nashville,
            Tennessee, where I earned a bachelor&apos;s degree in business.
            However, my passion for technology has now led me down a different
            path.
          </p>
          <p>
            Over time, I embarked on a self-taught coding journey, delving into
            the intricacies of programming. This newfound interest inspired me
            to enroll in a full stack development course at Columbia University.
          </p>
          <p>
            While I acknowledge that there&apos;s always more to learn, I thrive
            on the challenge of tackling complex problems and honing my coding
            skills. I&apos;m excited about the possibilities that lie ahead as I
            continue to grow in this dynamic field.
          </p>
          <div className={styles.divider3}></div>
          <p>
            When I&apos;m not immersed in work or coding projects, you can find
            me staying active by working out, exploring new destinations to
            experience diverse cultures (and of course food), and spending some
            downtime outdoors.
          </p>
          <p>
            I also spend my time diving into captivating reads, looking for
            newly released music, or searching for the best lasagna the East
            Coast has to offer.
          </p>
          <p>
            I&apos;m sure there&apos;s much more to me than what&apos;s listed
            here, so don&apos;t hesitate to reach out if you&apos;d like to
            learn more.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
