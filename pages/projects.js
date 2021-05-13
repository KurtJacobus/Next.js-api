import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function projects() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        ></link>
        <title>Projects</title>
        <meta name="keywords" content="Kurt Jacobus"/>
      </Head>
      <div className="container">
        <h1 className="text-center">Projects</h1>
        <br />
        <div className="row">
          <div className="col m-2">
            <div className={styles.card}>
              <Link href="https://kurtjacobus.github.io/Kurt_Jacobus_Github/">
                <a>
                  <img className="img-fluid curve" src="/site1.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col m-2">
            <div className={styles.card}>
              <Link href="https://frozen-eyrie-01399.herokuapp.com/">
                <a>
                  <img className="img-fluid curve" src="/snake.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col m-2">
            <div className={styles.card}>
              <Link href="https://kurtjacobus.github.io/kurtjacobusCV/">
                <a>
                  <img className="img-fluid curve" src="/cv.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col m-2">
            <div className={styles.card}>
              <Link href="https://github.com/KurtJacobus?tab=repositories">
                <a>
                  <img className="img-fluid curve" src="/repo.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
