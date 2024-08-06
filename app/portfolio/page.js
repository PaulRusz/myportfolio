"use client";

import styles from "./Portfolio.module.scss";
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Portfolio() {
  return (
    // Code for 'fade in' transition
    <motion.div
      className="page1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <div className={styles.divider}></div>
        <h2 className={styles.header2}>Here are some of my projects:</h2>

        <div className={styles.projectDivider}>
          <ul>
            <a
              className={styles.link}
              href="https://friendsblog.onrender.com/"
              target="_blank"
              rel=""
            >
              {" "}
              FriendsBlog <br></br>
              <br></br>
              <Image
                src="/FriendsBlog.png"
                alt="Friends Blog"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </ul>
        </div>
        <p className={styles.fancyBullet}>
          {" "}
          A social media / blogging platform where a user creates posts, search
          for other users, and view other user profiles.{" "}
        </p>
        <p className={styles.fancyBullet}>
          {" "}
          FriendsBlog utilized React, Mongo DB Atlas, Apollo, graphSQL,
          Font-Awesome, NPM Packages, Vite Config.{" "}
        </p>
        <p className={styles.fancyBullet}>
          Refer to the{" "}
          <a href="Github: https://github.com/PaulRusz/FriendsBlog">
            FriendsBlog
          </a>{" "}
          GitHub for further on what I personally accomplished for this project.
        </p>

        {/* <div className={styles.divider2}></div>
        <ul>
                <a href="https://github.com/PaulRusz/Personal-Note-Taker" target="_blank" rel=""> Personal Note App </a>
        </ul> */}

        <div className={styles.divider2}></div>
        <div className={styles.projectDivider}>
          <ul>
            <a
              className={styles.link}
              href="hhttps://paulrusz.github.io/Group-Project1/"
              target="_blank"
              rel=""
            >
              {" "}
              Workout Tracker 1.0 <br></br>
              <br></br>
              <Image
                src="/Workout1.0.png"
                alt="Workout App 1.0"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </ul>
        </div>
        <p className={styles.fancyBullet}>
          {" "}
          Workout Tracker 1.0 is a web based application designed to help users
          plan, track, and manage their workouts.
        </p>
        <p className={styles.fancyBullet}>
          {" "}
          Workout Tracker 1.0 utilized html, css, JavaScript, Bootstrap, Day.js,
          WGER API, Quotable API.{" "}
        </p>
        <p className={styles.fancyBullet}>
          {" "}
          Refer to{" "}
          <a href="https://github.com/PaulRusz/Group-Project1">
            Workout Tracker 1.0{" "}
          </a>{" "}
          GitHub for further on what I accomplished.{" "}
        </p>

        <div className={styles.divider2}></div>
        <div className={styles.projectDivider}>
          <ul>
            <a
              className={styles.link}
              href="https://workout-tracker-3b0i.onrender.com/"
              target="_blank"
              rel=""
            >
              {" "}
              Workout Tracker 2.0 <br></br>
              <br></br>
              <Image
                src="/Workout2.png"
                alt="Workout App 2.0"
                width={500}
                height={500}
                style={{ width: "100%", height: "auto" }}
              />
            </a>
          </ul>
        </div>
        <p className={styles.fancyBullet}>
          {" "}
          Workout Tracker 2.0 is an improved version of 1.0 with new features
          including user authentication,
          <br></br>improved workout planner, customizable plans, calendar
          integration, and a more responsive design.{" "}
        </p>
        <p className={styles.fancyBullet}>
          {" "}
          Workout Tracker 1.0 utilized html, css, JavaScript (with backend
          functionality and dynamic content generation),
          <br></br>Bootstrap, Day.js, WGER API, Quotable API.{" "}
        </p>
        <p className={styles.fancyBullet}>
          {" "}
          Refer to{" "}
          <a href="https://github.com/emsim11/Group-Project2">
            Workout Tracker 2.0{" "}
          </a>{" "}
          GitHub for further on what I accomplished.{" "}
        </p>

        {/* 
                SPACE FOR FUTURE PROJECTS TO GO HERE

        <div className={styles.divider2}></div>
        <ul>
                <a href="https://github.com/PaulRusz/project2" target="_blank" rel=""> Project 4</a>
        </ul>
        <div className={styles.divider2}></div>
        <ul>
                <a href="https://github.com/PaulRusz/project2" target="_blank" rel=""> Project 5</a>
        </ul>
        <div className={styles.divider2}></div>
        <ul>
                <a href="https://github.com/PaulRusz/project2" target="_blank" rel=""> Project 6</a>
        </ul> */}
      </div>
    </motion.div>
  );
}
