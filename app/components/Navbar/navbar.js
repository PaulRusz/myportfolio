"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.container}>
      {children}
      <nav className={`${styles.navbar} ${showMenu ? styles.show : ""}`}>
        <div>
          <Link href="/">
            <p className={`${styles.logo} ${styles.logoButton}`}>PR</p>
          </Link>
        </div>

        <button
          className={styles.hamburgerMenu}
          onClick={() => setShowMenu(!showMenu)}
        >
          &#9776;
        </button>

        <ul className={`${styles.links} ${showMenu ? styles.showMenu : ""}`}>
          <li>
            <Link href="/about" as="/about" className={styles.links}>
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className={styles.links}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.links}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/resume" className={styles.links}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
