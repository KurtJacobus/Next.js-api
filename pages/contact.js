import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function contact() {
  return (
    <div className="container">
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        ></link>
        <title>Contact</title>
        <meta name="keywords" content="Kurt Jacobus"/>
      </Head>
      <main className={styles.main}>
        <h1>Contacts</h1>
        <br />
        <div className="row">
          <div className="col">
            <div className={styles.card}>
              <Link href="https://www.linkedin.com/in/kurt-jacobus/">
                <a>
                  <i class="fab fa-linkedin fa-4x"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className={styles.card}>
              <Link href="https://www.facebook.com/kurt.s.jacobus/">
                <a>
                  <i class="fab fa-facebook-square fa-4x"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className={styles.card}>
              <Link href="https://www.instagram.com/kurtjacobus/?hl=en">
                <a>
                  <i class="fab fa-instagram-square fa-4x"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className={styles.card}>
              <Link href="mailto:kurtjacobus@gmail.com?Subject=Hello%20again">
                <a>
                  <i class="fa fa-envelope fa-4x" aria-hidden="true "></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
